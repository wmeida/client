//import React from 'react'
import Bomba from './Bomba';
import {Row} from 'antd'

const Bombas = ({ bombas }) => {
  ////console.log(bombas.bombas)

  return (
    <>
    <Row justify="space-around" style={{margin:"30px"}}>
      {bombas.map((bomba) => (
        <Bomba bomba={bomba} key={bomba.id} />
      ))}
      </Row>
    </>
  );
};

export default Bombas;
// {bombas.map((bomba) => (<Bomba bomba={bomba} key={bomba.id} />))}
// {bombas.map((bomba) => (
//   <Bomba bomba={bomba} />
// ))}
