package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.requests.GarcomRequest;
import TavolaSoftware.TavolaApp.REST.model.Garcom;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.GarcomRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.tools.UploadUtils; // <<< IMPORT ADICIONADO

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException; // <<< IMPORT ADICIONADO
import java.util.List;
import java.util.UUID;

@Service
public class GarcomService {

    @Autowired private GarcomRepository garcomRepository;
    @Autowired private RestauranteRepository restauranteRepository;
    @Autowired private BCryptPasswordEncoder passwordEncoder;
    @Autowired private UploadUtils uplUtil;

    @Transactional
    public Garcom createGarcom(GarcomRequest request, UUID restauranteId) {
    	System.out.println("[GarçomSERV] " + "Serviço Requisitado");
        Restaurante restaurante = restauranteRepository.findById(restauranteId)
                .orElseThrow(() -> new RuntimeException("Restaurante não encontrado."));

        String novoCodigo = gerarCodigoUnico(restauranteId);
        System.out.println("[GarçomSERV] " + "código gerado como: " + novoCodigo);

        Garcom garcom = new Garcom();
        garcom.setNome(request.getNome());
        garcom.setCodigoIdentidade(novoCodigo);
        garcom.setSenha(passwordEncoder.encode(request.getSenha()));
        garcom.setRestaurante(restaurante);
        
        if (request.getImagem() != null && !request.getImagem().isBlank()) {
            try {
                String nomeImagem = uplUtil.processGarcomImagem(request.getImagem());
                garcom.setImagem(nomeImagem); // Usando o método corrigido
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagem do garçom: " + e.getMessage(), e);
            }
        }
        
        System.out.println("[GarçomSERV] " + "objeto de garçom populado");

        return garcomRepository.save(garcom);
    }
    
    private String gerarCodigoUnico(UUID restauranteId) {
        String codigo;
        do {
            int numero = 10000000 + new java.util.Random().nextInt(90000000); 
            String numeroStr = String.valueOf(numero);
            codigo = numeroStr.substring(0, 4) + "-" + numeroStr.substring(4);
        } while (garcomRepository.findByRestauranteIdAndCodigoIdentidade(restauranteId, codigo).isPresent());
        return codigo;
    }

    @Transactional(readOnly = true)
    public List<Garcom> findAllByRestaurante(UUID restauranteId) {
        
    	List<Garcom> garcons = garcomRepository.findAllByRestauranteId(restauranteId);
        garcons.forEach(garcom -> {
            if (garcom.getImagem() != null) {
                garcom.setImagem(uplUtil.construirUrlRelativa("garcom", garcom.getImagem()));
            }
        });
        return garcons;
        }

    @Transactional
    public Garcom updateGarcom(UUID garcomId, GarcomRequest request, UUID restauranteId) {
        Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new RuntimeException("Garçom não encontrado."));

        if (!garcom.getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. O garçom não pertence a este restaurante.");
        }

        if (request.getNome() != null && !request.getNome().isEmpty()) {
            garcom.setNome(request.getNome());
        }
        if (request.getSenha() != null && !request.getSenha().isEmpty()) {
            garcom.setSenha(passwordEncoder.encode(request.getSenha()));
        }
        
        if (request.getImagem() != null) { 
            try {
                String nomeAntigo = garcom.getImagem() != null ? uplUtil.findNameByURL(garcom.getImagem()) : null;
                String nomeNovo = uplUtil.processGarcomImagem(request.getImagem());

                garcom.setImagem(nomeNovo); // Salva o nome do novo arquivo (ou o nome antigo, se não mudou)

                // Se o nome novo for diferente do antigo (e o antigo existia), deleta o antigo
                if (nomeAntigo != null && !nomeAntigo.equals(nomeNovo)) {
                    String urlAntiga = uplUtil.construirUrlRelativa("garcons", nomeAntigo);
                    uplUtil.deletarArquivoPeloCaminho(urlAntiga);
                }
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagem do garçom: " + e.getMessage(), e);
            }
        }
        return garcomRepository.save(garcom);
    }
    
    @Transactional
    public void deleteGarcom(UUID garcomId, UUID restauranteId) {
        Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new RuntimeException("Garçom não encontrado."));

        if (!garcom.getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. O garçom não pertence a este restaurante.");
        }
        
        // --- LÓGICA DE DELETE DE ARQUIVO ---
        String nomeImagem = garcom.getImagem();
        // --- FIM DA LÓGICA ---
        
        garcomRepository.delete(garcom);
        
        // --- LÓGICA DE DELETE DE ARQUIVO (Continuação) ---
        if (nomeImagem != null && !nomeImagem.isBlank()) {
            String urlImagem = uplUtil.construirUrlRelativa("garcons", nomeImagem);
            uplUtil.deletarArquivoPeloCaminho(urlImagem);
        }
        // --- FIM DA LÓGICA ---
    }
}