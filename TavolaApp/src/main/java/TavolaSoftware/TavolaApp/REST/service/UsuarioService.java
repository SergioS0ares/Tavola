package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UsuarioService {

    @Autowired
    private RestauranteRepository restauranteRepo;

    @Autowired
    private ClienteRepository clienteRepo;

    @Autowired
    private UsuarioRepository usuarioRepo;

    public UUID getIdByEmail(String email) {
        Usuario usuario = usuarioRepo.findByEmail(email);
        if (usuario == null) {
            throw new RuntimeException("Usuário não encontrado para o email: " + email);
        }
        return usuario.getId();
    }

    public Usuario getUsuarioByEmail(String email) {
        Usuario usuario = usuarioRepo.findByEmail(email);
        if (usuario == null) {
            throw new RuntimeException("Usuário não encontrado para o email: " + email);
        }
        return usuario;
    }

    public boolean isRestaurante(String email) {
        return restauranteRepo.findByUsuarioEmail(email) != null;
    }

    public boolean isCliente(String email) {
        return clienteRepo.findByUsuarioEmail(email) != null;
    }
} 
