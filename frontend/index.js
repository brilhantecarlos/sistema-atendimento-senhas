import React from 'react';
import ReactDOM from 'react-dom';
import AtendenteTela1 from './components/AtendenteTela1/AtendenteTela1';

const App = () => {
  return (
    <div>
      <h1>Sistema de Atendimento de Senhas</h1>
      <p>Bem-vindo ao sistema de atendimento!</p>
      {/* Renderizando a Tela do Atendente */}
      <AtendenteTela1 />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
