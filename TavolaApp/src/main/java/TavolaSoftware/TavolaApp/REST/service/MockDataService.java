package TavolaSoftware.TavolaApp.REST.service;

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
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class MockDataService {

    // Contador estático para os e-mails mock
    //
    private static final AtomicInteger mockUserCounter = new AtomicInteger(0);

    // Listas pré-carregadas dos TXTs
    private final List<String> nomesEstabelecimentos;
    private final List<String> nomesPratos;
    private final List<String> nomesClientes;
    private final List<String> sobrenomesClientes;

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
    @Autowired private BCryptPasswordEncoder passwordEncoder;
    @Autowired private UploadUtils uploadUtils;

    // Construtor que carrega os TXTs na inicialização
    public MockDataService() {
        nomesEstabelecimentos = loadTxtFile("mock-data/estabelecimentos.txt");
        nomesPratos = loadTxtFile("mock-data/pratos.txt");
        nomesClientes = loadTxtFile("mock-data/nomes.txt");
        sobrenomesClientes = loadTxtFile("mock-data/sobrenomes.txt");
    }

    // --- TAREFA 1: GERAR RESTAURANTE ---
    
    @Transactional
    public Restaurante createMockRestaurante() {
        // 1. Criar Usuário Restaurante
        String email = String.format("%04d@tavola.com", mockUserCounter.getAndIncrement());
        Usuario usuario = new Usuario();
        usuario.setNome(getRandom(nomesEstabelecimentos));
        usuario.setEmail(email);
        usuario.setSenha(passwordEncoder.encode("senha"));
        usuario.setTipo(TipoUsuario.RESTAURANTE);
        usuario.setEmailVerificado(true); // Pula 2FA
        usuario.setEndereco(getPasseioDasAguasAddress());
        usuarioRepository.save(usuario);

        // 2. Criar Restaurante
        Restaurante restaurante = new Restaurante();
        restaurante.setUsuario(usuario);
        restaurante.setTipoCozinha("Teste");
        restaurante.setDescricao("teste");
        restaurante.setHorariosFuncionamento(getHorariosMock());
        
        // Imagem aleatória (0-9)
        String imgPath = "/upl/mock/restaurantes/" + randomInt(0, 9) + ".jpeg";
        restaurante.setImagemPrincipal(imgPath);
        // (Assumindo que a imagem de perfil do usuário é a mesma)
        usuario.setImagem(imgPath);
        usuarioRepository.save(usuario); // Salva a imagem no usuário
        
        restauranteRepository.save(restaurante); // Salva o restaurante para ter ID

        // 3. Criar Garçons
        createMockGarcons(restaurante, 3);

        // 4. Criar Ambientes e Mesas
        createMockAmbientes(restaurante);

        // 5. Criar Cardápio
        createMockCardapio(restaurante, 5);

        return restaurante;
    }

    private void createMockGarcons(Restaurante restaurante, int quantidade) {
        for (int i = 0; i < quantidade; i++) {
            Garcom garcom = new Garcom();
            garcom.setRestaurante(restaurante);
            garcom.setNome(getRandom(sobrenomesClientes));
            garcom.setSenha(passwordEncoder.encode("senha"));
            garcom.setCodigoIdentidade(gerarCodigoUnico(restaurante.getId())); // Lógica de geração aleatória
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
            mesa.setCapacidade(4); // Valor padrão
            mesa.setStatus(MesaStatus.LIVRE);
            mesaRepository.save(mesa);
        }
    }

    private void createMockCardapio(Restaurante restaurante, int quantidade) {
        // Garante que a categoria "Entradas" exista
        Categoria categoria = categoriaService.saveIfNotExists("Entradas", restaurante);
        
        // Garante que não repetimos os pratos
        Set<Integer> indicesUsados = new HashSet<>();

        for (int i = 0; i < quantidade; i++) {
            int index;
            do {
                index = randomInt(0, 9); // Pega um índice de 0 a 9
            } while (indicesUsados.contains(index)); // Tenta de novo se já usou
            indicesUsados.add(index);

            Cardapio item = new Cardapio();
            item.setRestaurante(restaurante);
            item.setCategoria(categoria);
            item.setDisponivel(true);
            
            // Lógica de imagem/nome correspondente
            item.setImagem("/upl/mock/cardapios/" + index + ".jpeg");
            item.setNome(nomesPratos.get(index)); //
            
            item.setDescricao("Descrição de teste para o prato " + item.getNome());
            item.setPreco(randomDouble(20.00, 150.00));
            cardapioRepository.save(item);
        }
    }


    // --- TAREFA 2: GERAR CLIENTE E RESERVAS ---
    
    @Transactional
    public Cliente createMockCliente(List<UUID> idsRestaurantesMock) {
        // 1. Criar Usuário Cliente
        String email = String.format("%04d@tavola.com", mockUserCounter.getAndIncrement());
        Usuario usuario = new Usuario();
        usuario.setNome(getRandom(nomesClientes) + " " + getRandom(sobrenomesClientes));
        usuario.setEmail(email);
        usuario.setSenha(passwordEncoder.encode("senha"));
        usuario.setTipo(TipoUsuario.CLIENTE);
        usuario.setEmailVerificado(true);
        usuario.setEndereco(getCerradoAddress());
        usuario.setImagem("/upl/mock/usuarios/" + randomInt(0, 9) + ".jpeg");
        usuarioRepository.save(usuario);

        // 2. Criar Cliente
        Cliente cliente = new Cliente();
        cliente.setUsuario(usuario);
        clienteRepository.save(cliente);

        // 3. Criar Reservas
        createMockReservas(cliente, idsRestaurantesMock);

        return cliente;
    }

    private void createMockReservas(Cliente cliente, List<UUID> idsRestaurantes) {
        //
        Collections.shuffle(idsRestaurantes);
        
        LocalDate dataAtual = LocalDate.now();
        int diasAdicionados = 1;

        for (UUID restId : idsRestaurantes) {
            Restaurante restaurante = restauranteRepository.findById(restId).orElse(null);
            if (restaurante == null) continue; // Pula se o ID for inválido

            //
            LocalDate dataReserva = dataAtual.plusDays(diasAdicionados++);
            
            // (09:00 - 21:00)
            LocalTime horaReserva = LocalTime.of(randomInt(9, 20), 0); // ex: 13:00, 18:00
            
            ReservaRequest request = new ReservaRequest();
            request.setIdRestaurante(restId);
            request.setQuantidadePessoasReserva(3);
            request.setDataReserva(dataReserva.toString());
            request.setHorarioReserva(horaReserva.toString());
            request.setComentariosPreferenciaReserva("teste");

            try {
                // Tenta criar uma reserva (Cenário 2: ATIVA)
                //
                Mesa mesaDisponivel = findRandomMesa(restaurante.getId(), dataReserva, horaReserva, 3);
                
                request.setIdsMesas(List.of(mesaDisponivel.getId()));
                reservaService.criarReserva(request, cliente.getUsuario().getEmail());
                
            } catch (Exception e) {
                // Se falhar (ex: colisão ou limite), tenta criar na Lista de Espera (Cenário 1)
                //
                try {
                    request.setIdsMesas(null); // Remove a mesa para cair na lógica de lista de espera
                    ReservaResponse r = reservaService.criarReserva(request, cliente.getUsuario().getEmail());
                    // Força a lista de espera (se a lógica do service não o fizer)
                    Reserva reserva = reservaRepository.findById(r.getId()).get();
                    reserva.setStatus(StatusReserva.LISTA_ESPERA);
                    reservaRepository.save(reserva);
                } catch (Exception e2) {
                    System.err.println("Falha ao criar mock de reserva: " + e2.getMessage());
                }
            }
        }
    }

    // Método complexo para achar mesa (lógica de colisão)
    private Mesa findRandomMesa(UUID restauranteId, LocalDate data, LocalTime hora, int capacidade) throws Exception {
        List<Mesa> mesasDisponiveis = mesaRepository.findMesasDisponiveis(restauranteId, data, hora, capacidade);
        
        if (mesasDisponiveis.isEmpty()) {
            //
            // (Embora na lógica acima, estamos a jogar na lista de espera em vez de avançar o dia)
            throw new RuntimeException("Nenhuma mesa encontrada, tentando lista de espera.");
        }
        
        //
        return mesasDisponiveis.get(randomInt(0, mesasDisponiveis.size() - 1));
    }


    // --- Métodos Auxiliares ---

    // Lê um ficheiro TXT do 'resources'
    private List<String> loadTxtFile(String path) {
        try {
            InputStream is = new ClassPathResource(path).getInputStream();
            return new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))
                    .lines()
                    .map(line -> line.replaceAll("^[0-9]+\\.", "").trim()) // Remove "0."
                    .collect(Collectors.toList());
        } catch (IOException e) {
            System.err.println("FALHA AO CARREGAR MOCK TXT: " + path);
            return Collections.emptyList();
        }
    }

    // Pega um item aleatório de uma lista
    private String getRandom(List<String> list) {
        return list.get(randomInt(0, list.size() - 1));
    }
    
    // Gera horário das 09:00 às 21:00 para todos os dias
    private List<HorarioFuncionamento> getHorariosMock() {
        return Arrays.stream(DayOfWeek.values())
            .map(dia -> {
                HorarioFuncionamento hf = new HorarioFuncionamento();
                hf.setDiaSemana(dia.toString()); // Salva como "MONDAY", "TUESDAY"...
                hf.setAbertura("09:00");
                hf.setFechamento("21:00");
                return hf;
            }).collect(Collectors.toList());
    }

    // Endereço do Passeio das Águas
    private Endereco getPasseioDasAguasAddress() {
        Endereco end = new Endereco();
        end.setCep("74573-260");
        end.setCidade("Goiânia");
        end.setEstado("GO");
        end.setBairro("Fazenda Caveiras");
        end.setRua("Av. Perimetral Norte, 8303");
        return end;
    }
    
    // Endereço do Shopping Cerrado
    private Endereco getCerradoAddress() {
        Endereco end = new Endereco();
        end.setCep("74435-090");
        end.setCidade("Goiânia");
        end.setEstado("GO");
        end.setBairro("Aeroviário");
        end.setRua("Av. Anhanguera, 10790");
        return end;
    }

    private int randomInt(int min, int max) {
        return ThreadLocalRandom.current().nextInt(min, max + 1);
    }
    
    private double randomDouble(double min, double max) {
        double val = ThreadLocalRandom.current().nextDouble(min, max);
        return Math.round(val * 100.0) / 100.0; // Arredonda para 2 casas decimais
    }
    
    // Pega a geração de código que já existe no GarcomService
    private String gerarCodigoUnico(UUID restauranteId) {
        String codigo;
        do {
            int numero = 10000000 + new java.util.Random().nextInt(90000000); 
            String numeroStr = String.valueOf(numero);
            codigo = numeroStr.substring(0, 4) + "-" + numeroStr.substring(4);
        } while (garcomRepository.findByRestauranteIdAndCodigoIdentidade(restauranteId, codigo).isPresent());
        return codigo;
    }
}