import 'antd/dist/antd.css';
import { PageHeader, Button } from 'antd';
const Header = (props) => {
  return (
    <PageHeader
      ghost={false}

      title="Heisenbier"
      subTitle="Your own beer"
      extra={[
        <Button key="3" href="/">Home</Button>,
        <Button key="2" href="/brassagem">Brassagem</Button>,
        <Button key="1" href="/config" >
          Settings
        </Button>,
      ]}
    >

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

export default Header;
