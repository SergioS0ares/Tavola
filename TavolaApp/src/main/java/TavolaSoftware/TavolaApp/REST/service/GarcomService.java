// Substitua o conteúdo de service/GarcomService.java
package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.requests.GarcomRequest;
import TavolaSoftware.TavolaApp.REST.model.Garcom;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.GarcomRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class GarcomService {

    @Autowired
    private GarcomRepository garcomRepository;

    @Autowired
    private RestauranteRepository restauranteRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Transactional
    public Garcom createGarcom(GarcomRequest request, UUID restauranteId) {
        Restaurante restaurante = restauranteRepository.findById(restauranteId)
                .orElseThrow(() -> new RuntimeException("Restaurante não encontrado."));

        // Validação para não repetir código de identidade no mesmo restaurante
        garcomRepository.findByRestauranteIdAndCodigoIdentidade(restauranteId, request.getCodigoIdentidade())
                .ifPresent(g -> {
                    throw new RuntimeException("Código de identidade já está em uso neste restaurante.");
                });

        Garcom garcom = new Garcom();
        garcom.setNome(request.getNome());
        garcom.setCodigoIdentidade(request.getCodigoIdentidade());
        garcom.setSenha(passwordEncoder.encode(request.getSenha()));
        garcom.setRestaurante(restaurante);
        garcom.setAtivo(true);

        return garcomRepository.save(garcom);
    }

    @Transactional(readOnly = true)
    public List<Garcom> findAllByRestaurante(UUID restauranteId) {
        return garcomRepository.findAllByRestauranteId(restauranteId);
    }

    // Aqui iriam os métodos de update e delete, se necessários.
}