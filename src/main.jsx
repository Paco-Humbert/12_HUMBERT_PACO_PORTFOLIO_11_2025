import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './contexts/language.jsx'
import { ThemeProvider } from './contexts/theme.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
)
