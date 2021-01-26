import Chip from '@material-ui/core/Chip';


const Sensor = ({ sensor }) => {

  return (
    <div >

      <Chip label={sensor.sn} />
      <Chip label={sensor.temperatura} />

    </div>
  )
}


export default Sensor

