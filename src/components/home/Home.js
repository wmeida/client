import React from 'react';
import { useEffect, useContext } from 'react';
import { Button } from 'antd';
import { GlobalContext } from '../../context/GlobalState';
import Brassagem from '../brassagem/Brassagem';
import Config from '../config/Config';

const Home = ({ pagina, setPagina, getConfig, getSensores }) => {
  useEffect(() => {
    getConfig();
    getSensores();
    //socket.connect()
    //getBombas();
    // const interval = setInterval(async () => {
    //   getPanelasPanelas();
    // }, 10000);
    //return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p style={{ color: '#fff' }}>Home</p>
    </>
  );
};

export default Home;
