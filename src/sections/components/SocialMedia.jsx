import "./SocialMedia.css"

export const SocialMedia = () => {


    return (
        <div className="social-media-wrapper">
            <a  href="https://www.linkedin.com/in/vera-witting-ba51b1b6"
                target="_blank"
                rel="noreferrer noopener">
                <img className="linkedin-icon" src="src/assets/social/linkedinlight.svg" alt="Linked in icon." />
            </a>
            <a  href="https://github.com/verawitting"
                target="_blank"
                rel="noreferrer noopener">
                <img className="github-icon" src="src/assets/social/githublight.svg" alt="Git Hub icon." />
            </a>
            <a  href="https://www.instagram.com/verawitting/"
                target="_blank"
                rel="noreferrer noopener">
                <img className="instagram-icon" src="src/assets/social/instagramlight.svg" alt="Instagram icon" />
            </a>
        </div>
    )
}