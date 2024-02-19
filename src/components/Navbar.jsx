import { useState, Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { slideY } from '../utils/transiitons'
import NavLinks from './NavLinks'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <nav className="px-8 pt-8 md:px-10 md:pt-16">
      <div className="max-w-container mx-auto flex justify-between items-center relative z-10">
        <img src="/logo.svg" alt="Logo" />
        <button aria-label="Toggle menu" aria-expanded={isMenuOpen} aria-haspopup="menu" onClick={toggleMenu} className="md:hidden">
          <img src={isMenuOpen ? '/icons/close.svg' : '/icons/hamburger.svg'} alt="Hamburger menu icon" aria-hidden="true" />
        </button>
        <div className="hidden md:block nav-xl">
          <NavLinks onClick={() => setIsMenuOpen(false)} />
        </div>
        <Transition show={isMenuOpen} {...slideY} as={Fragment}>
          <div className="absolute right-0 top-14 bg-grayish-blue px-8 py-10 text-white max-w-[223px] w-full md:hidden">
            <NavLinks onClick={() => setIsMenuOpen(false)} />
          </div>
        </Transition>
      </div>
    </nav>
  )
}
