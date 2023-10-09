import React from 'react';
import { motion } from 'framer-motion';
import kontakt from './kontakt.jpg';

export const Contact = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      style={{ backgroundImage: `url(${kontakt})`, padding: `100px`, color: 'yellow' }}
    >
      <h1>contact</h1>
      <p>fakemail@fakemail.jpg</p>
      |<a href="https://www.linkedin.com/in/so-youn-choi-703270212/">linkedin</a>|
      <a href="https://github.com/catfooo">github</a>|
      <a href="https://stackoverflowteams.com/c/technigo/users/490/?tab=profile">stackoverflow</a>|
    </motion.div>
  );
};
