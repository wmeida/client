import React from 'react';
import { Row, Col, Button, Card, Divider, List, Switch, Form, Statistic } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlayCircleTwoTone,
  PauseCircleTwoTone,
  StopTwoTone
} from '@ant-design/icons';

const style = { padding: '30px ' };

const Processo = () => {
  const steps = {
    brassagem:
      [{ etapa: 'Mash in', temperatura: 50, tempo: 15 },
      { etapa: 'Sacarificacao', temperatura: 67, tempo: 60 },
      { etapa: 'Mash out', temperatura: 76, tempo: 10 }],
    lavagem:
      [{ etapa: 'Filtragem', temperatura: 76, tempo: 10 },
      { etapa: 'Lavagem', temperatura: 67, tempo: 15 },
      ],
    fervura:
      [{ etapa: 'Fervura', temperatura: 97, tempo: 60 },
      ],
    whirpool:
      [{ etapa: 'Whirpool', temperatura: 0, tempo: 20 },
      ],
    resfriamento:
      [{ etapa: 'Resfriamento', temperatura: 20, tempo: 30 },
      ],
    fermentacao:
      [{ etapa: 'Fermentacao', temperatura: 19, tempo: 10080 },
      ],
    maturacao:
      [{ etapa: 'Maturacao', temperatura: 9, tempo: 10080 },
      { etapa: 'Cold Crash', temperatura: 0, tempo: 7200 }
      ],
  };
  return (
    <>


      <Col sm={24} style={style}>



        <Card
          title="Processo"
          bordered
          hoverable={true}

          style={{ backgroundColor: '#fff', borderStyle: 'solid', borderWidth: 3, borderColor: '#000' }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Card type="inner" title="" extra={[<Button icon={<PlayCircleTwoTone />}>Iniciar</Button>,
          <Button icon={<PlayCircleTwoTone />}>Pausar</Button>,
          <Button icon={<PlayCircleTwoTone />}>Parar</Button>,
          ]}>
            <Col span={24}>
              <Statistic title="Status" value="Pausado" />
            </Col>
            <Col span={24}>
              <Statistic title="Active Users" value={112893} />
            </Col>
          </Card>

          <List

            itemLayout="horizontal"
            header={<div>Mashing steps <Button icon={<PlayCircleTwoTone />}>Add</Button></div>}
            size="small"
            bordered
            dataSource={steps.brassagem}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <small>{item.etapa}</small>
                <small>{item.temperatura} C</small>
                <small>{item.tempo} minutos</small>
              </List.Item>
            )}
          />

          <List
            itemLayout="horizontal"
            header={<div>Lautering steps</div>}
            size="small"
            bordered
            dataSource={steps.lavagem}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <small>{item.etapa}</small>
                <small>{item.temperatura} C</small>
                <small>{item.tempo} minutos</small>
              </List.Item>
            )}
          />

          <List
            itemLayout="horizontal"
            header={<div>Boiling steps</div>}
            size="small"
            bordered
            dataSource={steps.fervura}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <small>{item.etapa}</small>
                <small>{item.temperatura} C</small>
                <small>{item.tempo} minutos</small>
              </List.Item>
            )}
          />

          <List
            itemLayout="horizontal"
            header={<div>Whirpool</div>}
            size="small"
            bordered
            dataSource={steps.whirpool}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <small>{item.etapa}</small>
                <small>{item.temperatura} C</small>
                <small>{item.tempo} minutos</small>
              </List.Item>
            )}
          />

          <List
            itemLayout="horizontal"
            header={<div>Cooling</div>}
            size="small"
            bordered
            dataSource={steps.resfriamento}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <small>{item.etapa}</small>
                <small>{item.temperatura} C</small>
                <small>{item.tempo} minutos</small>
              </List.Item>
            )}
          />

          <List
            itemLayout="horizontal"
            header={<div>Fermenting steps</div>}
            size="small"
            bordered
            dataSource={steps.fermentacao}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <small>{item.etapa}</small>
                <small>{item.temperatura} C</small>
                <small>{item.tempo} minutos</small>
              </List.Item>
            )}
          />

          <List
            itemLayout="horizontal"
            header={<div>Maturing steps</div>}
            size="small"
            bordered
            dataSource={steps.maturacao}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <small>{item.etapa}</small>
                <small>{item.temperatura} C</small>
                <small>{item.tempo} minutos</small>
              </List.Item>
            )}
          />
          <Divider />
        </Card>

      </Col>
    </>
  );
};

export default Processo;
