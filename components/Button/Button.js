import { Btn } from './styled'

const Button = ({onClick, ...props}) => {
  return (
    <Btn
      onClick={onClick}
      {...props}
    />
  )
}

export default Button
