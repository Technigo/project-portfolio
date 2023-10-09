import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import napkin from './napkin.jpg';

export const Tech = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Percentage of the element's visibility in the viewport to trigger animation
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={animationVariants}
        style={{
          backgroundImage: `url(${napkin})`,
          padding: '100px',
          color: 'yellow',
        }}
      >
        <h1>What I want to do while we work together</h1>
        <p>HTML, CSS, JavaScript, React, mob-programming, pair-programming</p>
      </motion.div>
    </div>
  );
};
