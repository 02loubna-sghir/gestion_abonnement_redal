package gestion_abo.controllers;

import gestion_abo.entities.Abonnement;
import gestion_abo.services.AbonnementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.time.Month;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/abonnements")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
public class AbonnementController {

    private final AbonnementService abonnementService;

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
        Optional<Abonnement> existingAbonnement = abonnementService.findAbonnementById(id);
        if (existingAbonnement.isPresent()) {
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

    @GetMapping("/client/{idClient}")
    public List<Abonnement> getAbonnementsByClientId(@PathVariable Integer idClient) {
        return abonnementService.findAbonnementsByClientId(idClient);
    }

    @GetMapping("/count")
    public long countAbonnements() {
        return abonnementService.countAbonnements();
    }

    @GetMapping("/sum-volume")
    public double getTotalVolume() {
        return abonnementService.sumVolumes();
    }

//chart
    @GetMapping("/volume-by-month")
    public Map<Month, Double> getVolumeByMonth() {
        return abonnementService.getTotalVolumeByMonth();
    }

}
