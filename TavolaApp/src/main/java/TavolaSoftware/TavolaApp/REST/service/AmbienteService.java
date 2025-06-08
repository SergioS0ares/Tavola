package TavolaSoftware.TavolaApp.REST.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TavolaSoftware.TavolaApp.REST.model.Ambiente;
import TavolaSoftware.TavolaApp.REST.repository.AmbienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.tools.UploadUtils;
import jakarta.transaction.Transactional;

@Service
public class AmbienteService {

    @Autowired
    private AmbienteRepository ambienteRepository;
    
    @Autowired
    private RestauranteRepository restauranteRepository; // Para buscar o restaurante

    @Autowired
    private UploadUtils uploadUtils; // Para deletar imagens

    public Ambiente findById(UUID id) {
        return ambienteRepository.findById(id).orElse(null);
    }

    public List<Ambiente> findByRestauranteId(UUID restauranteId) {
        return ambienteRepository.findByRestauranteId(restauranteId);
    }

    @Transactional
    public Ambiente save(Ambiente ambiente) {
        // A lógica de processar e salvar imagens Base64 iria aqui
        // usando o seu uploadUtils.processAmbienteImagens()
        return ambienteRepository.save(ambiente);
    }

    @Transactional
    public void delete(UUID ambienteId, UUID restauranteId) {
        if (ambienteRepository.existsById(ambienteId)) {
            ambienteRepository.deleteById(ambienteId);
            
            // Deleta a pasta de imagens do ambiente
            String pastaImagens = "upl/ambientes/" + restauranteId + "/" + ambienteId;
            uploadUtils.deletarPasta(pastaImagens);
        }
    }
}