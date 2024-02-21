'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from 'lottie-react';
import animation from '@/public/animations/loadingAnimation.json';

export default function LoadingAnimation() {
  return (
    <Lottie
      loop
      animationData={animation}
      className="w-80 aspect-square"
    />
  );
}
