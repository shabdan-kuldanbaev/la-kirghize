'use client';

import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { ReactNode, useState } from 'react';

function ScrollWrapper({ children }: { children: ReactNode }) {
  const { scrollY }: { scrollY: MotionValue<number> } = useScroll();
  const [hidden, setHidden] = useState(false);

  const update = () => {
    if (scrollY.get() > 100) {
      setHidden(true);
    } else if (scrollY.get() < 100) {
      setHidden(false);
    }
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -64 },
  };

  useMotionValueEvent(scrollY, 'change', update);

  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-gray-100/40"
      animate={hidden ? 'hidden' : 'visible'}
      variants={variants}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      {children}
    </motion.header>
  );
}

export default ScrollWrapper;
