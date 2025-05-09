package TavolaSoftware.TavolaApp.REST.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;

@Component
public class JwtUtil {

    private static final long ACCESS_TOKEN_EXPIRATION = 10 * 60 * 1000; // 10 min
    private static final long REFRESH_TOKEN_EXPIRATION = 24 * 60 * 60 * 1000; // 1 dia

    private final PrivateKey privateKey;
    private final PublicKey publicKey;

    public JwtUtil() throws Exception {
        this.privateKey = loadPrivateKeyFromResource("private_key.pem");
        this.publicKey = loadPublicKeyFromResource("public_key.pem");
    }

    public String generateAccessToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + ACCESS_TOKEN_EXPIRATION))
                .signWith(privateKey, SignatureAlgorithm.RS256)
                .compact();
    }

    public String generateRefreshToken(UUID id, String email) {
        return Jwts.builder()
                .setSubject(email) // para buscar o usuário
                .claim("id", id.toString()) // se quiser ID também
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_TOKEN_EXPIRATION))
                .signWith(privateKey, SignatureAlgorithm.RS256)
                .compact();
    }


    public Claims parseToken(String token) {
        System.out.println("Tentando validar token...");
        return Jwts.parserBuilder()
                .setSigningKey(publicKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean isTokenValid(String token) {
        try {
            parseToken(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    private PrivateKey loadPrivateKeyFromResource(String filename) throws Exception {
        InputStream is = getClass().getClassLoader().getResourceAsStream(filename);
        String key = new String(is.readAllBytes(), StandardCharsets.UTF_8);
        key = key.replace("-----BEGIN PRIVATE KEY-----", "")
                 .replace("-----END PRIVATE KEY-----", "")
                 .replaceAll("\\s", "");
        byte[] keyBytes = Base64.getDecoder().decode(key);
        PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(keyBytes);
        return KeyFactory.getInstance("RSA").generatePrivate(spec);
    }

    private PublicKey loadPublicKeyFromResource(String filename) throws Exception {
        InputStream is = getClass().getClassLoader().getResourceAsStream(filename);
        String key = new String(is.readAllBytes(), StandardCharsets.UTF_8);
        key = key.replace("-----BEGIN PUBLIC KEY-----", "")
                 .replace("-----END PUBLIC KEY-----", "")
                 .replaceAll("\\s", "");
        byte[] keyBytes = Base64.getDecoder().decode(key);
        X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);
        return KeyFactory.getInstance("RSA").generatePublic(spec);
    }
}