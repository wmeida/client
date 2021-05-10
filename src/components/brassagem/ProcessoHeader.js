import 'antd/dist/antd.css';
import { PageHeader, Radio, Button, notification } from 'antd';
import {
  PlaySquareOutlined,
  PauseOutlined,
  StopOutlined,
} from '@ant-design/icons';
import axios from 'axios';
const ProcessoHeader = ({ processo }) => {
  const play = () => {
    async function mudaEstado() {
      await axios.put(`http://raspberrypi.local:3333/processo`, {
        action: 'mudaEstado',
        dado: true,
      });
    }
    mudaEstado();
  };

  const pause = () => {
    async function mudaEstado() {
      await axios.put(`http://raspberrypi.local:3333/processo`, {
        action: 'mudaEstado',
        dado: false,
      });
    }
    mudaEstado();
  };

  const stop = () => {
    async function apagaProcesso() {
      await axios.put(`http://raspberrypi.local:3333/processo`, {
        action: 'apagaProcesso',
        dado: true,
      });
    }
    apagaProcesso();
  };

  const manual = () => {
    //alterar para modo manual
  };

  const auto = () => {
    //alterar para modo automatico
    openNotification();
  };
  const openNotification = () => {
    const args = {
      message: 'Mudança de modo de operação',
      description: 'O modo de operação foi alterado para automático',
      duration: 0,
    };
    notification.open(args);
  };
  return (
    <PageHeader
      ghost={false}
      title="Modo"
      extra={[
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a" onClick={manual}>
            Manual
          </Radio.Button>
          <Radio.Button value="b" onClick={auto}>
            Auto
          </Radio.Button>
        </Radio.Group>,
      ]}
    >
      <Button
        type="text"
        icon={<PlaySquareOutlined />}
        onClick={play}
        disabled={processo.estado === false ? true : false}
      >
        Start
      </Button>
      <Button
        type="text"
        icon={<PauseOutlined />}
        onClick={pause}
        disabled={processo.estado === true ? true : false}
      >
        Pause
      </Button>
      <Button
        type="text"
        icon={<StopOutlined />}
        onClick={stop}
        disabled={processo.estado === true ? true : false}
      >
        Stop
      </Button>
      <small>{processo.modo}</small>
    </PageHeader>
    // <AppBar position="static">
    //   <Toolbar>
    //     <Typography variant="h6" href="/">
    //       Heisenbier
    //     </Typography>
    //     <Button color="inherit" href="/brassagem">
    //       Brassagem
    //     </Button>
    //     <Button color="inherit" href="/">
    //       Home
    //     </Button>

    //     <Button color="inherit" href="/config">
    //       Config
    //     </Button>
    //   </Toolbar>
    // </AppBar>
  );
};

export default ProcessoHeader;
