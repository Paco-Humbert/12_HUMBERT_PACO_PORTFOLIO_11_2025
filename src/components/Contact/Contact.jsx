import { useState } from 'react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    
    console.log('Formulaire envoyé : ', formData)

    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>

      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type='submit' className='btn btn--outline'>
          Send
        </button>

        {status === 'success' && (
          <p className='success-message'>Message sent successfully ✔️</p>
        )}
      </form>
    </section>
  )
}

export default Contact
