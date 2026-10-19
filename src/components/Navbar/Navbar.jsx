import { useLanguage } from '../../contexts/language.jsx'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme.jsx'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage()
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
    <nav className='center nav' aria-label={t('Navigation principale')}>
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
              {t('Projets')}
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
              {t('Compétences')}
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
              {t('Contact')}
            </a>
          </li>
        )}
      </ul>

      <div className='nav__languages' role='group' aria-label={t('Langue du site')}>
        {['fr', 'en'].map((code) => (
          <button
            key={code}
            type='button'
            lang={code}
            aria-label={code === 'fr' ? 'Français' : 'English'}
            aria-pressed={language === code}
            className='nav__language'
            onClick={() => { setLanguage(code); closeNav() }}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label={t(themeName === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre')}
      >
        <span className='nav__theme-icon'>
          {themeName === 'dark' ? '☀️' : '🌙'}
        </span>
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label={t(showNavList ? 'Fermer le menu' : 'Ouvrir le menu')}
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

