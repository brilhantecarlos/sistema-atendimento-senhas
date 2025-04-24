import React from 'react';
import './AtendenteTela1.css'; // Importando o CSS para os estilos

const AtendenteTela1 = () => {
  return (
    <div className="atendente-tela">
      {/* Frase no centro */}
      <h1 className="frase-centro">Próximo paciente</h1>

      {/* Botão */}
      <button className="botao-chamar">Chamar</button>
    </div>
  );
};

export default AtendenteTela1;
