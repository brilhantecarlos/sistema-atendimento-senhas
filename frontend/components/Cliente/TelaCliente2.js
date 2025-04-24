import React, { useState } from 'react';
import './TelaCliente2.css';

const TelaCliente2 = ({ onContinuar }) => {
  const [perfilSelecionado, setPerfilSelecionado] = useState('');

  const handleSelecao = (perfil) => {
    setPerfilSelecionado(perfil);
  };

  return (
    <div className="tela-cliente2">
      {/* Título */}
      <h1 className="titulo">Qual o seu perfil?</h1>

      {/* Opções de seleção */}
      <div className="opcoes">
        <div
          className={`opcao ${perfilSelecionado === 'Preferencial' ? 'selecionado' : ''}`}
          onClick={() => handleSelecao('Preferencial')}
        >
          Preferencial
        </div>
        <div
          className={`opcao ${perfilSelecionado === 'Geral' ? 'selecionado' : ''}`}
          onClick={() => handleSelecao('Geral')}
        >
          Geral
        </div>
        <div
          className={`opcao ${perfilSelecionado === 'Resultado de Exames' ? 'selecionado' : ''}`}
          onClick={() => handleSelecao('Resultado de Exames')}
        >
          Resultado de Exames
        </div>
      </div>

      {/* Botão Continuar */}
      {perfilSelecionado && (
        <button className="botao-continuar" onClick={onContinuar}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default TelaCliente2;
 
