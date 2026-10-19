import { useLanguage } from '../../contexts/language.jsx'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const { t } = useLanguage()
  const imageSrc = project.image ? `${import.meta.env.BASE_URL}images/${project.image}` : null

  return (
    <article className={`project${project.imageKind === 'web' ? ' project--web' : ''}`}>
      {imageSrc && (
        <figure className='project__figure'>
          <img src={imageSrc} alt={t(project.imageAlt)} loading='lazy' width='640' height='360' />
          {project.imageKind !== 'web' && (
          <figcaption>{t(project.imageCaption)}</figcaption>
          )}
        </figure>
      )}
      <div className='project__body'>
        {project.label && <p className='project__label'>{t(project.label)}</p>}
        <h3>{t(project.name)}</h3>
        {project.category && <p className='project__category'>{t(project.category)}</p>}
        <p className='project__description'>{t(project.description)}</p>
        {project.outcome && <p className='project__outcome'>{t(project.outcome)}</p>}
        {project.note && <p className='project__note'>{t(project.note)}</p>}
        {project.stack && (
          <ul className='project__stack' aria-label={t('Outils et compétences')}>
            {project.stack.map((item) => <li key={item} className='project__stack-item'>{t(item)}</li>)}
          </ul>
        )}
        <div className='project__links'>
          {project.sourceCode && (
            <a href={project.sourceCode} className='link project__source' target='_blank' rel='noopener noreferrer' aria-label={t('Consulter le dépôt {name} sur GitHub (nouvel onglet)', { name: t(project.name) })}>
              <FaGithub size={20} aria-hidden='true' /> {t('Consulter le dépôt')}
            </a>
          )}
          {project.livePreview && (
            <a href={project.livePreview} className='link project__source' target='_blank' rel='noopener noreferrer' aria-label={t('Voir le site {name} (nouvel onglet)', { name: t(project.name) })}>
              <FiExternalLink size={19} aria-hidden='true' /> {t('Voir le site')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

ProjectContainer.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    label: PropTypes.string,
    category: PropTypes.string,
    outcome: PropTypes.string,
    note: PropTypes.string,
    image: PropTypes.string,
    imageKind: PropTypes.string,
    imageAlt: PropTypes.string,
    imageCaption: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    sourceCode: PropTypes.string,
    livePreview: PropTypes.string,
  }).isRequired,
}

export default ProjectContainer
