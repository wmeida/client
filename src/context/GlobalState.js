import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
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
    const res = await axios.get('http://192.168.0.83:3333/panelas/panelas');

    dispatch({
      type: 'GET_PANELASPANELAS',
      payload: res.data,
    });
  }

  async function updatePanela(id, pan) {
    ////console.log("updating panela", id, pan)
    await axios.put(`http://192.168.0.83:3333/panelas/${parseInt(id)}`, pan);
  }
  async function alterarPotenciaPanela(id, potencia) {
    //console.log("alterando potencia da panela", id, potencia)
    // axios({
    //   method: 'put',
    //   url: 'http://192.168.0.83:3333/panelas',
    //   data: id,
    //   config: { headers: { 'Content-Type': 'application/json' } }
    // })
    axios.put(`http://192.168.0.83:3333/panelas`, {
      action: 'potencia',
      modo: 'manual',
      id: id,
      potencia: potencia,
    });
  }

  async function alterarTemperaturaPanela(id, temperatura, tempo) {
    //console.log("alterando temperatura e tempo da panela", id, temperatura, tempo)
    // axios({
    //   method: 'put',
    //   url: 'http://192.168.0.83:3333/panelas',
    //   data: id,
    //   config: { headers: { 'Content-Type': 'application/json' } }
    // })
    axios.put(`http://192.168.0.83:3333/panelas`, {
      action: 'auto',
      modo: 'auto',
      id: id,
      temperatura: temperatura,
      tempo: tempo,
    });
  }

  async function ligarPanela(id, ligar) {
    console.log('ligando panela', id, ligar);
    await axios.put(`http://192.168.0.83:3333/panelas`, {
      action: 'ligar',
      id: id,
      ligar: ligar,
    });
  }

  async function updateBomba(id, bom) {
    ////console.log("updating bomba", id, bom)
    await axios.put(`http://192.168.0.83:3333/bombas/${parseInt(id)}`, bom);
  }

  async function updateBuzzer(id, buz) {
    ////console.log("updating buzzer", id, buz)
    await axios.put(`http://192.168.0.83:3333/buzzers/${parseInt(id)}`, buz);
  }

  async function getSensores() {
    const res = await axios.get('http://192.168.0.83:3333/sensores');

    dispatch({
      type: 'GET_SENSORES',
      payload: res.data,
    });
  }

  async function getConfig() {
    const res = await axios.get('http://192.168.0.83:3333/config');
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
        updatePanela,
        updateBomba,
        updateBuzzer,
        panelaspanelas: state.panelaspanelas,
        getPanelasPanelas,
        config: state.config,
        ligarPanela,
        getConfig,
        alterarPotenciaPanela,
        alterarTemperaturaPanela,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
