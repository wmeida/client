import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { Drawer, Button } from 'antd';
import 'antd/dist/antd.css';

import { GlobalContext } from '../../context/GlobalState';
import Panelas from './Panelas'

const Brassagem = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
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
      getPanelasPanelas()



      //console.log(panelaspanelas)

    }, 1000);
    return () => clearInterval(interval)

  }, [])
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Receita
      </Button>
      <Drawer
        title="Receita"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Button>Avançar</Button>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Panelas panelas={panelaspanelas} />
    </>
  )
};

export default Brassagem;
