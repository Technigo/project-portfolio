// Tech.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import napkin from './napkin.jpg';

export const Tech = ({ techTitle, techDescription }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
        <h1>{techTitle}</h1>
        <p>{techDescription}</p>
      </motion.div>
    </div>
  );
};
