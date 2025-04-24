package spring.boot.backend.senhas.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "senhas")
public class Senha {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numeroSenha;

    @Enumerated(EnumType.STRING)
    private TipoSenha tipo;

    private boolean atendida;
    
    private String status;

    private LocalDateTime dataHoraEmissao;

    private LocalDateTime dataHoraAtendimento;

}
