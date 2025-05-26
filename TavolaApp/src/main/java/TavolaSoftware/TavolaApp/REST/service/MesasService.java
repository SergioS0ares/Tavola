package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.MesasRepository;
import TavolaSoftware.TavolaApp.REST.model.Mesas;
import TavolaSoftware.TavolaApp.tools.UploadUtils;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class MesasService {

    @Autowired
    private RestauranteRepository repoRestaurante;

    @Autowired
    private MesasRepository repo;

    @Value("${app.upload.dir}")
    private String baseDir;

    @Autowired
    private UploadUtils uplUtil;

    public Restaurante getRestauranteByEmail(String email) {
        Restaurante restaurante = repoRestaurante.findByUsuarioEmail(email);
        if (restaurante == null) {
            throw new RuntimeException("Restaurante não encontrado para o e-mail informado: " + email);
        }
        return restaurante;
    }

    public Restaurante save(Mesas mesa, UUID restauranteId) {
        try {
            Restaurante restaurante = repoRestaurante.findById(restauranteId)
                .orElseThrow(() -> new RuntimeException("Restaurante não encontrado."));

            if (mesa.getImagem() == null) {
                mesa.setImagem(new ArrayList<>());
            }

            if (mesa.getIdImagem() == null) {
                mesa.setIdImagem(UUID.randomUUID());
            }

            List<String> imagensConvertidas = new ArrayList<>();
            for (String imagem : mesa.getImagem()) {
                if (uplUtil.isBase64Image(imagem)) {
                    String pasta = "upl/mesas/" + restauranteId + "/" + mesa.getIdImagem();
                    String nome = uplUtil.processBase64(imagem, pasta, "jpg");
                    imagensConvertidas.add(pasta + "/" + nome);
                } else {
                    imagensConvertidas.add(imagem);
                }
            }

            mesa.setImagem(imagensConvertidas);
            restaurante.getMesas().add(mesa);
            return repoRestaurante.save(restaurante);
        } catch (IOException e) {
            throw new RuntimeException("Erro ao processar imagens da mesa", e);
        }
    }

    public Mesas saveMesa(Mesas mesa, Restaurante restaurante) {
        try {
            if (mesa.getIdImagem() == null) {
                mesa.setIdImagem(UUID.randomUUID());
            }

            // Processa base64 em caminhos físicos antes de salvar
            if (mesa.getImagem() != null && !mesa.getImagem().isEmpty()) {
                List<String> imagensConvertidas = new ArrayList<>();
                for (String img : mesa.getImagem()) {
                    if (uplUtil.isBase64Image(img)) {
                        String pasta = "upl/mesas/" + restaurante.getId() + "/" + mesa.getIdImagem();
                        String nome = uplUtil.processBase64(img, pasta, "jpg");
                        imagensConvertidas.add(pasta + "/" + nome);
                    } else {
                        imagensConvertidas.add(img);
                    }
                }
                mesa.setImagem(imagensConvertidas);
            }
            mesa.setRestaurante(restaurante);
            return repo.save(mesa);
        } catch (IOException e) {
            throw new RuntimeException("Erro ao processar imagens da mesa", e);
        }
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
        repoRestaurante.save(restaurante);
    }

    public void limparImagensOrfasPorMesa(UUID restauranteId, String mesaId, List<String> imagensAtivas) {
        Set<String> nomes = imagensAtivas.stream()
            .map(uplUtil::findNameByURL)
            .collect(Collectors.toSet());
        String pasta = "upl/mesas/" + restauranteId + "/" + mesaId;
        uplUtil.removeOrfans(pasta, nomes);
    }

    public Restaurante update(int index, Mesas mesaAtualizada, UUID restauranteId) throws IOException {
        Restaurante restaurante = repoRestaurante.findById(restauranteId)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado."));
        Mesas existente = restaurante.getMesas().get(index);
        existente.setNome(mesaAtualizada.getNome());
        existente.setDescricao(mesaAtualizada.getDescricao());
        existente.setQuantidadeTotal(mesaAtualizada.getQuantidadeTotal());
        existente.setQuantidadeDisponivel(mesaAtualizada.getQuantidadeDisponivel());
        existente.setDisponivel(mesaAtualizada.isDisponivel());
        if (mesaAtualizada.getImagem() != null && !mesaAtualizada.getImagem().isEmpty()) {
            existente.setImagem(mesaAtualizada.getImagem());
            uplUtil.processMesas(existente, restauranteId);
        }
        return repoRestaurante.save(restaurante);
    }

    public Mesas processImagensMesa(UUID restauranteId, UUID mesaId, MultipartFile file) throws IOException {
        Mesas mesa = repo.findById(mesaId)
                .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada"));
        
        if (mesa.getIdImagem() == null) {
            mesa.setIdImagem(UUID.randomUUID());
        }
        
        String relativePath = buildAndSaveFile(restauranteId, mesa, file);
        mesa.getImagem().add(relativePath);
        return repo.save(mesa);
    }

    private String buildAndSaveFile(UUID restauranteId, Mesas mesa, MultipartFile file) throws IOException {
        String mesaFolder = mesa.getIdImagem().toString();
        Path uploadPath = Paths.get(baseDir, "mesas", restauranteId.toString(), mesaFolder);
        Files.createDirectories(uploadPath);
        String originalName = file.getOriginalFilename();
        String extension = "";
        int dotIndex = originalName != null ? originalName.lastIndexOf('.') : -1;
        if (dotIndex > 0 && dotIndex < originalName.length() - 1) {
            extension = originalName.substring(dotIndex + 1);
        }
        String filename = UUID.randomUUID().toString() + (extension.isEmpty() ? "" : "." + extension);
        Path filePath = uploadPath.resolve(filename);
        file.transferTo(filePath.toFile());
        return Paths.get("mesas", restauranteId.toString(), mesaFolder, filename).toString();
    }

    public List<Mesas> getMesasByRestaurante(UUID restauranteId) {
        return repo.findByRestauranteId(restauranteId);
    }

    public Mesas getMesaById(UUID mesaId, UUID restauranteId) {
        return repo.findByIdAndRestauranteId(mesaId, restauranteId);
    }

    // restante dos métodos (deleteMesa, updateMesa, etc.) permanecem iguais
}
