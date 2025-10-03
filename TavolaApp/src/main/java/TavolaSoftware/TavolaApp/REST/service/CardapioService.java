package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Cardapio;
import TavolaSoftware.TavolaApp.REST.model.Categoria;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Tags;
import TavolaSoftware.TavolaApp.REST.repository.CardapioRepository;
import TavolaSoftware.TavolaApp.tools.UploadUtils;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CardapioService {

	// Precisamos injetar os outros serviços aqui para que o CardapioService possa "maestrar"
    @Autowired
    private CategoriaService categoriaService;
    
    @Autowired
    private TagsService tagsService;
	
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

    @Transactional
    public Cardapio save(Cardapio cardapio, Restaurante restaurante) {
        // ... (lógica de categoria e tags permanece a mesma) ...
        cardapio.setRestaurante(restaurante);

        if (cardapio.getCategoria() != null && cardapio.getCategoria().getNome() != null) {
            Categoria categoriaGerenciada = categoriaService.saveIfNotExists(cardapio.getCategoria().getNome(), restaurante);
            cardapio.setCategoria(categoriaGerenciada);
        } else {
            throw new IllegalArgumentException("A categoria é obrigatória para criar um item no cardápio.");
        }

        if (cardapio.getTags() != null && !cardapio.getTags().isEmpty()) {
            Set<String> nomesTags = cardapio.getTags().stream().map(Tags::getTag).collect(Collectors.toSet());
            Set<Tags> tagsGerenciadas = tagsService.saveAll(nomesTags);
            cardapio.setTags(tagsGerenciadas);
        }

        // 4. Processa a imagem, se houver (LÓGICA CORRIGIDA)
        if (cardapio.getImagem() != null && uplUtil.isBase64Image(cardapio.getImagem())) {
            try {
                // <<< MUDANÇA AQUI: Chamando o método correto e mais simples do UploadUtils
                String caminhoDaImagem = uplUtil.processCardapioImagem(cardapio.getImagem(), restaurante.getId(), cardapio.getId());
                cardapio.setImagem(caminhoDaImagem);
            } catch (IOException e) {
                throw new RuntimeException("Erro ao salvar imagem de cardápio", e);
            }
        }
        
        return repo.save(cardapio);
    }
    
    @Transactional // Garante que a lista inteira seja salva numa única transação
    public List<Cardapio> saveMultiple(List<Cardapio> cardapios, Restaurante restaurante) {
        List<Cardapio> salvos = new ArrayList<>();
        for (Cardapio cardapio : cardapios) {
            // Agora chamamos o método save de um único item, que já tem a lógica completa.
            // Como estamos dentro de um método @Transactional, tudo faz parte da mesma "unidade de trabalho".
            Cardapio salvo = this.save(cardapio, restaurante);
            salvos.add(salvo);
        }
        return salvos;
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

    @Transactional
    public Cardapio update(UUID cardapioId, Cardapio dadosParaAtualizar, Restaurante restauranteDono) {
        Cardapio cardapioExistente = repo.findById(cardapioId)
            .orElseThrow(() -> new RuntimeException("Item de cardápio não encontrado com o ID: " + cardapioId));

        if (!cardapioExistente.getRestaurante().getId().equals(restauranteDono.getId())) {
            throw new SecurityException("Acesso negado. Você não tem permissão para alterar este item do cardápio.");
        }

        // ... (lógica de atualização de nome, preço, etc. permanece a mesma) ...
        if (dadosParaAtualizar.getNome() != null && !dadosParaAtualizar.getNome().isBlank()) {
            cardapioExistente.setNome(dadosParaAtualizar.getNome());
        }
        if (dadosParaAtualizar.getDescricao() != null) {
            cardapioExistente.setDescricao(dadosParaAtualizar.getDescricao());
        }
        if (dadosParaAtualizar.getPreco() > 0) { 
            cardapioExistente.setPreco(dadosParaAtualizar.getPreco());
        }
        cardapioExistente.setDisponivel(dadosParaAtualizar.getDisponivel());
        if (dadosParaAtualizar.getCategoria() != null && dadosParaAtualizar.getCategoria().getNome() != null) {
            Categoria novaCategoria = categoriaService.saveIfNotExists(dadosParaAtualizar.getCategoria().getNome(), restauranteDono);
            cardapioExistente.setCategoria(novaCategoria);
        }
        if (dadosParaAtualizar.getTags() != null) {
            Set<String> nomesTags = dadosParaAtualizar.getTags().stream().map(Tags::getTag).collect(Collectors.toSet());
            Set<Tags> novasTags = tagsService.saveAll(nomesTags);
            cardapioExistente.setTags(novasTags);
        }

        // 5. ATUALIZA A IMAGEM (LÓGICA CORRIGIDA)
        if (dadosParaAtualizar.getImagem() != null && uplUtil.isBase64Image(dadosParaAtualizar.getImagem())) {
            try {
                // <<< MUDANÇA AQUI: Chamando o método correto e mais simples do UploadUtils
                // Primeiro deletamos a imagem antiga para não deixar lixo no disco
                uplUtil.deletarArquivoPeloCaminho(cardapioExistente.getImagem());
                
                String novoCaminho = uplUtil.processCardapioImagem(dadosParaAtualizar.getImagem(), restauranteDono.getId(), cardapioId);
                cardapioExistente.setImagem(novoCaminho);
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar a nova imagem do cardápio: " + e.getMessage(), e);
            }
        }

        return repo.save(cardapioExistente);
    }

    public Optional<Cardapio> findByNomeAndRestauranteId(String nome, UUID restauranteId) {
        return repo.findByNomeAndRestauranteId(nome, restauranteId);
    }
}
