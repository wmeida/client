import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { Row, Col } from 'antd';

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

    <Row gutter={12} style={{ margin: "20", padding: "20", background: "#000" }}>
      <Col xs={24} lg={9}>
        <Processo />
      </Col>
      <Col sm={24} lg={15}>
        <Panelas panelas={panelaspanelas} />
      </Col>
    </Row>


  );
};

export default Brassagem;
