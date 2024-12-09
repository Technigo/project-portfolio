// src/components/ContactSection.jsx

import './contactSection.css'

import LinkedInIcon from "/src/assets/btn-linkedin.jpg";
import StackoverflowIcon from "/src/assets/stackoverflow.jpg";
import GitHubIcon from "/src/assets/btn-github.jpg";
import TwitterIcon from "/src/assets/btn-twitter.jpg";


function ContactSection() {
    return (
        <section className="contact-section">
            <h2>Let&apos;s talk</h2>
            <img src="/images/contact-icon.jpg" alt="Foto de perfil" className="contact-img" />
            <h3>María Fernández Huerta</h3>
            <h3>+46 73 364 5225</h3>
            <h3>maria.fernandez703@yahoo.com</h3>

            <section className="social-links">
                <ul>
                    <li>
                        <a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/tuusuario" target="_blank" rel="noopener noreferrer">
                            <img src={StackoverflowIcon} alt="Stackoverflow" className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                            <img src={GitHubIcon} alt="GitHub" className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
                            <img src={TwitterIcon} alt="Twitter" className="social-icon" />
                        </a>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default ContactSection;
