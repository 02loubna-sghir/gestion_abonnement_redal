package gestion_abo.controllers;

import gestion_abo.entities.Client;
import gestion_abo.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clients")
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

    @PostMapping
    public Client createClient(@RequestBody Client client) {
        return clientService.saveClient(client);
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
}
