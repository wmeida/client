//import axios from 'axios';
import { useState, useEffect } from 'react';
import api from '../../services/api.js';
//import axios from 'axios'
import Sensores from './Sensores.js';
import PanelasConfig from './PanelasConfig.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Config = () => {
  const [sensores, setSensores] = useState([]);
  const [config, setConfig] = useState([]);

  const getSensores = async () => {
    const response = await api.get('/sensores');
    setSensores(response.data);

    console.log(sensores);
  };

  const getConfig = async () => {
    const response = await api.get('/panelas');
    setConfig(response.data);

    console.log(config);
  };

  const updateConfig = (id) => {
    console.log('update', id);
    const updatedConfig = config.map((conf) => {
      if (conf.id === id) {
        conf.habilitada = !conf.habilitada;
      }
      return conf;
    });
    setConfig(updatedConfig);
  };
  const salvarConfig = () => {
    console.log(config, sensores);
  };

  useEffect(() => {
    getSensores();
    getConfig();
  }, []);
  console.log(sensores, config);
  return (
    <div>
      <Sensores sensores={sensores} />
      <PanelasConfig
        panelas={config}
        sensores={sensores}
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
