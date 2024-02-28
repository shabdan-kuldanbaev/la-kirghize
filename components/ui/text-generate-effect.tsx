'use client';

import { useEffect } from 'react';
import {
  motion,
  stagger,
  useAnimate,
} from 'framer-motion';

export default function TextGenerateEffect({
  words,
}: {
  words: string;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  return (
    <motion.span ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          // eslint-disable-next-line react/no-array-index-key
          key={word + idx}
          className="opacity-0"
        >
          {word}
          {' '}
        </motion.span>
      ))}
    </motion.span>
  );
}
