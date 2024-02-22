'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from 'lottie-react';
import planetAnimation from '@/public/animations/planetAnimation.json';

export default function LoadingAnimation() {
  return (
    <div className="fixed top-0 w-screen h-screen grid place-content-center bg-white">
      <Lottie
        loop
        animationData={planetAnimation}
        className="w-80 aspect-square"
      />
    </div>
  );
}
