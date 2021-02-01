import React, { useState, useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { GlobalContext } from '../../context/GlobalState';

const Buzzer = ({ buzzer }) => {
  const { updateBuzzer } = useContext(GlobalContext);
  const [pwmfreq, setPwmFreq] = useState(buzzer.pwmfreq)
  const handleChangePwmFreq = (event) => {
    setPwmFreq(+(event.target.value));

  };


  const salvarConfig = (event) => {
    const bu = {
      "id": +(event.target.id),
      "nome": buzzer.nome,
      "pino": buzzer.pino,
      "pwmfreq": pwmfreq,

    }

    updateBuzzer(event.target.id, bu)
  }
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography>{buzzer.nome}</Typography>

          <TextField
            id="txt-offset"
            label="Frequencia PWM"
            variant="outlined"
            type="number"
            value={pwmfreq}
            onChange={handleChangePwmFreq}

          />

        </CardContent>
        <CardActions>
          <Link
            component="button"
            variant="body2"
            id={buzzer.id}
            onClick={salvarConfig}
          >
            Salvar
</Link>
        </CardActions>

      </Card>

    </div>
  )
}

export default Buzzer
