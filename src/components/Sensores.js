//import Sensor from './Sensor'

const Sensores = ({ sensores }) => {

  return (
    <>
      <p>Sensores</p>
      <ul className="list-group">



        {sensores.map((sensor) => (<li key={sensor.sn} className="list-group-item d-flex justify-content-between align-items-center">
          {sensor.sn}
          <span className="badge bg-primary rounded-pill">{sensor.temperatura}</span>
        </li>))}
      </ul>
    </>
  )
}

export default Sensores
