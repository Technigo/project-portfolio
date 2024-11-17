// src/components/myWordsSection/myWordsSection.jsx

import './myWordsSection.css';


const projects = [
    {
        title: 'The Council of the European Union has just definitively approved the AI Regulation. LinkedIn source.',
        description: 'Data protection: With this, and after being signed by the Presidents of the European Parliament and the Council, the text will be published in the Official Journal of the EU in the coming days.',
        imageUrl: 'src/assets/purpleorso.jpg',
        githubUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7198649553875529728?utm_source=share&utm_medium=member_ios',
        iconUrl: 'src/assets/ic-web.jpg',
    },
    {
        title: 'The protection of privacy in the context of personal data processing is a social necessity as well as a matter of compliance with specific legislation or regulation worldwide.',
        description: 'ISO/IEC 27701:2019 PIMS/ISMS."Extension to ISO/IEC 27001 and ISO/IEC 27002 for privacy information management" is a tool that can be used by data controllers and data processors. By complying with the requirements of this standard, an organization can generate evidence of how it handles personal data. This evidence can be used to facilitate agreements with business partners where personal data processing is mutually relevant or to demonstrate compliance with applicable laws and regulations.',
        imageUrl: 'src/assets/miscelaneousblack.jpg',
        githubUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7258774749072293888?utm_source=share&utm_medium=member_ios',
        liveUrl: 'https://stately-gumdrop-a43ec8.netlify.app/',
        iconUrl: 'src/assets/ic-web.jpg',
    },
    {
        title: 'The Public Sector Receives 34% of Cyberattacks in Spain',
        description: 'Cyber Security: Public administrations have become attractive targets for criminals; in fact, 34% of cyberattacks in Spain are directed at these entities. Ransomware is one of the most prominent attacks against public administration. Regulations such as the National Security Framework (ENS) and the NIS 2 Directive impose the adoption of minimum security measures, but these are not always integrated in the most effective way.',
        imageUrl: 'src/assets/red.jpg',
        githubUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7176464433135652864?utm_source=share&utm_medium=member_ios',
        iconUrl: 'src/assets/ic-web.jpg',
    },
];


function MyWordsSection() {
    const moreArticlesIconUrl = 'src/assets/ic-arrow-down.jpg';
    return (
        <section className="my-words-section">
            <h2>My Words</h2>

            <div className="my-words-grid">
                {projects.map((project, index) => (
                    <div className="my-words-row" key={index}>
                        <div className="my-words-image">
                            <img src={project.imageUrl} alt={`Imagen de ${project.title}`} />
                        </div>
                        <div className="my-words-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.githubUrl} className="my-words-btn">
                                <img src={project.iconUrl} alt="GitHub icon" className="button-icon" />
                                Read Article
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-words-button-container">
                <a href="#more-articles" className="my-words-btn-secondary">
                    See more articles
                    <img src={moreArticlesIconUrl} alt="More articles icon" className="button-secondary-icon" />
                </a>
            </div>
        </section>
    );
}

export default MyWordsSection;
