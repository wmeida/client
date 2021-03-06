import React from 'react';
import { useEffect } from 'react';

const Home = ({ pagina, setPagina, getConfig, getSensores, conectado }) => {
  useEffect(() => {
    getConfig();
    getSensores();
    setInterval(getConfig, 5000);
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
