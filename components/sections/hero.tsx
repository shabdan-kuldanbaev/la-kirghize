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
    <div className="relative z-[1] h-[100vh]">
      <div className="max-w-xl mx-auto px-4 grid place-content-center gap-2 h-full">
        {title && (
        <h1 className=" text-gray-95 font-bold text-3xl text-center sm:text-4xl">
          {title}
        </h1>
        )}
        {description && (
        <p className="text-gray-95 text-lg text-center">
          {description}
        </p>
        )}
      </div>
      {contentFile && (
        <video
          muted
          autoPlay
          loop
          controls={false}
          className="absolute top-0 z-[-1] object-cover object-center w-full h-full"
        >
          <source src={contentFile} />
        </video>
      )}
    </div>
  );
}

export default Hero;
