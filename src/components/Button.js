//import classNames from 'classnames'


const Button = ({ color, text, size }) => {
  const onClick = () => {
    console.log("Botao pressionado")
  }
  return (
    <button type="button" className={(color, size)} onClick={onClick}>{text}</button>
  )
}

export default Button
