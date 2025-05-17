package TavolaSoftware.TavolaApp.tools;

import TavolaSoftware.TavolaApp.REST.model.Mesas;
import org.springframework.stereotype.Component;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class UploadUtils {

    public String processBase64(String base64, String pastaDestino, String extensao) throws IOException {
        if (base64 == null || !base64.startsWith("data:image")) {
            throw new IllegalArgumentException("Formato base64 inválido ou ausente");
        }

        try {
            String[] partes = base64.split(",");
            if (partes.length != 2) {
                throw new IllegalArgumentException("Formato base64 inválido: falta a parte de dados após a vírgula");
            }

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
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Erro ao processar base64: " + e.getMessage());
        } catch (IOException e) {
            throw new IOException("Erro ao salvar imagem: " + e.getMessage());
        }
    }
    
    public static List<String> processBase64(List<String> base64List, String pastaDestino, String extensao) throws IOException {
        if (base64List == null || base64List.isEmpty()) {
            return new ArrayList<>();
        }

        List<String> caminhosConvertidos = new ArrayList<>();
        UploadUtils utils = new UploadUtils();

        for (String base64 : base64List) {
            if (utils.isBase64Image(base64)) {
                String nome = utils.processBase64(base64, pastaDestino, extensao);
                caminhosConvertidos.add("/" + pastaDestino + "/" + nome);
            }
        }

        return caminhosConvertidos;
    }

    public List<String> processBase64(List<String> base64List, String tipo) throws IOException {
        String pastaDestino = "upl/" + tipo;
        return processBase64(base64List, pastaDestino, "jpg");
    }

    public void removeOrfans(String pasta, Set<String> nomesEmUso) {
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

    public long countImages(String pasta) {
        File dir = new File(pasta);
        if (!dir.exists() || !dir.isDirectory()) return 0;

        File[] arquivos = dir.listFiles((d, name) -> name.endsWith(".jpg") || name.endsWith(".png") || name.endsWith(".jpeg"));
        return arquivos != null ? arquivos.length : 0;
    }

    public long totalInBytes(String pasta) {
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
        if (base64 == null || base64.isEmpty()) {
            System.err.println("Base64 está nulo ou vazio");
            return false;
        }
        
        // Se já é um caminho de arquivo, não é base64
        if (base64.startsWith("/upl/")) {
            System.out.println("String é um caminho de arquivo, não base64");
            return false;
        }
        
        try {
            // Verifica se começa com o cabeçalho correto
            if (!base64.startsWith("data:image")) {
                System.err.println("Base64 não começa com data:image. Valor recebido: " + base64.substring(0, Math.min(50, base64.length())) + "...");
                return false;
            }

            // Verifica se tem a parte de dados após a vírgula
            String[] partes = base64.split(",");
            if (partes.length != 2) {
                System.err.println("Base64 não contém a parte de dados após a vírgula. Partes encontradas: " + partes.length);
                return false;
            }

            // Tenta decodificar a parte base64
            String dadosBase64 = partes[1];
            if (dadosBase64.isEmpty()) {
                System.err.println("Parte de dados do base64 está vazia");
                return false;
            }

            try {
                byte[] dados = Base64.getDecoder().decode(dadosBase64);
                if (dados.length == 0) {
                    System.err.println("Dados decodificados estão vazios");
                    return false;
                }
                
                // Tenta ler como imagem
                BufferedImage imagem = ImageIO.read(new java.io.ByteArrayInputStream(dados));
                if (imagem == null) {
                    System.err.println("Não foi possível ler os dados como imagem");
                    return false;
                }
                
                System.out.println("Imagem base64 válida. Tamanho: " + dados.length + " bytes");
                return true;
            } catch (IllegalArgumentException e) {
                System.err.println("Erro ao decodificar base64: " + e.getMessage());
                return false;
            }
        } catch (Exception e) {
            System.err.println("Erro ao validar imagem base64: " + e.getMessage());
            return false;
        }
    }

    public String findNameByURL(String url) {
        if (url == null || url.isBlank()) return null;
        return Paths.get(url).getFileName().toString();
    }

    public void processImageFromMesas(List<Mesas> mesas, UUID restauranteId) {
        for (Mesas mesa : mesas) {
            if (mesa.getIdImagem() == null) {
                mesa.setIdImagem(UUID.randomUUID());
            }
            List<String> imagensConvertidas = new ArrayList<>();
            for (String imagem : mesa.getImagem()) {
                if (isBase64Image(imagem)) {
                    String pasta = "upl/mesas/" + restauranteId + "/" + mesa.getIdImagem();
                    try {
                        String nome = processBase64(imagem, pasta, "jpg");
                        imagensConvertidas.add("/upl/mesas/" + restauranteId + "/" + mesa.getIdImagem() + "/" + nome);
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

    public void processMesas(Mesas mesa, UUID restauranteId) {
        System.out.println("Processando imagens para mesa: " + mesa.getNome());
        
        if (mesa.getImagem() == null) {
            System.out.println("Lista de imagens é nula, inicializando lista vazia");
            mesa.setImagem(new ArrayList<>());
            return;
        }
        
        if (mesa.getImagem().isEmpty()) {
            System.out.println("Lista de imagens está vazia, inicializando lista vazia");
            mesa.setImagem(new ArrayList<>());
            return;
        }

        if (mesa.getIdImagem() == null) {
            mesa.setIdImagem(UUID.randomUUID());
        }

        List<String> imagensConvertidas = new ArrayList<>();
        for (int i = 0; i < mesa.getImagem().size(); i++) {
            String imagem = mesa.getImagem().get(i);
            System.out.println("Processando imagem " + (i + 1) + " de " + mesa.getImagem().size());
            
            try {
                if (isBase64Image(imagem)) {
                    System.out.println("Imagem " + (i + 1) + " é base64 válido");
                    String pasta = "upl/mesas/" + restauranteId + "/" + mesa.getIdImagem();
                    String nome = processBase64(imagem, pasta, "jpg");
                    imagensConvertidas.add("/upl/mesas/" + restauranteId + "/" + mesa.getIdImagem() + "/" + nome);
                } else {
                    System.out.println("Imagem " + (i + 1) + " é um caminho de arquivo, mantendo como está");
                    imagensConvertidas.add(imagem);
                }
            } catch (Exception e) {
                System.err.println("Erro ao processar imagem " + (i + 1) + " da mesa " + mesa.getNome() + ": " + e.getMessage());
                throw new RuntimeException("Erro ao processar imagem da mesa: " + mesa.getNome(), e);
            }
        }
        mesa.setImagem(imagensConvertidas);
    }

    public void processUsuarioImagem(String base64, UUID usuarioId, String tipo) throws IOException {
        if (!isBase64Image(base64)) {
            throw new IllegalArgumentException("Formato de imagem inválido");
        }

        String nomePadrao = tipo.equalsIgnoreCase("background") ? "background.jpg" : "perfil.jpg";
        String pasta = "upl/usuarios/" + usuarioId;
        String nome = processBase64(base64, pasta, "jpg");
        
        // Remove a imagem antiga se existir
        Path caminhoAntigo = Paths.get(pasta, nomePadrao);
        if (Files.exists(caminhoAntigo)) {
            Files.delete(caminhoAntigo);
        }
        
        // Move a nova imagem para o nome padrão
        Path caminhoNovo = Paths.get(pasta, nome);
        Files.move(caminhoNovo, caminhoAntigo, StandardCopyOption.REPLACE_EXISTING);
    }

    public void processRestauranteImagens(List<String> imagens, UUID restauranteId) throws IOException {
        if (imagens == null || imagens.isEmpty()) {
            return;
        }

        // Limita a 5 imagens
        if (imagens.size() > 5) {
            throw new IllegalArgumentException("Máximo de 5 imagens permitidas para o restaurante");
        }

        String pasta = "upl/restaurantes/" + restauranteId;
        List<String> imagensConvertidas = new ArrayList<>();

        for (String imagem : imagens) {
            if (isBase64Image(imagem)) {
                String nome = processBase64(imagem, pasta, "jpg");
                imagensConvertidas.add("/upl/restaurantes/" + restauranteId + "/" + nome);
            } else {
                imagensConvertidas.add(imagem);
            }
        }

        // Remove imagens órfãs
        Set<String> nomesAtivos = imagensConvertidas.stream()
            .map(this::findNameByURL)
            .collect(Collectors.toSet());
        removeOrfans(pasta, nomesAtivos);
    }

    public void processCardapioImagem(String base64, UUID restauranteId, UUID cardapioId) throws IOException {
        if (!isBase64Image(base64)) {
            throw new IllegalArgumentException("Formato de imagem inválido");
        }

        String pasta = "upl/cardapios/" + restauranteId + "/" + cardapioId;
        String nome = processBase64(base64, pasta, "jpg");
        
        // Remove a imagem antiga se existir
        Path pastaPath = Paths.get(pasta);
        if (Files.exists(pastaPath)) {
            Files.walk(pastaPath)
                .filter(Files::isRegularFile)
                .forEach(path -> {
                    try {
                        Files.delete(path);
                    } catch (IOException e) {
                        throw new RuntimeException("Erro ao remover imagem antiga", e);
                    }
                });
        }
        
        // Move a nova imagem para o nome padrão
        Path caminhoNovo = Paths.get(pasta, nome);
        Path caminhoPadrao = Paths.get(pasta, "prato.jpg");
        Files.move(caminhoNovo, caminhoPadrao, StandardCopyOption.REPLACE_EXISTING);
    }
} 
