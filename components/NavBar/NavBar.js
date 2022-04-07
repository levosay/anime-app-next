import {Nav, NavLink} from './styled'
import Link from 'next/link'

const NavBar = () => {
  return (
    <Nav>
      <Link href="/">
        <NavLink>
          Home
        </NavLink>
      </Link>
      <Link href="/favorite">
        <NavLink>
          Favorite
        </NavLink>
      </Link>
    </Nav>
  )
}

export default NavBar
