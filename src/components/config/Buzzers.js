import React from 'react'
import Buzzer from './Buzzer'

const Buzzers = (buzzers) => {
  console.log(buzzers.buzzers)

  return (
    <>
      {buzzers.buzzers.map((buzzer) => (<Buzzer buzzer={buzzer} key={buzzer.id} />))}


    </>
  )
}

export default Buzzers
// {bombas.map((bomba) => (<Bomba bomba={bomba} key={bomba.id} />))}
// {bombas.map((bomba) => (
//   <Bomba bomba={bomba} />
// ))}