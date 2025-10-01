package TavolaSoftware.TavolaApp.REST.service;

import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import TavolaSoftware.TavolaApp.REST.model.PasswordResetToken;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.PasswordResetTokenRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;

import java.security.SecureRandom;
import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class AccessService {

    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;
    
    @Value("${spring.mail.username}")
    private String emailRemetente;

    @Transactional
    public void solicitarResetDeSenha(String email) {
        // --- CORREÇÃO AQUI ---
        Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(email);

        // Se o Optional estiver vazio (usuário não encontrado), simplesmente paramos a execução.
        // Isso evita que um atacante descubra quais e-mails estão cadastrados no sistema.
        if (usuarioOpt.isEmpty()) {
            System.out.println("Solicitação de reset para e-mail não cadastrado: " + email);
            return;
        }

        // Se chegamos aqui, o usuário existe. Podemos extraí-lo com segurança.
        Usuario usuario = usuarioOpt.get();
        
        // O restante do método continua exatamente igual
        passwordResetTokenRepository.deleteByUsuarioId(usuario.getId());

        String token = UUID.randomUUID().toString();

        PasswordResetToken resetToken = new PasswordResetToken();
        resetToken.setUsuario(usuario);
        resetToken.setExpiryDate(LocalDateTime.now().plusMinutes(30));
        resetToken.setTokenHash(new BCryptPasswordEncoder().encode(token));

        passwordResetTokenRepository.save(resetToken);

        String urlDeRedefinicao = "http://localhost:4200/redefinir-senha?token=" + token;

        enviarEmailResetSenha(usuario.getEmail(), usuario.getNome(), urlDeRedefinicao);
    }
    
    public String gerarCodigoDeVerificacao() {
        SecureRandom random = new SecureRandom();
        int numero = random.nextInt(999999);
        return new DecimalFormat("000000").format(numero);
    }
    
    public void enviarEmailResetSenha(String destinatario, String nomeUsuario, String urlDeRedefinicao) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(emailRemetente, "Equipe Tavola");
            helper.setTo(destinatario);
            helper.setSubject("Redefinição de Senha - Tavola");

            String corpoEmail = criarCorpoEmailResetSenha(nomeUsuario, urlDeRedefinicao);
            helper.setText(corpoEmail, true);

            mailSender.send(message);

        } catch (Exception e) {
            throw new RuntimeException("Erro ao enviar e-mail de redefinição: " + e.getMessage());
        }
    }

    // <<< MÉTODO DE ENVIO DE E-MAIL UNIFICADO >>>
    public void enviarEmailVerificacao(String destinatario, String nomeUsuario, String codigoVerificacao, String urlDeVerificacao) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(emailRemetente, "Equipe Tavola");
            helper.setTo(destinatario);
            helper.setSubject("Seu Código de Verificação Tavola");

            String corpoEmail = criarCorpoEmailUnificado(nomeUsuario, codigoVerificacao, urlDeVerificacao);
            helper.setText(corpoEmail, true);

            mailSender.send(message);

        } catch (Exception e) {
            throw new RuntimeException("Erro ao enviar e-mail de verificação: " + e.getMessage());
        }
    }
    
    @Transactional
    public void executarResetDeSenha(String token, String novaSenha) {
        // É preciso iterar pois não podemos buscar pelo token puro
        for (PasswordResetToken pToken : passwordResetTokenRepository.findAll()) {
            if (new BCryptPasswordEncoder().matches(token, pToken.getTokenHash())) {
                
                if (pToken.getExpiryDate().isBefore(LocalDateTime.now())) {
                    passwordResetTokenRepository.delete(pToken); // Limpa o token expirado
                    throw new RuntimeException("Token de redefinição de senha expirado.");
                }

                Usuario usuario = pToken.getUsuario();
                usuario.setSenha(passwordEncoder.encode(novaSenha)); // Usa o passwordEncoder da classe
                usuarioRepository.save(usuario);

                // PONTO CRÍTICO: Deleta o token após o uso para que ele seja de uso único
                passwordResetTokenRepository.delete(pToken);
                return; // Sucesso
            }
        }
        
        throw new RuntimeException("Token de redefinição de senha inválido.");
    }

    // <<< TEMPLATE HTML UNIFICADO E CORRIGIDO >>>
    private String criarCorpoEmailUnificado(String nomeUsuario, String codigo, String urlVerificacao) {
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
                  background-color:#ebe8e2; /* << COR DE FUNDO CINZA-BEGE */
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
                .code-label{color:#fff;font-size:14px;font-weight:600;margin-bottom:15px;text-transform:uppercase;letter-spacing:1px}
                .code-box{
                  background:#fff;border-radius:10px;padding:20px;font-size:36px;font-weight:700;color:#DA4A24;
                  letter-spacing:8px;font-family:'Courier New',monospace;box-shadow:inset 0 2px 10px rgba(0,0,0,.1)
                }
                .expiry-info{
                  background:#fff3e0;border-left:4px solid #F6BD38;padding:20px;margin:30px 0;border-radius:0 10px 10px 0;
                  font-size:14px;color:#666
                }
                .cta-section{margin:40px 0}
                .cta-button{
                  display:inline-block;background:linear-gradient(135deg,#f5ba3f 0%,#eeaa17 100%);
                  color:#ffffff !important; /* <<< CORREÇÃO DA COR DO TEXTO DO BOTÃO */
                  text-decoration:none;
                  padding:18px 40px;border-radius:50px;font-size:16px;font-weight:600;text-transform:uppercase;letter-spacing:1px;
                  box-shadow:0 8px 25px rgba(218,74,36,.3);transition:all .3s ease;
                }
                .cta-button:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(218,74,36,.4)}
                .footer{background:#f8f9fa;padding:30px;text-align:center;border-top:1px solid #eee}
                .footer-text{font-size:14px;color:#666;margin-bottom:15px}
                .brand-signature{font-size:16px;font-weight:600;color:#DA4A24}
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="header"><h1>TAVOLA</h1></div>
                <div class="content">
                  <h2 class="greeting">Olá, [NOME_USUARIO]! 👋</h2>
                  <p class="message">
                    Bem-vindo ao <strong>Tavola</strong>! Para acessar sua conta, utilize o código abaixo ou clique no botão:
                  </p>
                  <div class="code-section">
                    <div class="code-label">Seu Código de Verificação</div>
                    <div class="code-box">[CODIGO]</div>
                  </div>
                  <div class="expiry-info">
                    ⏰ <strong>Importante:</strong> Este código é válido por apenas <strong>10 minutos</strong>.
                  </div>
                  <div class="cta-section"> <a href="[URL_VERIFICACAO]" class="cta-button">Confirmar Código</a>
                  </div>
                </div>
                <div class="footer">
                  <p class="footer-text">Dúvidas? Entre em contato conosco.</p>
                  <div class="brand-signature">Com carinho,<br/><strong>Equipe Tavola</strong> 🍽️</div>
                </div>
              </div>
            </body>
            </html>""";
        return htmlTemplate
                .replace("[NOME_USUARIO]", nomeUsuario)
                .replace("[CODIGO]", codigo)
                .replace("[URL_VERIFICACAO]", urlVerificacao);
    }
    
    private String criarCorpoEmailResetSenha(String nomeUsuario, String urlRedefinicao) {
        String htmlTemplate = """
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
              <meta charset="UTF-8"/>
              <title>Redefinição de Senha - Tavola</title>
              <style>
                /* Estilos identicos ao seu template anterior para manter a consistência */
                *{margin:0;padding:0;box-sizing:border-box}
                body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#ebe8e2;margin:0;padding:20px;min-height:100vh}
                .email-container{max-width:600px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,.15)}
                .header{background:linear-gradient(135deg,#f5ba3f 0%,#eeaa17 100%);padding:40px 30px;text-align:center;position:relative}
                .header h1{color:#fff;font-size:32px;font-weight:700;margin-bottom:10px;text-shadow:0 2px 4px rgba(0,0,0,.2);position:relative;z-index:1}
                .content{padding:50px 40px;text-align:center}
                .greeting{font-size:24px;color:#333;margin-bottom:20px;font-weight:600}
                .message{font-size:16px;color:#666;line-height:1.6;margin-bottom:40px}
                .expiry-info{background:#fff3e0;border-left:4px solid #F6BD38;padding:20px;margin:30px 0;border-radius:0 10px 10px 0;font-size:14px;color:#666}
                .cta-section{margin:40px 0}
                .cta-button{display:inline-block;background:linear-gradient(135deg,#f5ba3f 0%,#eeaa17 100%);color:#ffffff !important;text-decoration:none;padding:18px 40px;border-radius:50px;font-size:16px;font-weight:600;text-transform:uppercase;letter-spacing:1px;box-shadow:0 8px 25px rgba(218,74,36,.3);transition:all .3s ease;}
                .cta-button:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(218,74,36,.4)}
                .footer{background:#f8f9fa;padding:30px;text-align:center;border-top:1px solid #eee}
                .footer-text{font-size:14px;color:#666;margin-bottom:15px}
                .brand-signature{font-size:16px;font-weight:600;color:#DA4A24}
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="header"><h1>TAVOLA</h1></div>
                <div class="content">
                  <h2 class="greeting">Olá, [NOME_USUARIO]! 👋</h2>
                  <p class="message">
                    Recebemos uma solicitação para redefinir a senha da sua conta. Se você não fez esta solicitação, pode ignorar este e-mail.<br/><br/>
                    Para continuar, clique no botão abaixo:
                  </p>
                  <div class="cta-section"> <a href="[URL_REDEFINICAO]" class="cta-button">Redefinir Minha Senha</a>
                  </div>
                  <div class="expiry-info">
                    ⏰ <strong>Atenção:</strong> Este link é de uso único e expira em <strong>30 minutos</strong>.
                  </div>
                </div>
                <div class="footer">
                  <p class="footer-text">Dúvidas? Entre em contato conosco.</p>
                  <div class="brand-signature">Com carinho,<br/><strong>Equipe Tavola</strong> 🍽️</div>
                </div>
              </div>
            </body>
            </html>""";
        return htmlTemplate
                .replace("[NOME_USUARIO]", nomeUsuario)
                .replace("[URL_REDEFINICAO]", urlRedefinicao);
    }
}

