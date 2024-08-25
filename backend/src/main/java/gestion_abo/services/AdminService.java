package gestion_abo.services;

import gestion_abo.entities.Admin;
import gestion_abo.entities.Client;
import gestion_abo.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // Find an admin by their ID
    public Optional<Admin> findAdminById(Integer id) {
        return adminRepository.findById(id);
    }

    // Find an admin by their email
    public Optional<Admin> findAdminByEmail(String email) {
        return adminRepository.findByEmail(email);
    }

    // Save or update an admin
    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    // Delete an admin by their ID
    public void deleteAdminById(Integer id) {
        adminRepository.deleteById(id);
    }

    // Retrieve all admins
    public List<Admin> findAllAdmins() {
        return adminRepository.findAll();
    }
}
