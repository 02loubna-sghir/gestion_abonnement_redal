package gestion_abo.controllers;

import gestion_abo.entities.Admin;
import gestion_abo.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admins")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/{id}")
    public Optional<Admin> getAdminById(@PathVariable Integer id) {
        return adminService.findAdminById(id);
    }

    @GetMapping("/email")
    public Optional<Admin> getAdminByEmail(@RequestParam String email) {
        return adminService.findAdminByEmail(email);
    }

    @PostMapping
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.saveAdmin(admin);
    }

    @PutMapping("/{id}")
    public Admin updateAdmin(@PathVariable Integer id, @RequestBody Admin admin) {
        if (adminService.findAdminById(id).isPresent()) {
            admin.setId_admin(id);
            return adminService.saveAdmin(admin);
        } else {
            throw new ResourceAccessException("Admin not found with id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable Integer id) {
        adminService.deleteAdminById(id);
    }

    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.findAllAdmins();
    }
}
