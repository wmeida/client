import { createContext, useState } from 'react';
import axios from 'axios';

export const ConfigContext = createContext(null);
export const ConfigProvider = ({ children }) => {
  let config = {};
  let sensores = {};
  let pagina = 0;
  async function getConfig() {
    const res = await axios.get('http://raspberrypi.local:3333/config');
    ////console.log(res.data.processo)
    config = res.data;
    console.log('chegou config', config);
  }
  async function getSensores() {
    const res = await axios.get('http://raspberrypi.local:3333/sensores');
    config = res.data;
    console.log('chegou sensores', sensores);
  }
  return (
    <ConfigContext.Provider
      value={{ config, sensores, getConfig, getSensores, pagina }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
