import CvPic from '/CV_pic.jpg'


export const Contact = () => {
    return (
        <div className="presentationContainer">

            <h1>Let's talk</h1>

            <div className='subPresentation'>
                <img src={CvPic} className="CvPic" alt="Picture of Isa Robertini" />
                <h3> +46709170174</h3>
                <h3> robertiniisa@gmail.com</h3>
            </div>

        </div>

    )
}