import React, { useState } from 'react';
import { Row, Col, Button, Modal, Slider, Tag } from 'antd';
import { Statistic, Card, Progress, Divider, Switch } from 'antd';
import axios from 'axios';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const style = { padding: '30px' };

function Panela({ panela }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalTempVisible, setIsModalTempVisible] = useState(false);
  const [potenciaDesejada, setPotenciaDesejada] = useState(0);
  const [temperaturaDesejada, setTemperaturaDesejada] = useState(0);
  const [tempoDesejado, setTempoDesejado] = useState(0);

  async function alterarPotenciaPanela(id, potencia) {
    //console.log("alterando potencia da panela", id, potencia)
    // axios({
    //   method: 'put',
    //   url: 'http://192.168.0.83:3333/panelas',
    //   data: id,
    //   config: { headers: { 'Content-Type': 'application/json' } }
    // })
    axios.put(`http://raspberrypi.local:3333/panelas`, {
      action: 'changeMode',
      modo: 'manual',
      id: id,
      potencia: potencia,
    });
  }

  async function alterarTemperaturaPanela(id, temperatura, tempo) {
    //console.log("alterando temperatura e tempo da panela", id, temperatura, tempo)
    // axios({
    //   method: 'put',
    //   url: 'http://192.168.0.83:3333/panelas',
    //   data: id,
    //   config: { headers: { 'Content-Type': 'application/json' } }
    // })
    axios.put(`http://raspberrypi.local:3333/panelas`, {
      action: 'changeMode',
      modo: 'auto',
      id: id,
      temperatura: temperatura,
      tempo: tempo,
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
        extra={<Switch checked={panela.estado} onChange={onOff} />}
        style={{
          backgroundColor: '#fff',
          border: 2,
          borderStyle: 'solid',
          borderWidth: 3,
          borderColor: '#000',
        }}
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
            <Tag color="processing" onClick={showModalTemp}>
              SP: {panela.tempdesejada}C
            </Tag>
          </Col>

          <Col span={12}>
            <Progress
              type="circle"
              percent={panela.potencia}
              width={80}
              onClick={showModal}
            >
              Potencia
            </Progress>
          </Col>
        </Row>
        <Divider />
        <Col span={12}>
          <Statistic
            title="Tempo restante"
            value={secondsToHms(panela.tempodesejado)}
            precision={0}
          />
          <Button style={{ marginTop: 16 }} type="primary" onClick={addTime}>
            Adicionar
          </Button>
          <Button style={{ marginTop: 16 }} type="danger" onClick={skipTime}>
            Skip
          </Button>
        </Col>
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
