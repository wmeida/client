import 'antd/dist/antd.css';
import { PageHeader, Button, Descriptions } from 'antd';
const Header = (props) => {
  return (
    <PageHeader
      ghost={false}

      title="Heisenbier"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
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
