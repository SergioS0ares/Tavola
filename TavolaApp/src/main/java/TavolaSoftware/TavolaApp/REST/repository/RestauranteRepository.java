package TavolaSoftware.TavolaApp.REST.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;

@Repository
public interface RestauranteRepository extends JpaRepository<Restaurante, UUID>{
	Restaurante findByUsuarioEmail(String email);
	Optional<Restaurante> findByUsuario(Usuario usuario);
}
