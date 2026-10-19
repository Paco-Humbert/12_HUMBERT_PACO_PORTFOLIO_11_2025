import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const imageSrc = project.image ? `${import.meta.env.BASE_URL}images/${project.image}` : null

  return (
    <article className='project'>
      {imageSrc && (
        <figure className='project__figure'>
          <img src={imageSrc} alt={project.imageAlt} loading='lazy' width='640' height='360' />
          <figcaption>{project.imageCaption}</figcaption>
        </figure>
      )}
      <div className='project__body'>
        {project.label && <p className='project__label'>{project.label}</p>}
        <h3>{project.name}</h3>
        {project.category && <p className='project__category'>{project.category}</p>}
        <p className='project__description'>{project.description}</p>
        {project.outcome && <p className='project__outcome'>{project.outcome}</p>}
        {project.note && <p className='project__note'>{project.note}</p>}
        {project.stack && (
          <ul className='project__stack' aria-label='Outils et compétences'>
            {project.stack.map((item) => <li key={item} className='project__stack-item'>{item}</li>)}
          </ul>
        )}
        <div className='project__links'>
          {project.sourceCode && (
            <a href={project.sourceCode} className='link project__source' target='_blank' rel='noopener noreferrer' aria-label={`Consulter le dépôt ${project.name} sur GitHub (nouvel onglet)`}>
              <FaGithub size={20} aria-hidden='true' /> Consulter le dépôt
            </a>
          )}
          {project.livePreview && (
            <a href={project.livePreview} className='link project__source' target='_blank' rel='noopener noreferrer' aria-label={`Voir le site ${project.name} (nouvel onglet)`}>
              <FiExternalLink size={19} aria-hidden='true' /> Voir le site
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
    imageAlt: PropTypes.string,
    imageCaption: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    sourceCode: PropTypes.string,
    livePreview: PropTypes.string,
  }).isRequired,
}

export default ProjectContainer
