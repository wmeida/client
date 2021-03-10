import 'antd/dist/antd.css';
import { PageHeader, Radio, Button, notification } from 'antd';
import { PlaySquareOutlined, PauseOutlined, StopOutlined } from '@ant-design/icons';
const ProcessoHeader = ({ processo }) => {
  const play = () => {
    //dar play em processo
  }

  const pause = () => {
    //dar pause em processo
  }

  const stop = () => {
    //dar stop em processo
  }

  const manual = () => {
    //alterar para modo manual
  }

  const auto = () => {
    //alterar para modo automatico
    openNotification()
  }
  const openNotification = () => {
    const args = {
      message: 'Mudança de modo de operação',
      description:
        'O modo de operação foi alterado para automático',
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
          <Radio.Button value="a" onClick={manual}>Manual</Radio.Button>
          <Radio.Button value="b" onClick={auto}>
            Auto
          </Radio.Button>
        </Radio.Group>,
      ]}
    >
      <Button icon={<PlaySquareOutlined />} onClick={play}>Play</Button>
      <Button icon={<PauseOutlined />} onClick={pause}>Pause</Button>
      <Button icon={<StopOutlined />} onClick={stop}>Stop</Button>
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
