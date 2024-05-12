import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { revealAnimation } from '@/lib/utils';

function Reveal({
  children,
} : {
  children: ReactNode
}) {
  return (
    <motion.div
      {...revealAnimation}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
