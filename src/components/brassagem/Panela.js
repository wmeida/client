import React, { useContext, useState } from 'react';
import { Row, Col, Button, Modal, Slider, Badge } from 'antd';
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
  const [isModalTempVisible, setIsModalTempVisible] = useState(false);
  const [potenciaDesejada, setPotenciaDesejada] = useState(0);
  const [temperaturaDesejada, setTemperaturaDesejada] = useState(0);
  const [tempoDesejado, setTempoDesejado] = useState(0);

  const marks = {
    0: '0%',
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

  const marks2 = {

    50: '50C',
    63: '63C',
    67: '67C',
    76: '76C',
    100: '100C'

  };

  const marks3 = {
    15: '30min',
    30: '30min',
    60: '60min',
    90: '90min',
    120: '120min',
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModalTemp = () => {
    setIsModalTempVisible(true);
  };

  const handlePotencia = () => {
    alterarPotenciaPanela(panela.id, potenciaDesejada)
    setIsModalVisible(false);
    console.log(potenciaDesejada)

  };

  const handleTemperatura = () => {
    alterarTemperaturaPanela(panela.id, temperaturaDesejada, tempoDesejado)
    setIsModalTempVisible(false);
    console.log(potenciaDesejada)

  };

  const onChange = (value) => {
    setPotenciaDesejada(value)
  }

  const onChangeTemp = (value) => {
    setTemperaturaDesejada(value)
  }

  const onChangeTempo = (value) => {
    setTempoDesejado(value)
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCancelTemp = () => {
    setIsModalTempVisible(false);
  };

  //console.log(panela)


  const { alterarPotenciaPanela, alterarTemperaturaPanela } = useContext(GlobalContext);

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
            <Button onClick={showModalTemp}>
              <Badge >
                <span>{panela.temperatura}</span>
              </Badge>
            </Button>
            <small>{panela.tempdesejada}</small>
            <small>{panela.tempodesejada} segundos</small>
          </Col>

          <Col span={12}>
            <Progress type="circle" percent={panela.potencia} width={80} onClick={showModal}>
              Potencia
            </Progress>
          </Col>
        </Row>
        <Divider />
      </Card>
      <Modal title="Alterar potencia" visible={isModalVisible} onOk={handlePotencia} onCancel={handleCancel} onAuto={handleTemperatura}>
        <Slider marks={marks} step={1} defaultValue={potenciaDesejada} onChange={onChange} />


      </Modal>

      <Modal title="Alterar Temperatura" visible={isModalTempVisible} onOk={handleTemperatura} onCancel={handleCancelTemp} >

        <Slider marks={marks2} step={1} defaultValue={temperaturaDesejada} onChange={onChangeTemp} />
        <Slider marks={marks3} step={1} defaultValue={tempoDesejado} onChange={onChangeTempo} />

      </Modal>


    </Col>


  );
}

export default Panela;
