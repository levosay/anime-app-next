import {LogoIcon, Nav, NavLink} from './styled'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavBar = () => {
  const router = useRouter()

  return (
    <Nav>
      <LogoIcon src={'/logo.png'} />
      <Link href="/" passHref>
        <NavLink
          color={router.pathname === '/'? 'rebeccapurple' : '#f5f5f7'}
        >
          Home
        </NavLink>
      </Link>
      <Link href="/favorite" passHref>
        <NavLink
          color={router.pathname === '/favorite'? 'rebeccapurple' : '#f5f5f7'}
        >
          Favorite
        </NavLink>
      </Link>
    </Nav>
  )
}

export const getStaticProps = async ({query}) => {
  return {
    props: query
  }
}

export default NavBar
