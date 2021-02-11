import React from 'react';
import { Row, Col, Button, Card, Divider, List } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const Processo = () => {
  const steps = [
    { etapa: 'Mash in', temperatura: 50 },
    { etapa: 'Sacarificacao', temperatura: 67 },
    { etapa: 'Mash out', temperatura: 76 },
  ];
  return (
    <div>
      <Col xs={20} md={10} lg={6} offset={1}>
        <Card
          title="Processo"
          bordered
          extra={<Button type="primary">Ligar</Button>}
          style={{ backgroundColor: '#f0f5ff', border: 2 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <List
            itemLayout="horizontal"
            header={<div>Etapas Brassagem</div>}
            size="small"
            bordered
            dataSource={steps}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <small>{item.etapa}</small>
                <small>{item.temperatura}</small>
              </List.Item>
            )}
          />
          <Divider />
        </Card>
      </Col>
    </div>
  );
};

export default Processo;
