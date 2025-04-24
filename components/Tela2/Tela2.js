import React, { useState, useEffect } from 'react';
import './Tela2.css';

const Tela2 = ({ senhaAtual, ultimasSenhas }) => {
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [contador, setContador] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Atualiza o relógio
  useEffect(() => {
    const intervaloRelogio = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(intervaloRelogio); // Limpeza
  }, []);

  // Inicia o contador quando a senha é chamada
  useEffect(() => {
    if (senhaAtual) {
      setContador(0); // Reinicia o contador
      if (intervalId) clearInterval(intervalId); // Limpa o contador anterior

      const intervaloContador = setInterval(() => {
        setContador((prev) => prev + 1);
      }, 1000); // Incrementa a cada segundo

      setIntervalId(intervaloContador);

      return () => clearInterval(intervaloContador); // Limpeza
    }
  }, [senhaAtual]);

  return (
    <div className="tela2">
      {/* Relógio no canto superior esquerdo */}
      <div className="relogio">
        {horaAtual.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </div>

      {/* Contador no canto superior direito */}
      <div className="contador">{contador}s</div>

      {/* Senha no centro */}
      <div className="senha-atual">{senhaAtual || "Aguardando senha..."}</div>

      {/* Últimas senhas na parte inferior */}
      <div className="ultimas-senhas">
        <h3>Últimas Senhas:</h3>
        <ul>
          {ultimasSenhas.length > 0 ? (
            ultimasSenhas.map((senha, index) => (
              <li key={index}>{senha}</li>
            ))
          ) : (
            <li>Nenhuma senha chamada ainda.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Tela2;
