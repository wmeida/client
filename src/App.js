import Header from './components/Header';
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import './components/home/Home';
import Config from './components/config/Config';
import Brassagem from './components/brassagem/Brassagem';
import Home from './components/home/Home';
//import { ConfigContext, ConfigProvider } from './context/ConfigContext';

const App = () => {
  const [pagina, setPagina] = useState(0);
  const [config, setConfig] = useState();
  const [sensores, setSensores] = useState();
  async function getConfig() {
    const res = await axios.get('http://raspberrypi.local:3333/config');
    ////console.log(res.data.processo)
    setConfig(res.data);

    console.log('chegou config', config);
  }
  async function getSensores() {
    const res = await axios.get('http://raspberrypi.local:3333/sensores');
    setSensores(res.data);

    console.log('chegou sensores', sensores);
  }
  console.log('pagina', pagina);
  switch (pagina) {
    case 0:
      return (
        <>
        <Header setPagina={setPagina} />
        <Home
          pagina={pagina}
          setPagina={setPagina}
          getSensores={getSensores}
          getConfig={getConfig}
        />
        </>
      );
    case 1:
      return (
        <>
        <Header setPagina={setPagina} />
        <Config
          config={config.config}
          sensores={sensores.sensores}
          getSensores={getSensores}
          getConfig={getConfig}
        />
        </>
      );
    case 2:
      return (
        <>
        <Header setPagina={setPagina} />
        <Brassagem
          config={config.config}
          sensores={sensores.sensores}
          getSensores={getSensores}
          getConfig={getConfig}
        />
        </>
      );
    default:
      return null;
  }
  // return (
  //   <GlobalProvider>
  //     <Router>
  //       <div>
  //         <Header title="Heisenbier" />
  //         <Switch>
  //           <Route path="/" exact component={Home} />
  //           <Route path="/config" component={Config} />
  //           <Route path="/brassagem" component={Brassagem} />
  //         </Switch>
  //       </div>
  //     </Router>
  //   </GlobalProvider>
  // );
};

export default App;
