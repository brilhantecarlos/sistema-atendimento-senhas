import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TelaCliente1 from './components/Cliente/TelaCliente1';
import TelaCliente2 from './components/Cliente/TelaCliente2';
import TelaCliente3 from './components/Cliente/TelaCliente3';
import AtendenteTela1 from './components/Atendente/TelaAtendente1';
import TelaAtendente2 from './components/Atendente/TelaAtendente2';

const App = () => {
  const [modo, setModo] = useState('cliente'); // Controla o modo (cliente ou atendente)
  const [telaCliente, setTelaCliente] = useState(1); // Controle de navegação para telas de clientes
  const [telaAtendente, setTelaAtendente] = useState(1); // Controle de navegação para telas de atendentes
  const [senhaAtual, setSenhaAtual] = useState(null); // Armazena a última senha gerada
  const [ultimasSenhas, setUltimasSenhas] = useState([]); // Histórico de senhas geradas

  // Função para gerar uma nova senha
  const gerarNovaSenha = () => {
    const novaSenha = `230424-HP${ultimasSenhas.length + 1}`; // Exemplo de geração de senha
    setSenhaAtual(novaSenha);
    setUltimasSenhas([novaSenha, ...ultimasSenhas].slice(0, 5)); // Limita o histórico de senhas a 5
    setTelaCliente(3); // Vai para a TelaCliente3 após gerar uma senha
  };

  // Navegação para a TelaCliente1
  const voltarParaTelaCliente1 = () => {
    setTelaCliente(1); // Retorna à TelaCliente1
  };

  return (
    <div>
      {/* Controle de modo: Cliente ou Atendente */}
      {modo === 'cliente' && (
        <>
          {telaCliente === 1 && <TelaCliente1 onIniciar={() => setTelaCliente(2)} />}
          {telaCliente === 2 && <TelaCliente2 onContinuar={gerarNovaSenha} />}
          {telaCliente === 3 && <TelaCliente3 senha={senhaAtual} onFinalizar={voltarParaTelaCliente1} />}
        </>
      )}

      {modo === 'atendente' && (
        <>
          {telaAtendente === 1 && <AtendenteTela1 onTrocarTela={() => setTelaAtendente(2)} />}
          {telaAtendente === 2 && <TelaAtendente2 senhaAtual={senhaAtual} ultimasSenhas={ultimasSenhas} />}
        </>
      )}

      {/* Botões para alternar entre Cliente e Atendente */}
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <button onClick={() => setModo('cliente')} style={{ marginRight: 10 }}>
          Modo Cliente
        </button>
        <button onClick={() => setModo('atendente')}>
          Modo Atendente
        </button>
      </div>
    </div>
  );
};

// Renderiza o aplicativo na DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
