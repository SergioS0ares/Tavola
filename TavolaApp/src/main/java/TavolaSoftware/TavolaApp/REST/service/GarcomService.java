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

        // O código agora é gerado pelo sistema
        String novoCodigo = gerarCodigoUnico(restauranteId);

        Garcom garcom = new Garcom();
        garcom.setNome(request.getNome());
        garcom.setCodigoIdentidade(novoCodigo); // Usamos o código gerado
        garcom.setSenha(passwordEncoder.encode(request.getSenha()));
        garcom.setRestaurante(restaurante);
        garcom.setAtivo(true);

        return garcomRepository.save(garcom);
    }
    
    private String gerarCodigoUnico(UUID restauranteId) {
        String codigo;
        do {
            int numero = 10000000 + new java.util.Random().nextInt(90000000); // Gera um número de 8 dígitos
            String numeroStr = String.valueOf(numero);
            codigo = numeroStr.substring(0, 4) + "-" + numeroStr.substring(4);
        } while (garcomRepository.findByRestauranteIdAndCodigoIdentidade(restauranteId, codigo).isPresent());
        return codigo;
    }

    @Transactional(readOnly = true)
    public List<Garcom> findAllByRestaurante(UUID restauranteId) {
        return garcomRepository.findAllByRestauranteId(restauranteId);
    }

    @Transactional
    public Garcom updateGarcom(UUID garcomId, GarcomRequest request, UUID restauranteId) {
        Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new RuntimeException("Garçom não encontrado."));

        // Validação de segurança: o garçom pertence ao restaurante que está fazendo a requisição?
        if (!garcom.getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. O garçom não pertence a este restaurante.");
        }

        garcom.setNome(request.getNome());
        // Permite a atualização opcional da senha
        if (request.getSenha() != null && !request.getSenha().isEmpty()) {
            garcom.setSenha(passwordEncoder.encode(request.getSenha()));
        }

        return garcomRepository.save(garcom);
    }
    
    @Transactional
    public void desativarGarcom(UUID garcomId, UUID restauranteId) {
        Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new RuntimeException("Garçom não encontrado."));

        // Validação de segurança
        if (!garcom.getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. O garçom não pertence a este restaurante.");
        }

        garcom.setAtivo(false);
        garcomRepository.save(garcom);
    }
}