import uniqid from 'uniqid'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  // Gestion de l'image compatible Vite
  const imageSrc =
    project.image && project.image.startsWith('http')
      ? project.image
      : project.image
      ? `/images/${project.image}`
      : null

  return (
    <div className='project'>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`${project.name} screenshot`}
          style={{ width: '100%', objectFit: 'cover' }}
          onError={(e) => {
            // Si l’image n’existe pas, on la masque
            e.target.style.display = 'none'
          }}
        />
      )}

      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="project__links">
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink size={22} />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
