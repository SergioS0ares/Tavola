package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.AtendimentoMesa;
import TavolaSoftware.TavolaApp.REST.model.Garcom;
import TavolaSoftware.TavolaApp.REST.model.Mesa;
import TavolaSoftware.TavolaApp.REST.model.Pedido;
import TavolaSoftware.TavolaApp.REST.model.RegistroAtendimento;
import TavolaSoftware.TavolaApp.REST.repository.AtendimentoMesaRepository;
import TavolaSoftware.TavolaApp.REST.repository.GarcomRepository;
import TavolaSoftware.TavolaApp.REST.repository.MesaRepository;
import TavolaSoftware.TavolaApp.REST.repository.PedidoRepository;
import TavolaSoftware.TavolaApp.REST.repository.RegistroAtendimentoRepository;
import TavolaSoftware.TavolaApp.tools.MesaStatus;
import TavolaSoftware.TavolaApp.tools.PedidoStatus;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class AtendimentoMesaService {

    @Autowired private AtendimentoMesaRepository atendimentoRepository;
    @Autowired private MesaRepository mesaRepository;
    @Autowired private GarcomRepository garcomRepository;
    @Autowired private PedidoRepository pedidoRepository; // Para buscar pedidos ao finalizar
    @Autowired private RegistroAtendimentoRepository registroRepository; // Para salvar o histórico

    /**
     * Garçom registra que está iniciando o atendimento em uma mesa.
     * Cria um novo AtendimentoMesa se não existir um ativo, ou adiciona o garçom a um existente.
     * Garante que a mesa seja marcada como OCUPADA.
     */
    @Transactional
    public AtendimentoMesa iniciarAtendimento(UUID mesaId, UUID garcomId) {
        Mesa mesa = mesaRepository.findById(mesaId)
                .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada: " + mesaId));
        Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new EntityNotFoundException("Garçom não encontrado: " + garcomId));

        // Validação de Segurança
        if (!mesa.getAmbiente().getRestaurante().getId().equals(garcom.getRestaurante().getId())) {
            throw new SecurityException("Acesso negado. O garçom não pertence ao restaurante desta mesa.");
        }
        
        // Verifica se já existe um atendimento ativo para esta mesa
        AtendimentoMesa atendimento = atendimentoRepository.findAtendimentoAtivoByMesaId(mesaId)
                .orElseGet(() -> {
                    // Se não existe, cria um novo
                    AtendimentoMesa novoAtendimento = new AtendimentoMesa();
                    novoAtendimento.setMesa(mesa);
                    novoAtendimento.setRestaurante(mesa.getAmbiente().getRestaurante());
                    novoAtendimento.setHoraInicio(LocalDateTime.now());
                    novoAtendimento.setAtivo(true);
                    return novoAtendimento;
                });

        // Adiciona o garçom à lista (Set garante que não haverá duplicados)
        atendimento.getGarcons().add(garcom);
        
        // Garante que a mesa está marcada como ocupada
        if (mesa.getStatus() != MesaStatus.OCUPADA) {
            mesa.setStatus(MesaStatus.OCUPADA);
            // Idealmente, o MesaService.updateStatus seria chamado aqui para disparar o WebSocket,
            // mas para simplificar, atualizamos diretamente. Considere refatorar depois.
            mesaRepository.save(mesa); 
        }

        return atendimentoRepository.save(atendimento);
    }

    /**
     * Finaliza a sessão de atendimento ativa de uma mesa.
     * Marca o AtendimentoMesa como inativo, calcula totais, cria o RegistroAtendimento (histórico).
     * ESTE MÉTODO SERÁ CHAMADO QUANDO A MESA FOR MARCADA COMO 'LIVRE'.
     */
    @Transactional
    public void finalizarAtendimento(Mesa mesa) {
        AtendimentoMesa atendimento = atendimentoRepository.findAtendimentoAtivoByMesaId(mesa.getId())
                .orElse(null); // Pode já ter sido finalizado ou nunca existiu

        if (atendimento == null || !atendimento.isAtivo()) {
            System.out.println("Nenhum atendimento ativo encontrado para finalizar na mesa: " + mesa.getId());
            // Garante que a mesa fique livre mesmo assim
            if(mesa.getStatus() != MesaStatus.LIVRE) {
                mesa.setStatus(MesaStatus.LIVRE);
                mesaRepository.save(mesa);
            }
            return; // Nada a fazer
        }

        // 1. Marca o atendimento como inativo
        atendimento.setAtivo(false);
        atendimento.setHoraFim(LocalDateTime.now());
        atendimentoRepository.save(atendimento);

        // 2. Coleta os dados para o RegistroAtendimento
        LocalDateTime inicio = atendimento.getHoraInicio();
        LocalDateTime fim = atendimento.getHoraFim();

        // Busca todos os pedidos ENTREGUES ou CONCLUÍDOS para esta mesa neste período
        // (Ajuste os status conforme sua necessidade)
        List<Pedido> pedidosDoAtendimento = pedidoRepository.findByMesaIdAndDataHoraBetweenAndStatusIn(
                mesa.getId(), inicio, fim, Set.of(PedidoStatus.ENTREGUE) // Incluiria CONCLUIDO se existisse
        );

        // Calcula o valor total
        double valorTotal = pedidosDoAtendimento.stream()
            .flatMap(p -> p.getItens().stream())
            .mapToDouble(item -> item.getPrecoUnitario() * item.getQuantidade())
            .sum();

        // Coleta os garçons que fizeram os pedidos (pode ser diferente dos que estavam no AtendimentoMesa)
        Set<Garcom> garconsDosPedidos = pedidosDoAtendimento.stream()
                .map(Pedido::getGarcom)
                .collect(Collectors.toSet());
        // Adiciona também os garçons que estavam registrados no AtendimentoMesa
        garconsDosPedidos.addAll(atendimento.getGarcons());

        // 3. Cria o RegistroAtendimento
        RegistroAtendimento registro = new RegistroAtendimento();
        registro.setRestaurante(atendimento.getRestaurante());
        registro.setMesa(mesa);
        // Tenta buscar o cliente do primeiro pedido (se houver)
        registro.setCliente(pedidosDoAtendimento.stream().map(Pedido::getCliente).filter(c -> c != null).findFirst().orElse(null));
        registro.setHoraInicio(inicio);
        registro.setHoraFim(fim);
        registro.setValorTotal(valorTotal);
        registro.setPedidos(pedidosDoAtendimento);
        registro.setGarcons(new ArrayList<>(garconsDosPedidos)); // Converte Set para List

        registroRepository.save(registro);

        // 4. Marca a mesa como LIVRE (a chamada original a este método deveria vir do MesaService)
        // mesa.setStatus(MesaStatus.LIVRE); // Já deve ser feito pelo chamador (MesaService)
        // mesaRepository.save(mesa);
        
        System.out.println("Atendimento finalizado e registro criado para mesa: " + mesa.getId());
    }

    /**
     * Busca o AtendimentoMesa ativo para uma dada mesa.
     * Útil para verificar se uma mesa está sendo atendida.
     */
    @Transactional(readOnly = true)
    public Optional<AtendimentoMesa> getAtendimentoAtivo(UUID mesaId) {
        return atendimentoRepository.findAtendimentoAtivoByMesaId(mesaId);
    }
}

// TODO: Adicionar método para remover um garçom específico do atendimento (se necessário)
// TODO: Integrar a chamada a finalizarAtendimento() no MesaService.updateStatus quando status for LIVRE.
// TODO: Rever a lógica de criação de Pedido para talvez exigir um AtendimentoMesa ativo.
// TODO: Como o "chamado" (cliente chama garçom) funciona agora? Cria um AtendimentoMesa sem garçons? Ou notifica via WebSocket?