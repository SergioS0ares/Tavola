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

import org.springframework.stereotype.Component;

@Component
public class UploadUtils {

    // Define os diretórios base planos
    private static final String BASE_DIR = "upl";
    private static final Path USUARIOS_DIR = Paths.get(BASE_DIR, "usuarios");
    private static final Path RESTAURANTES_DIR = Paths.get(BASE_DIR, "restaurantes");
    private static final Path CARDAPIOS_DIR = Paths.get(BASE_DIR, "cardapios");
    private static final Path GARCONS_DIR = Paths.get(BASE_DIR, "garcons");

    // Verifica se é uma string Base64 de imagem (genérica)
    public boolean isBase64Image(String input) {
        if (input == null || input.trim().isEmpty()) {
            return false;
        }
        // Aceita qualquer 'data:image/...' ou o antigo 'data:principal/...' por segurança
        return (input.startsWith("data:image/") || input.startsWith("data:principal/"))
               && input.contains(";base64,");
    }

    /**
     * Processa a string Base64, salva o arquivo na pasta de destino e retorna SÓ o nome do arquivo.
     */
    private String processBase64(String base64StringComCabecalho, Path pastaDestino) throws IOException {
        // Remove o cabeçalho (data:image/jpeg;base64, ou data:principal/...)
        String base64Data = base64StringComCabecalho.substring(base64StringComCabecalho.indexOf(",") + 1);
        byte[] decodedBytes = Base64.getDecoder().decode(base64Data);

        // Garante que a pasta de destino exista
        if (!Files.exists(pastaDestino)) {
            Files.createDirectories(pastaDestino);
        }

        // Determina a extensão (default jpg, mas tenta pegar do cabeçalho se possível)
        String extensao = "jpg";
        if (base64StringComCabecalho.contains("data:image/png")) {
            extensao = "png";
        } else if (base64StringComCabecalho.contains("data:image/gif")) {
            extensao = "gif";
        } // Adicione outros tipos se precisar

        String nomeArquivo = UUID.randomUUID().toString() + "." + extensao;
        Path filePath = pastaDestino.resolve(nomeArquivo);

        try (FileOutputStream fos = new FileOutputStream(filePath.toFile())) {
            fos.write(decodedBytes);
        }
        return nomeArquivo; // Retorna SÓ o nome do arquivo (uuid.ext)
    }

    /**
     * Processa uma lista de imagens (Base64 ou nomes de arquivo existentes) para a galeria do restaurante.
     * Retorna uma lista contendo APENAS os nomes dos arquivos salvos ou mantidos.
     */
    public List<String> processRestauranteGaleria(List<String> imagensInput) throws IOException {
        List<String> nomesArquivosProcessados = new ArrayList<>();

        for (String imagem : imagensInput) {
            if (isBase64Image(imagem)) {
                // Salva a nova imagem na pasta de restaurantes e adiciona o nome à lista
                String nomeArquivo = processBase64(imagem, RESTAURANTES_DIR);
                nomesArquivosProcessados.add(nomeArquivo);
            } else if (imagem != null && !imagem.isBlank() && !imagem.startsWith("data:")) {
                // Se não for Base64, assume que é um nome de arquivo existente e mantém na lista
                nomesArquivosProcessados.add(findNameByURL(imagem)); // Garante que só o nome seja adicionado
            }
            // Ignora strings vazias ou nulas
        }
        return nomesArquivosProcessados; // Retorna a lista de nomes de arquivo
    }

    /**
     * Processa uma imagem Base64 para perfil ou background de usuário.
     * Retorna APENAS o nome do arquivo salvo.
     */
    public String processUsuarioImagem(String imagemBase64) throws IOException {
        if (!isBase64Image(imagemBase64)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida.");
        }
        // Salva na pasta de usuários
        return processBase64(imagemBase64, USUARIOS_DIR); // Retorna SÓ o nome do arquivo
    }

    /**
     * Processa uma imagem Base64 para item de cardápio.
     * Retorna APENAS o nome do arquivo salvo.
     */
    public String processCardapioImagem(String imagemBase64) throws IOException {
        if (!isBase64Image(imagemBase64)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida.");
        }
        // Salva na pasta de cardápios
        return processBase64(imagemBase64, CARDAPIOS_DIR); // Retorna SÓ o nome do arquivo
    }
    
    public String processRestauranteImagemPrincipal(String imagemInput) throws IOException {
        if (isBase64Image(imagemInput)) {
            return processBase64(imagemInput, RESTAURANTES_DIR); // Retorna SÓ o nome do arquivo
        } else if (imagemInput != null && !imagemInput.isBlank() && !imagemInput.startsWith("data:")) {
            return findNameByURL(imagemInput); // Garante que só o nome seja retornado
        }
        
        if (imagemInput == null || imagemInput.isBlank()) {
            return null;
        }
        
        throw new IOException("A string fornecida parece ser Base64 mas é inválida.");
    }
    
    public String processGarcomImagem(String imagemInput) throws IOException {
        if (isBase64Image(imagemInput)) {
            // Se for uma nova imagem Base64, processa e salva
            return processBase64(imagemInput, GARCONS_DIR); // Salva na pasta de garçons
        } else if (imagemInput != null && !imagemInput.isBlank() && !imagemInput.startsWith("data:")) {
            // Se não for Base64, assume que é um nome de arquivo existente (URL antiga) e o mantém
            return findNameByURL(imagemInput); // Garante que só o nome seja retornado
        }
        
        // Se for nula ou vazia
        if (imagemInput == null || imagemInput.isBlank()) {
            return null;
        }
        
        // Se começar com "data:" mas não for válida
        throw new IOException("A string fornecida parece ser Base64 mas é inválida.");
    }

    /**
     * Reconstrói a URL relativa completa a partir do tipo e nome do arquivo.
     * Ex: /upl/usuarios/uuid-arquivo.jpg
     */
    public String construirUrlRelativa(String tipo, String nomeArquivo) {
        if (nomeArquivo == null || nomeArquivo.isBlank()) {
            return null;
        }
        if (nomeArquivo.startsWith("/upl/")) {
            return nomeArquivo;
        }
        
        String tipoUrl = tipo.toLowerCase();
        
        // --- ADIÇÃO AO MÉTODO ---
        // Garante "garcom" -> "garcons"
        if (tipoUrl.equals("garcom")) { 
            tipoUrl = "garcons";
        } 
        // --- FIM DA ADIÇÃO ---
        
        else if (!tipoUrl.endsWith("s")) {
            tipoUrl += "s"; // ex: usuario -> usuarios
        }
        
        return "/" + BASE_DIR + "/" + tipoUrl + "/" + nomeArquivo;
    }

    /**
     * Deleta um arquivo específico pela sua URL relativa (ex: /upl/usuarios/uuid.jpg).
     */
    public void deletarArquivoPeloCaminho(String caminhoRelativo) {
        if (caminhoRelativo == null || caminhoRelativo.isBlank() || !caminhoRelativo.startsWith("/" + BASE_DIR + "/")) {
            return; // Ignora caminhos inválidos
        }
        try {
            // Extrai o tipo e o nome do arquivo da URL
            // Ex: /upl/usuarios/uuid.jpg -> ["", "upl", "usuarios", "uuid.jpg"]
            String[] parts = caminhoRelativo.split("/");
            if (parts.length < 4) return; // Formato inválido

            String tipo = parts[2]; // "usuarios", "restaurantes", "cardapios"
            String nomeArquivo = parts[3];

            Path pastaFisica;
            switch (tipo) {
                case "usuarios": pastaFisica = USUARIOS_DIR; break;
                case "restaurantes": pastaFisica = RESTAURANTES_DIR; break;
                case "cardapios": pastaFisica = CARDAPIOS_DIR; break;
                case "garcons": pastaFisica = GARCONS_DIR; break;
                default:
                    System.err.println("Tipo desconhecido ao tentar deletar arquivo: " + tipo);
                    return;
            }

            Path pathArquivo = pastaFisica.resolve(nomeArquivo);
            Files.deleteIfExists(pathArquivo);
            System.out.println("Arquivo deletado (se existia): " + pathArquivo.toString());

        } catch (IOException e) {
            System.err.println("Erro ao tentar deletar o arquivo " + caminhoRelativo + ": " + e.getMessage());
        }
    }

    /**
     * Extrai apenas o nome do arquivo de uma URL completa ou parcial.
     */
    public String findNameByURL(String url) {
        if (url == null || url.isEmpty()) {
            return null;
        }
        // Se já não contém '/', assume que é só o nome
        if (!url.contains("/")) {
            return url;
        }
        String[] parts = url.split("/");
        return parts.length > 0 ? parts[parts.length - 1] : null;
    }
}