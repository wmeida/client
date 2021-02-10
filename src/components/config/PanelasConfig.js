import React from 'react';
import PanelaConfig from './PanelaConfig';

import { useState } from 'react';



const PanelasConfig = ({ panelas, onUpdate, sensores }) => {

  const handleChange = (event) => {
    ////console.log(event.target);
  };
  return (

    <div style={{ margin: 20, padding: 20 }}>
      {/* <Grid container spacing={40} justify="center">
        {panelas.map((panela) => (
          <PanelaConfig panela={panela} />

        ))
        }
      </Grid> */}

    </div >
  );
};

export default PanelasConfig;
