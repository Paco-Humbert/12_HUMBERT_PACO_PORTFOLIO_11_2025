import { useState } from 'react'
import { projects, webProjects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const [category, setCategory] = useState('data')
  const visibleProjects = category === 'data' ? projects : webProjects
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projets</h2>
      <p className='projects__intro'>Études de cas pour découvrir ma démarche : comprendre le besoin, préparer les données et restituer les résultats. Les projets web présentent mon premier parcours.</p>
      <div className='projects__filters' role='group' aria-label='Choisir une catégorie de projets'>
        <button type='button' className={`projects__filter ${category === 'data' ? 'is-active' : ''}`} aria-pressed={category === 'data'} onClick={() => setCategory('data')}>Data & BI · {projects.length}</button>
        <button type='button' className={`projects__filter ${category === 'web' ? 'is-active' : ''}`} aria-pressed={category === 'web'} onClick={() => setCategory('web')}>Développement web · {webProjects.length}</button>
      </div>
      <p className='projects__context' role='status'>{category === 'data' ? 'Projets pédagogiques OpenClassrooms. Les livrables et leurs limites sont documentés dans chaque dépôt.' : 'Projets du parcours Intégrateur web : interfaces, accessibilité et applications React.'}</p>

      <div className='projects__grid'>
        {visibleProjects.map((project) => (
          <ProjectContainer key={project.id || project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
