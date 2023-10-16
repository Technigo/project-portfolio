import style from './SmallerHeader.module.css';

export const SmallerHeader = ({ smallHeading, className }) => {
    return (
        <h2 className={`${style.SectionH2} ${className}`}>{smallHeading}</h2>
    )
}