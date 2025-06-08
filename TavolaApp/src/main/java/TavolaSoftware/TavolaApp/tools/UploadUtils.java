package TavolaSoftware.TavolaApp.tools;

import org.springframework.stereotype.Component;

import TavolaSoftware.TavolaApp.REST.model.Ambiente;

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
            System.out.println("String para verificação de 'principal' base64 está nula ou vazia.");
            return false;
        }
        // CORREÇÃO: "data:prncipal/" para "data:principal/"
        boolean isValid = input.startsWith("data:principal/") && input.contains(";base64,"); //
        if (isValid) {
            System.out.println("Imagem principal base64 válida detectada. Tamanho: " + input.length() + " bytes");
        } else {
            System.out.println("String não é uma imagem principal base64 válida: " + input.substring(0, Math.min(input.length(), 50)) + "...");
        }
        return isValid;
    }
    
    public boolean isBase64Image(String input) {
        if (input == null || input.trim().isEmpty()) {
            System.out.println("Base64 está nulo ou vazio");
            return false;
        }
        boolean isValid = input.startsWith("data:image/") && input.contains(";base64,"); //
        if (isValid) {
            System.out.println("Imagem base64 válida. Tamanho: " + input.length() + " bytes");
        } else {
            System.out.println("Imagem base64 inválida");
        }
        return isValid;
    }

    public String processBase64(String base64StringComCabecalho, String pasta, String extensao, String tipoDeDadoPrefixo) throws IOException {
        if (tipoDeDadoPrefixo == null || tipoDeDadoPrefixo.trim().isEmpty() || !tipoDeDadoPrefixo.matches("^[a-zA-Z0-9]+$")) {
            System.out.println("Prefixo do tipo de dado inválido fornecido: " + tipoDeDadoPrefixo);
            throw new IllegalArgumentException("Prefixo do tipo de dado inválido: " + tipoDeDadoPrefixo);
        }

        String base64Data = base64StringComCabecalho.replaceFirst("^data:" + tipoDeDadoPrefixo + "/[^;]+;base64,", ""); //
        byte[] decodedBytes = Base64.getDecoder().decode(base64Data);

        Path pastaPath = Paths.get(pasta);
        if (!Files.exists(pastaPath)) {
            Files.createDirectories(pastaPath); 
        }

        String nomeArquivo = UUID.randomUUID().toString() + "." + extensao; //
        Path filePath = pastaPath.resolve(nomeArquivo);

        try (FileOutputStream fos = new FileOutputStream(filePath.toFile())) {
            fos.write(decodedBytes); 
        }
        System.out.println("Arquivo salvo com sucesso em: " + filePath.toString());
        return nomeArquivo; 
    }

    public List<String> processRestauranteImagens(List<String> imagensInput, UUID restauranteId) throws IOException {
        List<String> caminhosProcessados = new ArrayList<>();
        String caminhoPrincipal = null;
        List<String> caminhosOutras = new ArrayList<>();
        
        String pasta = "upl/restaurantes/" + restauranteId.toString();
        
        for (String imagem : imagensInput) { //
            if (isPrincipalBase64Image(imagem)) { 
                System.out.println("Processando imagem principal para o restaurante: " + restauranteId);
                // CORREÇÃO: "prncipal" para "principal" no tipoDeDadoPrefixo
                String nomeArquivo = processBase64(imagem, pasta, "jpg", "principal"); //
                caminhoPrincipal = "/upl/restaurantes/" + restauranteId + "/" + nomeArquivo; //
            } else if (isBase64Image(imagem)) { 
                System.out.println("Processando imagem de galeria para o restaurante: " + restauranteId);
                String nomeArquivo = processBase64(imagem, pasta, "jpg", "image"); //
                caminhosOutras.add("/upl/restaurantes/" + restauranteId + "/" + nomeArquivo); //
            } else if (imagem != null && !imagem.isEmpty()) {
                System.out.println("Adicionando caminho de imagem existente (não principal): " + imagem);
                caminhosOutras.add(imagem); //
            } else {
                System.out.println("Item nulo ou vazio na lista de imagens ignorado.");
            }
        }
        
        if (caminhoPrincipal != null) {
            caminhosProcessados.add(caminhoPrincipal);
        }
        caminhosProcessados.addAll(caminhosOutras);
        
        return caminhosProcessados;
    }

    public String processUsuarioImagem(String imagem, UUID usuarioId, String tipo) throws IOException {
        if (!isBase64Image(imagem)) { 
            throw new IOException("A string fornecida não é uma imagem Base64 válida (deve começar com data:image/)");
        }

        String pasta = "upl/usuarios/" + usuarioId.toString();
        String nomeArquivo = processBase64(imagem, pasta, "jpg", "image"); //
        return "/upl/usuarios/" + usuarioId + "/" + nomeArquivo; //
    }

    /**
     * Processa uma lista de imagens (Base64 ou URLs existentes) para um Ambiente.
     * Salva as novas imagens em disco e retorna a lista de URLs atualizada.
     * @param ambiente O ambiente cujas imagens estão sendo processadas.
     * @param restauranteId O ID do restaurante ao qual o ambiente pertence.
     * @return Uma lista de strings com os caminhos relativos para as imagens.
     * @throws IOException Se ocorrer um erro ao salvar os arquivos.
     */
    public List<String> processAmbienteImagens(Ambiente ambiente, UUID restauranteId) throws IOException { // <<< MÉTODO RENOMEADO E ATUALIZADO
        List<String> caminhosImagens = new ArrayList<>();
        // Define uma estrutura de pasta clara para as imagens do ambiente
        String pasta = "upl/ambientes/" + restauranteId + "/" + ambiente.getId(); // <<< CAMINHO ATUALIZADO
        
        for (String imagem : ambiente.getImagens()) { // Itera sobre as imagens do ambiente
            if (isBase64Image(imagem)) {
            	String nomeArquivo = processBase64(imagem, pasta, "jpg", "image");
                // Adiciona o caminho completo e padronizado
            	caminhosImagens.add("/upl/ambientes/" + restauranteId + "/" + ambiente.getId() + "/" + nomeArquivo);
            } else if (imagem != null && !imagem.isEmpty()) {
                // Mantém a URL da imagem se ela já for um caminho e não um Base64
                caminhosImagens.add(imagem);
            }
        }
        
        return caminhosImagens;
    }

    public String processCardapioImagem(String imagem, UUID restauranteId, UUID cardapioId) throws IOException {
        if (!isBase64Image(imagem)) {
            throw new IOException("A string fornecida não é uma imagem Base64 válida");
        }

        String pasta = "upl/cardapios/" + restauranteId.toString(); //
        String nomeArquivo = processBase64(imagem, pasta, "jpg", "image"); //
        return "/upl/cardapios/" + restauranteId + "/" + nomeArquivo; //
    }

    /**
     * Deleta um diretório e todo o seu conteúdo recursivamente.
     * @param caminhoPasta O caminho para a pasta a ser deletada.
     */
    public void deletarPasta(String caminhoPasta) {
        Path diretorio = Paths.get(caminhoPasta);
        if (Files.exists(diretorio)) {
            try {
                Files.walk(diretorio)
                    .sorted(Comparator.reverseOrder())
                    .map(Path::toFile)
                    .forEach(File::delete);
                System.out.println("Pasta deletada com sucesso: " + caminhoPasta);
            } catch (IOException e) {
                System.err.println("Erro ao deletar a pasta " + caminhoPasta + ": " + e.getMessage());
            }
        }
    }
    
    public void removeOrfans(String pasta, Set<String> arquivosParaManter) {
        File directory = new File(pasta);
        if (directory.exists() && directory.isDirectory()) {
            File[] files = directory.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (!arquivosParaManter.contains(file.getName())) {
                        file.delete(); //
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
        return parts.length > 0 ? parts[parts.length - 1] : null; //
    }
}