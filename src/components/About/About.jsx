import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  if (!about) return null

  const { name, role, description, social, picture } = about

  const pictureSrc =
    picture && picture.startsWith('http')
      ? picture
      : picture
      ? `/images/${picture}`
      : null

  return (
    <div className='about center'>
      <div className='about__header'>
        {pictureSrc && (
          <img
            src={pictureSrc}
            alt={name}
            className='about__picture'
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        )}

        <div className='about__intro'>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && <h2 className='about__role'>A {role}.</h2>}

          {description && <p className='about__desc'>{description}</p>}
        </div>
      </div>

      <div className='about__contact center'>
        

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub size={24} />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin size={24} />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
