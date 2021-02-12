import React, { useContext } from 'react';
import { Row, Col, Button } from 'antd';
import { Statistic, Card, message, Space, Progress, Divider } from 'antd';
import { Menu, Dropdown } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { blue } from '@ant-design/colors';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  DownOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import PropTypes from 'prop-types';

import { GlobalContext } from '../../context/GlobalState';

const style = { padding: '30px' };

function Panela(panela) {
  //console.log(panela)
  const info = () => {
    message.info(panela.panela.nome);
  };

  const { ligarPanela } = useContext(GlobalContext);
  const handleChange = (event) => {
    console.log(panela.panela.id, event.target);
  };
  const handleLigarPanela = (event) => {
    //console.log('Panela', event)

    ligarPanela(event.target.id);
  };
  return (
    <Col xs={24} lg={6} style={style}>
      <Card
        title={panela.panela.nome}
        bordered
        extra={<Button type="primary">Ligar</Button>}
        style={{ backgroundColor: '#fff', border: 2, borderStyle: 'solid', borderWidth: 3, borderColor: '#000' }}
        actions={[
          <SettingOutlined key="setting" onClick={info} />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >


        <Row justify="center">
          <Col span={12}>
            <Statistic
              title="Temperatura"
              value={panela.panela.temperatura}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              suffix="C"
            />
            <small>67C</small>
          </Col>

          <Col span={12}>
            <Progress type="circle" percent={panela.panela.potencia} width={80} onClick={info}>
              Potencia
            </Progress>
          </Col>
        </Row>
        <Divider />
      </Card>
    </Col>
  );
}

export default Panela;
