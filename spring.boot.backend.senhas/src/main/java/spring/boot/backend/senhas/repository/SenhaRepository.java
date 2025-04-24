package spring.boot.backend.senhas.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import spring.boot.backend.senhas.model.Senha;
import spring.boot.backend.senhas.model.TipoSenha;

public interface SenhaRepository extends JpaRepository<Senha, Long> {
    // Aqui você pode adicionar métodos personalizados, se necessário
    // Exemplo: List<Senha> findByStatus(String status);
    List<Senha> findByStatus(String status);

    List<Senha> findByTipo(TipoSenha tipo);

    List<Senha> findByTipoAndStatus(TipoSenha tipo, String status);

}
