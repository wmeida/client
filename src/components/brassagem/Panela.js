import React, { useContext } from 'react'

import PropTypes from 'prop-types';

import { GlobalContext } from '../../context/GlobalState';


function Panela(panela) {
  //console.log(panela)

  const {
    ligarPanela
  } = useContext(GlobalContext);
  const handleChange = ((event) => {
    console.log(panela.panela.id, event.target)
  })
  const handleLigarPanela = ((event) => {
    //console.log('Panela', event)
    ligarPanela(event.target.id)
  })
  return /* (
    <div>

 {<Grid item xs={3}>
        <Paper className={classes.paper} xs={12}>
          Panela {panela.panela.nome}
          <Link id={panela.panela.id} onClick={handleLigarPanela} >Ligar Panela</Link>
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
              value={panela.panela.potencia}
            >
              <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                panela.panela.potencia
              )}%`}</Typography>
            </Box>
          </Box>
          <Slider onChange={handleChange} aria-labelledby="continuous-slider" min={0} max={500} step={1} />
        </Paper>


      </Grid> }


    </div>
  )*/
}

export default Panela
