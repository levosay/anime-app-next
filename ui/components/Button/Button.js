import { Btn } from './styled'

const Button = ({onClick, children}) => {

  return (
    <Btn
      onClick={onClick}
    >
      {children}
    </Btn>
  )
}

export default Button
