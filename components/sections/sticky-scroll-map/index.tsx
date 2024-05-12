'use client';

import {
  RefObject,
  useState,
} from 'react';
import {
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import Image from 'next/image';

import MapboxMap from '@/components/map';
import Reveal from '@/components/ui/reveal-animation';

import ICONS from '@/lib/icons';
import { IContent, ISection } from '@/types/types';

interface Props extends Pick<ISection, '_id' | 'heading' | 'contentList'> {
  elRef?: RefObject<HTMLElement>;
}

function StickyScrollMap(props: Props) {
  const {
    _id,
    elRef,
    heading,
    contentList,
  } = props;

  const [markers] = useState(() => contentList
    .map((item) => ({
      ...item?.position,
      text: item.heading.split('||')[0],
    })));
  const [activeCard, setActiveCard] = useState<number>(0);
  const { scrollYProgress } = useScroll({
    container: elRef,
    offset: ['start start', 'end start'],
  });
  const cardLength = contentList?.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = contentList.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance <= Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <Reveal>
      <section
        id={_id}
        ref={elRef}
        className={`
        relative
        bg-color-light-gray 
        snap-start snap-always 
        h-section overflow-y-auto no-visible-scrollbar
        block lg:flex
        flex-col lg:flex-row-reverse
        justify-center gap-8
      `}
      >
        <div className={`
          sticky top-0 z-10
          pt-4
          lg:h-full
          overflow-hidden 
          bg-color-light-gray
          max-w-full lg:max-w-lg w-full
      `}
        >
          <h2 className="text-2xl font-bold mb-4 text-right px-2">{heading}</h2>
          <MapboxMap
            initialPosition={{ ...contentList[0]?.position, zoom: 6 }}
            flyToOptions={contentList[activeCard]?.position}
            markers={markers}
            className="h-[18rem] lg:rounded-xl"
          />
        </div>
        <div className="block div relative items-start max-w-full lg:max-w-lg w-full px-2 pt-4">
          <div className="max-w-4xl">
            {contentList?.map((content, index) => (
              <article key={content.heading + index} className="pb-16">
                {content.heading && (
                <h3 className="text-xl font-bold text-black">
                  {content.heading
                    .split('||')
                    .map((text) => (
                      <span key={text} className="first:whitespace-nowrap first:text-white first:px-4 first:bg-black first:rounded-sm first:mr-4">
                        {text}
                      </span>
                    ))}
                </h3>
                )}
                {content.description && (
                <p className="mt-5 text-black">
                  {content.description}
                </p>
                )}
                {(content.contentList || []).map((item: IContent) => (
                  <div key={item._id} className="flex justify-start items-end mt-2">
                    {item.icon && (
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image
                        src={ICONS[item.icon]}
                        alt={`${item.icon}`}
                        sizes="100vw"
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    )}
                    {(item.heading && item.description) && (
                    <h5 className="font-bold ml-3 text-base">
                      {item.heading}
                      :
                      <span className="font-normal pl-3">{item.description}</span>
                    </h5>
                    )}
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default StickyScrollMap;
