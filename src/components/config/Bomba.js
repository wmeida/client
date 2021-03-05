//import React, { useState, useContext } from 'react';
import { Form, Input, Button, InputNumber, Switch } from 'antd';
//import { GlobalContext } from '../../context/GlobalState';

const Bomba = ({ bomba }) => {
  //const { updateBomba } = useContext(GlobalContext);
  //const [pwmfreq, setPwmFreq] = useState(bomba.pwmfreq);
  // const handleChangePwmFreq = (event) => {
  //   setPwmFreq(+(event.target.value));

  // };

  // // const salvarConfig = (event) => {
  // //   const b = {
  // //     "id": +(event.target.id),
  // //     "nome": bomba.nome,
  // //     "pino": bomba.pino,
  // //     "pwmfreq": pwmfreq,

  // //   }

  //   updateBomba(event.target.id, b)
  // }
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ background: '#fff' }}
      >
        <Form.Item label={bomba.nome}></Form.Item>
        <Form.Item label="Habilitada">
          <Switch defaultChecked={bomba.habilitada} />
        </Form.Item>
        <Form.Item label="Nome">
          <Input placeholder={bomba.nome} />
        </Form.Item>

        <Form.Item label="Frequencia PWM">
          <InputNumber placeholder={bomba.pwmfreq} />
        </Form.Item>

        <Form.Item label="Panela">
          <InputNumber placeholder={bomba.panela} />
        </Form.Item>
        <Form.Item label="Actions">
          <Button type="primary">Salvar</Button>
          <Button type="danger">Cancelar</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Bomba;
