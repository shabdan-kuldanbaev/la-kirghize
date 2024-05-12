'use client';

import { motion } from 'framer-motion';
import { revealAnimation } from '@/lib/utils';

function NotFoundScreen() {
  return (
    <motion.main
      className="pt-40 px-4"
      {...revealAnimation}
    >
      <p className="text-7xl">Oops!</p>
      <h1 className="text-4xl md:text-6xl">Page not found</h1>
    </motion.main>
  );
}

export default NotFoundScreen;
