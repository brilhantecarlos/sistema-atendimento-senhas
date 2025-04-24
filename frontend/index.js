import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Tela2 from './components/Tela2/Tela2';

const App = () => {
  const [senhaAtual, setSenhaAtual] = useState(null);
  const [ultimasSenhas, setUltimasSenhas] = useState([]);

  const chamarNovaSenha = () => {
    const novaSenha = `230424-HP${ultimasSenhas.length + 1}`; // Exemplo gerado
    setSenhaAtual(novaSenha);
    setUltimasSenhas([novaSenha, ...ultimasSenhas].slice(0, 5)); // Limita a 5 senhas
  };

  return (
    <div>
      <button onClick={chamarNovaSenha}>Chamar Nova Senha</button>
      <Tela2 senhaAtual={senhaAtual} ultimasSenhas={ultimasSenhas} />
    </div>
  );
};

// Apenas uma chamada ao ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
