'use client';

interface Props {
  title: string,
  description?: string,
  contentFile?: string,
}

function Hero({
  title,
  description,
  contentFile,
}: Props) {
  return (
    <div className="relative grid place-content-center h-[100vh]">
      {title && (
        <h1 className="text-gray-95 font-bold text-4xl text-center max-w-lg">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-gray-95 text-lg text-center max-w-lg">
          {description}
        </p>
      )}
      {contentFile && (
        <video
          muted
          autoPlay
          loop
          controls={false}
          className="absolute z-[-1] object-cover object-center w-full h-full"
        >
          <source src={contentFile} />
        </video>
      )}
    </div>
  );
}

export default Hero;
