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
import Grid from '@material-ui/core/Grid'


const PanelasConfig = ({ panelas, onUpdate, sensores }) => {

  const handleChange = (event) => {
    //console.log(event.target);
  };
  return (

    <div style={{ margin: 20, padding: 20 }}>
      <Grid container spacing={40} justify="center">
        {panelas.map((panela) => (
          <PanelaConfig panela={panela} />

        ))
        }
      </Grid>

    </div >
  );
};

export default PanelasConfig;
