
package gestion_abo.controllers;

import gestion_abo.entities.Typedemande;
import gestion_abo.entities.demande;
import gestion_abo.services.demandeService;
import gestion_abo.services.typedemandeservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Type-demande")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
public class TypedemandeController {

    private final typedemandeservice typedemandeservice;

    @Autowired
    public TypedemandeController(typedemandeservice typedemandeservice) {
        this.typedemandeservice = typedemandeservice;
    }

    @GetMapping("/{id}")
    public Optional<Typedemande> getTypeDemandeById(@PathVariable Integer id) {
        return typedemandeservice.findtypedemandeById(id);
    }

    @PostMapping
    public Typedemande createtypedemande(@RequestBody Typedemande typedemande) {
        return typedemandeservice.savetypedemande(typedemande);
    }

    @PutMapping("/{id}")
    public Typedemande updatedemande(@PathVariable Integer id, @RequestBody Typedemande typedemande) {
        if (typedemandeservice.findtypedemandeById(id).isPresent()) {
            typedemande.setId_type(id);
            return typedemandeservice.savetypedemande(typedemande);
        } else {
            throw new ResourceAccessException("demande not found with id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void deletetypedemande(@PathVariable Integer id) {
        typedemandeservice.deleteTypeDemandeById(id);
    }

    @GetMapping
    public List<Typedemande> getAlltypedemande() {
        return typedemandeservice.findAllTypesdemande();
    }
}

