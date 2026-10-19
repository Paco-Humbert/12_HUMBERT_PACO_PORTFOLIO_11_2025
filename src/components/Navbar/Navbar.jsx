import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme.jsx'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => {
    setShowNavList((prev) => !prev)
  }

  const closeNav = () => setShowNavList(false)
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setShowNavList(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <nav className='center nav' aria-label='Navigation principale'>
      <ul
        className='nav__list'
        id='main-navigation'
        style={{ display: showNavList ? 'flex' : undefined }}
      >
        {projects.length > 0 && (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={closeNav}
              className='link link--nav'
            >
              Projets
            </a>
          </li>
        )}

        {skills.length > 0 && (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={closeNav}
              className='link link--nav'
            >
              Compétences
            </a>
          </li>
        )}

        {contact.email && (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={closeNav}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label={themeName === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'}
      >
        <span className='nav__theme-icon'>
          {themeName === 'dark' ? '☀️' : '🌙'}
        </span>
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label={showNavList ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={showNavList}
        aria-controls='main-navigation'
      >
        <span className='nav__hamburger-icon'>
          {showNavList ? '✕' : '☰'}
        </span>
      </button>
    </nav>
  )
}

export default Navbar

