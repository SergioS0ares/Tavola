package TavolaSoftware.TavolaApp.REST.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

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
    
    private static final long ACCESS_TOKEN_EXPIRATION = 10 * 60 * 1000; // 10 minutos
    private static final long REFRESH_TOKEN_EXPIRATION = 1 * 24 * 60 * 60 * 1000; // 1 dia

    private final PrivateKey privateKey;
    private final PublicKey publicKey;

    public JwtUtil() throws Exception {
        this.privateKey = loadPrivateKey("LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tDQpNSUlFdlFJQkFEQU5CZ2txaGtp\r\n"
        							   + "Rzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUUMzTHQyL01UdlhOWkJxDQp6\r\n"
        							   + "RHpGeEFVNis3YzRzYnB4elRWQ21SeC9Oc09LZ3lVZ1VTZEJpRUh4eWRMVUFRSXhV\r\n"
        							   + "d3NEdGM5RzZOWlZqa0E5DQozelQzaDh0eXNpYXBxbTAzQ2c4bmNEK2FkS0JyUjJ6\r\n"
        							   + "dW9OMXVrSzBxdGZnZ0lDSnl6dFNXNmpvdmJIakRFUUtrDQpGMitPbytva2loQTJ6\r\n"
        							   + "aDdXZ0VWWCtSZ3E1QWRyVDV3RmlON1N6S1pOeW9WOW5iaWdDWTdZd1A1VmtTV1Zz\r\n"
        							   + "bW9hDQpQeDFXR2lRRGZRZHNLUnk3UkptQjJ0eG1SWTBkdUthazFZaGcvL0FZckNs\r\n"
        							   + "Y3BSMzdHMDlEYnBlbDVaa3FZRlhGDQowcDkyZkYzcGJEalBKWjJPVk0yd2x6clhi\r\n"
        							   + "MjlVWFBrMUZSOUlYcmNrY3ZXNi9XS0FmMHR3WDlHM3hUWXArMHJDDQpiT1lnZGZz\r\n"
        							   + "M0FnTUJBQUVDZ2dFQUtsY2UwZzVqTW44aS9reHV6NWRiVGlMWVdyWlp6ZXdNbjNR\r\n"
        							   + "Y2Joc09YM21vDQpueXVpMHpiWFp6ZXJEMjJjUUNKZHJXSGNveHMyVDFndDZSOHFj\r\n"
        							   + "dnhrUGdLSGhUZnJQb21JcnlqMnlwQ2ljNmx5DQp1RVZlYVN2dm1xdXN5bUFqRmo1\r\n"
        							   + "UVRRR2VxVTk5S2psSVR2MUx2OENMWWg2M1dMT1QxU2lZM3Bpb3lXRWpoZDNnDQpN\r\n"
        							   + "V3NIOUM0bXBzOTZMU2tTbENWMmdTc01WVFNOVHRHK3laS0NRb0NLcWx0OUN6dDJz\r\n"
        							   + "VXh5bUh1YS9EMHJvT1phDQpDU2w3ZGJScE53THQ1OWNDbUJZakFJRnJsZXJJZ1V6\r\n"
        							   + "dGZmUWU1dG1zMjYydk5Uc1BBSmJEaHpXbkR6azc2RjJLDQpkbDdXa2NCUEFUN0lR\r\n"
        							   + "RzdvYi8ySnN4M3hkSmtaODRaSTkyMmxXSFVoQVFLQmdRRHVxV0JHVlJwZmR3TG53\r\n"
        							   + "NWlqDQo5VkJLU0dtZTRDVkl1VEpYRWYrbkYvZXVYTlZucUw1MGtmMlFpUEhoM1l5\r\n"
        							   + "a0l3aVcxbU9CVFVXdi9TY1l4ekhsDQovdjlDTHduMUJLQy8xUzhTQXkxZDVqeXla\r\n"
        							   + "R3ZHbmpiL1dhdWJVbHpubmFlWmZ3cUt3TmZ2OUpaWlNEQ0xLSjhNDQptRUpOR0dp\r\n"
        							   + "cFlmUVQweHBRc2lUOU5kM3hWd0tCZ1FERWZiTjlaWmhuNFFUWVFkY2VDdXJYV0l1\r\n"
        							   + "YUlZUGl3TXpvDQpkTGsyTlc4N3EwaGk0SzNBTnI2TmxsQUNjaVF4YVQ5U3psR0Fi\r\n"
        							   + "cWE3ZkpjcWZzbm9iMndhd2Z0aGl1dkhmQ3haDQpybms3K0Zlc1BZR0RQcDNWR2tS\r\n"
        							   + "blZUZVZNQzB1a0l4enFTWEhqVUxwZnIwbTZ2QXpjekNZSHpBUkd3ZVRqdW82DQp5\r\n"
        							   + "NDR6VHQ2NUlRS0JnRHFkbnVlblB6THpKK09FUnBqK1J4bjNidmwyVTdIb3lsUllO\r\n"
        							   + "MUh5c1FKQ0NxZks2ZnYzDQpYeStBY3VmbVlnUnVGazMxbWJySUg3VjVsNENlYThM\r\n"
        							   + "eFBnQWpUVzdBRkRzSlFPWkxvWGpPYzFuZEVCdFlBR24yDQp2QThKeTRlWFVQS0NJ\r\n"
        							   + "VFN5NkZZbTNFWlJWSnJZL3pjNHJoQUJUck5MTzRjaThmT2Z6VFhqWlA5QkFvR0JB\r\n"
        							   + "S2RXDQpPZmNQLzdSdjhSVlBOU21UdUo0Ky9WejlML2w3b3NaUkthNmQ0U1lhMytH\r\n"
        							   + "OVlKdXl3Nk9ISUlxRXRJZ1VEdWF4DQphTDJNL3BmcktqMzVqbkJSKytucHkvRXRR\r\n"
        							   + "MUUzVWZucVdic1Y2MngzVVFYNTNLYXc0Ukp6ZzR1ZFpNMGtNMGtKDQpBM0Nud0JW\r\n"
        							   + "a1p5aHVxclBXWk1zWXZISEU2RFhsWDF0RkljeFdYZDJoQW9HQWVCeFIvdXFPOEgz\r\n"
        							   + "RVl4UDhFbWxmDQpNcEVHdHNoRUtyQTJQYkxUL1gxR2R1RmpqbjJ3amwyUmR6Mjdo\r\n"
        							   + "blFjdVJhK3R1OGJ5ZER5c205TlF3aGtaU0t2DQpTY2VtNWJReHFNU01kdGVMdGhD\r\n"
        							   + "M2pIMnFmaStMeThDNFY3eEY1OVVWMVlCYUl0enpGZkxNa0dXTE03ZSt0TG9wDQpK\r\n"
        							   + "SzVUYXFJWUliTFY3VkQ0QWxhcHluVT0NCi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0t\r\n"
        							   + "LS0NCg==\r\n"
        							   + "");
        
        this.publicKey = loadPublicKey("LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0NCk1JSUJJakFOQmdrcWhraUc5dzBC\r\n"
        							 + "QVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBdHk3ZHZ6RTcxeldRYXN3OHhjUUYNCk92\r\n"
        							 + "dTNPTEc2Y2MwMVFwa2NmemJEaW9NbElGRW5RWWhCOGNuUzFBRUNNVk1MQTdYUFJ1\r\n"
        							 + "aldWWTVBUGQ4MDk0ZkwNCmNySW1xYXB0TndvUEozQS9tblNnYTBkczdxRGRicEN0\r\n"
        							 + "S3JYNElDQWljczdVbHVvNkwyeDR3eEVDcEJkdmpxUHENCkpJb1FOczRlMW9CRlYv\r\n"
        							 + "a1lLdVFIYTArY0JZamUwc3ltVGNxRmZaMjRvQW1PMk1EK1ZaRWxsYkpxR2o4ZFZo\r\n"
        							 + "b2sNCkEzMEhiQ2tjdTBTWmdkcmNaa1dOSGJpbXBOV0lZUC93R0t3cFhLVWQreHRQ\r\n"
        							 + "UTI2WHBlV1pLbUJWeGRLZmRueGQNCjZXdzR6eVdkamxUTnNKYzYxMjl2VkZ6NU5S\r\n"
        							 + "VWZTRjYzSkhMMXV2MWlnSDlMY0YvUnQ4VTJLZnRLd216bUlIWDcNCk53SURBUUFC\r\n"
        							 + "DQotLS0tLUVORCBQVUJMSUMgS0VZLS0tLS0NCg==\r\n"
        							 + "");
    }

    public String generateAccessToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + ACCESS_TOKEN_EXPIRATION))
                .signWith(privateKey, SignatureAlgorithm.RS256)
                .compact();
    }

    public String generateRefreshToken(String sessionId) {
        return Jwts.builder()
                .setId(sessionId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_TOKEN_EXPIRATION))
                .signWith(privateKey, SignatureAlgorithm.RS256)
                .compact();
    }

    public Claims parseToken(String token) {
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

    private PrivateKey loadPrivateKey(String key) throws Exception {
        byte[] keyBytes = Base64.getDecoder().decode(key);
        PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        return keyFactory.generatePrivate(spec);
    }

    private PublicKey loadPublicKey(String key) throws Exception {
        byte[] keyBytes = Base64.getDecoder().decode(key);
        X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        return keyFactory.generatePublic(spec);
    }
}
