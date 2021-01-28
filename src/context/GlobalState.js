import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
//Initial State
const initialState = {
  config: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  async function getConfig() {

    const res = await axios.get('http://192.168.0.83:3333/panelas')

    dispatch({
      type: 'GET_CONFIG',
      payload: res.data
    })
  }

  return (<GlobalContext.Provider value={{ config: state.config, getConfig }}>
    {children}
  </GlobalContext.Provider>)
}