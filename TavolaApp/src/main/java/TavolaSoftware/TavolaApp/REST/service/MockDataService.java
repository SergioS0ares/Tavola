package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.requests.AvaliacaoRequest;
import TavolaSoftware.TavolaApp.REST.model.*;
import TavolaSoftware.TavolaApp.REST.repository.*;
import TavolaSoftware.TavolaApp.tools.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class MockDataService {

    private static final AtomicInteger mockUserCounter = new AtomicInteger(0);
    private static final AtomicInteger clienteIndexGlobal = new AtomicInteger(0); // Para distribuição Round-Robin

    // Listas pré-carregadas dos TXTs
    private final List<String> nomesEstabelecimentos;
    private final List<String> nomesPratos;
    private final List<String> nomesClientes;
    private final List<String> sobrenomesClientes;
    private final List<String> tiposCozinha;
    private final List<String> avaliacoesPositivas;
    private final List<String> avaliacoesNegativas;

    @Autowired private UsuarioRepository usuarioRepository;
    @Autowired private RestauranteRepository restauranteRepository;
    @Autowired private ClienteRepository clienteRepository;
    @Autowired private GarcomRepository garcomRepository;
    @Autowired private AmbienteRepository ambienteRepository;
    @Autowired private MesaRepository mesaRepository;
    @Autowired private CardapioRepository cardapioRepository;
    @Autowired private CategoriaService categoriaService;
    @Autowired private ReservaRepository reservaRepository;
    @Autowired private ReservaService reservaService;
    @Autowired private AvaliacaoService avaliacaoService;
    @Autowired private AtendimentoMesaService atendimentoMesaService;
    @Autowired private PedidoService pedidoService;
    @Autowired private BCryptPasswordEncoder passwordEncoder;
    @Autowired private UploadUtils uploadUtils;

    public MockDataService() {
        // Carregamento dos arquivos TXT (Caminhos ajustados conforme sua estrutura)
        nomesEstabelecimentos = loadTxtFile("mock-data/estabelecimentos.txt");
        nomesPratos = loadTxtFile("mock-data/pratos.txt");
        nomesClientes = loadTxtFile("mock-data/nomes.txt");
        sobrenomesClientes = loadTxtFile("mock-data/sobrenomes.txt");
        tiposCozinha = loadTxtFile("mock-data/cozinha.txt");
        avaliacoesPositivas = loadTxtFile("mock-data/avaliacaopositiva.txt");
        avaliacoesNegativas = loadTxtFile("mock-data/avaliacaonegativa.txt");
    }

    // ============================================================================================
    //  CRIAÇÃO DE RESTAURANTE (COM CARDÁPIO GARANTIDO)
    // ============================================================================================

    @Transactional
    public Restaurante createMockRestaurante() {
        String email = String.format("restaurante%04d@tavola.com", mockUserCounter.getAndIncrement());
        
        Usuario usuario = new Usuario();
        usuario.setNome(getRandom(nomesEstabelecimentos));
        usuario.setEmail(email);
        usuario.setSenha(passwordEncoder.encode("senha"));
        usuario.setTipo(TipoUsuario.RESTAURANTE);
        usuario.setEmailVerificado(true);
        usuario.setEndereco(getPasseioDasAguasAddress());
        usuario.setTelefone("6299" + randomInt(1000, 9999));
        
        String imgPath = "/upl/mock/restaurantes/" + randomInt(0, 9) + ".jpeg";
        usuario.setImagemPrincipal(imgPath);
        usuario.setImagem(imgPath);

        usuarioRepository.save(usuario);

        Restaurante restaurante = new Restaurante();
        restaurante.setUsuario(usuario);
        restaurante.setTipoCozinha(getRandom(tiposCozinha));
        restaurante.setDescricao("Restaurante especializado em " + restaurante.getTipoCozinha() + ".");
        restaurante.setHorariosFuncionamento(getHorariosMock());
        restaurante.setImagemPrincipal(imgPath);
        restaurante.setMediaAvaliacao(0.0);
        restaurante.setTotalDeAvaliacoes(0);

        usuarioRepository.save(usuario);
        restauranteRepository.save(restaurante);

        createMockGarcons(restaurante, 3);
        createMockAmbientes(restaurante);
        createMockCardapio(restaurante, 10); // Aumentei para 10 itens para ter variedade

        return restaurante;
    }

    private void createMockGarcons(Restaurante restaurante, int quantidade) {
        for (int i = 0; i < quantidade; i++) {
            Garcom garcom = new Garcom();
            garcom.setRestaurante(restaurante);
            garcom.setNome(getRandom(nomesClientes) + " (Garçom)"); 
            garcom.setSenha(passwordEncoder.encode("senha"));
            garcom.setCodigoIdentidade(gerarCodigoUnico(restaurante.getId()));
            garcom.setImagem("/upl/mock/garcons/" + randomInt(0, 9) + ".jpeg");
            garcomRepository.save(garcom);
        }
    }

    private void createMockAmbientes(Restaurante restaurante) {
        // Ambiente 1
        Ambiente principal = new Ambiente();
        principal.setNome("Salão Principal");
        principal.setRestaurante(restaurante);
        ambienteRepository.save(principal);
        createMockMesas(principal, 6, "Mesa "); // 6 Mesas no principal

        // Ambiente 2 (para garantir mais mesas)
        Ambiente varanda = new Ambiente();
        varanda.setNome("Varanda");
        varanda.setRestaurante(restaurante);
        ambienteRepository.save(varanda);
        createMockMesas(varanda, 4, "Varanda "); // 4 Mesas na varanda
    }

    private void createMockMesas(Ambiente ambiente, int quantidade, String prefixo) {
        for (int i = 1; i <= quantidade; i++) {
            Mesa mesa = new Mesa();
            mesa.setAmbiente(ambiente);
            mesa.setNome(prefixo + i);
            mesa.setCapacidade(4);
            mesa.setStatus(MesaStatus.LIVRE);
            mesaRepository.save(mesa);
        }
    }

    private void createMockCardapio(Restaurante restaurante, int quantidade) {
        if (nomesPratos.isEmpty()) return;

        // Cria categorias primeiro
        Categoria entrada = categoriaService.saveIfNotExists("Entradas", restaurante);
        Categoria principal = categoriaService.saveIfNotExists("Prato Principal", restaurante);
        Categoria bebida = categoriaService.saveIfNotExists("Bebidas", restaurante);
        
        List<Categoria> categorias = List.of(entrada, principal, bebida);

        for (int i = 0; i < quantidade; i++) {
            Cardapio item = new Cardapio();
            item.setRestaurante(restaurante);
            item.setDisponivel(true);
            
            // Distribuição de categorias
            item.setCategoria(categorias.get(i % categorias.size()));
            
            String nomePrato = getRandom(nomesPratos);
            item.setNome(nomePrato + " Especial"); // Adiciona sufixo para variar
            
            item.setImagem("/upl/mock/cardapios/" + (i % 10) + ".jpeg");
            item.setDescricao("Delicioso prato de " + nomePrato + " preparado com ingredientes frescos.");
            item.setPreco(randomDouble(25.00, 120.00));
            
            cardapioRepository.save(item);
        }
    }

    // ============================================================================================
    //  CRIAÇÃO DE CLIENTE E ORQUESTRAÇÃO DE RESERVAS
    // ============================================================================================

    // Removemos @Transactional global para gerenciar falhas individualmente
    public Cliente createMockCliente(List<UUID> idsRestaurantesMock) {
        int indiceClienteAtual = clienteIndexGlobal.getAndIncrement();
        
        // 1. Criar o Cliente (Transação isolada)
        Cliente cliente = createClienteBase();

        // Se não houver restaurantes, retorna só o cliente
        if (idsRestaurantesMock == null || idsRestaurantesMock.isEmpty()) return cliente;

        // 2. Reserva PASSADA (Histórico + Avaliação)
        // Escolhe um restaurante aleatório para o histórico
        try {
            UUID idRestHistorico = idsRestaurantesMock.get(randomInt(0, idsRestaurantesMock.size() - 1));
            createMockReservaPassada(cliente, idRestHistorico);
        } catch (Exception e) {
            System.err.println("Erro ao criar histórico para cliente " + cliente.getId() + ": " + e.getMessage());
        }

        // 3. Sessão ATIVA (Atendimento ocorrendo AGORA)
        // Tenta encontrar um restaurante livre na lista.
        boolean sessaoCriada = false;
        // Embaralha para tentar restaurantes aleatórios, mas percorre todos se necessário
        List<UUID> candidatosSessao = new ArrayList<>(idsRestaurantesMock);
        Collections.shuffle(candidatosSessao);
        
        for (UUID restId : candidatosSessao) {
            try {
                // Tenta criar neste restaurante. Se der certo, para o loop.
                createMockSessaoAtiva(cliente, restId);
                sessaoCriada = true;
                break; 
            } catch (Exception e) {
                // Se falhar (ex: sem mesa), tenta o próximo restaurante da lista
                continue;
            }
        }
        if (!sessaoCriada) {
            System.out.println("Aviso: Não foi possível criar sessão ativa para o cliente (todos os restaurantes cheios hoje?).");
        }

        // 4. Reservas FUTURAS (6 Dias seguintes)
        // Usa lógica Round-Robin baseada no indiceClienteAtual para distribuir a carga
        try {
            createMockReservasFuturas(cliente, idsRestaurantesMock, indiceClienteAtual);
        } catch (Exception e) {
            System.err.println("Erro ao criar reservas futuras: " + e.getMessage());
        }

        return cliente;
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public Cliente createClienteBase() {
        String email = String.format("cliente%04d@tavola.com", mockUserCounter.getAndIncrement());
        
        Usuario usuario = new Usuario();
        usuario.setNome(getRandom(nomesClientes) + " " + getRandom(sobrenomesClientes));
        usuario.setEmail(email);
        usuario.setSenha(passwordEncoder.encode("senha"));
        usuario.setTipo(TipoUsuario.CLIENTE);
        usuario.setEmailVerificado(true);
        usuario.setEndereco(getCerradoAddress());
        usuario.setTelefone("6299" + randomInt(1000, 9999));
        usuario.setImagem("/upl/mock/usuarios/" + randomInt(0, 9) + ".jpeg");
        usuarioRepository.save(usuario);

        Cliente cliente = new Cliente();
        cliente.setUsuario(usuario);
        return clienteRepository.save(cliente);
    }

    // --- CENÁRIO 1: PASSADO (Reserva Concluída + Avaliação) ---
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void createMockReservaPassada(Cliente cliente, UUID restauranteId) {
        Restaurante restaurante = restauranteRepository.findById(restauranteId).orElseThrow();
        
        // Data no passado (entre 5 e 30 dias atrás)
        LocalDate dataPassada = LocalDate.now().minusDays(randomInt(5, 30));
        LocalTime hora = LocalTime.of(19, 0);

        // Tenta achar mesa (pega a primeira disponível naquela data)
        Mesa mesa = findFirstAvailableMesa(restauranteId, dataPassada, hora, 2);
        
        // Cria Reserva CONCLUIDA
        Reserva reserva = reservaService.criarReservaMock(
            cliente, restaurante, mesa, 
            dataPassada, hora, 
            randomInt(2, 4), StatusReserva.CONCLUIDA
        );

        // Cria Avaliação
        createMockAvaliacao(cliente, restaurante, reserva);
    }

    // --- CENÁRIO 2: PRESENTE (Atendimento Ativo + Pedido) ---
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void createMockSessaoAtiva(Cliente cliente, UUID restauranteId) {
        Restaurante restaurante = restauranteRepository.findById(restauranteId).orElseThrow();
        
        // Busca mesa disponível AGORA
        // Se lançar exceção (sem mesa), o loop no método pai tenta outro restaurante.
        Mesa mesaAtiva = findFirstAvailableMesa(restauranteId, LocalDate.now(), LocalTime.now(), 2);

        // Dados para o atendimento
        List<Garcom> garcons = garcomRepository.findAllByRestauranteId(restauranteId);
        List<Cardapio> cardapio = cardapioRepository.findAllDisponiveisByRestaurante(restauranteId);
        
        if (garcons.isEmpty() || cardapio.isEmpty()) {
            throw new RuntimeException("Restaurante sem garçom ou cardápio, pulando.");
        }

        Garcom garcom = garcons.get(randomInt(0, garcons.size() - 1));
        Cardapio itemPedido = cardapio.get(randomInt(0, cardapio.size() - 1));

        // 1. Cria Reserva ATIVA (para constar no sistema)
        // Marcamos para daqui a 1 hora para simular que ele "chegou na hora" ou está lá
        reservaService.criarReservaMock(
            cliente, restaurante, mesaAtiva, 
            LocalDate.now(), LocalTime.now().plusMinutes(60), 
            2, StatusReserva.ATIVA
        );

        // 2. Inicia Atendimento (Muda status mesa para OCUPADA)
        atendimentoMesaService.iniciarAtendimentoMock(mesaAtiva, garcom);

        // 3. Cria Pedido PENDENTE
        pedidoService.criarPedidoMock(mesaAtiva, cliente, garcom, itemPedido);
    }

    // --- CENÁRIO 3: FUTURO (Reservas Round-Robin) ---
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void createMockReservasFuturas(Cliente cliente, List<UUID> idsRestaurantes, int indiceCliente) {
        int totalRestaurantes = idsRestaurantes.size();
        
        // Cria 6 reservas em dias seguidos
        for (int i = 1; i <= 6; i++) {
            // Lógica Round-Robin:
            // Dia 1: Cliente 0 vai no Restaurante 0. Cliente 1 vai no Restaurante 1.
            // Dia 2: Cliente 0 vai no Restaurante 1. Cliente 1 vai no Restaurante 2.
            int indiceRestaurante = (indiceCliente + i) % totalRestaurantes;
            UUID restId = idsRestaurantes.get(indiceRestaurante);
            
            Restaurante restaurante = restauranteRepository.findById(restId).orElse(null);
            if (restaurante == null) continue;

            LocalDate dataFutura = LocalDate.now().plusDays(i);
            LocalTime hora = LocalTime.of(20, 0);

            try {
                // Tenta achar mesa
                Mesa mesa = findFirstAvailableMesa(restId, dataFutura, hora, 2);
                
                // Cria Reserva CONFIRMADA
                reservaService.criarReservaMock(
                    cliente, restaurante, mesa, 
                    dataFutura, hora, 
                    randomInt(2, 4), StatusReserva.CONFIRMADA
                );
            } catch (Exception e) {
                // Se não tiver mesa nesse dia nesse restaurante, tudo bem, pula.
                // Como estamos distribuindo bem com o Round-Robin, colisões serão raras se houver mesas suficientes.
            }
        }
    }

    // ============================================================================================
    //  MÉTODOS AUXILIARES
    // ============================================================================================

    private void createMockAvaliacao(Cliente cliente, Restaurante restaurante, Reserva reserva) {
        int score = randomInt(1, 5);
        String comentario = (score <= 3) ? getRandom(avaliacoesNegativas) : getRandom(avaliacoesPositivas);
        
        AvaliacaoRequest request = new AvaliacaoRequest();
        request.setScore((double) score);
        request.setComentario(comentario);
        
        try {
            // Chama o service real para calcular a média e salvar
            avaliacaoService.submeterMockAvaliacao(request, restaurante.getId(), cliente.getUsuario().getEmail(), reserva);
        } catch (Exception e) {
            System.err.println("Erro ao criar avaliação mock: " + e.getMessage());
        }
    }

    private Mesa findFirstAvailableMesa(UUID restauranteId, LocalDate data, LocalTime hora, int capacidade) {
        List<Mesa> mesasDisponiveis = mesaRepository.findMesasDisponiveis(restauranteId, data, hora, capacidade);
        
        if (mesasDisponiveis.isEmpty()) {
            throw new RuntimeException("Sem mesas disponíveis.");
        }
        // Pega a primeira mesa livre da lista (que o JPA retornou)
        // Como o Round-Robin distribui os restaurantes, isso naturalmente distribui as mesas.
        return mesasDisponiveis.get(0); 
    }

    private List<String> loadTxtFile(String path) {
        try {
            InputStream is = new ClassPathResource(path).getInputStream();
            return new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))
                    .lines()
                    .map(line -> line.replaceAll("^[0-9]+\\.", "").trim())
                    .toList();
        } catch (IOException e) {
            System.err.println("MOCK ERROR: Não foi possível carregar " + path);
            return new ArrayList<>();
        }
    }

    private String getRandom(List<String> list) {
        if (list == null || list.isEmpty()) return "Dado Genérico";
        return list.get(randomInt(0, list.size() - 1));
    }

    private List<HorarioFuncionamento> getHorariosMock() {
        return Arrays.stream(DiaDaSemana.values())
            .map(dia -> {
                HorarioFuncionamento hf = new HorarioFuncionamento();
                hf.setDiaSemana(dia.getNomeBanco());
                hf.setAbertura("09:00");
                hf.setFechamento("23:59");
                return hf;
            }).collect(Collectors.toList());
    }

    private Endereco getPasseioDasAguasAddress() {
        Endereco end = new Endereco();
        end.setCep("74573-260");
        end.setCidade("Goiânia");
        end.setEstado("GO");
        end.setBairro("Fazenda Caveiras");
        end.setRua("Av. Perimetral Norte, 8303");
        end.setNumero("8303");
        end.setComplemento("Shopping Passeio");
        return end;
    }
    
    private Endereco getCerradoAddress() {
        Endereco end = new Endereco();
        end.setCep("74435-090");
        end.setCidade("Goiânia");
        end.setEstado("GO");
        end.setBairro("Aeroviário");
        end.setRua("Av. Anhanguera, 10790");
        end.setNumero("10790");
        end.setComplemento("Shopping Cerrado");
        return end;
    }

    private int randomInt(int min, int max) {
        return ThreadLocalRandom.current().nextInt(min, max + 1);
    }
    
    private double randomDouble(double min, double max) {
        double val = ThreadLocalRandom.current().nextDouble(min, max);
        return Math.round(val * 100.0) / 100.0;
    }
    
    private String gerarCodigoUnico(UUID restauranteId) {
        int numero = 10000000 + randomInt(0, 89999999);
        String s = String.valueOf(numero);
        return s.substring(0, 4) + "-" + s.substring(4);
    }
}