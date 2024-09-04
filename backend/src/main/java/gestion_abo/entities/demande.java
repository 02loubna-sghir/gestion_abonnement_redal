package gestion_abo.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "demande")
public class demande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_demande;
    private String description;
    private String etat ;
    private String type;

    @ManyToOne
    @JoinColumn(name = "id_client")
    private Client client;


}
