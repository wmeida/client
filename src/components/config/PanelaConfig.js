//import { GlobalContext } from '../../context/GlobalState';
import { Form, Input, Button, InputNumber, Switch, Col, Card } from 'antd';
import { useState } from 'react';
import axios from 'axios';

const PanelaConfig = ({ panela }) => {
  const style = { padding: '30px' };
  const [nome, setNome] = useState(panela.nome);
  const [pwmfreq, setPwmfreq] = useState(panela.pwmfreq);
  const [sensor, setSensor] = useState(panela.sensor);
  const [habilitada, setHabilitada] = useState(panela.habilitada);
  const [tempoffset, setTempoffset] = useState(panela.tempoffset);
  const [kp, setKp] = useState(panela.kp);
  const [ki, setKi] = useState(panela.ki);
  const [kd, setKd] = useState(panela.kd);
  const [errorArraySize, setErrorArraySize] = useState(panela.errorArraySize);
  async function updatePanela(id, pan) {
    ////console.log("updating panela", id, pan)
    await axios.put(`http://raspberrypi.local:3333/panelas`, {
      action: 'update',
      id: id,
      pan,
    });
  }

  const update = () => {
    const pot = {
      id: panela.id,
      nome: nome,
      pino: panela.pino,
      pwmfreq: pwmfreq,
      sensor: sensor,
      habilitada: habilitada,
      tempoffset: tempoffset,
      kp: kp,
      ki: ki,
      kd: kd,
      errorArraySize: errorArraySize,
      sinkSensor: '',
    };

    updatePanela(panela.id, pot);
  };
  return (
    <div>
      <Col style={style}>
        <Card
          title={panela.nome}
          bordered
          style={{
            backgroundColor: '#fff',
            border: 2,
            borderStyle: 'solid',
            borderWidth: 3,
            borderColor: '#000',
          }}
        >
          <Form.Item label={panela.nome}></Form.Item>
          <Form.Item label="Habilitada">
            <Switch
              defaultChecked={panela.habilitada}
              onChange={(e) => setHabilitada(e)}
            />
          </Form.Item>
          <Form.Item label="Nome">
            <Input
              placeholder={panela.nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Sensor">
            <Input
              placeholder={panela.sensor}
              onChange={(e) => setSensor(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Offset temperatura">
            <InputNumber
              placeholder={panela.tempoffset}
              onChange={(e) => setTempoffset(e)}
              min={0}
              max={5}
            />
          </Form.Item>
          <Form.Item label="Frequencia PWM">
            <InputNumber
              placeholder={panela.pwmfreq}
              onChange={(e) => setPwmfreq(e)}
              min={0}
              max={100}
            />
          </Form.Item>
          <Form.Item label="kp">
            <InputNumber
              placeholder={panela.kp}
              onChange={(e) => setKp(e)}
              min={0}
              max={10}
            />
          </Form.Item>
          <Form.Item label="ki">
            <InputNumber
              placeholder={panela.ki}
              onChange={(e) => setKi(e)}
              min={0}
              max={2}
              step={0.1}
            />
          </Form.Item>
          <Form.Item label="kd">
            <InputNumber
              placeholder={panela.kd}
              onChange={(e) => setKd(e)}
              min={0}
              max={2}
              step={0.1}
            />
          </Form.Item>
          <Form.Item label="Error Array Size">
            <InputNumber
              placeholder={panela.errorArraySize}
              onChange={(e) => setErrorArraySize(e)}
              min={100}
              max={1000}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={update}>
              Salvar
            </Button>
          </Form.Item>
        </Card>
      </Col>
    </div>
  );
};

//const PanelaConfig = ({ panela, onUpdate }) => {
// const { updatePanela } = useContext(GlobalContext);
// const [habilitada, setHabilitada] = useState(panela.habilitada);
// const [tempoffset, setTempoffset] = useState(panela.tempoffset);
// const [pwmfreq, setPwmfreq] = useState(panela.pwmfreq);
// const [sensor, setSensor] = useState(panela.sensor);
// const handleChangeHabilitada = (event) => {
//   setHabilitada(event.target.checked);
//   //////console.log(panela.habilitada);
// };

// const handleChangeTempoffset = (event) => {
//   setTempoffset(+(event.target.value));
//   //////console.log(panela.habilitada);
// };

// const handleChangePwmFreq = (event) => {
//   setPwmfreq(+(event.target.value));
//   ////console.log(event.target.name);
// };

// const handleChangeSensor = (event) => {
//   setSensor(event.target.value);
//   //////console.log(panela.habilitada);
// };

// const salvarConfig = (event) => {
//   const p = {
//     "id": +(event.target.id),
//     "nome": panela.nome,
//     "pino": panela.pino,
//     "pwmfreq": pwmfreq,
//     "sensor": sensor,
//     "habilitada": habilitada,
//     "tempoffset": tempoffset
//   }

//   updatePanela(event.target.id, p)
//   //setSensor(event.target.checked);
//   ////console.log(event.target.id, habilitada, pwmfreq, tempoffset, sensor);
// };
// return <></>;
//};
export default PanelaConfig;
