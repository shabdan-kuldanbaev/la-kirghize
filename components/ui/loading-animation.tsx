'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from 'lottie-react';
import planetAnimation from '@/public/animations/planetAnimation.json';

export default function LoadingAnimation() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 grid place-content-center bg-white">
      <Lottie
        loop
        animationData={planetAnimation}
        className="w-80 aspect-square"
      />
    </div>
  );
}
