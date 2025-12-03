package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.requests.AvaliacaoRequest;
import TavolaSoftware.TavolaApp.REST.dto.requests.ReservaRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.ReservaResponse;
import TavolaSoftware.TavolaApp.REST.model.*;
import TavolaSoftware.TavolaApp.REST.repository.*;
import TavolaSoftware.TavolaApp.tools.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;
import jakarta.persistence.EntityNotFoundException;

@Service
public class MockDataService {

    private static final AtomicInteger mockUserCounter = new AtomicInteger(0);

    // Listas pré-carregadas dos TXTs
    private final List<String> nomesEstabelecimentos;
    private final List<String> nomesPratos;
    private final List<String> nomesClientes;
    private final List<String> sobrenomesClientes;
    private final List<String> tiposCozinha; 
    private final List<String> avaliacoesPositivas; 
    private final List<String> avaliacoesNegativas;

    // Injeções de Dependência
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

    // Construtor que carrega os TXTs na inicialização
    public MockDataService() {
        nomesEstabelecimentos = loadTxtFile("mock-data/estabelecimentos.txt");
        nomesPratos = loadTxtFile("mock-data/pratos.txt");
        nomesClientes = loadTxtFile("mock-data/nomes.txt");
        sobrenomesClientes = loadTxtFile("mock-data/sobrenomes.txt");
        tiposCozinha = loadTxtFile("cozinha.txt"); 
        avaliacoesPositivas = loadTxtFile("avaliacaopositiva.txt"); 
        avaliacoesNegativas = loadTxtFile("avaliacaonegativa");
    }

    // --- MÉTODOS DE CRIAÇÃO DE ENTIDADES (RESTAURANTE) ---
    
    @Transactional
    public Restaurante createMockRestaurante() {
        // 1. Criar Usuário Restaurante
        String email = String.format("restaurante%04d@tavola.com", mockUserCounter.getAndIncrement()); 
        Usuario usuario = new Usuario();
        usuario.setNome(getRandom(nomesEstabelecimentos));
        usuario.setEmail(email);
        usuario.setSenha(passwordEncoder.encode("senha"));
        usuario.setTipo(TipoUsuario.RESTAURANTE);
        usuario.setEmailVerificado(true); 
        
        usuario.setEndereco(getPasseioDasAguasAddress());
        usuario.setTelefone("6299" + randomInt(1000, 9999));
        
        usuarioRepository.save(usuario);

        // 2. Criar Restaurante
        Restaurante restaurante = new Restaurante();
        restaurante.setUsuario(usuario);
        
        // Tipo de Cozinha aleatório
        restaurante.setTipoCozinha(getRandom(tiposCozinha)); 
        
        restaurante.setDescricao("Um delicioso restaurante com pratos incríveis.");
        restaurante.setHorariosFuncionamento(getHorariosMock());
        
        // Imagem aleatória (0-9)
        String imgPath = "/upl/mock/restaurantes/" + randomInt(0, 9) + ".jpeg";
        restaurante.setImagemPrincipal(imgPath);
        usuario.setImagem(imgPath);
        
        usuarioRepository.save(usuario);
        restauranteRepository.save(restaurante);

        // 3. Criar Garçons
        createMockGarcons(restaurante, 3);

        // 4. Criar Ambientes e Mesas
        createMockAmbientes(restaurante);

        // 5. Criar Cardápio (CATEGORIAS FIXAS)
        createMockCardapio(restaurante, 5);

        return restaurante;
    }

    private void createMockGarcons(Restaurante restaurante, int quantidade) {
        for (int i = 0; i < quantidade; i++) {
            Garcom garcom = new Garcom();
            garcom.setRestaurante(restaurante);
            garcom.setNome(getRandom(sobrenomesClientes));
            garcom.setSenha(passwordEncoder.encode("senha"));
            garcom.setCodigoIdentidade(gerarCodigoUnico(restaurante.getId()));
            garcom.setImagem("/upl/mock/garcons/" + randomInt(0, 9) + ".jpeg");
            garcomRepository.save(garcom);
        }
    }

    private void createMockAmbientes(Restaurante restaurante) {
        Ambiente calcadao = new Ambiente();
        calcadao.setNome("Calçadão");
        calcadao.setRestaurante(restaurante);
        ambienteRepository.save(calcadao);
        createMockMesas(calcadao, 3);

        Ambiente interior = new Ambiente();
        interior.setNome("Interior");
        interior.setRestaurante(restaurante);
        ambienteRepository.save(interior);
        createMockMesas(interior, 3);
    }

    private void createMockMesas(Ambiente ambiente, int quantidade) {
        for (int i = 1; i <= quantidade; i++) {
            Mesa mesa = new Mesa();
            mesa.setAmbiente(ambiente);
            mesa.setNome(String.valueOf(i));
            mesa.setCapacidade(4);
            mesa.setStatus(MesaStatus.LIVRE);
            mesaRepository.save(mesa);
        }
    }

    private void createMockCardapio(Restaurante restaurante, int quantidade) {
        Categoria entrada = categoriaService.saveIfNotExists("Entrada", restaurante);
        Categoria pratoPrincipal = categoriaService.saveIfNotExists("Prato Principal", restaurante);
        
        Set<Integer> indicesUsados = new HashSet<>();

        for (int i = 0; i < quantidade; i++) {
            int index;
            do {
                index = randomInt(0, nomesPratos.size() - 1); 
            } while (indicesUsados.contains(index)); 
            indicesUsados.add(index);

            Cardapio item = new Cardapio();
            item.setRestaurante(restaurante);
            item.setDisponivel(true);
            
            if (i % 2 == 0) {
                item.setCategoria(entrada);
            } else {
                item.setCategoria(pratoPrincipal);
            }
            
            item.setImagem("/upl/mock/cardapios/" + (index % 10) + ".jpeg"); 
            item.setNome(nomesPratos.get(index)); 
            
            item.setDescricao("Descrição de teste para o prato " + item.getNome());
            item.setPreco(randomDouble(20.00, 150.00));
            cardapioRepository.save(item);
        }
    }


    // --- MÉTODOS DE CRIAÇÃO DE ENTIDADES (CLIENTE E RESERVAS) ---
    
    @Transactional
    public Cliente createMockCliente(List<UUID> idsRestaurantesMock) {
        // 1. Criar Usuário Cliente
        String email = String.format("cliente%04d@tavola.com", mockUserCounter.getAndIncrement());
        Usuario usuario = new Usuario();
        usuario.setNome(getRandom(nomesClientes) + " " + getRandom(sobrenomesClientes));
        usuario.setEmail(email);
        usuario.setSenha(passwordEncoder.encode("senha"));
        usuario.setTipo(TipoUsuario.CLIENTE);
        usuario.setEmailVerificado(true);
        
        // Preenchimento completo do Endereço
        usuario.setEndereco(getCerradoAddress());
        usuario.setTelefone("6299" + randomInt(1000, 9999)); 
        
        usuario.setImagem("/upl/mock/usuarios/" + randomInt(0, 9) + ".jpeg");
        usuarioRepository.save(usuario);

        // 2. Criar Cliente
        Cliente cliente = new Cliente();
        cliente.setUsuario(usuario);
        clienteRepository.save(cliente);

        // 3. Criar Histórico de Reservas (Concluídas e Avaliadas)
        createMockReservasHistorico(cliente, idsRestaurantesMock);

        // 4. Criar Sessão Ativa (Reserva Ativa, Atendimento, Pedido)
        if (!idsRestaurantesMock.isEmpty()) {
            UUID restIdAtivo = idsRestaurantesMock.get(randomInt(0, idsRestaurantesMock.size() - 1)); // Escolhe um aleatório
            createMockSessaoAtiva(cliente, restIdAtivo);
        }
        
        return cliente;
    }

    /**
     * Cria reservas no passado (CONCLUIDAS) e gera avaliações.
     */
    private void createMockReservasHistorico(Cliente cliente, List<UUID> idsRestaurantes) {
        Collections.shuffle(idsRestaurantes);
        
        // Itera sobre metade dos restaurantes para criar histórico (garante no mínimo 1)
        int numHistorico = Math.max(1, idsRestaurantes.size() / 2);
        
        for (int i = 0; i < numHistorico; i++) {
            UUID restId = idsRestaurantes.get(i);
            Restaurante restaurante = restauranteRepository.findById(restId).orElse(null);
            if (restaurante == null) continue;
            
            // 1. Define data e hora no passado
            LocalDate dataReservaPassada = LocalDate.now().minusDays(randomInt(5, 30));
            LocalTime horaReservaPassada = LocalTime.of(randomInt(18, 21), 0);
            
            try {
                // Tenta achar uma mesa que estava livre na data passada (ou pega a primeira)
                Mesa mesa = findRandomMesa(restaurante.getId(), dataReservaPassada, horaReservaPassada, 2);
                
                // 2. Cria a reserva CONCLUIDA (usando o novo helper)
                Reserva reserva = reservaService.criarReservaMock(
                    cliente, restaurante, mesa, 
                    dataReservaPassada, horaReservaPassada, 
                    randomInt(2, 4), StatusReserva.CONCLUIDA
                );
                
                // 3. Cria a Avaliação (Lógica Aleatória)
                createMockAvaliacao(cliente, restaurante, reserva);

            } catch (Exception e) {
                // Silenciar erros de colisão de mesa, que são comuns em mocks
            }
        }
    }

    /**
     * Cria reserva ATIVA, Atendimento e Pedido.
     */
    private void createMockSessaoAtiva(Cliente cliente, UUID restauranteId) {
        Restaurante restaurante = restauranteRepository.findById(restauranteId).orElse(null);
        if (restaurante == null) return;
        
        // 1. Busca Mesa, Garçom e Cardápio aleatórios
        List<Mesa> mesas = mesaRepository.findByAmbienteIdIn(restaurante.getAmbientes().stream().map(Ambiente::getId).collect(Collectors.toList()));
        List<Garcom> garcons = garcomRepository.findAllByRestauranteId(restauranteId);
        List<Cardapio> cardapio = cardapioRepository.findByRestauranteId(restauranteId);
        
        if (mesas.isEmpty() || garcons.isEmpty() || cardapio.isEmpty()) return;
        
        // Pega um item aleatório para a sessão
        Mesa mesaAtiva = mesas.get(randomInt(0, mesas.size() - 1));
        Garcom garcomAtivo = garcons.get(randomInt(0, garcons.size() - 1));
        Cardapio itemPedido = cardapio.get(randomInt(0, cardapio.size() - 1));
        
        // 2. Cria a Reserva ATIVA na data atual
        try {
            reservaService.criarReservaMock(
                cliente, restaurante, mesaAtiva, 
                LocalDate.now(), LocalTime.now().plusMinutes(randomInt(5, 10)), 
                2, StatusReserva.ATIVA
            );
        } catch (Exception e) {
            // Reserva pode falhar por limite, mas vamos forçar o atendimento ativo mesmo assim
        }
        
        // 3. Inicia o Atendimento (Mesa OCUPADA)
        AtendimentoMesa atendimento = atendimentoMesaService.iniciarAtendimentoMock(mesaAtiva, garcomAtivo);
        
        // 4. Cria o Pedido (Status PENDENTE)
        pedidoService.criarPedidoMock(mesaAtiva, cliente, garcomAtivo, itemPedido);
    }
    
    /**
     * Lógica de avaliação aleatória (1-3 Negativa, 4-5 Positiva).
     */
    private void createMockAvaliacao(Cliente cliente, Restaurante restaurante, Reserva reserva) {
        int score = randomInt(1, 5); // Escolhe o score
        String comentario;
        
        if (score <= 3) {
            // 1, 2, 3 -> Negativa
            comentario = getRandom(avaliacoesNegativas);
        } else {
            // 4, 5 -> Positiva
            comentario = getRandom(avaliacoesPositivas);
        }
        
        // Simula o pedido de avaliação
        AvaliacaoRequest request = new AvaliacaoRequest();
        request.setScore((double) score);
        request.setComentario(comentario);
        
        try {
            // Submete a avaliação (o AvaliacaoService fará o cálculo da média)
            avaliacaoService.submeterMockAvaliacao(request, restaurante.getId(), cliente.getUsuario().getEmail(), reserva);
        } catch (Exception e) {
            // Silenciar erros de avaliação, pois o objetivo é ter dados
        }
    }


    // --- Métodos Auxiliares ---

    private List<String> loadTxtFile(String path) {
        try {
            InputStream is = new ClassPathResource(path).getInputStream();
            return new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))
                    .lines()
                    .map(line -> line.replaceAll("^[0-9]+\\.", "").trim())
                    .collect(Collectors.toList());
        } catch (IOException e) {
            System.err.println("FALHA AO CARREGAR MOCK TXT: " + path);
            return Collections.emptyList();
        }
    }

    private String getRandom(List<String> list) {
        return list.get(randomInt(0, list.size() - 1));
    }
    
    private List<HorarioFuncionamento> getHorariosMock() {
        return Arrays.stream(DiaDaSemana.values())
            .map(dia -> {
                HorarioFuncionamento hf = new HorarioFuncionamento();
                hf.setDiaSemana(dia.getNomeBanco()); 
                hf.setAbertura("09:00");
                hf.setFechamento("21:00");
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
        end.setComplemento("Loja 101"); 
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
        end.setComplemento("Torre A, Sala 50"); 
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
        String codigo;
        do {
            int numero = 10000000 + new java.util.Random().nextInt(90000000); 
            String numeroStr = String.valueOf(numero);
            codigo = numeroStr.substring(0, 4) + "-" + numeroStr.substring(4);
        } while (garcomRepository.findByRestauranteIdAndCodigoIdentidade(restauranteId, codigo).isPresent());
        return codigo;
    }
    
    // Método complexo para achar mesa (lógica de colisão)
    private Mesa findRandomMesa(UUID restauranteId, LocalDate data, LocalTime hora, int capacidade) throws Exception {
        List<Mesa> mesasDisponiveis = mesaRepository.findMesasDisponiveis(restauranteId, data, hora, capacidade);
        
        if (mesasDisponiveis.isEmpty()) {
            // Tenta pegar qualquer mesa (risco de colisão ignorado para mock)
            Restaurante restaurante = restauranteRepository.findById(restauranteId).orElseThrow(() -> new EntityNotFoundException("Restaurante não encontrado."));
            
            List<Mesa> todasMesas = mesaRepository.findByAmbienteIdIn(restaurante.getAmbientes().stream().map(Ambiente::getId).collect(Collectors.toList()));
            if (!todasMesas.isEmpty()) return todasMesas.get(0);
            
            throw new RuntimeException("Nenhuma mesa encontrada.");
        }
        
        return mesasDisponiveis.get(randomInt(0, mesasDisponiveis.size() - 1));
    }
}