import React from 'react';
import { useEffect, useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';
import Panelas from './Panelas'

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
      getPanelasPanelas()



      //console.log(panelaspanelas)

    }, 1000);
    return () => clearInterval(interval)

  }, [])
  return (
    <>
      <Panelas panelas={panelaspanelas} />
    </>
  )
};

export default Brassagem;
