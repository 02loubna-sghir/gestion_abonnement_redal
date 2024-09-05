package gestion_abo.entities;

import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Abonnement")
public class Abonnement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_abonnement;
    private LocalDate date_debut;
    private Integer volume;
    private Double solde;

    @ManyToOne
    @JoinColumn(name = "id_client")
    private Client client;



}
