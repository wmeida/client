import React, { useContext, useState } from 'react';
import { Row, Col, Button, Modal, Slider } from 'antd';
import { Statistic, Card, Progress, Divider } from 'antd';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';




import { GlobalContext } from '../../context/GlobalState';

const style = { padding: '30px' };

function Panela({ panela }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [potenciaDesejada, setPotenciaDesejada] = useState(0);

  const marks = {
    0: '0°C',
    30: '30%',
    50: '50%',
    80: '80%',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100%</strong>,
    },
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    alterarPotenciaPanela(panela.id, potenciaDesejada)
    setIsModalVisible(false);
    console.log(potenciaDesejada)

  };

  const onChange = (value) => {
    setPotenciaDesejada(value)
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //console.log(panela)


  const { alterarPotenciaPanela } = useContext(GlobalContext);

  return (
    <Col xs={24} lg={6} style={style}>
      <Card
        title={panela.nome}
        bordered
        extra={<Button type="primary">Ligar</Button>}
        style={{ backgroundColor: '#fff', border: 2, borderStyle: 'solid', borderWidth: 3, borderColor: '#000' }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >


        <Row justify="center">
          <Col span={12}>
            <Statistic
              title="Temperatura"
              value={panela.temperatura}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              suffix="C"
            />
            <small>67C</small>
          </Col>

          <Col span={12}>
            <Progress type="circle" percent={panela.potencia} width={80} onClick={showModal}>
              Potencia
            </Progress>
          </Col>
        </Row>
        <Divider />
      </Card>
      <Modal title="Alterar potencia" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Slider marks={marks} step={1} defaultValue={potenciaDesejada} onChange={onChange} />

      </Modal>
    </Col>


  );
}

export default Panela;
