package spring.boot.backend.senhas.service;

import spring.boot.backend.senhas.repository.*;
import spring.boot.backend.utils.SenhaUtils;
import spring.boot.backend.senhas.model.*;

import java.time.LocalDateTime;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class AtendimentoService {
    
    private final AtendimentoRepository atendimentoRepository;
    private final SenhaRepository senhaRepository;

    public AtendimentoService(AtendimentoRepository atendimentoRepository, SenhaRepository senhaRepository) {
        this.atendimentoRepository = atendimentoRepository;
        this.senhaRepository = senhaRepository;
    }

    public Optional<Senha> chamarProximaSenha() {
        // Prioridade: SP > SE > SG
        for (TipoSenha tipo : new TipoSenha[]{TipoSenha.SP, TipoSenha.SE, TipoSenha.SG}) {
            var senhas = senhaRepository.findByTipo(tipo);

            if(!senhas.isEmpty()) {
                var senha = senhas.get(0);
                senha.setAtendida(true);
                senhaRepository.save(senha);
                return Optional.of(senha);
            }
        }

        return Optional.empty();
    }

    public Atendimento registrarAtendimento(Senha senha, String guiche) {
        // Atualiza o status e a data/hora de atendimento na senha
        senha.setStatus("Atendido");
        senha.setDataHoraAtendimento(LocalDateTime.now());
        senhaRepository.save(senha);

        // Cria o registro de atendimento
        Atendimento atendimento = new Atendimento();
        atendimento.setSenha(senha);
        atendimento.setGuiche(guiche);
        atendimento.setStatus("Atendido");
        atendimento.setDataAtendimento(LocalDateTime.now());
        return atendimentoRepository.save(atendimento);
    }

    public Senha gerarSenha(TipoSenha tipo) {
        Senha senha = new Senha();
        senha.setTipo(tipo);
        senha.setNumeroSenha(SenhaUtils.gerarSenha(tipo)); // Gere o número no formato YYMMDD-PPSQ
        senha.setDataHoraEmissao(LocalDateTime.now());
        senha.setAtendida(false);
        return senhaRepository.save(senha);
    }

    public Optional<Senha> buscarSenhaPorId(Long id) {
        return senhaRepository.findById(id);
    }
}
