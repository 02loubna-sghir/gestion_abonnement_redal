package gestion_abo.controllers;

import gestion_abo.entities.Abonnement;
import gestion_abo.repositories.AbonnementRepository;
import gestion_abo.services.AbonnementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/abonnements")
public class AbonnementController {

    private final AbonnementService abonnementService;
    private AbonnementRepository abonnementRepository;

    @Autowired
    public AbonnementController(AbonnementService abonnementService) {
        this.abonnementService = abonnementService;
    }

    @GetMapping("/{id}")
    public Optional<Abonnement> getAbonnementById(@PathVariable Integer id) {
        return abonnementService.findAbonnementById(id);
    }

    @PostMapping
    public Abonnement createAbonnement(@RequestBody Abonnement abonnement) {
        return abonnementService.saveAbonnement(abonnement);
    }

    @PutMapping("/{id}")
    public Abonnement updateAbonnement(@PathVariable Integer id, @RequestBody Abonnement abonnement) {
        if (abonnementRepository.existsById(id)) {
            abonnement.setId_abonnement(id);
            return abonnementService.saveAbonnement(abonnement);
        } else {
            throw new ResourceAccessException("Abonnement not found with id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteAbonnement(@PathVariable Integer id) {
        abonnementService.deleteAbonnementById(id);
    }

    @GetMapping
    public List<Abonnement> getAllAbonnements() {
        return abonnementService.findAllAbonnements();
    }
}
