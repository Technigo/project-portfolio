import CvPic from '/CV_pic.jpg'
import './HeaderComponents/headerStyle.css';
import { HeaderText } from './HeaderComponents/HeaderText';
import { HeaderImg } from './HeaderComponents/HeaderImg';

export const HeaderSection = () => {
    return (

        <div className='HeaderSection'>
            <h2>Hi! I'm Isa Robertini</h2>
            <HeaderText
                h1Text="Frontend Developer"
            />
            <HeaderImg
                src={CvPic}
                alt="Picture of Isa Robertini"
                pText="This is a long text about me This is a long text about me"
            />
        </div>
    );
}
