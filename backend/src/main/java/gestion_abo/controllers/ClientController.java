package gestion_abo.controllers;

import gestion_abo.entities.Admin;
import gestion_abo.entities.Client;
import gestion_abo.services.AdminService;
import gestion_abo.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/clients") // Doit inclure '/api'
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
public class ClientController {

    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("/{id}")
    public Optional<Client> getClientById(@PathVariable Integer id) {
        return clientService.findClientById(id);
    }

    @GetMapping("/email")
    public Optional<Client> getClientByEmail(@RequestParam String email) {
        return clientService.findClientByEmail(email);
    }

    @PutMapping("/{id}")
    public Client updateClient(@PathVariable Integer id, @RequestBody Client client) {
        if (clientService.findClientById(id).isPresent()) {
            client.setId_client(id);
            return clientService.saveClient(client);
        } else {
            throw new ResourceAccessException("Client not found with id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Integer id) {
        clientService.deleteClientById(id);
    }

    @GetMapping
    public List<Client> getAllClients() {
        return clientService.findAllClients();
    }
    // ClientController.java
    @GetMapping("/login")
    public ResponseEntity<Map<String, Object>> loginClient(@RequestParam String email, @RequestParam String password) {
        Optional<Client> client = clientService.findClientByEmail(email);
        if (client.isPresent() && client.get().getPassword().equals(password)) {
            Integer idClient = client.get().getId_client();
            Map<String, Object> response = new HashMap<>();
            response.put("id_client", idClient);
            response.put("client", client.get());

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @Autowired
    private AdminService adminService; // Vous aurez besoin du service Admin pour récupérer l'admin avec id=1

    @PostMapping
    public Client createClient(@RequestBody Client client) {
        Admin admin = adminService.findAdminById(1)
                .orElseThrow(() -> new ResourceAccessException("Admin with id 1 not found"));
        client.setAdmin(admin); // Définir l'admin associé avec id 1
        return clientService.saveClient(client);
    }

}
