import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

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
  const [habilitada, setHabilitada] = useState(panela.habilitada);
  const handleChange = (event) => {
    setHabilitada(event.target.checked);
    console.log(panela.habilitada);
  };
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography>{panela.nome}</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={habilitada}
                onChange={handleChange}
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
          />
          <TextField
            id="txt-freq"
            label="Frequencia PWM"
            variant="outlined"
            type="number"
          />
          <TextField id="txt-sensor" label="Sensor" variant="outlined" />
        </CardContent>
      </Card>
    </div>
  );
};
export default PanelaConfig;
