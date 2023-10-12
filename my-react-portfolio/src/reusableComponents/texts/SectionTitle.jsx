import './SectionTitle.css'

export const SectionTitle = ({ sectionTitletext }) => {
    return (
        <div className='section-title'>
            <h1>{sectionTitletext}</h1>
        </div>
    )
}
