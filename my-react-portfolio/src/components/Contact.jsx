import portrait from '../assets/portrait.png'

export const Contact = () => {
  return (
    <div className="container contact">
      <h1>Let's talk</h1>
      <img src={portrait} id="portrait" alt="portait of Izabel" />
      <p>Izabel Lind Färnstrand</p>
      <p>+46729632973</p>
      <p><a href="mailto:contact@izabellind.com">contact@izabellind.com</a></p>
    </div>
  )
}
