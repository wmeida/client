


const Sensor = ({ sensor }) => {
  console.log(sensor.sn)
  return (
    <div className="alert alert-primary">
      <p>{sensor.sn}</p>
      <p>{sensor.temperatura}</p>

    </div>
  )
}


export default Sensor

