package gestion_abo.repositories;

import gestion_abo.entities.Admin;
import gestion_abo.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
    Optional<Admin> findByEmail(String email);
    Optional<Admin> findById(Integer id);
    void deleteById(Integer id);
    Admin save(Client client);
    List<Admin> findAll();
}
