package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.model.Servico; // Para buscar serviços por nome
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.repository.ServicoRepository; // Para buscar serviços
import TavolaSoftware.TavolaApp.REST.dto.RestauranteRequest; // MUDANÇA: Importar Request DTO
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse;
import TavolaSoftware.TavolaApp.REST.model.Mesas;
import TavolaSoftware.TavolaApp.tools.TipoUsuario; // Para definir o tipo de usuário
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; // Para criptografar senha
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository repoRestaurante; // Renomeado para consistência
    
    @Autowired
    private UsuarioRepository repoUsuario; // Renomeado para consistência
    
    @Autowired
    private ServicoRepository repoServico; // Para buscar/criar serviços

    @Autowired
    private UploadUtils uplUtil;

    @Autowired
    private BCryptPasswordEncoder encoder; // Para criptografar a senha

    public List<RestauranteResponse> findAll() { // MUDANÇA: Retornar List<RestauranteResponse>
        return repoRestaurante.findAll().stream()
                                .map(RestauranteResponse::new)
                                .collect(Collectors.toList());
    }

    public Optional<RestauranteResponse> findById(UUID id) {
        return repoRestaurante.findById(id).map(RestauranteResponse::new);
    }

    @Transactional
    public Restaurante saveFromRequest(RestauranteRequest request) { // MUDANÇA: Recebe RestauranteRequest
        // 1. Criar e salvar o Usuario
        Usuario usuario = new Usuario();
        usuario.setNome(request.getNomeUsuario());
        usuario.setEmail(request.getEmailUsuario());
        usuario.setSenha(encoder.encode(request.getSenhaUsuario())); // Criptografar senha
        usuario.setEndereco(request.getEnderecoUsuario());
        usuario.setTipo(TipoUsuario.RESTAURANTE); // Definir tipo
        // Lógica para imagem do usuário, se aplicável no request
        Usuario usuarioSalvo = repoUsuario.save(usuario);

        // 2. Criar o Restaurante
        Restaurante restaurante = new Restaurante();
        restaurante.setUsuario(usuarioSalvo); // Associa o usuário salvo
        // restaurante.setID(usuarioSalvo.getId()); // @MapsId cuida disso
        restaurante.setTipoCozinha(request.getTipoCozinha());
        
        if (request.getHorariosFuncionamento() != null) {
            restaurante.setHoraFuncionamento(request.getHorariosFuncionamento());
        }
        
        // Processar e associar serviços
        if (request.getNomesServicos() != null && !request.getNomesServicos().isEmpty()) {
            Set<Servico> servicosParaAssociar = new HashSet<>();
            for (String nomeServico : request.getNomesServicos()) {
                Servico serv = repoServico.findByNome(nomeServico)
                                .orElseGet(() -> repoServico.save(new Servico(nomeServico, ""))); // Cria se não existir
                servicosParaAssociar.add(serv);
            }
            restaurante.setServicos(servicosParaAssociar);
        }

        // Lidar com imagens do restaurante (base64 para URL)
        if (request.getImagens() != null && !request.getImagens().isEmpty()) {
            try {
                // O ID do restaurante ainda não foi gerado aqui se for novo e depender do usuário.
                // Precisamos salvar o restaurante uma vez para ter o ID, ou passar o ID do usuário.
                // Como estamos usando @MapsId, o ID do restaurante será o mesmo do usuário.
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), usuarioSalvo.getId());
                restaurante.setImagem(caminhosImagens);
            } catch (IOException e) {
                // Tratar exceção de processamento de imagem
                throw new RuntimeException("Erro ao processar imagens do restaurante: " + e.getMessage(), e);
            }
        }
        
        return repoRestaurante.save(restaurante);
    }
    
    // Método save original, se ainda for necessário internamente ou para outros fluxos.
    // Considere torná-lo privado ou remover se saveFromRequest cobrir todos os casos de criação.
    @Transactional
    public Restaurante save(Restaurante restaurante) {
        return repoRestaurante.save(restaurante);
    }


    @Transactional
    public Restaurante updateFromRequest(UUID id, RestauranteRequest request) { // MUDANÇA: Recebe RestauranteRequest
        Restaurante restauranteExistente = repoRestaurante.findById(id)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado com ID: " + id));

        Usuario usuarioAssociado = restauranteExistente.getUsuario();

        // Atualizar dados do Usuario
        if (request.getNomeUsuario() != null && !request.getNomeUsuario().isBlank()) {
            usuarioAssociado.setNome(request.getNomeUsuario());
        }
        if (request.getEmailUsuario() != null && !request.getEmailUsuario().isBlank()) {
            // Adicionar validação se o email já existe e não pertence a este usuário
            usuarioAssociado.setEmail(request.getEmailUsuario());
        }
        if (request.getSenhaUsuario() != null && !request.getSenhaUsuario().isBlank()) {
            usuarioAssociado.setSenha(encoder.encode(request.getSenhaUsuario()));
        }
        if (request.getEnderecoUsuario() != null) {
            usuarioAssociado.setEndereco(request.getEnderecoUsuario());
        }
        repoUsuario.save(usuarioAssociado); // Salva as alterações no usuário

        // Atualizar dados do Restaurante
        if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) {
            restauranteExistente.setTipoCozinha(request.getTipoCozinha());
        }
        if (request.getHorariosFuncionamento() != null) {
            restauranteExistente.setHoraFuncionamento(request.getHorariosFuncionamento());
        }

        // Atualizar Serviços
        if (request.getNomesServicos() != null) {
            Set<Servico> servicosAtualizados = new HashSet<>();
            if (!request.getNomesServicos().isEmpty()) {
                for (String nomeServico : request.getNomesServicos()) {
                    Servico serv = repoServico.findByNome(nomeServico)
                                    .orElseGet(() -> repoServico.save(new Servico(nomeServico, "")));
                    servicosAtualizados.add(serv);
                }
            }
            restauranteExistente.setServicos(servicosAtualizados); // Substitui todos os serviços
        }

        // Atualizar Imagens
        if (request.getImagens() != null && !request.getImagens().isEmpty()) {
            try {
                // Aqui o ID do restaurante (que é o ID do usuário) já existe.
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), restauranteExistente.getId());
                restauranteExistente.setImagem(caminhosImagens); // Substitui todas as imagens
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagens do restaurante durante atualização: " + e.getMessage(), e);
            }
        }
        
        return repoRestaurante.save(restauranteExistente);
    }

    @Transactional
    public void deleteById(UUID id) {
        // Adicionar lógica para deletar o Usuario associado se necessário,
        // ou garantir que a configuração de cascata no relacionamento @OneToOne cuide disso.
        // Se @MapsId e @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true) no Usuario para Restaurante,
        // deletar o Usuario pode deletar o Restaurante.
        // Se o Restaurante é o "dono" da relação com @MapsId, deletar o Restaurante pode ser suficiente
        // dependendo da configuração de cascata na entidade Usuario (se houver referência inversa).
        // Por segurança, é bom verificar a ordem ou deletar explicitamente o usuário se for o caso.
        
        Optional<Restaurante> restauranteOpt = repoRestaurante.findById(id);
        if (restauranteOpt.isPresent()) {
            Restaurante restaurante = restauranteOpt.get();
            repoRestaurante.delete(restaurante);
            // Se o usuário não for deletado em cascata, descomente e adapte:
            // if (restaurante.getUsuario() != null) {
            //     usuarioRepository.deleteById(restaurante.getUsuario().getId());
            // }
        } else {
            throw new RuntimeException("Restaurante não encontrado para deleção com ID: " + id);
        }
    }
    
    public Restaurante getByEmail(String email) {
        Usuario usuario = repoUsuario.findByEmail(email);
        if (usuario == null) {
            // Lançar exceção mais específica, talvez uma customizada como UsuarioNaoEncontradoException
            throw new RuntimeException("Usuário não encontrado: " + email);
        }
        return repoRestaurante.findByUsuario(usuario)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado para o usuário: " + email));
    }
    
    // O método update original que recebia a entidade Restaurante pode ser removido ou tornado privado
    // se updateFromRequest for o método principal para atualizações via API.
    /*
    public Restaurante update(UUID id, Restaurante atualizado) {
        Restaurante existente = repo.findById(id)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado."));

        existente.setNome(atualizado.getNome()); // Isto deveria ser no Usuario
        existente.setEndereco(atualizado.getEndereco()); // Isto deveria ser no Usuario
        existente.setHoraFuncionamento(atualizado.getHoraFuncionamento());

        if (atualizado.getMesas() != null && !atualizado.getMesas().isEmpty()) {
            existente.setMesas(atualizado.getMesas());
            for (Mesas mesa : atualizado.getMesas()) {
                try {
                    List<String> imagensProcessadas = uplUtil.processMesas(mesa, existente.getId());
                    mesa.setImagem(imagensProcessadas);
                } catch (IOException e) {
                    throw new RuntimeException("Erro ao processar imagens da mesa: " + e.getMessage());
                }
            }
        }
        return repo.save(existente);
    }
    */
}