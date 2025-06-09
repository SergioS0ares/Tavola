package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.MesaRequest;
import TavolaSoftware.TavolaApp.REST.model.Ambiente;
import TavolaSoftware.TavolaApp.REST.model.Mesa;
import TavolaSoftware.TavolaApp.REST.repository.AmbienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.MesaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MesaService {

    @Autowired
    private MesaRepository mesaRepository;

    @Autowired
    private AmbienteRepository ambienteRepository;

    /**
     * Cria uma nova mesa e a associa a um ambiente.
     * @param request DTO com os dados da nova mesa.
     * @param ambienteId ID do ambiente ao qual a mesa pertencerá.
     * @return A entidade Mesa que foi salva.
     */
    public Mesa createMesa(MesaRequest request, UUID ambienteId) {
        // 1. Busca o ambiente ao qual a mesa pertencerá.
        Ambiente ambiente = ambienteRepository.findById(ambienteId)
                .orElseThrow(() -> new EntityNotFoundException("Ambiente não encontrado com o id: " + ambienteId));

        // 2. Cria uma nova entidade Mesa.
        Mesa novaMesa = new Mesa();
        novaMesa.setNome(request.getNome());
        novaMesa.setTipo(request.getTipo());
        novaMesa.setCapacidade(request.getCapacidade());
        novaMesa.setVip(request.isVip());
        novaMesa.setAmbiente(ambiente); // 3. Associa a mesa ao ambiente.

        // 4. Salva a mesa no banco de dados.
        return mesaRepository.save(novaMesa);
    }

    /**
     * Atualiza os dados de uma mesa existente.
     * @param idMesa O ID da mesa a ser atualizada.
     * @param request DTO com os novos dados.
     * @return A entidade Mesa atualizada.
     */
    public Mesa updateMesa(UUID idMesa, MesaRequest request) {
        // 1. Encontra a mesa existente.
        Mesa mesaExistente = mesaRepository.findById(idMesa)
                .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada com o id: " + idMesa));

        // 2. Atualiza os campos.
        mesaExistente.setNome(request.getNome());
        mesaExistente.setTipo(request.getTipo());
        mesaExistente.setCapacidade(request.getCapacidade());
        mesaExistente.setVip(request.isVip());

        // 3. Salva as alterações.
        return mesaRepository.save(mesaExistente);
    }
    
    /**
     * Deleta uma mesa pelo seu ID.
     * @param idMesa O ID da mesa a ser deletada.
     */
    public void deleteMesa(UUID idMesa) {
        if (!mesaRepository.existsById(idMesa)) {
            throw new EntityNotFoundException("Mesa não encontrada com o id: " + idMesa);
        }
        mesaRepository.deleteById(idMesa);
    }

    /**
     * Busca todas as mesas de um ambiente.
     * @param ambienteId ID do ambiente.
     * @return Lista de mesas.
     */
    public List<Mesa> getMesasByAmbiente(UUID ambienteId) {
        return mesaRepository.findByAmbienteId(ambienteId);
    }
}