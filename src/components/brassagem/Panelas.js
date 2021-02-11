import React from 'react'
import Panela from './Panela'
import { Row } from 'antd';
import 'antd/dist/antd.css';





const Panelas = ({ panelas }) => {
  //const classes = useStyles()
  //console.log(panelas)
  return (
    <div >
      <Row type="flex" justify="center" gutter={[12, 60]} >
        {panelas.filter((panela) => {
          //console.log(panela)
          return panela.habilitada === true

        }).map((panela) =>

          (<Panela panela={panela} />)
        )}
      </Row>
    </div>
  )
}

export default Panelas
