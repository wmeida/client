import Sensor from './Sensor'

const Sensores = ({ sensores }) => {

  return (
    <>
      <p>Sensores</p>




      {sensores.map((sensor) => (<Sensor sensor={sensor} />))}

    </>
  )
}

export default Sensores
