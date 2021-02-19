import 'antd/dist/antd.css';
import { PageHeader, Radio } from 'antd';

const ProcessoHeader = ({ processo }) => {
  ////console.log('processo', processo)
  return (
    <PageHeader
      ghost={false}

      title="Modo"

      extra={[
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Manual</Radio.Button>
          <Radio.Button value="b">Auto</Radio.Button>
        </Radio.Group>
      ]}
    >

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
