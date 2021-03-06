import React from 'react';
import PanelaConfig from './PanelaConfig';
import { Row } from 'antd';

//import { useState } from 'react';

const PanelasConfig = ({ config, sensores }) => {
  // const handleChange = (event) => {
  console.log(sensores.sensores);
  // };

  return (
    <>
      <Row>
        {config.panelas.map((panela) => (
          <PanelaConfig panela={panela} />
        ))}
      </Row>
    </>
  );
};

export default PanelasConfig;
