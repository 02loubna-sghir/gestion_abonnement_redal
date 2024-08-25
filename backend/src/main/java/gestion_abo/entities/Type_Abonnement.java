package gestion_abo.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "Type_Abonnement")
public class Type_Abonnement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_type_abonnement;
    private Double nombre_litres;
}
