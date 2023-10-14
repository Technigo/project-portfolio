import CvPic from '/CV_pic.jpg'
import arrow from '../assets/arrow.png'
import './HeaderComponents/headerStyle.css';
import { HeaderText } from './HeaderComponents/HeaderText';
import { HeaderImg } from './HeaderComponents/HeaderImg';

export const HeaderSection = () => {
    return (

        <div className="headerBody">
            <div className='HeaderSection'>

                <HeaderText
                    h3Text="Hi, im Isa"
                    h1Text="Frontend Developer"
                />
            </div>
            <div className="picText">
                <HeaderImg
                    src={CvPic}
                    alt="Picture of Isa Robertini"
                    pText="This is a long text about me This is a long text about me
                This is a long text about me This is a long text about me
                This is a long text about me This is a long text about me
                This is a long text about me This is a long text about me
                This is a long text about me This is a long text about me
                This is a long text about me This is a long text about me"
                />
            </div>
            <div className="arrow">
                <img src={arrow} alt="" />
            </div>
        </div>

    );
}
