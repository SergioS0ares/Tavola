package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.RememberMeToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RememberMeTokenRepository extends JpaRepository<RememberMeToken, UUID> {
    Optional<RememberMeToken> findByTokenHash(String tokenHash);
    void deleteByTokenHash(String tokenHash);
}