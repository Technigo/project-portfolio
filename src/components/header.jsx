import CvPic from '/CV_pic.jpg'
import './headerStyle.css';

export const HeaderText = () => {
    return (
        <div className="presentationContainer">
            <h2>Hi, I'm Isa Robertini</h2>
            <h1>Frontend Developer</h1>

            <div className='subPresentation'>
                <img src={CvPic} className="CvPic" alt="Picture of Isa Robertini" />
                <p>This is a long text about me This is a long text about me
                </p>
            </div>

        </div>

    )
}