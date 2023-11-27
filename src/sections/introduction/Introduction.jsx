import { SectionTitle } from '../../reusableComponents/texts/SectionTitle'
import { MediumsizedTitle } from '../../reusableComponents/texts/MediumsizedTitle'
import { NormalText } from '../../reusableComponents/texts/NormalText'
import { CircleImage } from '../../reusableComponents/images/CircleImage'
import arrow from '/icons/arrow.png'
import './Introduction.css'

export const Introduction = () => {

    const mediumSizeHeader = 'Hi, I am Sheryll Poo-Cheong'
    const sectionTitle = 'Frontend Developer'
    const text = 'Sheryll is an exceptional developer known for her innovative solutions and exceptional coding abilities.  She creates user-friendly applications and solves complex issues with ease.  Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.'

    return (
        <header>
            <div className="intro-content">
                <div className="half-intro-info">
                    <div className="intro-title">
                        < MediumsizedTitle mediumHeader={mediumSizeHeader} />
                        < SectionTitle sectionTitletext={sectionTitle} />
                    </div>
                    <div className="intro-flex">
                        <CircleImage />
                        <NormalText text={text} />
                    </div>
                </div>
                <div className="half-intro-arrow">
                    <img src={arrow} alt="arrow pointing downwards to guide user to scroll down" />
                </div>
            </div>
        </header>
    );
};

