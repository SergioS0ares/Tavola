package TavolaSoftware.TavolaApp.tools;

import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Component
public class UploadUtils {

    public boolean isPrincipalBase64Image(String input) {
        if (input == null || input.trim().isEmpty()) {
            return false;
        }
        return input.startsWith("data:principal/") && input.contains(";base64,");
    }
    
    public boolean isBase64Image(String input) {
        if (input == null || input.trim().isEmpty()) {
            return false;
        }
        return input.startsWith("data:image/") && input.contains(";base64,");
    }

    public String processBase64(String base64StringComCabecalho, String pasta, String extensao, String tipoDeDadoPrefixo) throws IOException {
        if (tipoDeDadoPrefixo == null || tipoDeDadoPrefixo.trim().isEmpty() || !tipoDeDadoPrefixo.matches("^[a-zA-Z0-9]+$")) {
            throw new IllegalArgumentException("Prefixo do tipo de dado inválido: " + tipoDeDadoPrefixo);
        }

        String base64Data = base64StringComCabecalho.replaceFirst("^data:" + tipoDeDadoPrefixo + "/[^;]+;base64,", "");
        byte[] decodedBytes = Base64.getDecoder().decode(base64Data);

        Path pastaPath = Paths.get(pasta);
        if (!Files.exists(pastaPath)) {
            Files.createDirectories(pastaPath);
        }

        String nomeArquivo = UUID.randomUUID().toString() + "." + extensao;
        Path filePath = pastaPath.resolve(nomeArquivo);

        try (FileOutputStream fos = new FileOutputStream(filePath.toFile())) {
            fos.write(decodedBytes);
        }
        return nomeArquivo;
    }

    public List<String> processRestauranteImagens(List<String> imagensInput, UUID restauranteId) throws IOException {
        List<String> caminhosProcessados = new ArrayList<>();
        String caminhoPrincipal = null;
        List<String> caminhosOutras = new ArrayList<>();
        
        String pasta = "upl/restaurantes/" + restauranteId.toString();
        
        for (String imagem : imagensInput) {
            if (isPrincipalBase64Image(imagem)) {
                String nomeArquivo = processBase64(imagem, pasta, "jpg", "principal");
                caminhoPrincipal = "/upl/restaurantes/" + restauranteId + "/" + nomeArquivo;
            } else if (isBase64Image(imagem)) {
                String nomeArquivo = processBase64(imagem, pasta, "jpg", "image");
                caminhosOutras.add("/upl/restaurantes/" + restauranteId + "/" + nomeArquivo);
            } else if (imagem != null && !imagem.isEmpty()) {
                caminhosOutras.add(imagem);
            }
        }
        
        if (caminhoPrincipal != null) {
            caminhosProcessados.add(caminhoPrincipal);
        }
        caminhosProcessados.addAll(caminhosOutras);
        
        return caminhosProcessados;
    }

    // <<< MÉTODO ATUALIZADO >>>
    // A assinatura foi simplificada para não precisar mais do parâmetro "tipo".
    public String processUsuarioImagem(String imagem, UUID usuarioId) throws IOException {
        if (!isBase64Image(imagem)) { 
            throw new IOException("A string fornecida não é uma imagem Base64 válida (deve começar com data:image/)");
        }

        String pasta = "upl/usuarios/" + usuarioId.toString();
        // O "tipo" da imagem é sempre "image" para o prefixo do Base64
        String nomeArquivo = processBase64(imagem, pasta, "jpg", "image");
        // Retorna o caminho completo para ser salvo no banco de dados
        return "/upl/usuarios/" + usuarioId + "/" + nomeArquivo;
    }

    public String processCardapioImagem(String imagem, UUID restauranteId, UUID cardapioId) throws IOException {
        if (!isBase64Image(imagem)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida");
        }

        String pasta = "upl/cardapios/" + restauranteId.toString();
        String nomeArquivo = processBase64(imagem, pasta, "jpg", "image");
        return "/upl/cardapios/" + restauranteId + "/" + nomeArquivo;
    }

    public void deletarPasta(String caminhoPasta) {
        Path diretorio = Paths.get(caminhoPasta);
        if (Files.exists(diretorio)) {
            try {
                Files.walk(diretorio)
                    .sorted(Comparator.reverseOrder())
                    .map(Path::toFile)
                    .forEach(File::delete);
            } catch (IOException e) {
                System.err.println("Erro ao deletar a pasta " + caminhoPasta + ": " + e.getMessage());
            }
        }
    }
    
    // <<< NOVO MÉTODO >>>
    /**
     * Deleta um arquivo específico pelo seu caminho relativo (URL).
     * @param caminhoRelativo O caminho do arquivo como salvo no banco (ex: /upl/usuarios/...).
     */
    public void deletarArquivoPeloCaminho(String caminhoRelativo) {
        if (caminhoRelativo == null || caminhoRelativo.isBlank()) {
            return;
        }
        try {
            // Remove a barra inicial, se houver, para criar um caminho relativo ao projeto
            String caminhoNoSistema = caminhoRelativo.startsWith("/") ? caminhoRelativo.substring(1) : caminhoRelativo;
            Path pathArquivo = Paths.get(caminhoNoSistema);
            
            Files.deleteIfExists(pathArquivo);
            
        } catch (IOException e) {
            System.err.println("Erro ao tentar deletar o arquivo " + caminhoRelativo + ": " + e.getMessage());
        }
    }
    
    public void removeOrfans(String pasta, Set<String> arquivosParaManter) {
        File directory = new File(pasta);
        if (directory.exists() && directory.isDirectory()) {
            File[] files = directory.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (!arquivosParaManter.contains(file.getName())) {
                        file.delete();
                    }
                }
            }
        }
    }

    public String findNameByURL(String url) {
        if (url == null || url.isEmpty()) {
            return null;
        }
        String[] parts = url.split("/");
        return parts.length > 0 ? parts[parts.length - 1] : null;
    }
}