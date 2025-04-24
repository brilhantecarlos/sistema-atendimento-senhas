package spring.boot.backend.senhas.model;

import lombok.*;

@Getter
public enum TipoSenha {
    SP("Prioridade"),
    SE("Retirada de Exames"),
    SG("Geral");

    private final String descricao;

    TipoSenha(String descricao) {
        this.descricao = descricao;
    }
}
