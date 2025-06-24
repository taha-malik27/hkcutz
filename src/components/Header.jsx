import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import './Header.css'  // make sure to import the CSS that pulls in Poppins

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu  = () => setIsMenuOpen(false)

  const navItems = [
    { link: 'Home',         path: 'hero'       },
    { link: 'Schedule',     path: 'about'      },
    { link: 'Prices',       path: 'pricing'    },
    { link: 'Gallery',      path: 'gallery'    },
    { link: 'Testimonial',  path: 'testimonial'},
    { link: 'Get in Touch', path: 'footer'     },
  ]

  return (
    <nav className="header-nav">
      {/* Logo on the left */}
      <h1 className="logo">HKCUTZ</h1>

      {/* Desktop menu, absolutely centered */}
      <ul className="desktop-menu">
        {navItems.map(({ link, path }) => (
          <li key={path}>
            <Link
              to={path}
              spy
              smooth
              offset={-100}
              className="nav-link"
              onClick={closeMenu}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <div className="mobile-toggle" onClick={toggleMenu}>
        {isMenuOpen
          ? <FaXmark />
          : <FaBars />
        }
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy
            smooth
            offset={-100}
            className="mobile-link"
            onClick={closeMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  )
}