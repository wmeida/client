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
    <Col xs={20} md={10} lg={6} offset={1}>
      <Card
        title={panela.panela.nome}
        bordered
        extra={<Button type="primary">Ligar</Button>}
        style={{ width: 300, backgroundColor: '#f0f5ff', border: 2 }}
        actions={[
          <SettingOutlined key="setting" onClick={info} />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Divider />

        <Row gutter={24}>
          <Col>
            <Statistic
              title="Temperatura"
              value={panela.panela.temperatura}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              suffix="C"
            />
          </Col>

          <Col>
            <Progress type="circle" percent={30} width={80} onClick={info}>
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
