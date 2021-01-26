import React from 'react';
import PanelaConfig from './PanelaConfig';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';

/* const PanelasConfig = ({ panelas, onUpdate, temppanelas }) => {
  return (
    <>
      {panelas.map((panela) => (
        <PanelaConfig
          panela={panela}
          temppanelas={temppanelas}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
}; */

const PanelasConfig = ({ panelas, onUpdate, sensores }) => {
  console.log(panelas);
  const handleChange = (event) => {
    console.log(event.target);
  };
  return (
    <>
      {panelas.map((panela) => (
        <Card variant="outlined">
          <CardContent>
            <Typography>Panela {panela.nome}</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={panela.habilitada}
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
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Sensor Number
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={panela.sensor}
                onChange={handleChange}
              >
                {sensores.map((sensor) => (
                  <MenuItem value={sensor.sn}>{sensor.sn}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default PanelasConfig;
//{panelas.map((panela) => (<h3>{panela.nome}</h3>))}
//<h3>{panela.nome}</h3>
//<PanelaConfig panela={panela} />
