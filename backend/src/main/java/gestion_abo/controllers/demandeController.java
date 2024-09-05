package gestion_abo.controllers;

import gestion_abo.entities.demande;
import gestion_abo.services.demandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/demande")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
public class demandeController {

    private final demandeService demandeService;

    @Autowired
    public demandeController(demandeService demandeService) {
        this.demandeService = demandeService;
    }

    @GetMapping("/{id}")
    public Optional<demande> getClientById(@PathVariable Integer id) {

        return demandeService.finddemandeById(id);
    }

    @PostMapping
    public demande createdemande(@RequestBody demande demande) {
        System.out.println("Demande reçue : " + demande);

        return demandeService.savedemande(demande);
    }

    @PutMapping("/{id}")
    public demande updatedemande(@PathVariable Integer id, @RequestBody demande demandeDetails) {
        // Récupérer la demande existante depuis la base de données
        demande existingDemande = demandeService.finddemandeById(id).orElseThrow(
                () -> new ResourceAccessException("Demande not found with id " + id));

        // Mettre à jour uniquement les champs nécessaires
        existingDemande.setEtat(demandeDetails.getEtat()); // Met à jour l'état
        // Ajouter d'autres champs si besoin

        // Sauvegarder la demande mise à jour
        return demandeService.savedemande(existingDemande);
    }


    @DeleteMapping("/{id}")
    public void deletedemande(@PathVariable Integer id) {
        demandeService.deleteDemandeById(id);
    }

    @GetMapping
    public List<demande> getAlldemande() {
        return demandeService.findAlldemande();
    }

    // New endpoint to get the total number of demandes
    @GetMapping("/count")
    public long countDemandes() {
        return demandeService.countDemandes();
    }
}
