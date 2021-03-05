import React from 'react';
import { Row, Col, Button } from 'antd';
import { Card } from 'antd';
import axios from 'axios';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const style = { padding: '30px' };

function Bomba({ bomba }) {
  async function ligarBomba(id, modo) {
    console.log('bomba', id, modo);
    await axios.put(`http://raspberrypi.local:3333/bombas`, {
      action: 'ligar',
      id: id,
      modo: modo,
    });
  }
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isModalTempVisible, setIsModalTempVisible] = useState(false);
  // const [potenciaDesejada, setPotenciaDesejada] = useState(0);
  // const [temperaturaDesejada, setTemperaturaDesejada] = useState(0);
  // const [tempoDesejado, setTempoDesejado] = useState(0);

  // const marks = {
  //   0: '0%',
  //   30: '30%',
  //   50: '50%',
  //   80: '80%',
  //   100: {
  //     style: {
  //       color: '#f50',
  //     },
  //     label: <strong>100%</strong>,
  //   },
  // };

  // const marks2 = {
  //   50: '50C',

  //   67: '67C',
  //   76: '76C',
  //   100: '100C',
  // };

  // const marks3 = {
  //   10: '10min',
  //   30: '30min',
  //   60: '60min',
  //   90: '90min',
  //   120: '120min',
  // };
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };
  // const showModalTemp = () => {
  //   setIsModalTempVisible(true);
  // };

  // const handlePotencia = () => {
  //   alterarPotenciaPanela(panela.id, potenciaDesejada);
  //   setIsModalVisible(false);
  //   //console.log(potenciaDesejada);
  // };

  // const handleTemperatura = () => {
  //   alterarTemperaturaPanela(panela.id, temperaturaDesejada, tempoDesejado);
  //   setIsModalTempVisible(false);
  //   //console.log(potenciaDesejada);
  // };

  // const onChange = (value) => {
  //   setPotenciaDesejada(value);
  // };

  // const onChangeTemp = (value) => {
  //   setTemperaturaDesejada(value);
  // };

  // const onChangeTempo = (value) => {
  //   setTempoDesejado(value);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancelTemp = () => {
  //   setIsModalTempVisible(false);
  // };

  const onOff = (e) => {
    if (e.target.innerText === 'Ligar') {
      ligarBomba(bomba.id, 1);
      console.log('Ligar bomba');
    } else if (e.target.innerText === 'Desligar') {
      ligarBomba(bomba.id, 0);
      console.log('Desligar bomba');
    } else if (e.target.innerText === 'Automatico') {
      ligarBomba(bomba.id, 2);
      console.log('Auto bomba');
    }
    //ligarBomba(bomba.id, e.target.id);
  };

  // function secondsToHms(seconds) {
  //   if (!seconds) return '';

  //   let duration = seconds;
  //   let hours = duration / 3600;
  //   duration = duration % 3600;

  //   let min = parseInt(duration / 60);
  //   duration = duration % 60;

  //   let sec = parseInt(duration);

  //   if (sec < 10) {
  //     sec = `0${sec}`;
  //   }
  //   if (min < 10) {
  //     min = `0${min}`;
  //   }

  //   if (parseInt(hours, 10) > 0) {
  //     return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
  //   } else if (min == 0) {
  //     return `${sec}s`;
  //   } else {
  //     return `${min}m ${sec}s`;
  //   }
  // }

  // ////console.log(panela)

  //console.log('bomba', bomba);

  return (
    <Col xs={24} lg={6} style={style}>
      <Card
        title={bomba.nome}
        bordered
        style={{
          border: 2,
          borderStyle: 'solid',
          borderWidth: 3,
          borderColor: '#000',
          fontWeight: 'bold',
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Row justify="center">
          <Col span={12}>
            <Button id="0" type="danger" block onClick={onOff}>
              Desligar
            </Button>
            <Button
              id="1"
              block
              type="primary"
              onClick={onOff}
              style={{ marginTop: 15 }}
            >
              Ligar
            </Button>
            <Button id="2" block onClick={onOff} style={{ marginTop: 15 }}>
              Automatico
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
export default Bomba;
