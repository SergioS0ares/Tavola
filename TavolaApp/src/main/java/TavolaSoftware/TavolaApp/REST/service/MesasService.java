package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.tools.Mesas;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

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
public class MesasService {

    @Autowired
    private RestauranteRepository restauranteRepository;

    @Autowired
    private UploadUtils uplUtil;

    public Restaurante getRestauranteByEmail(String email) {
        Restaurante restaurante = restauranteRepository.findByUsuarioEmail(email);
        if (restaurante == null) {
            throw new RuntimeException("Restaurante não encontrado para o e-mail informado: " + email);
        }
        return restaurante;
    }
    
    public Restaurante save(Mesas mesa, UUID restauranteId) {
        Restaurante restaurante = restauranteRepository.findById(restauranteId)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado."));

        uplUtil.processarMesa(mesa, restauranteId);
        restaurante.getMesas().add(mesa);

        return restauranteRepository.save(restaurante);
    }

    public List<Mesas> findAll(Restaurante restaurante) {
        return restaurante.getMesas();
    }

    public Optional<Mesas> findByName(Restaurante restaurante, String nome) {
        return restaurante.getMesas().stream()
                .filter(m -> m.getNome().equalsIgnoreCase(nome))
                .findFirst();
    }

    public Optional<Mesas> findByIndex(Restaurante restaurante, int index) {
        List<Mesas> mesas = restaurante.getMesas();
        if (index < 0 || index >= mesas.size()) {
            return Optional.empty();
        }
        return Optional.of(mesas.get(index));
    }

    public void update(Restaurante restaurante, List<Mesas> novasMesas) {
        restaurante.setMesas(novasMesas);
        restauranteRepository.save(restaurante);
    }

    public void limparImagensOrfasPorMesa(UUID restauranteId, String mesaId, List<String> imagensAtivas) {
        Set<String> nomes = imagensAtivas.stream()
            .map(uplUtil::extrairNomeArquivoDaURL)
            .collect(Collectors.toSet());

        String pasta = "upl/mesas/" + restauranteId + "/" + mesaId;
        uplUtil.removerImagensOrfas(pasta, nomes);
    }
    
    public Restaurante update(int index, Mesas mesaAtualizada, UUID restauranteId) {
        Restaurante restaurante = restauranteRepository.findById(restauranteId)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado."));

        List<Mesas> mesas = restaurante.getMesas();

        if (index < 0 || index >= mesas.size()) {
            throw new RuntimeException("Índice da mesa inválido.");
        }

        Mesas existente = mesas.get(index);
        existente.setNome(mesaAtualizada.getNome());
        existente.setDescricao(mesaAtualizada.getDescricao());
        existente.setQuantidadeTotal(mesaAtualizada.getQuantidadeTotal());
        existente.setQuantidadeDisponivel(mesaAtualizada.getQuantidadeDisponivel());
        existente.setDisponivel(mesaAtualizada.isDisponivel());

        if (mesaAtualizada.getImagem() != null && !mesaAtualizada.getImagem().isEmpty()) {
            existente.setImagem(mesaAtualizada.getImagem());
            uplUtil.processarMesa(existente, restauranteId);
        }

        return restauranteRepository.save(restaurante);
    }
    
    public void processarImagensMesas(Restaurante restaurante) {
        for (Mesas mesa : restaurante.getMesas()) {
            List<String> imagensConvertidas = new ArrayList();
            for (String imagem : mesa.getImagem()) {
                if (uplUtil.isBase64Image(imagem)) {
                    String pasta = "upl/mesas/" + restaurante.getId() + "/" + mesa.getNome().replaceAll("\\s+", "_");
                    try {
                        String nome = uplUtil.salvarImagemBase64(imagem, pasta, "jpg");
                        imagensConvertidas.add("/upl/mesas/" + restaurante.getId() + "/" + mesa.getNome().replaceAll("\\s+", "_") + "/" + nome);
                    } catch (IOException e) {
                        throw new RuntimeException("Erro ao salvar imagem da mesa: " + mesa.getNome(), e);
                    }
                } else {
                    imagensConvertidas.add(imagem);
                }
            }
            mesa.setImagem(imagensConvertidas);
        }
    }

}
