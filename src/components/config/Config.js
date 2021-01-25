import axios from 'axios';
import { useState, useEffect } from 'react';
//import api from '../../services/api.js'
//import axios from 'axios'
import Sensores from '../Sensores.js';
import PanelasConfig from './PanelasConfig.js';

const Config = () => {
  const [sensores, setSensores] = useState([0]);
  const [config, setConfig] = useState([0]);

  useEffect(() => {
    fetch('http://localhost:3000/sensores')
      .then((response) => response.json())
      .then((data) => setSensores(data));

    fetch('http://localhost:3000/panelas')
      .then((res) => res.json())
      .then((dataconf) => {
        setConfig(dataconf);
        console.log(config);
      });
  }, []);

  return (
    <div>
      <Sensores sensores={sensores} />
      <PanelasConfig panelas={config} />
    </div>
  );
};

export default Config;
//<PanelasConfig panelas={config.panelas} />
//<Sensores sensores={sensores} />
//<PanelasConfig panelas={config.panelas} />
//<Sensores sensores={sensores} />
//   <PanelasConfig panelas={config.panelas} />
