import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
//Initial State
const initialState = {
  panelas: [],
  bombas: [],
  buzzers: [],
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

  async function getBombas() {
    const res = await axios.get('http://192.168.0.83:3333/bombas');

    dispatch({
      type: 'GET_BOMBAS',
      payload: res.data,
    });
  }

  async function getBuzzers() {
    const res = await axios.get('http://192.168.0.83:3333/buzzers');

    dispatch({
      type: 'GET_BUZZERS',
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
