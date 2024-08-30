package gestion_abo.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "Client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_client;
    private String nom;
    private String prenom;
    private String email;
    private String password;
    @ManyToOne
    @JoinColumn(name = "id_admin")
    private Admin admin;



}