import React from 'react';
import PanelaConfig from './PanelaConfig';
import { Grid } from 'antd';

//import { useState } from 'react';

const PanelasConfig = ({ config, sensores }) => {
  // const handleChange = (event) => {
  console.log(sensores.sensores);
  // };

  return (
    <>
      {config.panelas.map((panela) => (
        <PanelaConfig panela={panela} />
      ))}
    </>
  );
};

export default PanelasConfig;
