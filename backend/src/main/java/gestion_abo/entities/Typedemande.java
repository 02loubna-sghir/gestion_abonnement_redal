package gestion_abo.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "Typedemande")
public class Typedemande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_type;
    private String description;

}