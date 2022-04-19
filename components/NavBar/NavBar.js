import {Nav, NavLink} from './styled'
import Link from 'next/link'

const NavBar = () => {

  return (
    <Nav>
      <Link href="/" passHref>
        <NavLink>
          Home
        </NavLink>
      </Link>
      <Link href="/favorite" passHref>
        <NavLink>
          Favorite
        </NavLink>
      </Link>
    </Nav>
  )
}

export default NavBar
