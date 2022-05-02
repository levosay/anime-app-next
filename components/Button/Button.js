import { Btn } from './styled'

const Button = ({onClick, id, key, href, src, title, alt, ...props}) => {
  return (
    <Btn
      onClick={(event) => onClick(event, id, key, href, src, title, alt)}
      {...props}
    />
  )
}

export default Button
