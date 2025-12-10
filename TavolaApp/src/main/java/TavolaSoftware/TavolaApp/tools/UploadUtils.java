package TavolaSoftware.TavolaApp.tools;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.UUID;
import jakarta.annotation.PostConstruct; // Certifique-se de importar isso (Java 17/21)

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class UploadUtils {

    // Injetamos o valor do application.properties. 
    // Se não houver, usa "./upl" como padrão (fallback).
    @Value("${app.upload.dir:./upl}")
    private String baseDirConfig;

    // Removemos o 'static final' para poderem ser definidos após a injeção
    private Path BASE_DIR_PATH;
    private Path USUARIOS_DIR;
    private Path RESTAURANTES_DIR;
    private Path CARDAPIOS_DIR;
    private Path GARCONS_DIR;

    // Inicializa os caminhos logo após o Spring injetar o valor de baseDirConfig
    @PostConstruct
    public void init() {
        this.BASE_DIR_PATH = Paths.get(baseDirConfig).toAbsolutePath().normalize();
        this.USUARIOS_DIR = BASE_DIR_PATH.resolve("usuarios");
        this.RESTAURANTES_DIR = BASE_DIR_PATH.resolve("restaurantes");
        this.CARDAPIOS_DIR = BASE_DIR_PATH.resolve("cardapios");
        this.GARCONS_DIR = BASE_DIR_PATH.resolve("garcons");
        
        // Criação preventiva dos diretórios
        try {
            Files.createDirectories(USUARIOS_DIR);
            Files.createDirectories(RESTAURANTES_DIR);
            Files.createDirectories(CARDAPIOS_DIR);
            Files.createDirectories(GARCONS_DIR);
        } catch (IOException e) {
            throw new RuntimeException("Não foi possível criar os diretórios de upload", e);
        }
    }

    // Verifica se é uma string Base64 de imagem (genérica)
    public boolean isBase64Image(String input) {
        if (input == null || input.trim().isEmpty()) {
            return false;
        }
        return (input.startsWith("data:image/") || input.startsWith("data:principal/"))
               && input.contains(";base64,");
    }

    private String processBase64(String base64StringComCabecalho, Path pastaDestino) throws IOException {
        String base64Data = base64StringComCabecalho.substring(base64StringComCabecalho.indexOf(",") + 1);
        byte[] decodedBytes = Base64.getDecoder().decode(base64Data);

        // A pasta já é garantida no init(), mas verificação dupla não faz mal
        if (!Files.exists(pastaDestino)) {
            Files.createDirectories(pastaDestino);
        }

        String extensao = "jpg";
        if (base64StringComCabecalho.contains("data:image/png")) {
            extensao = "png";
        } else if (base64StringComCabecalho.contains("data:image/gif")) {
            extensao = "gif";
        }

        String nomeArquivo = UUID.randomUUID().toString() + "." + extensao;
        Path filePath = pastaDestino.resolve(nomeArquivo);

        try (FileOutputStream fos = new FileOutputStream(filePath.toFile())) {
            fos.write(decodedBytes);
        }
        return nomeArquivo;
    }

    public List<String> processRestauranteGaleria(List<String> imagensInput) throws IOException {
        List<String> urlsProcessadas = new ArrayList<>();
        for (String imagem : imagensInput) {
            if (isBase64Image(imagem)) {
                String nomeArquivo = processBase64(imagem, RESTAURANTES_DIR);
                urlsProcessadas.add(construirUrlRelativa("restaurantes", nomeArquivo));
            } else if (imagem != null && !imagem.isBlank() && !imagem.startsWith("data:")) {
                String nomeArquivo = findNameByURL(imagem);
                urlsProcessadas.add(construirUrlRelativa("restaurantes", nomeArquivo));
            }
        }
        return urlsProcessadas;
    }

    public String processUsuarioImagem(String imagemBase64) throws IOException {
        if (!isBase64Image(imagemBase64)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida.");
        }
        String nomeArquivo = processBase64(imagemBase64, USUARIOS_DIR);
        return construirUrlRelativa("usuarios", nomeArquivo);
    }

    public String processCardapioImagem(String imagemBase64) throws IOException {
        if (!isBase64Image(imagemBase64)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida.");
        }
        String nomeArquivo = processBase64(imagemBase64, CARDAPIOS_DIR);
        return construirUrlRelativa("cardapios", nomeArquivo);
    }
    
    public String processRestauranteImagemPrincipal(String imagemInput) throws IOException {
        if (isBase64Image(imagemInput)) {
            String nomeArquivo = processBase64(imagemInput, RESTAURANTES_DIR);
            return construirUrlRelativa("restaurantes", nomeArquivo);
        } else if (imagemInput != null && !imagemInput.isBlank() && !imagemInput.startsWith("data:")) {
            String nomeArquivo = findNameByURL(imagemInput); 
            return construirUrlRelativa("restaurantes", nomeArquivo);
        }
        if (imagemInput == null || imagemInput.isBlank()) return null;
        throw new IOException("A string fornecida parece ser Base64 mas é inválida.");
    }
    
    public String processGarcomImagem(String imagemInput) throws IOException {
        if (isBase64Image(imagemInput)) {
            String nomeArquivo = processBase64(imagemInput, GARCONS_DIR);
            return construirUrlRelativa("garcons", nomeArquivo);
        } else if (imagemInput != null && !imagemInput.isBlank() && !imagemInput.startsWith("data:")) {
            String nomeArquivo = findNameByURL(imagemInput);
            return construirUrlRelativa("garcons", nomeArquivo); 
        }
        if (imagemInput == null || imagemInput.isBlank()) return null;
        throw new IOException("A string fornecida parece ser Base64 mas é inválida.");
    }

    /**
     * ATENÇÃO: Alterado para retornar o caminho relativo limpo que o Nginx/Spring vai servir.
     * O prefixo "/upl" deve bater com a configuração do WebConfig ou Nginx.
     */
    public String construirUrlRelativa(String tipo, String nomeArquivo) {
        if (nomeArquivo == null || nomeArquivo.isBlank()) {
            return null;
        }
        
        // Remove caminhos absolutos se houverem, mantendo apenas o nome do arquivo
        String nomeLimpo = Paths.get(nomeArquivo).getFileName().toString();

        String tipoUrl = tipo.toLowerCase();
        if (tipoUrl.equals("garcom")) { tipoUrl = "garcons"; } 
        else if (!tipoUrl.endsWith("s")) { tipoUrl += "s"; }
        
        // Retorna ex: /upl/usuarios/arquivo.jpg
        // Nota: Não usamos BASE_DIR_PATH aqui pois isso é URL WEB, não caminho de disco.
        // Assumimos que a rota web de uploads é "/upl"
        return "/upl/" + tipoUrl + "/" + nomeLimpo;
    }

    public void deletarArquivoPeloCaminho(String caminhoRelativo) {
        if (caminhoRelativo == null || caminhoRelativo.isBlank()) return;
        
        try {
            // Espera algo como /upl/usuarios/arquivo.jpg
            String[] parts = caminhoRelativo.split("/");
            // parts[0] = "", parts[1] = "upl", parts[2] = "usuarios", parts[3] = "arquivo.jpg"
            if (parts.length < 4) return;

            String tipo = parts[2];
            String nomeArquivo = parts[3];

            Path pastaFisica;
            switch (tipo) {
                case "usuarios": pastaFisica = USUARIOS_DIR; break;
                case "restaurantes": pastaFisica = RESTAURANTES_DIR; break;
                case "cardapios": pastaFisica = CARDAPIOS_DIR; break;
                case "garcons": pastaFisica = GARCONS_DIR; break;
                default: return;
            }

            Path pathArquivo = pastaFisica.resolve(nomeArquivo);
            Files.deleteIfExists(pathArquivo);
            System.out.println("Arquivo deletado: " + pathArquivo.toString());
        } catch (IOException e) {
            System.err.println("Erro ao deletar: " + e.getMessage());
        }
    }

    public String findNameByURL(String url) {
        if (url == null || url.isEmpty()) return null;
        if (!url.contains("/")) return url;
        String[] parts = url.split("/");
        return parts.length > 0 ? parts[parts.length - 1] : null;
    }
}