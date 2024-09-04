package gestion_abo.controllers;

import gestion_abo.entities.Admin;
import gestion_abo.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/admins")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
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

    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
        Optional<Admin> admin = adminService.findAdminByEmail(email);

        if (admin.isPresent() && admin.get().getPassword().equals(password)) {
            // Return the admin information (without the password for security reasons)
            Admin adminInfo = admin.get();
            adminInfo.setPassword(null); // Remove password from response
            return ResponseEntity.ok(adminInfo);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    @PutMapping("/{id}/change-password")
    public ResponseEntity<?> changePassword(@PathVariable Integer id, @RequestBody Map<String, String> passwordData) {
        Optional<Admin> adminOptional = adminService.findAdminById(id);

        if (adminOptional.isPresent()) {
            Admin admin = adminOptional.get();

            String currentPassword = passwordData.get("currentPassword");
            String newPassword = passwordData.get("newPassword");

            // Check if the current password matches
            if (admin.getPassword().equals(currentPassword)) {
                // Update the password
                admin.setPassword(newPassword);
                adminService.saveAdmin(admin);
                return ResponseEntity.ok("Password updated successfully.");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Current password is incorrect.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin not found.");
        }
    }


}
