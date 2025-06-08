package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.AmbienteRequest;
import TavolaSoftware.TavolaApp.REST.dto.AmbienteResponse;
import TavolaSoftware.TavolaApp.REST.model.Ambiente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.AmbienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class AmbienteService {

    @Autowired
    private AmbienteRepository ambienteRepository;

    @Autowired
    private RestauranteRepository restauranteRepository;

    /**
     * Lista todos os ambientes de um restaurante específico.
     */
    @Transactional(readOnly = true)
    public List<AmbienteResponse> findAllByRestaurante(UUID restauranteId) {
        return ambienteRepository.findByRestauranteId(restauranteId).stream()
                .map(AmbienteResponse::new)
                .collect(Collectors.toList());
    }

    /**
     * Busca um ambiente específico pelo seu ID, garantindo que ele pertence ao restaurante.
     */
    @Transactional(readOnly = true)
    public Optional<AmbienteResponse> findByIdAndRestaurante(UUID ambienteId, UUID restauranteId) {
        return ambienteRepository.findById(ambienteId)
                .filter(ambiente -> ambiente.getRestaurante().getId().equals(restauranteId))
                .map(AmbienteResponse::new);
    }

    /**
     * Cria um novo ambiente para um restaurante.
     */
    @Transactional
    public AmbienteResponse create(AmbienteRequest request, Restaurante restaurante) {
        Ambiente novoAmbiente = new Ambiente();
        novoAmbiente.setNome(request.getNome());
        novoAmbiente.setRestaurante(restaurante);

        Ambiente ambienteSalvo = ambienteRepository.save(novoAmbiente);
        return new AmbienteResponse(ambienteSalvo);
    }

    /**
     * Atualiza um ambiente existente.
     */
    @Transactional
    public Optional<AmbienteResponse> update(UUID ambienteId, AmbienteRequest request, UUID restauranteId) {
        Optional<Ambiente> ambienteOpt = ambienteRepository.findById(ambienteId);

        // Verifica se o ambiente existe e pertence ao restaurante correto
        if (ambienteOpt.isEmpty() || !ambienteOpt.get().getRestaurante().getId().equals(restauranteId)) {
            return Optional.empty(); // Retorna vazio se não encontrado ou sem permissão
        }

        Ambiente ambienteExistente = ambienteOpt.get();
        ambienteExistente.setNome(request.getNome());
        // Outros campos como descrição poderiam ser atualizados aqui

        Ambiente ambienteAtualizado = ambienteRepository.save(ambienteExistente);
        return Optional.of(new AmbienteResponse(ambienteAtualizado));
    }

    /**
     * Deleta um ambiente.
     */
    @Transactional
    public boolean delete(UUID ambienteId, UUID restauranteId) {
        Optional<Ambiente> ambienteOpt = ambienteRepository.findById(ambienteId);

        if (ambienteOpt.isPresent() && ambienteOpt.get().getRestaurante().getId().equals(restauranteId)) {
            ambienteRepository.deleteById(ambienteId);
            return true; // Sucesso
        }
        return false; // Falha (não encontrado ou sem permissão)
    }
}