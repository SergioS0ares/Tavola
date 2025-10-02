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
    	System.out.println("[GarçomSERV] " + "Serviço Requisitado");
        Restaurante restaurante = restauranteRepository.findById(restauranteId)
                .orElseThrow(() -> new RuntimeException("Restaurante não encontrado."));

        // O código agora é gerado pelo sistema
        String novoCodigo = gerarCodigoUnico(restauranteId);
        System.out.println("[GarçomSERV] " + "código gerado como: " + novoCodigo);

        Garcom garcom = new Garcom();
        garcom.setNome(request.getNome());
        garcom.setCodigoIdentidade(novoCodigo); // Usamos o código gerado
        garcom.setSenha(passwordEncoder.encode(request.getSenha()));
        garcom.setRestaurante(restaurante);
        garcom.setAtivo(true);
        
        System.out.println("[GarçomSERV] " + "objeto de garçom populado");

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

        // Lógica de atualização parcial
        if (request.getNome() != null && !request.getNome().isEmpty()) {
            garcom.setNome(request.getNome());
        }
        if (request.getSenha() != null && !request.getSenha().isEmpty()) {
            garcom.setSenha(passwordEncoder.encode(request.getSenha()));
        }
        if (request.getFotoUrl() != null) {
            // Permitimos string vazia para o caso de querer remover a foto
            garcom.setFotoUrl(request.getFotoUrl());
        }

        return garcomRepository.save(garcom);
    }
    
    @Transactional
    public void deleteGarcom(UUID garcomId, UUID restauranteId) {
        Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new RuntimeException("Garçom não encontrado."));

        // Validação de segurança (ainda crucial!)
        if (!garcom.getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. O garçom não pertence a este restaurante.");
        }
        
        // Exclusão permanente
        garcomRepository.delete(garcom);
    }
}