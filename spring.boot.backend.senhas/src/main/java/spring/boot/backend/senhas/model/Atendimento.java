package spring.boot.backend.senhas.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "atendimentos")
public class Atendimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Senha senha;

    private LocalDateTime dataAtendimento;
    
    private String guiche;

    private String status;
}
