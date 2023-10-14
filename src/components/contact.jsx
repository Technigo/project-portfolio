import CvPic from '/CV_pic.jpg'
import GithubPic from '../assets/BtnGithub.png'
import InstaPic from '../assets/BtnInstagram.png'
import StackPic from '../assets/BtnStackoverflow.png'
import LinkedinPic from '../assets/BtnLinkedin.png'
import './contact.css';

export const Contact = () => {
    return (
        <div className="contactContainer">

            <div className='title'>
                <h1>Let's talk</h1>
            </div>

            <div className="cvPicture">
                <img src={CvPic} className="CvPic" alt="Picture of Isa Robertini" />
            </div>

            <div className='contactInfo'>
                <h3> Isa Robertini</h3>
                <h3> +46709170174</h3>
                <h3> robertiniisa@gmail.com</h3>
            </div>

            <div className='soMe'>

                <a href="https://github.com/isarobertini">
                    <button role="button" tabindex="0" onclick="yourFunction()">
                        <img src={GithubPic} alt="Description of the image" />
                    </button>
                </a>

                <a href="https://www.instagram.com/isarobertini/">
                    <button role="button" tabindex="0" onclick="yourFunction()">
                        <img src={InstaPic} alt="Description of the image" />
                    </button>
                </a>

                <a href="https://stackoverflowteams.com/c/technigo/users/521/?tab=profile">
                    <button role="button" tabindex="0" onclick="yourFunction()">
                        <img src={StackPic} alt="Description of the image" />
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/isa-robertini-9a6842274/">
                    <button role="button" tabindex="0" onclick="yourFunction()">
                        <img src={LinkedinPic} alt="Description of the image" />
                    </button>
                </a>


            </div>
            <div className='rollingtext-container'>
                <p class="rollingtext">
                    Fullstack Developer • Isa Robertini • Fullstack Developer • Isa Robertini • Fullstack Developer • Isa Robertini • Fullstack Developer • Isa Robertini
                </p>
            </div>
        </div>

    )
}