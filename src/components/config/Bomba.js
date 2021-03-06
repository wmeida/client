import { useState } from 'react';
import { Form, Input, Button, InputNumber, Switch, Col, Card } from 'antd';
//import { GlobalContext } from '../../context/GlobalState';
import axios from 'axios';

const Bomba = ({ bomba }) => {
  const [habilitada, setHabilitada] = useState(bomba.habilitada);
  const [nome, setNome] = useState(bomba.nome);
  const [pwmfreq, setPwmfreq] = useState(bomba.pwmfreq);
  const [panela, setPanela] = useState(bomba.sensor);
  async function updateBomba(id, bom) {
    ////console.log("updating bomba", id, bom)
    await axios.put(`http://raspberrypi.local:3333/bombas`, {
      action: 'update',
      id: id,
      bom,
    });
  }

  const update = () => {
    const bomb = {
      id: bomba.id,
      nome: nome,
      habilitada: habilitada,
      pino: bomba.pino,
      pwmfreq: pwmfreq,
      panela: panela,
    };

    updateBomba(bomba.id, bomb);
  };

  return (
    <div>
      <Col xs={24} lg={24}>
        <Card
          title={bomba.nome}
          bordered
          style={{
            backgroundColor: '#fff',
            border: 2,
            borderStyle: 'solid',
            borderWidth: 3,
            borderColor: '#000',
          }}
        >
          <Form.Item label={bomba.nome}></Form.Item>
          <Form.Item label="Habilitada">
            <Switch
              defaultChecked={bomba.habilitada}
              onChange={(e) => setHabilitada(e)}
            />
          </Form.Item>
          <Form.Item label="Nome">
            <Input
              placeholder={bomba.nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Frequencia PWM">
            <InputNumber
              placeholder={bomba.pwmfreq}
              onChange={(e) => setPwmfreq(e)}
              min={0}
              max={200}
            />
          </Form.Item>

          <Form.Item label="Panela">
            <InputNumber
              placeholder={bomba.panela}
              onChange={(e) => setPanela(e)}
              min={0}
              max={2}
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

export default Bomba;
