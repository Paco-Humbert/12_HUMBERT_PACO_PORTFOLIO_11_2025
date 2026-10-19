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
      ? `${import.meta.env.BASE_URL}images/${picture}`
      : null

  return (
    <section className='about center' aria-labelledby='about-title'>
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
            <h1 id='about-title'>
              <span className='about__name'>{name}</span>
            </h1>
          )}

          {role && <p className='about__role'>{role}</p>}

          {description && <p className='about__desc'>{description}</p>}
        </div>
      </div>

      <div className='about__contact center'>
        <a href='#projects' className='btn btn--outline'>Découvrir les projets BI</a>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='Profil GitHub de Paco Humbert (nouvel onglet)'
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
                aria-label='Profil LinkedIn de Paco Humbert (nouvel onglet)'
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
    </section>
  )
}

export default About
