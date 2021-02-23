import React, { useState } from 'react';
import ProcessoHeader from './ProcessoHeader'
import { useEffect, useContext } from 'react';
import socketIO from 'socket.io-client'



import { GlobalContext } from '../../context/GlobalState';
import Processo from './Processo';


const socket = socketIO("http://192.168.0.83:3002");


const Brassagem = () => {



  const {
    cfgprocesso,
    cfgpanelas,
    cfgbombas,

    getConfig,



  } = useContext(GlobalContext);
  const [panelas, setPanelas] = useState([])
  socket.on("panelas", (pan) => {
    ////console.log("Chegou panelas", pan)
    setPanelas(pan)
    //console.log('cfgpanelas', cfgpanelas)
    //console.log('pan', pan)
  })
  useEffect(() => {
    getConfig();
    socket.connect()
    //getBombas();
    // const interval = setInterval(async () => {
    //   getPanelasPanelas();





    // }, 10000);
    //return () => clearInterval(interval);
  }, []);
  return (
    <>
      <ProcessoHeader processo={cfgprocesso} />
      <Processo processo={cfgprocesso} panelas={cfgpanelas} dadospanelas={panelas} bombas={cfgbombas} />

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
