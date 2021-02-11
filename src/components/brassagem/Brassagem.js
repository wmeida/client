import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { Drawer, Button } from 'antd';
import 'antd/dist/antd.css';

import { GlobalContext } from '../../context/GlobalState';
import Processo from './Processo';
import Panelas from './Panelas';

const Brassagem = () => {
  const {
    panelas,
    getPanelas,
    bombas,
    getBombas,
    panelaspanelas,
    getPanelasPanelas,
  } = useContext(GlobalContext);

  useEffect(() => {
    getBombas();
    const interval = setInterval(async () => {
      getPanelasPanelas();

      //console.log(panelaspanelas)
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Processo />
      <Panelas panelas={panelaspanelas} />
    </>
  );
};

export default Brassagem;
