import React from 'react'
import Bomba from './Bomba'

const Bombas = (bombas) => {
  console.log(bombas.bombas)

  return (
    <>
      {bombas.bombas.map((bomba) => (<Bomba bomba={bomba} key={bomba.id} />))}


    </>
  )
}

export default Bombas
// {bombas.map((bomba) => (<Bomba bomba={bomba} key={bomba.id} />))}
// {bombas.map((bomba) => (
//   <Bomba bomba={bomba} />
// ))}