import { Heading } from '../reusables/Heading.jsx'
import { SubHeading } from '../reusables/SubHeading.jsx'
import './Introduction.css'

export const Introduction = () => {
    return (
        <header>
            <section className="heading-wrapper">
        <SubHeading 
            subHeading="Hi, I'm Olga Lepistö"
            className="introduction" />
        <Heading
            heading="Frontend Developer"
            className="developer" />
            </section>
        </header>
    )
}