import style from './SectionHeader.module.css';

export const SectionHeader = ({ heading, className }) => {
    //console.log(className);
    return (
        <h1 className={`${style.SectionH1} ${className}`}>{heading}</h1>
    )
}