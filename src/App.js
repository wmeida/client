import Header from './components/Header';
import './App.css'
//import api from './services/api';
//import Button from './components/Button'
//import { useState, useEffect } from 'react';
//import Sensores from './components/Sensores'
import './components/home/Home';
import Config from './components/config/Config';
import Brassagem from './components/brassagem/Brassagem';
//import api from './services/api'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div  >
          <Header title="Heisenbier" />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/config" component={Config} />
            <Route path="/brassagem" component={Brassagem} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
};

export default App;
