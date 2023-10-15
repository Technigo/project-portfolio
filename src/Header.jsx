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
                    pText="Isa Robertini, an outstanding developer, is renowned for her innovative problem-solving and remarkable coding skills. She adeptly crafts user-friendly applications and effortlessly tackles intricate challenges. Her unwavering commitment to excellence renders her an indispensable contributor to any project and a standout figure in the technology domain."
                />
            </div>
            <div className="arrow">
                <img src={arrow} alt="" />
            </div>
        </div>

    );
}
