package gestion_abo.repositories;

import gestion_abo.entities.Client;
import gestion_abo.entities.Client;
import gestion_abo.entities.demande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface demandeRepository extends JpaRepository<demande, Integer> {
    Optional<demande> findById(Integer id);
    void deleteById(Integer id);
    demande save(demande demande);
    List<demande> findAll();
}