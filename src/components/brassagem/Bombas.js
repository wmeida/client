import React from 'react'
import Bomba from './Bomba'
import { Row } from 'antd';
import 'antd/dist/antd.css';





const Bombas = ({ bombas }) => {
  //const classes = useStyles()
  ////console.log(panelas)
  return (
    < >
      <Row justify="space-around">
        {bombas.filter((bomba) => {
          ////console.log(panela)
          return bomba.habilitada === true

        }).map((bomba) =>

          (<Bomba bomba={bomba} />)
        )}
      </Row>
    </>
  )
}

export default Bombas
