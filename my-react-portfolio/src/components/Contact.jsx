import portrait from '../assets/portrait.png'
import email from '../assets/email.svg'
import './css/contact.css'

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Let&apos;s talk</h1>
      <img src={portrait} id="portrait" alt="portait of Izabel" />
      <h3>Izabel Lind Färnstrand</h3>
      <h3>+46729632973</h3>
      <div className="email"><a href="mailto:contact@izabellind.com"><img src={email} alt="email" id="email"/><h3>contact@izabellind.com</h3></a>
      </div>
    </div>
  )
}
