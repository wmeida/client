import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
//Initial State
const initialState = {
  panelas: [],
  bombas: [],
  buzzers: [],
  sensores: [],
  panelaspanelas: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getPanelas() {
    const res = await axios.get('http://192.168.0.83:3333/panelas');

    dispatch({
      type: 'GET_PANELAS',
      payload: res.data,
    });
  }

  async function getPanelasPanelas() {
    const res = await axios.get('http://192.168.0.83:3333/panelas/panelas');

    dispatch({
      type: 'GET_PANELASPANELAS',
      payload: res.data,
    });
  }

  async function updatePanela(id, pan) {
    //console.log("updating panela", id, pan)
    const res = await axios.put(`http://192.168.0.83:3333/panelas/${parseInt(id)}`, pan);


  }

  async function ligarPanela(id) {
    console.log("ligando panela", id)
    const res = await axios.put(`http://192.168.0.83:3333/panelas/ligar/${parseInt(id)}`, {
      action: 'pwm'
    });


  }

  async function getBombas() {
    const res = await axios.get('http://192.168.0.83:3333/bombas');

    dispatch({
      type: 'GET_BOMBAS',
      payload: res.data,
    });
  }

  async function updateBomba(id, bom) {
    //console.log("updating bomba", id, bom)
    const res = await axios.put(`http://192.168.0.83:3333/bombas/${parseInt(id)}`, bom);


  }

  async function getBuzzers() {
    const res = await axios.get('http://192.168.0.83:3333/buzzers');

    dispatch({
      type: 'GET_BUZZERS',
      payload: res.data,
    });
  }

  async function updateBuzzer(id, buz) {
    //console.log("updating buzzer", id, buz)
    const res = await axios.put(`http://192.168.0.83:3333/buzzers/${parseInt(id)}`, buz);


  }

  async function getSensores() {
    const res = await axios.get('http://192.168.0.83:3333/sensores');

    dispatch({
      type: 'GET_SENSORES',
      payload: res.data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        panelas: state.panelas,
        getPanelas,
        bombas: state.bombas,
        getBombas,
        buzzers: state.buzzers,
        getBuzzers,
        sensores: state.sensores,
        getSensores, updatePanela, updateBomba, updateBuzzer, panelaspanelas: state.panelaspanelas, getPanelasPanelas, ligarPanela
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
