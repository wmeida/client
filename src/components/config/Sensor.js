
import Button from '@material-ui/core/Button';
import { GlobalContext } from '../../context/GlobalState';
import { useContext } from 'react'


const Sensor = ({ sensor }) => {
  const {

    getSensores
  } = useContext(GlobalContext);

  return (
    < >
      <Button variant="contained" color="primary" onClick={getSensores}>
        {sensor.sn} {sensor.temperatura}
      </Button>

    </>
  )
}


export default Sensor

