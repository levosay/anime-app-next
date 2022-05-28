import Link from 'next/link'

import {RedLink} from './styled'

const NavLink = ({href, children}) => {
  return (
    <Link
      href={href}
      passHref
    >
      <RedLink>{children}</RedLink>
    </Link>
  )
}

export default NavLink
