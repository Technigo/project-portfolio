import { SectionTitle } from '../../reusableComponents/texts/SectionTitle'
import { MediumsizedTitle } from '../../reusableComponents/texts/MediumsizedTitle'
import { NormalText } from '../../reusableComponents/texts/NormalText'
import { CircleImage } from '../../reusableComponents/images/CircleImage'
import './Introduction.css'

export const Introduction = () => {

    const mediumSizeHeader = 'Hi, I am Sheryll Poo-Cheong!'
    const sectionTitle = 'Frontend Developer'
    const text = 'Sheryll is an exceptional developer known for her innovative solutions and exceptional coding abilities.  She creates user-friendly applications and solves complex issues with ease.  Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.'

    return (
        <header className="intro-container">
            < MediumsizedTitle mediumHeader={mediumSizeHeader} />
            < SectionTitle sectionTitletext={sectionTitle} />
            <div className="intro-flex">
                <CircleImage />
                <NormalText text={text} />
            </div>
        </header>
    );
};

