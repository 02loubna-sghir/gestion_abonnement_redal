package gestion_abo.repositories;

import gestion_abo.entities.Typedemande;
import gestion_abo.entities.Typedemande;
import gestion_abo.entities.Typedemande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TypedemandeRepository extends JpaRepository<Typedemande, Integer> {
    Optional<Typedemande> findById(Integer id);
    void deleteById(Integer id);
    Typedemande save(Typedemande typedemande);
    List<Typedemande> findAll();
}