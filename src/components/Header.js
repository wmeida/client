import 'antd/dist/antd.css';
import { PageHeader, Button, Alert } from 'antd';
const Header = ({ setPagina, conectado }) => {
  return (
    <>
      <PageHeader
        ghost={false}
        title="Heisenbier"
        subTitle="Your own beer"
        extra={[
          <Button key="3" onClick={() => setPagina(0)} disabled={!conectado}>
            Home
          </Button>,
          <Button key="2" onClick={() => setPagina(2)} disabled={!conectado}>
            Brassagem
          </Button>,
          <Button key="1" onClick={() => setPagina(1)} disabled={!conectado}>
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
