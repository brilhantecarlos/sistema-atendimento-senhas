import React from 'react';
import './TelaCliente1.css';

const TelaCliente1 = ({ onIniciar }) => {
  return (
    <div className="tela-cliente1">
      {/* Texto no centro */}
      <h1 className="texto-centro">Gerar uma nova senha</h1>

      {/* Botão para iniciar */}
      <button className="botao-iniciar" onClick={onIniciar}>
        Iniciar
      </button>
    </div>
  );
};

export default TelaCliente1;
