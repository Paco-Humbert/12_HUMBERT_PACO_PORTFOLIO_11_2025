import { skillGroups } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skillGroups.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Compétences</h2>
      <div className='skills__groups'>
        {skillGroups.map((group) => (
          <div className='skills__group' key={group.name}>
            <h3>{group.name}</h3>
            <ul className='skills__list'>
              {group.items.map((skill) => <li key={skill} className='skills__list-item'>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
