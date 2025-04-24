package spring.boot.backend.senhas.controller;

import org.springframework.web.bind.annotation.*;
import spring.boot.backend.senhas.service.AtendimentoService;
import spring.boot.backend.senhas.model.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/atendimentos")
public class AtendimentoController {

    private final AtendimentoService atendimentoService;

    public AtendimentoController(AtendimentoService atendimentoService) {
        this.atendimentoService = atendimentoService;
    }

    @GetMapping("/chamar")
    public ResponseEntity<Senha> chamarProximaSenha() {
        return atendimentoService.chamarProximaSenha()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.noContent().build());
    }
    
    @PostMapping("/finalizar")
    public ResponseEntity<Void> finalizarAtendimento(@RequestParam Long senhaId, @RequestParam String guiche) {
        var senhaOptional = atendimentoService.buscarSenhaPorId(senhaId);
        if (senhaOptional.isPresent()) {
            atendimentoService.registrarAtendimento(senhaOptional.get(), guiche);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/novasenha")
    public ResponseEntity<Senha> inserirSenha(@RequestParam TipoSenha tipo) {
        //TODO: process POST request
        Senha senha = atendimentoService.gerarSenha(tipo);
        return ResponseEntity.ok(senha);
    }

    /*
    @Scheduled(fixedRate = 60000) // Executa a cada 60 segundos
    public void gerarSenhasAutomaticamente() {
        
        for (TipoSenha tipo : TipoSenha.values()) {
            atendimentoService.gerarSenha(tipo);
        }
    }
    */
}