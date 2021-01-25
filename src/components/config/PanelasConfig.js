import React from 'react';
import PanelaConfig from './PanelaConfig';

const PanelasConfig = ({ panelas }) => {
  return (
    <>
      {panelas.map((panela) => (
        <PanelaConfig panela={panela} />
      ))}
    </>
  );
};

export default PanelasConfig;
//{panelas.map((panela) => (<h3>{panela.nome}</h3>))}
//<h3>{panela.nome}</h3>
//<PanelaConfig panela={panela} />
