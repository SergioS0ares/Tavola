package TavolaSoftware.TavolaApp.tools;

import org.springframework.stereotype.Component;
import TavolaSoftware.TavolaApp.REST.model.Mesas;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Component
public class UploadUtils {

    public boolean isPrincipalBase64Image(String input) {
        if (input == null || input.trim().isEmpty()) {
            System.out.println("String para verificação de 'principal' base64 está nula ou vazia.");
            return false;
        }
        // Verifica se a string começa com "data:prncipal/" e contém ";base64,"
        boolean isValid = input.startsWith("data:prncipal/") && input.contains(";base64,");
        if (isValid) {
            System.out.println("Imagem principal base64 válida detectada. Tamanho: " + input.length() + " bytes");
        } else {
            // Adicionado para depuração, pode ser removido ou ajustado conforme necessidade
            System.out.println("String não é uma imagem principal base64 válida: " + input.substring(0, Math.min(input.length(), 50)) + "...");
        }
        return isValid;
    }
    
    public boolean isBase64Image(String input) {
        if (input == null || input.trim().isEmpty()) {
            System.out.println("Base64 está nulo ou vazio");
            return false;
        }
        boolean isValid = input.startsWith("data:image/") && input.contains(";base64,");
        if (isValid) {
            System.out.println("Imagem base64 válida. Tamanho: " + input.length() + " bytes");
        } else {
            System.out.println("Imagem base64 inválida");
        }
        return isValid;
    }

    public String processBase64(String base64StringComCabecalho, String pasta, String extensao, String tipoDeDadoPrefixo) throws IOException {
        // Validação básica do prefixo para evitar erros na regex e garantir segurança
        if (tipoDeDadoPrefixo == null || tipoDeDadoPrefixo.trim().isEmpty() || !tipoDeDadoPrefixo.matches("^[a-zA-Z0-9]+$")) {
            System.out.println("Prefixo do tipo de dado inválido fornecido: " + tipoDeDadoPrefixo);
            throw new IllegalArgumentException("Prefixo do tipo de dado inválido: " + tipoDeDadoPrefixo);
        }

        // Remove o cabeçalho específico do tipo de dado para obter apenas os dados Base64
        String base64Data = base64StringComCabecalho.replaceFirst("^data:" + tipoDeDadoPrefixo + "/[^;]+;base64,", "");
        byte[] decodedBytes = Base64.getDecoder().decode(base64Data);

        Path pastaPath = Paths.get(pasta);
        if (!Files.exists(pastaPath)) {
            Files.createDirectories(pastaPath); // Cria a pasta se não existir
        }

        // Gera um nome de arquivo único usando UUID
        String nomeArquivo = UUID.randomUUID().toString() + "." + extensao;

        Path filePath = pastaPath.resolve(nomeArquivo);

        try (FileOutputStream fos = new FileOutputStream(filePath.toFile())) {
            fos.write(decodedBytes); // Salva os bytes decodificados no arquivo
        }
        System.out.println("Arquivo salvo com sucesso em: " + filePath.toString());
        return nomeArquivo; // Retorna o nome do arquivo gerado
    }

    public List<String> processRestauranteImagens(List<String> imagens, UUID restauranteId) throws IOException {
        List<String> caminhosImagens = new ArrayList<>();
        String pasta = "upl/restaurantes/" + restauranteId.toString();
        
        for (String imagem : imagens) {
            if (isPrincipalBase64Image(imagem)) { // Primeiro, verifica se é a imagem principal
                System.out.println("Processando imagem principal para o restaurante: " + restauranteId);
                // Chama o processBase64 modificado, passando "prncipal" como o tipo de dado
                String nomeArquivo = processBase64(imagem, pasta, "jpg", "prncipal");
                caminhosImagens.add("/upl/restaurantes/" + restauranteId + "/" + nomeArquivo);
            } else if (isBase64Image(imagem)) { // Em seguida, verifica se é uma imagem Base64 padrão
                System.out.println("Processando imagem de galeria para o restaurante: " + restauranteId);
                // Chama o processBase64 modificado, passando "image" como o tipo de dado
                String nomeArquivo = processBase64(imagem, pasta, "jpg", "image");
                caminhosImagens.add("/upl/restaurantes/" + restauranteId + "/" + nomeArquivo);
            } else if (imagem != null && !imagem.isEmpty()) {
                // Se não for base64 (principal ou imagem), assume que já é um caminho válido
                System.out.println("Adicionando caminho de imagem existente: " + imagem);
                caminhosImagens.add(imagem);
            } else {
                System.out.println("Item nulo ou vazio na lista de imagens ignorado.");
            }
        }
        
        return caminhosImagens;
    }

    public String processUsuarioImagem(String imagem, UUID usuarioId, String tipo) throws IOException {
        if (!isBase64Image(imagem)) { // Validação original mantida
            throw new IOException("A string fornecida não é uma imagem Base64 válida (deve começar com data:image/)");
        }

        String pasta = "upl/usuarios/" + usuarioId.toString();
        // Chama o novo processBase64 com o tipo "image"
        String nomeArquivo = processBase64(imagem, pasta, "jpg", "image");
        return "/upl/usuarios/" + usuarioId + "/" + nomeArquivo;
    }

    public List<String> processMesas(Mesas mesa, UUID restauranteId) throws IOException {
        List<String> caminhosImagens = new ArrayList<>();
        String pasta = "upl/mesas/" + restauranteId + "/" + mesa.getIdImagem();
        
        for (String imagem : mesa.getImagem()) {
            if (isBase64Image(imagem)) {
            	String nomeArquivo = processBase64(imagem, pasta, "jpg", "image"); 
            	caminhosImagens.add("/upl/mesas/" + restauranteId + "/" + mesa.getIdImagem() + "/" + nomeArquivo);
            } else if (imagem != null && !imagem.isEmpty()) {
                // Se não for base64, assume que já é um caminho válido
                caminhosImagens.add(imagem);
            }
        }
        
        return caminhosImagens;
    }

    public String processCardapioImagem(String imagem, UUID restauranteId, UUID cardapioId) throws IOException {
        if (!isBase64Image(imagem)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida");
        }

        String pasta = "upl/cardapios/" + restauranteId.toString();
        String nomeArquivo = processBase64(imagem, pasta, "jpg", "image");
        return "/upl/cardapios/" + restauranteId + "/" + nomeArquivo;
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