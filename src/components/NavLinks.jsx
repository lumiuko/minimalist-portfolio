import { NavLink } from 'react-router-dom'

const navItems = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/portfolio',
    text: 'Portfolio'
  },
  {
    path: '/contact',
    text: 'Contact me'
  }
]

export default function NavLinks({ ...props }) {
  const navElements = navItems.map(menuItem => (
    <li key={menuItem.path}>
      <NavLink to={menuItem.path} {...props} className="transition-colors hover:text-cyan">
        {menuItem.text}
      </NavLink>
    </li>
  ))

  return (
    <ul className="uppercase text-xs leading-[0.875rem] tracking-[2px] flex flex-col gap-8 items-center md:flex-row md:gap-[2.625rem]">
      {navElements}
    </ul>
  )
}
