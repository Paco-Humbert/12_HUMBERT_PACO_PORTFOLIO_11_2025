import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p className='contact__intro'>Pour échanger sur mes projets ou une opportunité en Business Intelligence.</p>
      <a href={`mailto:${contact.email}`} className='btn btn--outline'>Me contacter par e-mail</a>
    </section>
  )
}

export default Contact
