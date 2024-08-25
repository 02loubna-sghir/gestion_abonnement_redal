package gestion_abo.controllers;

import gestion_abo.entities.Type_Abonnement;
import gestion_abo.services.TypeAbonnementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/type-abonnements")
public class TypeAbonnementController {

    private final TypeAbonnementService typeAbonnementService;

    @Autowired
    public TypeAbonnementController(TypeAbonnementService typeAbonnementService) {
        this.typeAbonnementService = typeAbonnementService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Type_Abonnement> getTypeAbonnementById(@PathVariable Integer id) {
        return typeAbonnementService.findTypeAbonnementById(id)
                .map(typeAbonnement -> ResponseEntity.ok().body(typeAbonnement))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/nombre-litres")
    public ResponseEntity<Type_Abonnement> getTypeAbonnementByNombreLitres(@RequestParam Double nombreLitres) {
        return typeAbonnementService.findTypeAbonnementByNombreLitres(nombreLitres)
                .map(typeAbonnement -> ResponseEntity.ok().body(typeAbonnement))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping
    public ResponseEntity<Type_Abonnement> createTypeAbonnement(@RequestBody Type_Abonnement typeAbonnement) {
        Type_Abonnement createdTypeAbonnement = typeAbonnementService.saveTypeAbonnement(typeAbonnement);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTypeAbonnement);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Type_Abonnement> updateTypeAbonnement(@PathVariable Integer id, @RequestBody Type_Abonnement typeAbonnement) {
        if (typeAbonnementService.findTypeAbonnementById(id).isPresent()) {
            typeAbonnement.setId_type_abonnement(id);
            Type_Abonnement updatedTypeAbonnement = typeAbonnementService.saveTypeAbonnement(typeAbonnement);
            return ResponseEntity.ok().body(updatedTypeAbonnement);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTypeAbonnement(@PathVariable Integer id) {
        if (typeAbonnementService.findTypeAbonnementById(id).isPresent()) {
            typeAbonnementService.deleteTypeAbonnementById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Type_Abonnement>> getAllTypeAbonnements() {
        List<Type_Abonnement> typeAbonnements = typeAbonnementService.findAllTypeAbonnements();
        return ResponseEntity.ok().body(typeAbonnements);
    }
}
