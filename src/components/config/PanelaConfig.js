import React from 'react';

const PanelaConfig = ({ panela }) => {
  console.log(panela);
  return (
    <div>
      {panela.nome} {panela.sensor}
    </div>
  );
};

export default PanelaConfig;
