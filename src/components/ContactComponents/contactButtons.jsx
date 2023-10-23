import GithubPic from '/BtnGithub.png'
import InstaPic from '/BtnInstagram.png'
import StackPic from '/BtnStackoverflow.png'
import LinkedinPic from '/BtnLinkedin.png'

//Buttons for SocialMedia
export const SoMeButtons = () => {
    return (
        <div className='soMe'>
            <a href="https://github.com/isarobertini" title="GitHub Link">
                <button role="button" tabIndex="0">
                    <img src={GithubPic} alt="GitHub Symbol" />
                </button>
            </a>
            <a href="https://www.instagram.com/isarobertini/" title="Instagram Link">
                <button role="button" tabIndex="0" >
                    <img src={InstaPic} alt="Instagram Symbol" />
                </button>
            </a>
            <a href="https://stackoverflowteams.com/c/technigo/users/521/?tab=profile" title="Stack Overflow Link">
                <button role="button" tabIndex="0">
                    <img src={StackPic} alt="StackOverflow Symbol" />
                </button>
            </a>
            <a href="https://www.linkedin.com/in/isa-robertini-9a6842274/" title="LinkedIn Link">
                <button role="button" tabIndex="0">
                    <img src={LinkedinPic} alt="LinkedIn Symbol" />
                </button>
            </a>
        </div>
    );
}
