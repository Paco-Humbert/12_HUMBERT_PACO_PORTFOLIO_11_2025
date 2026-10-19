/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import english from '../locales/en.json'

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr' }
    catch { return 'fr' }
  })

  useEffect(() => {
    document.documentElement.lang = language
    try { localStorage.setItem('portfolio-language', language) } catch { /* Storage may be unavailable. */ }
  }, [language])

  const t = (text, values = {}) => {
    const translated = language === 'en' ? english[text] ?? text : text
    return translated.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = { children: PropTypes.node.isRequired }

export const useLanguage = () => useContext(LanguageContext)
