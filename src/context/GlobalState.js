import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
const hardIp = 'http://raspberrypi.local:3333';
//Initial State
const initialState = {
  pagina: 0,
  sensores: [],
  panelaspanelas: [],
  config: [],
  cfgprocesso: [],
  cfgpanelas: [],
  cfgbombas: [],
  cfgbuzzers: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getPanelasPanelas() {
    const res = await axios.get(hardIp + '/panelas/panelas');

    dispatch({
      type: 'GET_PANELASPANELAS',
      payload: res.data,
    });
  }

  async function getSensores() {
    const res = await axios.get(hardIp + '/sensores');

    dispatch({
      type: 'GET_SENSORES',
      payload: res.data,
    });
  }

  async function getConfig() {
    const res = await axios.get(hardIp + '/config');
    ////console.log(res.data.processo)
    dispatch({
      type: 'GET_CONFIG',
      payload: res.data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        pagina: state.pagina,
        cfgprocesso: state.cfgprocesso,
        cfgpanelas: state.cfgpanelas,
        cfgbombas: state.cfgbombas,
        cfgbuzzers: state.cfgbuzzers,

        sensores: state.sensores,
        getSensores,

        panelaspanelas: state.panelaspanelas,
        getPanelasPanelas,
        config: state.config,

        getConfig,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
