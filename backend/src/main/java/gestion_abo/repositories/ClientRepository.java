package gestion_abo.repositories;

import gestion_abo.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
    Optional<Client> findByEmail(String email);
    Optional<Client> findById(Integer id);
    void deleteById(Integer id);
    Client save(Client client);
    List<Client> findAll();
}
