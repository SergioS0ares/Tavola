package TavolaSoftware.TavolaApp.tools;

import TavolaSoftware.TavolaApp.tools.Mesas;
import org.springframework.stereotype.Component;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class UploadUtils {

    public String salvarImagemBase64(String base64, String pastaDestino, String extensao) throws IOException {
        if (base64 == null || !base64.startsWith("data:image")) {
            throw new IllegalArgumentException("Formato base64 inválido ou ausente");
        }

        String[] partes = base64.split(",");
        byte[] dados = Base64.getDecoder().decode(partes[1]);

        BufferedImage imagem = ImageIO.read(new java.io.ByteArrayInputStream(dados));
        if (imagem == null) {
            throw new IOException("Não foi possível decodificar imagem base64");
        }

        String nomeArquivo = UUID.randomUUID().toString() + "." + extensao;
        Path destino = Paths.get(pastaDestino, nomeArquivo);

        Files.createDirectories(destino.getParent());
        ImageIO.write(imagem, extensao, destino.toFile());

        return nomeArquivo;
    }

    public void removerImagensOrfas(String pasta, Set<String> nomesEmUso) {
        File dir = new File(pasta);
        if (!dir.exists() || !dir.isDirectory()) return;

        File[] arquivos = dir.listFiles();
        if (arquivos == null) return;

        for (File imagem : arquivos) {
            if (!nomesEmUso.contains(imagem.getName())) {
                imagem.delete();
            }
        }
    }

    public long contarImagens(String pasta) {
        File dir = new File(pasta);
        if (!dir.exists() || !dir.isDirectory()) return 0;

        File[] arquivos = dir.listFiles((d, name) -> name.endsWith(".jpg") || name.endsWith(".png") || name.endsWith(".jpeg"));
        return arquivos != null ? arquivos.length : 0;
    }

    public long tamanhoTotalEmBytes(String pasta) {
        File dir = new File(pasta);
        if (!dir.exists() || !dir.isDirectory()) return 0;

        File[] arquivos = dir.listFiles();
        long total = 0;
        if (arquivos != null) {
            for (File file : arquivos) {
                total += file.length();
            }
        }
        return total;
    }

    public boolean isBase64Image(String base64) {
        return base64 != null && base64.startsWith("data:image");
    }

    public String extrairNomeArquivoDaURL(String url) {
        if (url == null || url.isBlank()) return null;
        return Paths.get(url).getFileName().toString();
    }

    public void processarImagensMesas(List<Mesas> mesas, UUID restauranteId) {
        for (Mesas mesa : mesas) {
            List<String> imagensConvertidas = new ArrayList<>();
            for (String imagem : mesa.getImagem()) {
                if (isBase64Image(imagem)) {
                    String pasta = "upl/mesas/" + restauranteId + "/" + mesa.getNome().replaceAll("\\s+", "_");
                    try {
                        String nome = salvarImagemBase64(imagem, pasta, "jpg");
                        imagensConvertidas.add("/upl/mesas/" + restauranteId + "/" + mesa.getNome().replaceAll("\\s+", "_") + "/" + nome);
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

    public void processarMesa(Mesas mesa, UUID restauranteId) {
        List<String> imagensConvertidas = new ArrayList<>();
        for (String imagem : mesa.getImagem()) {
            if (isBase64Image(imagem)) {
                String pasta = "upl/mesas/" + restauranteId + "/" + mesa.getNome().replaceAll("\\s+", "_");
                try {
                    String nome = salvarImagemBase64(imagem, pasta, "jpg");
                    imagensConvertidas.add("/upl/mesas/" + restauranteId + "/" + mesa.getNome().replaceAll("\\s+", "_") + "/" + nome);
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
