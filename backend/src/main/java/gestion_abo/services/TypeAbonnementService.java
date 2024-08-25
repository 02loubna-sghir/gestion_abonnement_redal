package gestion_abo.services;

import gestion_abo.entities.Type_Abonnement;
import gestion_abo.repositories.TypeAbonnementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypeAbonnementService {

    private final TypeAbonnementRepository typeAbonnementRepository;

    @Autowired
    public TypeAbonnementService(TypeAbonnementRepository typeAbonnementRepository) {
        this.typeAbonnementRepository = typeAbonnementRepository;
    }

    // Find a Type_Abonnement by its ID
    public Optional<Type_Abonnement> findTypeAbonnementById(Integer id) {
        return typeAbonnementRepository.findById(id);
    }

    // Save or update a Type_Abonnement
    public Type_Abonnement saveTypeAbonnement(Type_Abonnement typeAbonnement) {
        return typeAbonnementRepository.save(typeAbonnement);
    }

    // Delete a Type_Abonnement by its ID
    public void deleteTypeAbonnementById(Integer id) {
        typeAbonnementRepository.deleteById(id);
    }

    // Retrieve all Type_Abonnement entities
    public List<Type_Abonnement> findAllTypeAbonnements() {
        return typeAbonnementRepository.findAll();
    }

    // Find a Type_Abonnement by its nombre_litres
    public Optional<Type_Abonnement> findTypeAbonnementByNombreLitres(Double nombreLitres) {
        return typeAbonnementRepository.findByNombreLitres(nombreLitres);
    }
}
