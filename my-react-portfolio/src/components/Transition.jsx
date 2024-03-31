import { motion } from 'framer-motion'
import { PropTypes } from 'prop-types'

export const Transition = ({ children }) => {
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  }

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

Transition.propTypes = {
  children: PropTypes.array,
}
