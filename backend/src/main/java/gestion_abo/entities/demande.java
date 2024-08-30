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

    @ManyToOne
    @JoinColumn(name = "id_client")
    private Client client;

    @ManyToOne
    @JoinColumn(name = "id_type")
    private Typedemande typedemande;
}
