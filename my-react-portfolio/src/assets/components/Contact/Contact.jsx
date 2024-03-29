import './Contact.css'
import { PageTopic } from '../smallComps/PageTopic'
import { BtnLink } from '../smallComps/BtnLink/BtnLink'

export const Contact = () => {
    const linkedin = "https://www.linkedin.com/in/trista-shan-62074471/"
    const linkedinBtn = "../../../public/icons/linkedin.svg" 
    const gitHubBtn = "../../../public/icons/gitHub.svg"
    const instagramBtn = "../../../public/icons/instagram.svg"
    const profilePhoto ="../../../public/images/profilePhoto.jpg" 

    return (
        <div className='contact-wrapper'>
            <PageTopic pageTopic={"Let's Talk"} className={'contact'}/>
            <div className='picInfo'>
              <img src={profilePhoto} alt='profile photo' className='profilePhoto2'/>
              <div className='info'>
                <p className='name'>Trista Shan</p>
                <p className='phone'>phone number</p>
                <p className='email'>email</p>
              </div>
            </div>
            <div className="contactIcons">
            <BtnLink link={linkedin} src={linkedinBtn} alt={'linkednin button'} btnContent={''} />
            <BtnLink link={linkedin} src={gitHubBtn} alt={'gitHub button'} btnContent={''} />
            <BtnLink link={linkedin} src={instagramBtn} alt={'instagram button'} btnContent={''} />
            </div>
        </div>
    )
}
//email need to work on for spam
//hover svg doesn't work, need to add hovered svg 
//link need to be changed
//button animation not yet