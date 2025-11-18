import { useEffect, useState } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className='scroll-top'>
      <a href='#top' aria-label='Back to top'>
        <span style={{ fontSize: '1.8rem' }}>↑</span>
      </a>
    </div>
  )
}

export default ScrollToTop


