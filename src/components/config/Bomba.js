import React, { useState, useContext } from 'react'

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

    </div >
  )
}

export default Bomba
