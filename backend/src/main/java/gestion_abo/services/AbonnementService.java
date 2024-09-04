package gestion_abo.services;

import gestion_abo.entities.Abonnement;
import gestion_abo.repositories.AbonnementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AbonnementService {

    private final AbonnementRepository abonnementRepository;

    @Autowired
    public AbonnementService(AbonnementRepository abonnementRepository) {
        this.abonnementRepository = abonnementRepository;
    }

    // Find an abonnement by its ID
    public Optional<Abonnement> findAbonnementById(Integer id) {
        return abonnementRepository.findById(id);
    }

    // Save or update an abonnement
    public Abonnement saveAbonnement(Abonnement abonnement) {
        return abonnementRepository.save(abonnement);
    }

    // Delete an abonnement by its ID
    public void deleteAbonnementById(Integer id) {
        abonnementRepository.deleteById(id);
    }

    // Retrieve all abonnements
    public List<Abonnement> findAllAbonnements() {
        return abonnementRepository.findAll();
    }

    // Retrieve abonnements by client ID
    public List<Abonnement> findAbonnementsByClientId(Integer idClient) {
        return abonnementRepository.findByClientIdClient(idClient);
    }

    public long countAbonnements() {
        return abonnementRepository.count();
    }

    public double sumVolumes() {
        return abonnementRepository.sumVolumes();
    }
}
