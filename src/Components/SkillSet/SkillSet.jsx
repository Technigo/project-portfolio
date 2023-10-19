/* eslint-disable react/prop-types */
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const SkillSet = ({ type, typeArray }) => {
    return(
        <div className={`${type}-skills`}>
            <h4 className={`${type}-skills-header`}>{capitalize(type)}</h4>
            <p>
                {typeArray.map(item => <span key={item}>{item}</span>)}
            </p>
        </div>
    )
}