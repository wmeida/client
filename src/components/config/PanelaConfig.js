import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import { GlobalContext } from '../../context/GlobalState';


import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
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
    //console.log(panela.habilitada);
  };

  const handleChangeTempoffset = (event) => {
    setTempoffset(+(event.target.value));
    //console.log(panela.habilitada);
  };

  const handleChangePwmFreq = (event) => {
    setPwmfreq(+(event.target.value));
    console.log(event.target.name);
  };

  const handleChangeSensor = (event) => {
    setSensor(event.target.value);
    //console.log(panela.habilitada);
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
    console.log(event.target.id, habilitada, pwmfreq, tempoffset, sensor);
  };
  return (
    <>
      <Grid item key={panela.id} sm="12" xs="3">
        <Card variant="outlined">
          <CardContent>
            <Typography>Panela {panela.nome}</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={habilitada}
                  onChange={handleChangeHabilitada}
                  name={panela.nome}
                  color="primary"
                />
              }
              label="Habilitada"
            />
            <TextField
              id="txt-offset"
              label="Temp offset"
              variant="outlined"
              type="number"
              value={tempoffset}
              onChange={handleChangeTempoffset}


            />
            <TextField
              id="txt-freq"
              label="Frequencia PWM"
              variant="outlined"
              type="number"
              value={pwmfreq}
              onChange={handleChangePwmFreq}
            />
            <TextField id="txt-sensor" label="Sensor" variant="outlined" defaultValue={sensor} onChange={handleChangeSensor} />

          </CardContent>
          <CardActions>
            <Link
              component="button"
              variant="body2"
              id={panela.id}
              onClick={salvarConfig}
            >
              Salvar
</Link>
          </CardActions>

        </Card>
      </Grid>

    </>
  );
};
export default PanelaConfig;
