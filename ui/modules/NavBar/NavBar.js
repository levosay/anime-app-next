import {useRouter} from 'next/router'

import {LogoIcon, Nav, NavText} from './styled'
import NavLink from '@/NavLink/NavLink'

const NavBar = () => {
  const router = useRouter()

  const chooseColor = (path) => {
    if (router.pathname === path) {
      return 'rebeccapurple'
    } else {
      return '#f5f5f7'
    }
  }

  return (
    <Nav>
      <LogoIcon src={'/logo.png'} />
      <NavLink href="/" passHref>
        <NavText
          color={chooseColor('/')}
        >
          Home
        </NavText>
      </NavLink>
      <NavLink href="/favorite" passHref>
        <NavText
          color={chooseColor('/favorite')}
        >
          Favorite
        </NavText>
      </NavLink>
    </Nav>
  )
}

export default NavBar
