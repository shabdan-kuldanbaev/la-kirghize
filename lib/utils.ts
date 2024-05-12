import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const revealAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { ease: 'easeInOut', duration: 0.75 },
};
