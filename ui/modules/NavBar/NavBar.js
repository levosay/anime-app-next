import Link from 'next/link'
import {useRouter} from 'next/router'

import {LogoIcon, Nav, NavLink} from './styled'

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
      <Link href="/" passHref>
        <NavLink
          color={chooseColor('/')}
        >
          Home
        </NavLink>
      </Link>
      <Link href="/favorite" passHref>
        <NavLink
          color={chooseColor('/favorite')}
        >
          Favorite
        </NavLink>
      </Link>
    </Nav>
  )
}

export default NavBar
