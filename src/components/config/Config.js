import { useEffect, useContext } from 'react';

import Sensores from './Sensores.js';
import PanelasConfig from './PanelasConfig.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { GlobalContext } from '../../context/GlobalState';

const Config = () => {
  const {
    panelas,
    getPanelas,
    bombas,
    getBombas,
    buzzers,
    getBuzzers,
  } = useContext(GlobalContext);

  // const updatePanelas = (id) => {
  //   panelas.map((conf) => {
  //     if (conf.id === id) {
  //       conf.habilitada = !conf.habilitada;
  //     }
  //     return conf;
  //   });
  // };
  const salvarConfig = () => {};

  useEffect(() => {
    getPanelas();
    getBombas();
    getBuzzers();
  }, []);

  return (
    <div>
      <PanelasConfig panelas={panelas} />
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button onClick={salvarConfig}>Salvar</Button>
        <Button>Cancelar</Button>
      </ButtonGroup>
    </div>
  );
};

export default Config;
