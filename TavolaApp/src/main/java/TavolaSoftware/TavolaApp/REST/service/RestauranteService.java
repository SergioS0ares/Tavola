package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.model.Servico;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.repository.ServicoRepository;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteRequest;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse; // <<< IMPORTANTE: Usaremos este DTO
// import TavolaSoftware.TavolaApp.REST.dto.ClienteHomeResponse; // <<< REMOVER OU COMENTAR ESTE IMPORT
import TavolaSoftware.TavolaApp.REST.model.Mesas;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.ArrayList; // <<< NOVO IMPORT
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository repoRestaurante;

    @Autowired
    private UsuarioRepository repoUsuario;
    
    @Autowired
    private ServicoRepository repoServico;

    @Autowired
    private UploadUtils uplUtil;

    @Autowired
    private BCryptPasswordEncoder encoder;

    // MUDANÇA: Retorna List<RestauranteResponse> e ajusta o conteúdo das imagens
    public List<RestauranteResponse> findAll() {
        List<Restaurante> restaurantes = repoRestaurante.findAll(); //
        return restaurantes.stream()
            .map(restaurante -> {
                // 1. Cria o RestauranteResponse completo (com todas as imagens do restaurante + mesas)
                RestauranteResponse responseDto = new RestauranteResponse(restaurante);

                // 2. Modifica a lista 'imagens' do DTO para conter APENAS a imagem principal do RESTAURANTE
                List<String> principalImageOnly = new ArrayList<>();
                List<String> imagensDoRestaurante = restaurante.getImagens(); // Pega a lista original de imagens do restaurante
                
                if (imagensDoRestaurante != null && !imagensDoRestaurante.isEmpty()) {
                    principalImageOnly.add(imagensDoRestaurante.get(0)); // Adiciona apenas a primeira (principal)
                }
                responseDto.setImagens(principalImageOnly); // Define a lista de imagens do DTO para conter só a principal
                
                return responseDto;
            })
            .collect(Collectors.toList());
    }

    public Optional<RestauranteResponse> findById(UUID id) { 
        return repoRestaurante.findById(id).map(RestauranteResponse::new); // Este continua usando o construtor completo
    }

    @Transactional
    public Restaurante saveFromRequest(RestauranteRequest request) { //
        Usuario usuario = new Usuario();
        usuario.setNome(request.getNomeUsuario()); 
        usuario.setEmail(request.getEmailUsuario()); 
        usuario.setSenha(encoder.encode(request.getSenhaUsuario())); 
        usuario.setEndereco(request.getEnderecoUsuario()); 
        usuario.setTipo(TipoUsuario.RESTAURANTE);
        Usuario usuarioSalvo = repoUsuario.save(usuario);

        Restaurante restaurante = new Restaurante();
        restaurante.setUsuario(usuarioSalvo);
        restaurante.setTipoCozinha(request.getTipoCozinha()); 
        
        if (request.getHorariosFuncionamento() != null) {
            restaurante.setHorariosFuncionamento(request.getHorariosFuncionamento()); 
        }
        
        if (request.getNomesServicos() != null && !request.getNomesServicos().isEmpty()) { 
            Set<Servico> servicosParaAssociar = new HashSet<>();
            for (String nomeServico : request.getNomesServicos()) { 
                Servico serv = repoServico.findByNome(nomeServico)
                                .orElseGet(() -> repoServico.save(new Servico(nomeServico, "")));
                servicosParaAssociar.add(serv);
            }
            restaurante.setServicos(servicosParaAssociar); 
        }

        if (request.getImagens() != null && !request.getImagens().isEmpty()) { 
            try {
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), usuarioSalvo.getId()); //
                restaurante.setImagens(caminhosImagens); // A imagem principal será a primeira aqui
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagens do restaurante: " + e.getMessage(), e);
            }
        }
        
        return repoRestaurante.save(restaurante);
    }
    
    @Transactional
    public Restaurante save(Restaurante restaurante) { //
        return repoRestaurante.save(restaurante);
    }


    @Transactional
    public Restaurante updateFromRequest(UUID id, RestauranteRequest request) { //
        Restaurante restauranteExistente = repoRestaurante.findById(id)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado com ID: " + id));

        Usuario usuarioAssociado = restauranteExistente.getUsuario(); 

        if (request.getNomeUsuario() != null && !request.getNomeUsuario().isBlank()) { 
            usuarioAssociado.setNome(request.getNomeUsuario()); 
        }
        if (request.getEmailUsuario() != null && !request.getEmailUsuario().isBlank()) { 
            usuarioAssociado.setEmail(request.getEmailUsuario()); 
        }
        if (request.getSenhaUsuario() != null && !request.getSenhaUsuario().isBlank()) { 
            usuarioAssociado.setSenha(encoder.encode(request.getSenhaUsuario())); 
        }
        if (request.getEnderecoUsuario() != null) { 
            usuarioAssociado.setEndereco(request.getEnderecoUsuario()); 
        }
        repoUsuario.save(usuarioAssociado);

        if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) { 
            restauranteExistente.setTipoCozinha(request.getTipoCozinha()); 
        }
        if (request.getHorariosFuncionamento() != null) { 
            restauranteExistente.setHorariosFuncionamento(request.getHorariosFuncionamento()); 
        }

        if (request.getNomesServicos() != null) { 
            Set<Servico> servicosAtualizados = new HashSet<>();
            if (!request.getNomesServicos().isEmpty()) { 
                for (String nomeServico : request.getNomesServicos()) { 
                    Servico serv = repoServico.findByNome(nomeServico)
                                    .orElseGet(() -> repoServico.save(new Servico(nomeServico, "")));
                    servicosAtualizados.add(serv);
                }
            }
            restauranteExistente.setServicos(servicosAtualizados); 
        }

        if (request.getImagens() != null && !request.getImagens().isEmpty()) { 
            try {
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), restauranteExistente.getId()); //
                restauranteExistente.setImagens(caminhosImagens); // A imagem principal será a primeira
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagens do restaurante durante atualização: " + e.getMessage(), e);
            }
        }
        
        return repoRestaurante.save(restauranteExistente);
    }

    @Transactional
    public void deleteById(UUID id) { //
        Optional<Restaurante> restauranteOpt = repoRestaurante.findById(id);
        if (restauranteOpt.isPresent()) {
            Restaurante restaurante = restauranteOpt.get();
            repoRestaurante.delete(restaurante);
        } else {
            throw new RuntimeException("Restaurante não encontrado para deleção com ID: " + id);
        }
    }
    
    public Restaurante getByEmail(String email) { //
        Usuario usuario = repoUsuario.findByEmail(email);
        if (usuario == null) {
            throw new RuntimeException("Usuário não encontrado: " + email);
        }
        return repoRestaurante.findByUsuario(usuario)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado para o usuário: " + email));
    }
}