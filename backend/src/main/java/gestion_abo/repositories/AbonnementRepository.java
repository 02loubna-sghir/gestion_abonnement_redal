package gestion_abo.repositories;

import gestion_abo.entities.Abonnement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AbonnementRepository extends JpaRepository<Abonnement, Integer> {

    @Query("SELECT a FROM Abonnement a WHERE a.client.id_client = :idClient")
    List<Abonnement> findByClientIdClient(Integer idClient);
}
