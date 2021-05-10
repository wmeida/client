import React, { useState } from 'react';
import { Row, Col, Button, Modal, Slider, Popconfirm } from 'antd';
import { Card, Progress, Divider, Switch, Spin, Avatar, Badge } from 'antd';
import axios from 'axios';
import {
  CheckOutlined,
  ClockCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const style = { padding: '30px' };

function Panela({ panela }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalTempVisible, setIsModalTempVisible] = useState(false);
  const [potenciaDesejada, setPotenciaDesejada] = useState(0);
  const [temperaturaDesejada, setTemperaturaDesejada] = useState(0);
  const [tempoDesejado, setTempoDesejado] = useState(0);

  async function alterarPotenciaPanela(id, potencia) {
    // axios.put(`http://raspberrypi.local:3333/panelas`, {
    //   action: 'changeMode',
    //   modo: 'manual',
    //   id: id,
    //   potencia: potencia,
    // });

    axios.put(`http://raspberrypi.local:3333/processo`, {
      //estado,modo,done,potencia,temperatura,tempo

      action: 'addProcessoPanela',
      dado: {
        modo: 0,
        estado: 0,
        id: id,
        potencia: potencia,
        done: false,
        temperatura: 0,
        tempo: 0,
      },
    });
  }

  async function alterarTemperaturaPanela(id, temperatura, tempo) {
    // axios.put(`http://raspberrypi.local:3333/panelas`, {
    //   action: 'changeMode',
    //   modo: 'auto',
    //   id: id,
    //   temperatura: temperatura,
    //   tempo: tempo,
    // });

    axios.put(`http://raspberrypi.local:3333/processo`, {
      //estado,modo,done,potencia,temperatura,tempo

      action: 'addProcessoPanela',
      dado: {
        modo: 1,
        estado: 0,
        id: id,
        potencia: 0,
        done: false,
        temperatura: temperatura,
        tempo: tempo,
      },
    });
  }

  async function ligarPanela(id, ligar) {
    console.log('ligando panela', id, ligar);
    await axios.put(`http://raspberrypi.local:3333/panelas`, {
      action: 'ligar',
      id: id,
      ligar: ligar,
    });
  }

  async function skipTimePanela(id) {
    console.log('ligando panela', id);
    await axios.put(`http://raspberrypi.local:3333/panelas`, {
      action: 'skipTime',
      id: id,
    });
  }

  async function addTimePanela(id) {
    console.log('adicionando tempo panela', id);
    await axios.put(`http://raspberrypi.local:3333/panelas`, {
      action: 'addTime',
      id: id,
    });
  }

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

    67: '67C',
    76: '76C',
    100: '100C',
  };

  const marks3 = {
    10: '10min',
    30: '30min',
    60: '60min',
    90: '90min',
    120: '120min',
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModalTemp = () => {
    setIsModalTempVisible(true);
  };

  const handlePotencia = () => {
    alterarPotenciaPanela(panela.id, potenciaDesejada);
    setIsModalVisible(false);
    //console.log(potenciaDesejada);
  };

  const handleTemperatura = () => {
    alterarTemperaturaPanela(panela.id, temperaturaDesejada, tempoDesejado);
    setIsModalTempVisible(false);
    //console.log(potenciaDesejada);
  };

  const onChange = (value) => {
    setPotenciaDesejada(value);
  };

  const onChangeTemp = (value) => {
    setTemperaturaDesejada(value);
  };

  const onChangeTempo = (value) => {
    setTempoDesejado(value);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCancelTemp = () => {
    setIsModalTempVisible(false);
  };

  const onOff = () => {
    ligarPanela(panela.id, !panela.estado);
  };

  const addTime = () => {
    addTimePanela(panela.id);
  };

  const skipTime = () => {
    skipTimePanela(panela.id);
  };

  function secondsToHms(seconds) {
    if (!seconds) return '';

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min === 0) {
      return `${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }
  }

  ////console.log(panela)

  return (
    <Col xs={24} lg={8} style={style}>
      <Card
        title={panela.nome}
        loading={!panela.estado}
        bordered
        extra={[<Switch checked={panela.estado} onChange={onOff} />]}
        style={{
          backgroundColor: '#fff',
          border: 2,
          borderStyle: 'solid',
          borderWidth: 3,
          borderColor: '#000',
        }}
      >
        <Card style={{ margin: 5 }} type="inner">
          {panela.modo === 0 ? 'Modo potencia' : 'Modo automatico'}
          {panela.estado === 1 && <Spin style={{ margin: 16 }} />}
          {panela.modo === 1 && panela.estado === 1 && (
            <Badge count={<ClockCircleOutlined />}>
              {secondsToHms(panela.tempodesejado)}
            </Badge>
          )}
          <Row>
            <Col span={12}>
              {panela.modo === 1 && panela.estado === 1 && (
                <Button
                  style={{ marginTop: 16 }}
                  type="primary"
                  onClick={addTime}
                  icon={<PlusOutlined />}
                >
                  Tempo
                </Button>
              )}
            </Col>
            <Col span={12}>
              {panela.estado === 1 && (
                <Popconfirm
                  onConfirm={skipTime}
                  title="Confirma?"
                  okText="Finaliza"
                  cancelText="Cancela"
                >
                  <Button
                    style={{ marginTop: 16 }}
                    type="primary"
                    icon={<CheckOutlined />}
                  >
                    Finalizar
                  </Button>
                </Popconfirm>
              )}
            </Col>
          </Row>
        </Card>

        <Row justify="center">
          <Col span={12}>
            <Badge count={panela.tempdesejada} style={{ marginTop: 10 }}>
              <Avatar
                shape="circle"
                size={100}
                onClick={showModalTemp}
                style={
                  panela.tempReached ? { color: '#237804' } : { color: '#000' }
                }
              >
                {panela.temperatura}C
              </Avatar>
            </Badge>
          </Col>

          <Col span={12}>
            <Progress
              type="circle"
              percent={panela.potencia}
              width={100}
              onClick={showModal}
            >
              Potencia
            </Progress>
          </Col>
        </Row>
      </Card>
      <Modal
        title="Alterar potencia"
        visible={isModalVisible}
        onOk={handlePotencia}
        onCancel={handleCancel}
        onAuto={handleTemperatura}
      >
        <Slider
          marks={marks}
          step={1}
          defaultValue={potenciaDesejada}
          onChange={onChange}
        />
      </Modal>

      <Modal
        title="Alterar Temperatura"
        visible={isModalTempVisible}
        onOk={handleTemperatura}
        onCancel={handleCancelTemp}
      >
        <h3>Temperatura</h3>
        <Slider
          min={30}
          max={100}
          marks={marks2}
          step={1}
          defaultValue={temperaturaDesejada}
          onChange={onChangeTemp}
        />
        <Divider />
        <h3>Tempo</h3>
        <Slider
          marks={marks3}
          step={1}
          defaultValue={tempoDesejado}
          onChange={onChangeTempo}
        />
      </Modal>
    </Col>
  );
}

export default Panela;
