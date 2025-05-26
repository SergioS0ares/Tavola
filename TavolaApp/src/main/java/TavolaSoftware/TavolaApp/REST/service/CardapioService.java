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
                String nomeArquivo = uplUtil.processBase64(cardapio.getImagem(), pasta, "jpg");
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
            String img = uplUtil.findNameByURL(cardapio.get().getImagem());
            String pasta = "upl/cardapios/" + cardapio.get().getRestaurante().getId();
            uplUtil.removeOrfans(pasta, Set.of()); // apaga tudo se a imagem for única
        }
        repo.deleteById(id);
    }

    public Cardapio update(UUID id, Cardapio cardapioAtualizado) {
        Cardapio cardapioExistente = repo.findById(id)
            .orElseThrow(() -> new RuntimeException("Cardápio não encontrado"));

        // Atualiza apenas os campos que foram enviados
        if (cardapioAtualizado.getNome() != null && !cardapioAtualizado.getNome().trim().isEmpty()) {
            cardapioExistente.setNome(cardapioAtualizado.getNome());
        }

        if (cardapioAtualizado.getDescricao() != null) {
            cardapioExistente.setDescricao(cardapioAtualizado.getDescricao());
        }

        if (cardapioAtualizado.getPreco() != 0.0) {
            cardapioExistente.setPreco(cardapioAtualizado.getPreco());
        }

        cardapioExistente.setDisponivel(cardapioAtualizado.getDisponivel());

        if (cardapioAtualizado.getCategoria() != null && cardapioAtualizado.getCategoria().getNome() != null) {
            cardapioExistente.setCategoria(cardapioAtualizado.getCategoria());
        }

        if (cardapioAtualizado.getTags() != null && !cardapioAtualizado.getTags().isEmpty()) {
            cardapioExistente.setTags(cardapioAtualizado.getTags());
        }

        // Processa a imagem se fornecida
        if (cardapioAtualizado.getImagem() != null && !cardapioAtualizado.getImagem().trim().isEmpty() && uplUtil.isBase64Image(cardapioAtualizado.getImagem())) {
            try {
                String pasta = "upl/cardapios/" + cardapioExistente.getRestaurante().getId();
                String nomeArquivo = uplUtil.processBase64(cardapioAtualizado.getImagem(), pasta, "jpg");
                cardapioExistente.setImagem("/upl/cardapios/" + cardapioExistente.getRestaurante().getId() + "/" + nomeArquivo);
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagem do cardápio: " + e.getMessage(), e);
            }
        }

        return repo.save(cardapioExistente);
    }

    public Optional<Cardapio> findByNomeAndRestauranteId(String nome, UUID restauranteId) {
        return repo.findByNomeAndRestauranteId(nome, restauranteId);
    }
}
