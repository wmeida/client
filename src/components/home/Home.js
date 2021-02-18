import React from 'react'
import { useEffect, useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

const Home = () => {
  const {


    getConfig,



  } = useContext(GlobalContext);

  useEffect(() => {
    getConfig();
    //socket.connect()
    //getBombas();
    // const interval = setInterval(async () => {
    //   getPanelasPanelas();





    // }, 10000);
    //return () => clearInterval(interval);
  }, []);
  return (
    <div>
      Home page
    </div>
  )
}

export default Home

