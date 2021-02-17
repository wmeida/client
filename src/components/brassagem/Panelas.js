import React from 'react'
import Panela from './Panela'
import { Row } from 'antd';
import 'antd/dist/antd.css';





const Panelas = ({ panelas, dadospanelas }) => {
  //const classes = useStyles()
  //console.log(panelas)
  return (
    < >
      <Row justify="space-around">
        {dadospanelas.filter((panela) => {
          //console.log(panela)
          return panela.habilitada === true

        }).map((panela) =>

          (<Panela panela={panela} />)
        )}
      </Row>
    </>
  )
}

export default Panelas
