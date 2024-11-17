'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classes from './nav-link.module.css'

function NavLink({ href, children }) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={
        classes.link + (pathname.startsWith(href) ? ` ${classes.active}` : '')
      }
    >
      {children}
    </Link>
  )
}

export default NavLink
