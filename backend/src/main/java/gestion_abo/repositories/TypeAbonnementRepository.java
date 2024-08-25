package gestion_abo.repositories;

import gestion_abo.entities.Type_Abonnement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TypeAbonnementRepository extends JpaRepository<Type_Abonnement, Integer> {

    // Find a Type_Abonnement by its ID
    Optional<Type_Abonnement> findById(Integer id);

    // Delete a Type_Abonnement by its ID
    void deleteById(Integer id);

    // Save or update a Type_Abonnement
    Type_Abonnement save(Type_Abonnement typeAbonnement);

    // Retrieve all Type_Abonnement entities
    List<Type_Abonnement> findAll();

    // Find a Type_Abonnement by its nombre_litres
    @Query("SELECT t FROM Type_Abonnement t WHERE t.nombre_litres = :nombreLitres")
    Optional<Type_Abonnement> findByNombreLitres(@Param("nombreLitres") Double nombreLitres);
}
