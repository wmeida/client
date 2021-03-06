import { useState, useEffect } from 'react';
import Sensor from './Sensor';
import { Table, Row, Col } from 'antd';
//import { GlobalContext } from '../../context/GlobalState';
import axios from 'axios';
const Sensores = ({ sensores }) => {
  //console.log('sensoresconfig', sensores);

  const columns = [
    {
      title: 'Serial Number',
      dataIndex: 'sn',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Temperature',

      dataIndex: 'temperatura',
    },
  ];
  return (
    <>
      <Row justify="space-around" style={{ margin: '30px' }}>
        <Col xs={24} lg={24}>
          <Table
            columns={columns}
            dataSource={sensores}
            bordered
            size="small"
            title={() => 'Sensores'}
          ></Table>
        </Col>
      </Row>
    </>
  );
};

export default Sensores;
