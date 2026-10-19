import { skillGroups, softSkills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skillGroups.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Compétences</h2>
      <h3 className='skills__category'>Compétences techniques & fonctionnelles <span>Hard skills</span></h3>
      <div className='skills__groups'>
        {skillGroups.map((group) => (
          <div className='skills__group' key={group.name}>
            <h4>{group.name}</h4>
            <ul className='skills__list'>
              {group.items.map((skill) => <li key={skill} className='skills__list-item'>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className='skills__soft'>
        <h3 className='skills__category'>Compétences transversales <span>Soft skills</span></h3>
        <ul className='skills__list'>
          {softSkills.map((skill) => <li key={skill} className='skills__list-item'>{skill}</li>)}
        </ul>
      </div>
    </section>
  )
}

export default Skills
