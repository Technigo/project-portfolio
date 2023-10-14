import CvPic from '/CV_pic.jpg'
import arrow from '../arrow.png'
import './components/HeaderComponents/headerStyle.css';
import { HeaderText } from './components/HeaderComponents/HeaderText';
import { HeaderImg } from './components/HeaderComponents/HeaderImg';

export const HeaderSection = () => {
    return (

        <div className="headerBody">
            <div className='HeaderSection'>

                <div className="CvPicUpper"><HeaderImg
                    src={CvPic}
                    alt="Picture of Isa Robertini" />
                </div>

                <HeaderText
                    h3Text="Hi, I'm Isa Robertini"
                    h1Text="Frontend Developer"
                />
            </div>
            <div className="picText">
                <HeaderImg
                    src={CvPic}
                    alt="Picture of Isa Robertini"
                    pText="Isa is an exceptional developer known for her 
                    innovative solution and exceptional coding abilities.
                    She creates user-friendly applications and solves
                    complex issues with ease. Her drive for excellence makes 
                    her a valuable asset to any project and a standout in the technology fiel"
                />
            </div>
            <div className="arrow">
                <img src={arrow} alt="" />
            </div>
        </div>

    );
}
