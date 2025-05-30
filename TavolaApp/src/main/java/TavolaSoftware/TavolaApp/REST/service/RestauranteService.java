package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.model.Servico;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.repository.ServicoRepository;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteRequest;
// Removido o import de RestauranteResponse se não for mais usado diretamente aqui para findAll
// import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse; 
import TavolaSoftware.TavolaApp.REST.dto.ClienteHomeResponse; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.model.Mesas;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    private RestauranteRepository repoRestaurante;

    @Autowired
    private UsuarioRepository repoUsuario;
    
    @Autowired
    private ServicoRepository repoServico;

    @Autowired
    private UploadUtils uplUtil;

    @Autowired
    private BCryptPasswordEncoder encoder;

    // MUDANÇA: Retorna List<RestauranteHomeDTO>
    public List<ClienteHomeResponse> findAll() {
        return repoRestaurante.findAll().stream()
                                .map(ClienteHomeResponse::new) // Utiliza o construtor de RestauranteHomeDTO
                                .collect(Collectors.toList());
    }

    // O método findById ainda retorna Optional<RestauranteResponse>
    // Se precisar que ele também retorne um DTO diferente ou RestauranteHomeDTO, me avise!
    public Optional<TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse> findById(UUID id) { // Mantido o nome completo para evitar ambiguidade se RestauranteResponse for removido dos imports
        return repoRestaurante.findById(id).map(TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse::new);
    }

    @Transactional
    public Restaurante saveFromRequest(RestauranteRequest request) {
        Usuario usuario = new Usuario();
        usuario.setNome(request.getNomeUsuario()); //
        usuario.setEmail(request.getEmailUsuario()); //
        usuario.setSenha(encoder.encode(request.getSenhaUsuario())); //
        usuario.setEndereco(request.getEnderecoUsuario()); //
        usuario.setTipo(TipoUsuario.RESTAURANTE);
        Usuario usuarioSalvo = repoUsuario.save(usuario);

        Restaurante restaurante = new Restaurante();
        restaurante.setUsuario(usuarioSalvo);
        restaurante.setTipoCozinha(request.getTipoCozinha()); //
        
        if (request.getHorariosFuncionamento() != null) {
            restaurante.setHoraFuncionamento(request.getHorariosFuncionamento()); //
        }
        
        if (request.getNomesServicos() != null && !request.getNomesServicos().isEmpty()) { //
            Set<Servico> servicosParaAssociar = new HashSet<>();
            for (String nomeServico : request.getNomesServicos()) { //
                Servico serv = repoServico.findByNome(nomeServico)
                                .orElseGet(() -> repoServico.save(new Servico(nomeServico, "")));
                servicosParaAssociar.add(serv);
            }
            restaurante.setServicos(servicosParaAssociar); //
        }

        if (request.getImagens() != null && !request.getImagens().isEmpty()) { //
            try {
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), usuarioSalvo.getId()); //
                restaurante.setImagem(caminhosImagens); //
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagens do restaurante: " + e.getMessage(), e);
            }
        }
        
        return repoRestaurante.save(restaurante);
    }
    
    @Transactional
    public Restaurante save(Restaurante restaurante) {
        return repoRestaurante.save(restaurante);
    }


    @Transactional
    public Restaurante updateFromRequest(UUID id, RestauranteRequest request) {
        Restaurante restauranteExistente = repoRestaurante.findById(id)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado com ID: " + id));

        Usuario usuarioAssociado = restauranteExistente.getUsuario(); //

        if (request.getNomeUsuario() != null && !request.getNomeUsuario().isBlank()) { //
            usuarioAssociado.setNome(request.getNomeUsuario()); //
        }
        if (request.getEmailUsuario() != null && !request.getEmailUsuario().isBlank()) { //
            usuarioAssociado.setEmail(request.getEmailUsuario()); //
        }
        if (request.getSenhaUsuario() != null && !request.getSenhaUsuario().isBlank()) { //
            usuarioAssociado.setSenha(encoder.encode(request.getSenhaUsuario())); //
        }
        if (request.getEnderecoUsuario() != null) { //
            usuarioAssociado.setEndereco(request.getEnderecoUsuario()); //
        }
        repoUsuario.save(usuarioAssociado);

        if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) { //
            restauranteExistente.setTipoCozinha(request.getTipoCozinha()); //
        }
        if (request.getHorariosFuncionamento() != null) { //
            restauranteExistente.setHoraFuncionamento(request.getHorariosFuncionamento()); //
        }

        if (request.getNomesServicos() != null) { //
            Set<Servico> servicosAtualizados = new HashSet<>();
            if (!request.getNomesServicos().isEmpty()) { //
                for (String nomeServico : request.getNomesServicos()) { //
                    Servico serv = repoServico.findByNome(nomeServico)
                                    .orElseGet(() -> repoServico.save(new Servico(nomeServico, "")));
                    servicosAtualizados.add(serv);
                }
            }
            restauranteExistente.setServicos(servicosAtualizados); //
        }

        if (request.getImagens() != null && !request.getImagens().isEmpty()) { //
            try {
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), restauranteExistente.getId()); //
                restauranteExistente.setImagem(caminhosImagens); //
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagens do restaurante durante atualização: " + e.getMessage(), e);
            }
        }
        
        return repoRestaurante.save(restauranteExistente);
    }

    @Transactional
    public void deleteById(UUID id) {
        Optional<Restaurante> restauranteOpt = repoRestaurante.findById(id);
        if (restauranteOpt.isPresent()) {
            Restaurante restaurante = restauranteOpt.get();
            repoRestaurante.delete(restaurante);
        } else {
            throw new RuntimeException("Restaurante não encontrado para deleção com ID: " + id);
        }
    }
    
    public Restaurante getByEmail(String email) {
        Usuario usuario = repoUsuario.findByEmail(email);
        if (usuario == null) {
            throw new RuntimeException("Usuário não encontrado: " + email);
        }
        return repoRestaurante.findByUsuario(usuario)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado para o usuário: " + email));
    }
}