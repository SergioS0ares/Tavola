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
	
    private static final String UPLOAD_DIR = "/app/uploads";


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

    private String processBase64(String base64StringComCabecalho, Path pastaPath, String extensao, String tipoDeDadoPrefixo) throws IOException {
        String base64Data = base64StringComCabecalho.replaceFirst("^data:" + tipoDeDadoPrefixo + "/[^;]+;base64,", "");
        byte[] decodedBytes = Base64.getDecoder().decode(base64Data);

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
        
        // <<< MUDANÇA 2: Usamos o UPLOAD_DIR para montar o caminho de salvamento.
        Path pasta = Path.of(UPLOAD_DIR, "restaurantes", restauranteId.toString());
        
        for (String imagem : imagensInput) {
            if (isPrincipalBase64Image(imagem)) {
                String nomeArquivo = processBase64(imagem, pasta, "jpg", "principal");
                // A URL retornada para o frontend continua a mesma! O frontend não precisa saber onde salvamos.
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

    public String processUsuarioImagem(String imagem, UUID usuarioId) throws IOException {
        if (!isBase64Image(imagem)) { 
            throw new IOException("A string fornecida não é uma imagem Base64 válida (deve começar com data:image/)");
        }

        // <<< MUDANÇA 3: Usamos o UPLOAD_DIR para montar o caminho de salvamento.
        Path pasta = Path.of(UPLOAD_DIR, "usuarios", usuarioId.toString());
        String nomeArquivo = processBase64(imagem, pasta, "jpg", "image");
        // A URL retornada para o frontend continua a mesma!
        return "/upl/usuarios/" + usuarioId + "/" + nomeArquivo;
    }

    public String processCardapioImagem(String imagem, UUID restauranteId, UUID cardapioId) throws IOException {
        if (!isBase64Image(imagem)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida");
        }
        // <<< MUDANÇA 4: Usamos o UPLOAD_DIR para montar o caminho de salvamento.
        Path pasta = Path.of(UPLOAD_DIR, "cardapios", restauranteId.toString());
        String nomeArquivo = processBase64(imagem, pasta, "jpg", "image");
        // A URL retornada para o frontend continua a mesma!
        return "/upl/cardapios/" + restauranteId + "/" + nomeArquivo;
    }

    public void deletarPasta(String caminhoPasta) {
        Path diretorio = Path.of(UPLOAD_DIR, caminhoPasta);
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
    
    public void deletarArquivoPeloCaminho(String caminhoRelativo) {
        if (caminhoRelativo == null || caminhoRelativo.isBlank()) {
            return;
        }
        try {
            String caminhoNoDisco = caminhoRelativo.replaceFirst("/upl", UPLOAD_DIR);
            Path pathArquivo = Paths.get(caminhoNoDisco);
            
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