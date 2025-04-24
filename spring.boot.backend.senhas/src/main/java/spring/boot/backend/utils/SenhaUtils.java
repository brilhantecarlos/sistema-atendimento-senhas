package spring.boot.backend.utils;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicInteger;

import spring.boot.backend.senhas.model.TipoSenha;

public class SenhaUtils {

    private static final AtomicInteger contadorSP = new AtomicInteger(1);
    private static final AtomicInteger contadorSE = new AtomicInteger(1);
    private static final AtomicInteger contadorSG = new AtomicInteger(1);

    public static String gerarSenha(TipoSenha tipo) {
        String data = LocalDate.now().toString().replace("-", "").substring(2); // YYMMDD
        int sequencia;

        switch (tipo) {
            case SP:
                sequencia = contadorSP.getAndIncrement();
                break;
            case SE:
                sequencia = contadorSE.getAndIncrement();
                break;
            case SG:
                sequencia = contadorSG.getAndIncrement();
                break;
            default:
                throw new IllegalArgumentException("Tipo de senha inválido: " + tipo);
        }

        return String.format("%s-%s%03d", data, tipo, sequencia);
    }
}
