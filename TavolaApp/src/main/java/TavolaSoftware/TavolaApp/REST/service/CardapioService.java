package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Cardapio;
import TavolaSoftware.TavolaApp.REST.repository.CardapioRepository;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Service
public class CardapioService {

    @Autowired
    private CardapioRepository repo;

    @Autowired
    private UploadUtils uplUtil;

    public List<Cardapio> findAll() {
        return repo.findAll();
    }

    public Optional<Cardapio> findById(UUID id) {
        return repo.findById(id);
    }

    public List<Cardapio> findByRestauranteId(UUID restauranteId) {
        return repo.findByRestauranteId(restauranteId);
    }

    public Cardapio save(Cardapio cardapio) {
        if (uplUtil.isBase64Image(cardapio.getImagem())) {
            String pasta = "upl/cardapios/" + cardapio.getRestaurante().getId();
            try {
                String nomeArquivo = uplUtil.salvarImagemBase64(cardapio.getImagem(), pasta, "jpg");
                cardapio.setImagem("/upl/cardapios/" + cardapio.getRestaurante().getId() + "/" + nomeArquivo);
            } catch (IOException e) {
                throw new RuntimeException("Erro ao salvar imagem de cardápio", e);
            }
        }
        return repo.save(cardapio);
    }

    public List<Cardapio> findAllByDisponivel(UUID restauranteId) {
        return repo.findAllDisponiveisByRestaurante(restauranteId);
    }

    public void deleteById(UUID id) {
        Optional<Cardapio> cardapio = repo.findById(id);
        if (cardapio.isPresent()) {
            String img = uplUtil.extrairNomeArquivoDaURL(cardapio.get().getImagem());
            String pasta = "upl/cardapios/" + cardapio.get().getRestaurante().getId();
            uplUtil.removerImagensOrfas(pasta, Set.of()); // apaga tudo se a imagem for única
        }
        repo.deleteById(id);
    }

    public Cardapio update(UUID id, Cardapio cardapioAtualizado) {
        Optional<Cardapio> existenteOpt = repo.findById(id);
        if (existenteOpt.isEmpty()) return null;

        Cardapio existente = existenteOpt.get();
        String imagemAntiga = uplUtil.extrairNomeArquivoDaURL(existente.getImagem());
        String imagemNova = uplUtil.extrairNomeArquivoDaURL(cardapioAtualizado.getImagem());

        cardapioAtualizado.setId(id);
        Cardapio salvo = repo.save(cardapioAtualizado);

        if (imagemAntiga != null && !imagemAntiga.equals(imagemNova)) {
            String pasta = "upl/cardapios/" + existente.getRestaurante().getId();
            uplUtil.removerImagensOrfas(pasta, Set.of(imagemNova));
        }

        return salvo;
    }

    public Optional<Cardapio> findByNomeAndRestauranteId(String nome, UUID restauranteId) {
        return repo.findByNomeAndRestauranteId(nome, restauranteId);
    }
}
