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

    /**
     * MÉTODO 'SAVE' ADEQUADO
     * Agora, este método é responsável por toda a operação de criação do item de cardápio.
     * Ele é o ponto de entrada transacional.
     */
    @Transactional
    public Cardapio save(Cardapio cardapio, Restaurante restaurante) {
        // 1. Associa o restaurante ao item de cardápio
        cardapio.setRestaurante(restaurante);

        // 2. Garante que a Categoria existe e a associa
        if (cardapio.getCategoria() != null && cardapio.getCategoria().getNome() != null) {
            Categoria categoriaGerenciada = categoriaService.saveIfNotExists(cardapio.getCategoria().getNome(), restaurante);
            cardapio.setCategoria(categoriaGerenciada);
        } else {
            throw new IllegalArgumentException("A categoria é obrigatória para criar um item no cardápio.");
        }

        // 3. Garante que as Tags existem e as associa
        if (cardapio.getTags() != null && !cardapio.getTags().isEmpty()) {
            Set<String> nomesTags = cardapio.getTags().stream().map(Tags::getTag).collect(Collectors.toSet());
            Set<Tags> tagsGerenciadas = tagsService.saveAll(nomesTags);
            cardapio.setTags(tagsGerenciadas);
        }

        // 4. Processa a imagem, se houver
        if (cardapio.getImagem() != null && uplUtil.isBase64Image(cardapio.getImagem())) {
            try {
                String pasta = "upl/cardapios/" + restaurante.getId();
                String nomeArquivo = uplUtil.processBase64(cardapio.getImagem(), pasta, "jpg", "image");
                cardapio.setImagem("/upl/cardapios/" + restaurante.getId() + "/" + nomeArquivo);
            } catch (IOException e) {
                throw new RuntimeException("Erro ao salvar imagem de cardápio", e);
            }
        }
        
        // 5. Salva o objeto Cardapio final, uma única vez.
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
    	String x = "" + dadosParaAtualizar.getPreco();
        // 1. Busca o item de cardápio existente no banco de dados.
        Cardapio cardapioExistente = repo.findById(cardapioId)
            .orElseThrow(() -> new RuntimeException("Item de cardápio não encontrado com o ID: " + cardapioId));

        // 2. VERIFICAÇÃO DE SEGURANÇA: Garante que o item pertence ao restaurante que está a fazer a requisição.
        if (!cardapioExistente.getRestaurante().getId().equals(restauranteDono.getId())) {
            throw new SecurityException("Acesso negado. Você não tem permissão para alterar este item do cardápio.");
        }

        // 3. ATUALIZA OS CAMPOS: Atualiza apenas os campos que foram fornecidos no request.
        // Como estamos dentro de um método @Transactional, o Hibernate detecta as alterações
        // e as salva no banco de dados quando a transação termina.
        
        if (dadosParaAtualizar.getNome() != null && !dadosParaAtualizar.getNome().isBlank()) {
            cardapioExistente.setNome(dadosParaAtualizar.getNome());
        }
        if (dadosParaAtualizar.getDescricao() != null) {
            cardapioExistente.setDescricao(dadosParaAtualizar.getDescricao());
        }
        if (x != null && x != "" && !x.isEmpty() && !x.isBlank()) { // Checa por nulidade em vez de 0.0
            cardapioExistente.setPreco(dadosParaAtualizar.getPreco());
        }
        // Para um booleano, geralmente sempre o atualizamos se vier no payload.
        cardapioExistente.setDisponivel(dadosParaAtualizar.getDisponivel());

        // 4. ATUALIZA AS RELAÇÕES (Categoria e Tags)
        if (dadosParaAtualizar.getCategoria() != null && dadosParaAtualizar.getCategoria().getNome() != null) {
            Categoria novaCategoria = categoriaService.saveIfNotExists(dadosParaAtualizar.getCategoria().getNome(), restauranteDono);
            cardapioExistente.setCategoria(novaCategoria);
        }
        if (dadosParaAtualizar.getTags() != null) { // Permite limpar as tags se vier uma lista vazia
            Set<String> nomesTags = dadosParaAtualizar.getTags().stream().map(Tags::getTag).collect(Collectors.toSet());
            Set<Tags> novasTags = tagsService.saveAll(nomesTags);
            cardapioExistente.setTags(novasTags);
        }

        // 5. ATUALIZA A IMAGEM (se uma nova for enviada)
        if (dadosParaAtualizar.getImagem() != null && uplUtil.isBase64Image(dadosParaAtualizar.getImagem())) {
            try {
                String pasta = "upl/cardapios/" + restauranteDono.getId();
                String nomeArquivo = uplUtil.processBase64(dadosParaAtualizar.getImagem(), pasta, "jpg", "image");
                cardapioExistente.setImagem("/upl/cardapios/" + restauranteDono.getId() + "/" + nomeArquivo);
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar a nova imagem do cardápio: " + e.getMessage(), e);
            }
        }

        // Não é estritamente necessário chamar repo.save() aqui, pois o Hibernate já está a
        // "observar" o objeto 'cardapioExistente', mas é uma boa prática para deixar a intenção clara.
        return repo.save(cardapioExistente);
    }

    public Optional<Cardapio> findByNomeAndRestauranteId(String nome, UUID restauranteId) {
        return repo.findByNomeAndRestauranteId(nome, restauranteId);
    }
}
