package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import org.springframework.data.jpa.domain.Specification;
import java.util.List;

public interface RestauranteRepositoryCustom {
    List<Restaurante> findBySpecificationAndFts(Specification<Restaurante> spec, String termoFts);
}