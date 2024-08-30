package gestion_abo.services;

import gestion_abo.entities.demande;
import gestion_abo.repositories.demandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class demandeService {

    private final demandeRepository demandeRepository;

    @Autowired
    public demandeService(demandeRepository clientRepository) {
        this.demandeRepository = clientRepository;
    }

    // Find a client by their ID
    public Optional<demande> finddemandeById(Integer id) {
        return demandeRepository.findById(id);
    }


    // Save or update a client
    public demande savedemande(demande demande) {
        return demandeRepository.save(demande);
    }

    // Delete a client by their ID
    public void deleteDemandeById(Integer id) {
        demandeRepository.deleteById(id);
    }

    // Retrieve all clients
    public List<demande> findAlldemande() {
        return demandeRepository.findAll();
    }
}

