import React from 'react';
import './TelaCliente3.css';

const TelaCliente3 = ({ senha, onFinalizar }) => {
  return (
    <div className="tela-cliente3">
      {/* Texto centralizado "Sua senha é" */}
      <h1 className="titulo">Sua senha é</h1>

      {/* Senha exibida em destaque */}
      <p className="senha">{senha}</p>

      {/* Botão Finalizar */}
      <button className="botao-finalizar" onClick={onFinalizar}>
        Finalizar
      </button>
    </div>
  );
};

export default TelaCliente3;
