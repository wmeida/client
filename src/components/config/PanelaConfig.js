
import { GlobalContext } from '../../context/GlobalState';



import { useState, useContext } from 'react';

/* const PanelaConfig = ({ panela, onUpdate }) => {
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography>{panela.nome}</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={panela.habilitada}
                onChange={() => onUpdate(panela.id)}
                name={panela.nome}
                color="primary"
              />
            }
            label="Habilitada"
          />
        </CardContent>
      </Card>
    </div>
  );
}; */

const PanelaConfig = ({ panela, onUpdate }) => {
  const {

    updatePanela
  } = useContext(GlobalContext);
  const [habilitada, setHabilitada] = useState(panela.habilitada);
  const [tempoffset, setTempoffset] = useState(panela.tempoffset);
  const [pwmfreq, setPwmfreq] = useState(panela.pwmfreq);
  const [sensor, setSensor] = useState(panela.sensor);
  const handleChangeHabilitada = (event) => {
    setHabilitada(event.target.checked);
    ////console.log(panela.habilitada);
  };

  const handleChangeTempoffset = (event) => {
    setTempoffset(+(event.target.value));
    ////console.log(panela.habilitada);
  };

  const handleChangePwmFreq = (event) => {
    setPwmfreq(+(event.target.value));
    //console.log(event.target.name);
  };

  const handleChangeSensor = (event) => {
    setSensor(event.target.value);
    ////console.log(panela.habilitada);
  };

  const salvarConfig = (event) => {
    const p = {
      "id": +(event.target.id),
      "nome": panela.nome,
      "pino": panela.pino,
      "pwmfreq": pwmfreq,
      "sensor": sensor,
      "habilitada": habilitada,
      "tempoffset": tempoffset
    }

    updatePanela(event.target.id, p)
    //setSensor(event.target.checked);
    //console.log(event.target.id, habilitada, pwmfreq, tempoffset, sensor);
  };
  return (
    <>


    </>
  );
};
export default PanelaConfig;
