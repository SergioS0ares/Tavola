package TavolaSoftware.TavolaApp.REST.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import TavolaSoftware.TavolaApp.REST.model.Tags;

@Repository
public interface TagsRepository extends JpaRepository<Tags, UUID> {
    
    Optional<Tags> findByTag(String tag);
    
    boolean existsByTag(String tag);
} 