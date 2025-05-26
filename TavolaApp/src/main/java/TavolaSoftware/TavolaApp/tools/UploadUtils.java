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

    /**
     * Verifica se a string é uma imagem em Base64 válida.
     *
     * @param input String contendo o data URI (ex.: data:image/jpeg;base64,...)
     * @return true se for uma imagem Base64 válida, false caso contrário
     */
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

    /**
     * Método genérico para processar imagens em Base64.
     *
     * @param base64String String Base64 com cabeçalho
     * @param pasta Pasta onde a imagem será salva
     * @param extensao Extensão do arquivo
     * @return Nome do arquivo gerado
     * @throws IOException Se houver erro ao salvar o arquivo
     */
    public String processBase64(String base64String, String pasta, String extensao) throws IOException {
        String base64Data = base64String.replaceFirst("^data:image/[^;]+;base64,", "");
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

    /**
     * Processa imagens do restaurante.
     *
     * @param imagens Lista de imagens em Base64
     * @param restauranteId ID do restaurante
     * @return Lista de caminhos das imagens processadas
     * @throws IOException Se houver erro ao processar as imagens
     */
    public List<String> processRestauranteImagens(List<String> imagens, UUID restauranteId) throws IOException {
        List<String> caminhosImagens = new ArrayList<>();
        String pasta = "upl/restaurantes/" + restauranteId.toString();
        
        for (String imagem : imagens) {
            if (isBase64Image(imagem)) {
                String nomeArquivo = processBase64(imagem, pasta, "jpg");
                caminhosImagens.add("/upl/restaurantes/" + restauranteId + "/" + nomeArquivo);
            } else if (imagem != null && !imagem.isEmpty()) {
                // Se não for base64, assume que já é um caminho válido
                caminhosImagens.add(imagem);
            }
        }
        
        return caminhosImagens;
    }

    /**
     * Processa imagem do usuário (cliente).
     *
     * @param imagem String Base64 da imagem
     * @param usuarioId ID do usuário
     * @param tipo Tipo da imagem (perfil/background)
     * @return Caminho da imagem processada
     * @throws IOException Se houver erro ao processar a imagem
     */
    public String processUsuarioImagem(String imagem, UUID usuarioId, String tipo) throws IOException {
        if (!isBase64Image(imagem)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida");
        }

        String pasta = "upl/usuarios/" + usuarioId.toString();
        String nomeArquivo = processBase64(imagem, pasta, "jpg");
        return "/upl/usuarios/" + usuarioId + "/" + nomeArquivo;
    }

    /**
     * Processa imagens das mesas.
     *
     * @param mesa Objeto Mesa com as imagens
     * @param restauranteId ID do restaurante
     * @return Lista de caminhos das imagens processadas
     * @throws IOException Se houver erro ao processar as imagens
     */
    public List<String> processMesas(Mesas mesa, UUID restauranteId) throws IOException {
        List<String> caminhosImagens = new ArrayList<>();
        String pasta = "upl/mesas/" + restauranteId + "/" + mesa.getIdImagem();
        
        for (String imagem : mesa.getImagem()) {
            if (isBase64Image(imagem)) {
                String nomeArquivo = processBase64(imagem, pasta, "jpg");
                caminhosImagens.add("/upl/mesas/" + restauranteId + "/" + mesa.getIdImagem() + "/" + nomeArquivo);
            } else if (imagem != null && !imagem.isEmpty()) {
                // Se não for base64, assume que já é um caminho válido
                caminhosImagens.add(imagem);
            }
        }
        
        return caminhosImagens;
    }

    /**
     * Processa imagem do cardápio.
     *
     * @param imagem String Base64 da imagem
     * @param restauranteId ID do restaurante
     * @param cardapioId ID do cardápio
     * @return Caminho da imagem processada
     * @throws IOException Se houver erro ao processar a imagem
     */
    public String processCardapioImagem(String imagem, UUID restauranteId, UUID cardapioId) throws IOException {
        if (!isBase64Image(imagem)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida");
        }

        String pasta = "upl/cardapios/" + restauranteId.toString();
        String nomeArquivo = processBase64(imagem, pasta, "jpg");
        return "/upl/cardapios/" + restauranteId + "/" + nomeArquivo;
    }

    /**
     * Remove arquivos órfãos em uma pasta, exceto os especificados.
     *
     * @param pasta Pasta onde estão os arquivos
     * @param arquivosParaManter Conjunto de nomes de arquivos a serem mantidos
     */
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

    /**
     * Extrai o nome do arquivo a partir de uma URL.
     *
     * @param url URL do arquivo
     * @return Nome do arquivo ou null se a URL for inválida
     */
    public String findNameByURL(String url) {
        if (url == null || url.isEmpty()) {
            return null;
        }
        String[] parts = url.split("/");
        return parts.length > 0 ? parts[parts.length - 1] : null;
    }
}