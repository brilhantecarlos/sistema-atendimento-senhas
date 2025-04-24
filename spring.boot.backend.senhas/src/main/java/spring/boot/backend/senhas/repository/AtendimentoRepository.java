package spring.boot.backend.senhas.repository;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import spring.boot.backend.senhas.model.Atendimento;
import spring.boot.backend.senhas.model.TipoSenha;

public interface AtendimentoRepository extends JpaRepository<Atendimento, Long> {

    List<Atendimento> findByDataAtendimentoOrderByDataAtendimentoDesc(LocalDate dataAtendimento);

    List<Atendimento> findByStatus(String status);

    List<Atendimento> findByDataAtendimentoAndStatus(LocalDate dataAtendimento, String status);

}
