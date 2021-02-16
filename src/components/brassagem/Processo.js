import React, { useState, useContext } from 'react';
import { Row, Col, Button, Card, Divider, List, Switch, Form, Statistic, message, Progress, Modal, Radio, Steps } from 'antd';
import { Collapse, PageHeader } from 'antd';
import Panelas from './Panelas'
import { GlobalContext } from '../../context/GlobalState';



import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlayCircleTwoTone,
  PlayCircleOutlined,
  PauseOutlined,
  StepForwardOutlined,


  DeleteOutlined,

} from '@ant-design/icons';
const { Panel } = Collapse;
const style = { padding: '30px ' };

const { Step } = Steps;

const Processo = ({ processo, panelas }) => {

  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  if (processo.modo === "receita") {

    return (
      <>
        <PageHeader style={{ background: "#fff" }}>
          <Steps current={2} percent={60}>
            <Step title="Mostura" subTitle="Left 00:00:08" description="Descrição da mostura" />
            <Step title="Filtragem / Sparge" subTitle="Left 00:00:08" description="Descrição" />
            <Step title="Fervura" subTitle="Left 00:00:08" description="Descrição da fervura" />
          </Steps>
        </PageHeader>
















        {/* <Modal title="Editar" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
      </>
    );

  }
  else {


    return (
      <Panelas panelas={panelas} />

    );



  }

};

export default Processo;
