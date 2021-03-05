//import { GlobalContext } from '../../context/GlobalState';
//import { useContext } from 'react'

const Sensor = ({ sensor }) => {
  console.log('sensor', sensor);
  return (
    <>
      <p style={{ color: '#fff' }}>{sensor.temperatura}</p>
    </>
  );
};

export default Sensor;
