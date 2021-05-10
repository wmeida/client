import 'antd/dist/antd.css';
import { PageHeader, Button, Alert } from 'antd';
import {
  HomeOutlined,
  SettingOutlined,
  ExperimentOutlined,
} from '@ant-design/icons';
const Header = ({ setPagina, conectado }) => {
  return (
    <>
      <PageHeader
        ghost={false}
        title="Heisenbier"
        subTitle="Your own beer"
        extra={[
          <Button
            key="3"
            type="text"
            onClick={() => setPagina(0)}
            disabled={!conectado}
            icon={<HomeOutlined />}
          >
            Home
          </Button>,
          <Button
            key="2"
            type="text"
            onClick={() => setPagina(2)}
            disabled={!conectado}
            icon={<ExperimentOutlined />}
          >
            Brassagem
          </Button>,
          <Button
            key="1"
            type="text"
            onClick={() => setPagina(1)}
            disabled={!conectado}
            icon={<SettingOutlined />}
          >
            Settings
          </Button>,
        ]}
      ></PageHeader>
      <Alert
        message={conectado ? 'Conectado' : 'Desconectado'}
        type={conectado ? 'success' : 'warning'}
      />
    </>
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

export default Header;
