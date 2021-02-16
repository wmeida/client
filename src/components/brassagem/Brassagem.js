import React from 'react';
import ProcessoHeader from './ProcessoHeader'
import { useEffect, useContext, useState } from 'react';
import { Row, Col, message, Button } from 'antd';
import axios from 'axios'
import XMLParser from 'react-xml-parser'
import xmlBeer from './doubleipa.xml'

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
    getConfig,
    getProcesso,
    processo,
    config
  } = useContext(GlobalContext);

  useEffect(() => {
    //getBombas();
    const interval = setInterval(async () => {
      getPanelasPanelas();
      getProcesso();
      //getConfig();


    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <ProcessoHeader processo={processo} />
      <Processo processo={processo} panelas={panelaspanelas} />

      {/* <Row gutter={12} style={{ margin: "20", padding: "20", background: "#000" }}>
        <Col xs={24} lg={9}>
          <Processo />
        </Col>
        <Col sm={24} lg={15}>
          <Panelas panelas={panelaspanelas} />
        </Col>

      </Row> */}

    </>
  );
};

export default Brassagem;
