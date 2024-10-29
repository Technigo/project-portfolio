import "./contact.css";

export const Contact = () => { 
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Let&apos;s Talk</h2>

        <div className="frame">
          <img src="./Me.jpg" alt="profile-picture of Xing Yin" className="image-me" />
          <p>Xing Yin</p>
          <p>+46 (0)765 25 76 35</p>
          <p>xing.yin@gmail.com</p>
        </div>
        
        <div className="socialmedia">
          <img src="./Btn-linkedin.png" alt="LinkedIn"></img>
            <img src="./Btn-github.png" alt="GitHub"></img>
            <img
              src="./Btn-stackoverflow.png"
              alt="StackOverflow"
            ></img>
      </div>
      </div>
    </section>
  )
 }