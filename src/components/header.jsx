import CvPic from '/CV_pic.jpg'
import './HeaderComponents/headerStyle.css';
import { HeaderText } from './HeaderComponents/HeaderText';
import { HeaderImg } from './HeaderComponents/HeaderImg';

export const HeaderSection = () => {
    return (

        <div className='HeaderSection'>

            <HeaderText
                h3Text="Hi, im Isa"
                h1Text="Frontend Developer"
            />
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
    );
}
