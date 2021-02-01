import React, { useState, useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { GlobalContext } from '../../context/GlobalState';

const Bomba = ({ bomba }) => {
  const { updateBomba } = useContext(GlobalContext);
  const [pwmfreq, setPwmFreq] = useState(bomba.pwmfreq)
  const handleChangePwmFreq = (event) => {
    setPwmFreq(+(event.target.value));

  };


  const salvarConfig = (event) => {
    const b = {
      "id": +(event.target.id),
      "nome": bomba.nome,
      "pino": bomba.pino,
      "pwmfreq": pwmfreq,

    }

    updateBomba(event.target.id, b)
  }
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography>{bomba.nome}</Typography>

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
            id={bomba.id}
            onClick={salvarConfig}
          >
            Salvar
</Link>
        </CardActions>

      </Card>

    </div>
  )
}

export default Bomba
