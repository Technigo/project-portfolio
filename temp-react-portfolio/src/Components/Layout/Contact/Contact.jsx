import style from './Contact.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';
import { SmallerHeader } from '../../UI/SmallerHeader/SmallerHeader.jsx';
import { Photos } from '../../UI/Photos/Photos.jsx';
import { Buttons } from '../../UI/Buttons/Buttons.jsx';

export const Contact = () => {
    const smallHeaders = [
        { type: 'small', heading: "Elba Cacan", className: style.smallerHeadingMe },
        { type: 'small', heading: "elbacacan@gmail.com", className: style.smallerHeadingEmail },
        { type: 'small', heading: "+47 40X XX X23", className: style.smallerHeadingNumber },
    ]; //This array will be mapped over to dynamically render each SmallerHeader with the provided props

    return (
        <div className={style.outer_containerWrapperContact}>
            <div className={style.wrapper_contact}>
                <SectionHeader
                    heading="Let's talk"
                    className={style.contactHeader}
                />
                <Photos selectedMode="me" className={style.imgMe} />
                {smallHeaders.map((header, index) => (
                    <SmallerHeader
                        key={index}
                        smallHeading={header.heading}
                        className={`${style.smallerHeadingContact} ${header.className}`}
                    /> //ClassName: Makes it possible to style headers as a section and each inividually. 
                ))}
                <Buttons className={style.githubIcon} />
            </div>
        </div>
    )
}


