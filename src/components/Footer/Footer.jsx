import { useLanguage } from '../../contexts/language.jsx'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()
  return (
  <footer className='footer'>
    <a
      href='https://github.com/Paco-Humbert/12_HUMBERT_PACO_PORTFOLIO_11_2025'
      className='link footer__link'
    >
      {t('Paco Humbert · Portfolio Data & Web')}
    </a>
  </footer>
)

}

export default Footer
