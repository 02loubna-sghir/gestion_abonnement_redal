package gestion_abo.services;

import gestion_abo.entities.Client;
import gestion_abo.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    // Find a client by their ID
    public Optional<Client> findClientById(Integer id) {
        return clientRepository.findById(id);
    }

    // Find a client by their email
    public Optional<Client> findClientByEmail(String email) {
        return clientRepository.findByEmail(email);
    }

    // Save or update a client
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    // Delete a client by their ID
    public void deleteClientById(Integer id) {
        clientRepository.deleteById(id);
    }

    // Retrieve all clients
    public List<Client> findAllClients() {
        return clientRepository.findAll();
    }
}
