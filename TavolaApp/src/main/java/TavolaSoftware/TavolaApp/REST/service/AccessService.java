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

            helper.setFrom(emailRemetente, "Equipe Tavola");
            helper.setTo(destinatario);
            helper.setSubject("Seu Código de Acesso Tavola"); // Assunto um pouco diferente

            // Usa um novo template, mais simples e sem o botão
            String corpoEmail = criarCorpoEmailHtmlAcesso(nomeUsuario, codigoVerificacao);
            helper.setText(corpoEmail, true);

            mailSender.send(message);

        } catch (Exception e) {
            throw new RuntimeException("Erro ao enviar e-mail de verificação: " + e.getMessage());
        }
    }
    
    public void enviarEmailVerificacao(String destinatario, String nomeUsuario, String codigoVerificacao, String urlDeVerificacao) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(emailRemetente, "Equipe Tavola");
            helper.setTo(destinatario);
            helper.setSubject("Seu Código de Verificação Tavola");

            // Usa o template de registro que tem o botão/link
            String corpoEmail = criarCorpoEmailHtmlRegistro(nomeUsuario, codigoVerificacao, urlDeVerificacao);
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
    private String criarCorpoEmailHtmlRegistro(String nomeUsuario, String codigo, String urlVerificacao) {
        String htmlTemplate = """
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
              <meta charset="UTF-8"/>
              <title>Código de Verificação - Tavola</title>
              <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{
      font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
      background-color:#ebe8e2;
      background-image:radial-gradient(circle at 50% 50%,#fff 0%,#f5f1e8 35%,#ebe8e2 70%,#e2dfd8 100%);
      margin:0;padding:20px;min-height:100vh
    }
    .email-container{
      max-width:600px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;
      box-shadow:0 20px 40px rgba(0,0,0,.15)
    }
    .header{
      background:linear-gradient(135deg,#f5ba3f 0%,#eeaa17 100%);
      padding:40px 30px;text-align:center;position:relative
    }
    .header::before{
      content:'';position:absolute;inset:0;
      background:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="30" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="60" cy="70" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="30" cy="80" r="2.5" fill="rgba(255,255,255,0.1)"/></svg>') repeat
    }
    .header h1{
      color:#fff;font-size:32px;font-weight:700;margin-bottom:10px;
      text-shadow:0 2px 4px rgba(0,0,0,.2);position:relative;z-index:1
    }
    .content{padding:50px 40px;text-align:center}
    .greeting{font-size:24px;color:#333;margin-bottom:20px;font-weight:600}
    .message{font-size:16px;color:#666;line-height:1.6;margin-bottom:40px}
    .code-section{
      background:linear-gradient(135deg,#f5ba3f 0%,#eeaa17 100%);
      border-radius:15px;padding:30px;margin:30px 0;position:relative;overflow:hidden
    }
    .code-section::before{
      content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;
      background:repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,.05) 10px,rgba(255,255,255,.05) 20px);
      animation:shimmer 3s linear infinite
    }
    @keyframes shimmer{
      0%{transform:translateX(-100%) translateY(-100%) rotate(45deg)}
      100%{transform:translateX(100%) translateY(100%) rotate(45deg)}
    }
    .code-label{color:#fff;font-size:14px;font-weight:600;margin-bottom:15px;text-transform:uppercase;letter-spacing:1px;position:relative;z-index:1}
    .code-box{
      background:#fff;border-radius:10px;padding:20px;font-size:36px;font-weight:700;color:#DA4A24;
      letter-spacing:8px;font-family:'Courier New',monospace;box-shadow:inset 0 2px 10px rgba(0,0,0,.1);position:relative;z-index:1
    }
    .expiry-info{
      background:#fff3e0;border-left:4px solid #F6BD38;padding:20px;margin:30px 0;border-radius:0 10px 10px 0;
      font-size:14px;color:#666
    }
    .cta-section{margin:40px 0}
    .cta-button{
      display:inline-block;background:linear-gradient(135deg,#f5ba3f 0%,#eeaa17 100%);color:#fff;text-decoration:none;
      padding:18px 40px;border-radius:50px;font-size:16px;font-weight:600;text-transform:uppercase;letter-spacing:1px;
      box-shadow:0 8px 25px rgba(218,74,36,.3);transition:all .3s ease;position:relative;overflow:hidden
    }
    .cta-button::before{
      content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);transition:left .5s
    }
    .cta-button:hover::before{left:100%}
    .cta-button:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(218,74,36,.4)}
    .footer{background:#f8f9fa;padding:30px;text-align:center;border-top:1px solid #eee}
    .footer-text{font-size:14px;color:#666;margin-bottom:15px}
    .brand-signature{font-size:16px;font-weight:600;color:#DA4A24}
    .divider{height:2px;background:linear-gradient(90deg,transparent,#F6BD38,#DA4A24,transparent);margin:30px 0;border-radius:1px}
    @media (max-width:600px){
      body{padding:10px}
      .content{padding:30px 20px}
      .header{padding:30px 20px}
      .code-box{font-size:28px;letter-spacing:4px}
      .cta-button{padding:15px 30px;font-size:14px}
    }
        	</style>
            </head>
            <body>
              <div class="email-container">
                <div class="header"><h1>TAVOLA</h1></div>
                <div class="content">
                  <h2 class="greeting">Olá, [NOME_USUARIO]! 👋</h2>
                  <p class="message">
                    Bem-vindo ao <strong>Tavola</strong>! Para concluir seu cadastro, utilize o código abaixo:
                  </p>
                  <div class="code-section">
                    <div class="code-label">Seu Código de Verificação</div>
                    <div class="code-box">[CODIGO]</div>
                  </div>
                  <div class="expiry-info">
                    ⏰ <strong>Importante:</strong> Este código é válido por apenas <strong>10 minutos</strong>.
                  </div>
                  <div class="divider"></div>
                  <div class="cta-section">
                    <a href="[URL_VERIFICACAO]" class="cta-button">Verificar meu E-mail</a>
                  </div>
                </div>
                <div class="footer">
                  <p class="footer-text">Dúvidas? Entre em contato conosco.</p>
                  <div class="brand-signature">Com carinho,<br/><strong>Equipe Tavola</strong> 🍽️</div>
                </div>
              </div>
            </body>
            </html>"""; // Seu HTML com placeholders
        return htmlTemplate
                .replace("[NOME_USUARIO]", nomeUsuario)
                .replace("[CODIGO]", codigo)
                .replace("[URL_VERIFICACAO]", urlVerificacao);
    }
    
    private String criarCorpoEmailHtmlAcesso(String nomeUsuario, String codigo) {
        // É o mesmo HTML, mas sem a seção do botão
        String htmlTemplate = """
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
              <meta charset="UTF-8"/>
              <title>Código de Verificação - Tavola</title>
              <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{
      font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
      background-color:#ebe8e2;
      background-image:radial-gradient(circle at 50% 50%,#fff 0%,#f5f1e8 35%,#ebe8e2 70%,#e2dfd8 100%);
      margin:0;padding:20px;min-height:100vh
    }
    .email-container{
      max-width:600px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;
      box-shadow:0 20px 40px rgba(0,0,0,.15)
    }
    .header{
      background:linear-gradient(135deg,#f5ba3f 0%,#eeaa17 100%);
      padding:40px 30px;text-align:center;position:relative
    }
    .header::before{
      content:'';position:absolute;inset:0;
      background:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="30" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="60" cy="70" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="30" cy="80" r="2.5" fill="rgba(255,255,255,0.1)"/></svg>') repeat
    }
    .header h1{
      color:#fff;font-size:32px;font-weight:700;margin-bottom:10px;
      text-shadow:0 2px 4px rgba(0,0,0,.2);position:relative;z-index:1
    }
    .content{padding:50px 40px;text-align:center}
    .greeting{font-size:24px;color:#333;margin-bottom:20px;font-weight:600}
    .message{font-size:16px;color:#666;line-height:1.6;margin-bottom:40px}
    .code-section{
      background:linear-gradient(135deg,#f5ba3f 0%,#eeaa17 100%);
      border-radius:15px;padding:30px;margin:30px 0;position:relative;overflow:hidden
    }
    .code-section::before{
      content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;
      background:repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,.05) 10px,rgba(255,255,255,.05) 20px);
      animation:shimmer 3s linear infinite
    }
    @keyframes shimmer{
      0%{transform:translateX(-100%) translateY(-100%) rotate(45deg)}
      100%{transform:translateX(100%) translateY(100%) rotate(45deg)}
    }
    .code-label{color:#fff;font-size:14px;font-weight:600;margin-bottom:15px;text-transform:uppercase;letter-spacing:1px;position:relative;z-index:1}
    .code-box{
      background:#fff;border-radius:10px;padding:20px;font-size:36px;font-weight:700;color:#DA4A24;
      letter-spacing:8px;font-family:'Courier New',monospace;box-shadow:inset 0 2px 10px rgba(0,0,0,.1);position:relative;z-index:1
    }
    .expiry-info{
      background:#fff3e0;border-left:4px solid #F6BD38;padding:20px;margin:30px 0;border-radius:0 10px 10px 0;
      font-size:14px;color:#666
    }
    .cta-section{margin:40px 0}
    .cta-button{
      display:inline-block;background:linear-gradient(135deg,#f5ba3f 0%,#eeaa17 100%);color:#fff;text-decoration:none;
      padding:18px 40px;border-radius:50px;font-size:16px;font-weight:600;text-transform:uppercase;letter-spacing:1px;
      box-shadow:0 8px 25px rgba(218,74,36,.3);transition:all .3s ease;position:relative;overflow:hidden
    }
    .cta-button::before{
      content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);transition:left .5s
    }
    .cta-button:hover::before{left:100%}
    .cta-button:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(218,74,36,.4)}
    .footer{background:#f8f9fa;padding:30px;text-align:center;border-top:1px solid #eee}
    .footer-text{font-size:14px;color:#666;margin-bottom:15px}
    .brand-signature{font-size:16px;font-weight:600;color:#DA4A24}
    .divider{height:2px;background:linear-gradient(90deg,transparent,#F6BD38,#DA4A24,transparent);margin:30px 0;border-radius:1px}
    @media (max-width:600px){
      body{padding:10px}
      .content{padding:30px 20px}
      .header{padding:30px 20px}
      .code-box{font-size:28px;letter-spacing:4px}
      .cta-button{padding:15px 30px;font-size:14px}
    }
        	</style>
            </head>
            <body>
              <div class="email-container">
                <div class="header"><h1>TAVOLA</h1></div>
                <div class="content">
                  <h2 class="greeting">Olá, [NOME_USUARIO]! 👋</h2>
                  <p class="message">
                    Bem-vindo ao <strong>Tavola</strong>! Para concluir seu cadastro, utilize o código abaixo:
                  </p>
                  <div class="code-section">
                    <div class="code-label">Seu Código de Verificação</div>
                    <div class="code-box">[CODIGO]</div>
                  </div>
                  <div class="expiry-info">
                    ⏰ <strong>Importante:</strong> Este código é válido por apenas <strong>10 minutos</strong>.
                  </div>
                  <div class="divider"></div>
                </div>
                <div class="footer">
                  <p class="footer-text">Dúvidas? Entre em contato conosco.</p>
                  <div class="brand-signature">Com carinho,<br/><strong>Equipe Tavola</strong> 🍽️</div>
                </div>
              </div>
            </body>
            </html>"""; // Seu HTML sem a <div class="cta-section">...</div>
        return htmlTemplate
                .replace("[NOME_USUARIO]", nomeUsuario)
                .replace("[CODIGO]", codigo)
                .replace("Para concluir seu cadastro", "Para acessar sua conta"); // Muda o texto
    }
}