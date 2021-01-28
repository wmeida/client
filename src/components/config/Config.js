//import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import api from '../../services/api.js';
//import axios from 'axios'
import Sensores from './Sensores.js';
import PanelasConfig from './PanelasConfig.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { GlobalContext } from '../../context/GlobalState'


const Config = () => {

  const { config, getConfig } = useContext(GlobalContext)




  const updateConfig = (id) => {

    const updatedConfig = config.map((conf) => {
      if (conf.id === id) {
        conf.habilitada = !conf.habilitada;
      }
      return conf;
    });

  };
  const salvarConfig = () => {

  };

  useEffect(() => {

    getConfig();

  }, []);

  return (
    <div>

      <PanelasConfig
        panelas={config}

        onUpdate={updateConfig}
      />
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button onClick={salvarConfig}>Salvar</Button>
        <Button>Cancelar</Button>
      </ButtonGroup>
    </div>
  );
};

export default Config;
//<PanelasConfig panelas={config.panelas} />
//<Sensores sensores={sensores} />
//<PanelasConfig panelas={config.panelas} />
//<Sensores sensores={sensores} />
//   <PanelasConfig panelas={config.panelas} />
