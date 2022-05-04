import {LogoIcon, Nav, NavLink} from './styled'
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'

const NavBar = (props) => {
  const router = useRouter()
  const [active, setActive] = useState(router.pathname)



  console.log('_____ ', router.pathname)

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
