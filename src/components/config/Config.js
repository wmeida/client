import { useEffect, useContext } from 'react';

import Sensores from './Sensores.js';
import PanelasConfig from './PanelasConfig.js';
import Bombas from './Bombas'
import Buzzers from './Buzzers'

import { GlobalContext } from '../../context/GlobalState';

const Config = () => {
  const {
    panelas,
    getPanelas,
    bombas,
    getBombas,
    buzzers,
    getBuzzers,
    sensores,
    getSensores
  } = useContext(GlobalContext);

  // const updatePanelas = (id) => {
  //   panelas.map((conf) => {
  //     if (conf.id === id) {
  //       conf.habilitada = !conf.habilitada;
  //     }
  //     return conf;
  //   });
  // };
  const salvarConfig = () => { };

  useEffect(() => {
    getPanelas();
    getBombas();
    getBuzzers();
    getSensores();
  }, []);

  return (
    <>


      <Sensores sensores={sensores} />
      <PanelasConfig panelas={panelas} />
      <Bombas bombas={bombas} />
      <Buzzers buzzers={buzzers} />

    </>
  );
};

export default Config;
