import React from 'react'

const PanelaConfig = ({ panela }) => {
  console.log(panela)
  return (
    <div>
      <input class="form-control" type="text" aria-label="Disabled input example" disabled>{panela.nome}</input>
    </div>
  )
}

export default PanelaConfig
