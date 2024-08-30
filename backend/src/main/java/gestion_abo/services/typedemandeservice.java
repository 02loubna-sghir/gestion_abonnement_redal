package gestion_abo.services;

import gestion_abo.entities.Typedemande;
import gestion_abo.entities.demande;
import gestion_abo.repositories.TypedemandeRepository;
import gestion_abo.repositories.demandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class typedemandeservice {

    private final TypedemandeRepository typedemandeRepository;

    @Autowired
    public typedemandeservice(TypedemandeRepository typedemandeRepository) {
        this.typedemandeRepository = typedemandeRepository;
    }

    // Find a client by their ID
    public Optional<Typedemande> findtypedemandeById(Integer id) {
        return typedemandeRepository.findById(id);
    }


    // Save or update a client
    public Typedemande savetypedemande(Typedemande demande) {
        return typedemandeRepository.save(demande);
    }

    // Delete a client by their ID
    public void deleteTypeDemandeById(Integer id) {
        typedemandeRepository.deleteById(id);
    }

    // Retrieve all clients
    public List<Typedemande> findAllTypesdemande() {
        return typedemandeRepository.findAll();
    }
}

