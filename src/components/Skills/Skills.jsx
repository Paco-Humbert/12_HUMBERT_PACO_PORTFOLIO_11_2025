import { useLanguage } from '../../contexts/language.jsx'
import './Skills.css'

const skillGroups = [
  {
    id: 'data',
    name: 'Analyse des données',
    items: ['SQL', 'SQLite', 'Python', 'pandas', 'Statistiques', 'Contrôle qualité'],
  },
  {
    id: 'bi',
    name: 'Business Intelligence',
    items: ['Power BI', 'Power Query', 'DAX', 'Excel', 'Tableaux de bord'],
  },
  {
    id: 'business',
    name: 'Analyse métier',
    items: ['Recueil des besoins', 'Définition des indicateurs', 'Documentation des analyses', 'Restitution des résultats'],
  },
  {
    id: 'web',
    name: 'Développement web',
    items: ['HTML', 'CSS / Sass', 'JavaScript', 'React / Redux', 'Responsive', 'Accessibilité', 'Intégration de maquettes', 'SEO', 'Figma', 'Débogage', 'Tests unitaires', 'Git / GitHub'],
  },
]

const transversalSkills = ['Rigueur', 'Esprit critique', 'Esprit de synthèse', 'Organisation', 'Autonomie']

const Skills = () => {
  const { t } = useLanguage()
  return (
  <section className='section skills' id='skills' aria-labelledby='skills-title'>
    <h2 className='section__title' id='skills-title'>{t('Compétences')}</h2>

    <div className='skills__groups'>
      {skillGroups.map((group) => (
        <article className='skills__group' key={group.id} aria-labelledby={`skills-${group.id}`}>
          <h3 className='skills__group-title' id={`skills-${group.id}`}>{t(group.name)}</h3>
          <ul className='skills__list'>
            {group.items.map((skill) => (
              <li key={skill} className='skills__list-item'>{t(skill)}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>

    <div className='skills__transversal' aria-labelledby='skills-transversal-title'>
      <h3 id='skills-transversal-title'>{t('Compétences transversales')}</h3>
      <ul className='skills__qualities'>
        {transversalSkills.map((skill) => <li key={skill}>{t(skill)}</li>)}
      </ul>
    </div>
  </section>
)

}

export default Skills
