package TavolaSoftware.TavolaApp.REST.service;

import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;

import java.security.SecureRandom;
import java.text.DecimalFormat;
import java.time.LocalDateTime;


@Service
public class AccessService {

    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder; // Injete o encoder para a senha
    
    @Value("${spring.mail.username}") // Injeta o e-mail do remetente do application.properties
    private String emailRemetente;

    /**
     * Inicia o processo de redefinição de senha.
     * @param email O email do usuário que solicitou a redefinição.
     * @return O usuário, se encontrado.
     */
    @Transactional
    public Usuario iniciarResetSenha(String email) {
        Usuario usuario = usuarioRepository.findByEmail(email);
        if (usuario != null) {
            String codigo = gerarCodigoDeVerificacao();
            usuario.setCodigoVerificacao(codigo);
            usuario.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(15)); // Validade de 15 min para reset
            usuarioRepository.save(usuario);

            // Aqui você pode criar um método de e-mail específico para reset de senha
            // ou reutilizar o existente com uma mensagem diferente.
            enviarEmailVerificacao(usuario.getEmail(), usuario.getNome(), codigo);
        }
        return usuario; // Retorna o usuário para o controller saber que o e-mail foi enviado
    }
    
    /**
     * Gera um código de verificação numérico de 6 dígitos.
     * @return Uma string com o código formatado (ex: "012345").
     */
    public String gerarCodigoDeVerificacao() {
        SecureRandom random = new SecureRandom();
        int numero = random.nextInt(999999);
        return new DecimalFormat("000000").format(numero);
    }

    /**
     * Envia um e-mail de verificação para o usuário.
     * @param destinatario O e-mail do usuário.
     * @param nomeUsuario O nome do usuário, para personalizar o e-mail.
     * @param codigoVerificacao O código de 6 dígitos a ser enviado.
     */
    public void enviarEmailVerificacao(String destinatario, String nomeUsuario, String codigoVerificacao) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(emailRemetente, "Equipe Tavola"); // Remetente
            helper.setTo(destinatario); // Destinatário
            helper.setSubject("Seu Código de Verificação Tavola"); // Assunto

            String corpoEmail = criarCorpoEmailHtml(nomeUsuario, codigoVerificacao);
            helper.setText(corpoEmail, true);

            mailSender.send(message);

        } catch (Exception e) {
            throw new RuntimeException("Erro ao enviar e-mail de verificação: " + e.getMessage());
        }
    }
    
    /**
     * Confirma a redefinição de senha com um código de verificação.
     * @param email O email do usuário.
     * @param codigo O código recebido.
     * @param novaSenha A nova senha desejada.
     * @return O usuário com a senha atualizada.
     */
    @Transactional
    public Usuario confirmarResetSenha(String email, String codigo, String novaSenha) {
        Usuario usuario = usuarioRepository.findByEmail(email);

        if (usuario == null || usuario.getCodigoVerificacao() == null ||
            !usuario.getCodigoVerificacao().equals(codigo) ||
            usuario.getExpiracaoCodigo().isBefore(LocalDateTime.now())) {
            
            throw new RuntimeException("Código de verificação inválido ou expirado.");
        }

        // Validação que discutimos: se a senha nova é igual à antiga, não fazemos nada.
        if (passwordEncoder.matches(novaSenha, usuario.getSenha())) {
            // Limpa o código para segurança, mas não altera a senha.
            usuario.setCodigoVerificacao(null);
            usuario.setExpiracaoCodigo(null);
            usuarioRepository.save(usuario);
            return usuario; // Operação bem-sucedida.
        }

        // Se a senha for diferente, criptografa e atualiza.
        usuario.setSenha(passwordEncoder.encode(novaSenha));
        usuario.setCodigoVerificacao(null);
        usuario.setExpiracaoCodigo(null);
        
        return usuarioRepository.save(usuario);
    }

    /**
     * Método privado para gerar o HTML do corpo do e-mail.
     */
    private String criarCorpoEmailHtml(String nomeUsuario, String codigo) {
        return "<!DOCTYPE html>" +
               "<html>" +
               "<head>" +
               "<style>" +
               "  body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }" +
               "  .container { background-color: #ffffff; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }" +
               "  .header { color: #333; text-align: center; }" +
               "  .code-box { background-color: #eef1f3; border: 1px solid #dcdcdc; padding: 15px; text-align: center; font-size: 24px; letter-spacing: 5px; margin: 20px 0; border-radius: 5px; }" +
               "  .footer { font-size: 12px; text-align: center; color: #888; margin-top: 20px; }" +
               "</style>" +
               "</head>" +
               "<body>" +
               "<div class='container'>" +
               "  <h2 class='header'>Olá, " + nomeUsuario + "!</h2>" +
               "  <p>Obrigado por se juntar ao Tavola. Para concluir seu cadastro ou login, por favor, use o código de verificação abaixo:</p>" +
               "  <div class='code-box'><b>" + codigo + "</b></div>" +
               "  <p>Este código é válido por 10 minutos. Se você não solicitou este código, por favor, ignore este e-mail.</p>" +
               "  <div class='footer'>Atenciosamente,<br/>Equipe Tavola</div>" +
               "</div>" +
               "</body>" +
               "</html>";
    }
}