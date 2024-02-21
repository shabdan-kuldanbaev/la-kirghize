// eslint-disable-next-line import/no-extraneous-dependencies

import LoadingAnimation from '@/components/ui/loading-animation';

function Loading() {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <LoadingAnimation />
    </div>
  );
}

export default Loading;
