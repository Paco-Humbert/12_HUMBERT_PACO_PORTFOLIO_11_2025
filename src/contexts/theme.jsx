import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return dark ? 'dark' : 'light'
  }

  const [themeName, setThemeName] = useState(getInitialTheme)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    }

    media.addEventListener('change', handleChange)

    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [])

  const toggleTheme = () => {
    const next = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', next)
    setThemeName(next)
  }

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
