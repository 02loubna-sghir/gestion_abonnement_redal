package gestion_abo.repositories;

import gestion_abo.entities.Abonnement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AbonnementRepository extends JpaRepository<Abonnement, Integer> {

    Optional<Abonnement> findById(Integer id);
    void deleteById(Integer id);
    Abonnement save(Abonnement abonnement);
    List<Abonnement> findAll();
}
