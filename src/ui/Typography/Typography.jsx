import PropTypes from 'prop-types'
import "./Typography.css"

export const HeaderOne = ({ children }) => <h1 className="header-one">{children}</h1>
export const HeaderThree = ({ children }) => <h2 className='header-three'>{children}</h2>
export const SectionTitle = ({ children }) => <h2 className="section-title">{children}</h2>
export const Body = ({ children }) => <p className='body'>{children}</p>

SectionTitle.propTypes = {
    children: PropTypes.node.isRequired,
}
HeaderOne.propTypes = {
    children: PropTypes.node.isRequired,
}
HeaderThree.propTypes = {
    children: PropTypes.node.isRequired,
}
Body.propTypes = {
    children: PropTypes.node.isRequired,
}