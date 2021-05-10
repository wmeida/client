import React, { useState } from 'react';
import ProcessoHeader from './ProcessoHeader';
import { useEffect, useContext } from 'react';
import socketIO from 'socket.io-client';

import { GlobalContext } from '../../context/GlobalState';
import Processo from './Processo';

const socket = socketIO('http://raspberrypi.local:3002');

const Brassagem = ({ config, sensores }) => {
  const {
    cfgprocesso,
    cfgpanelas,
    cfgbombas,

    getConfig,
  } = useContext(GlobalContext);
  const [panelas, setPanelas] = useState([]);
  const [processo, setProcesso] = useState([]);
  socket.on('panelas', (pan) => {
    ////console.log("Chegou panelas", pan)
    setPanelas(pan);
    //console.log('cfgpanelas', cfgpanelas)
    //console.log('pan', pan)
  });
  socket.on('processo', (pr) => {
    ////console.log("Chegou panelas", pan)
    setProcesso(pr);
    //console.log('cfgpanelas', cfgpanelas)
    //console.log('processo', pr);
  });
  useEffect(() => {
    //getConfig();
    socket.connect();
    //getBombas();
    // const interval = setInterval(async () => {
    //   getPanelasPanelas();

    // }, 10000);
    //return () => clearInterval(interval);
  }, []);
  return (
    <>
      <ProcessoHeader processo={cfgprocesso} />
      <Processo
        processo={cfgprocesso}
        panelas={config.panelas}
        dadospanelas={panelas}
        bombas={config.bombas}
        dadosprocesso={processo}
      />

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
