import { useState, useEffect } from 'react';
import axios from 'axios';

import Sensores from './Sensores.js';
import PanelasConfig from './PanelasConfig.js';
import Bombas from './Bombas';
import Buzzers from './Buzzers';

//import { GlobalContext } from '../../context/GlobalState';

const Config = ({ sensores, config }) => {
  //console.log('sensores', sensores);
  //console.log('panelas', panelas);
  // console.log('bombas', bombas);
  // console.log('processo', processo);
  console.log('config', config);
  // console.log('buzzers', buzzers);

  useEffect(() => {
    //getSensores();
    //getConfig();
  }, []);
  // const {
  //   panelas,

  //   bombas,

  //   buzzers,

  //   sensores,
  // } = useContext(GlobalContext);

  // const updatePanelas = (id) => {
  //   panelas.map((conf) => {
  //     if (conf.id === id) {
  //       conf.habilitada = !conf.habilitada;
  //     }
  //     return conf;
  //   });
  // };
  // const salvarConfig = () => { };

  // useEffect(() => {
  //   getPanelas();
  //   getBombas();
  //   getBuzzers();
  //   getSensores();
  // }, []);

  return (
    <>
      <PanelasConfig config={config} sensores={sensores} />
      <Sensores sensores={sensores} />
      <Bombas bombas={config.bombas} />
    </>
  );
};

export default Config;
