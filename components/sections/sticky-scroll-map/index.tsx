'use client';

import {
  useRef,
  useState,
} from 'react';
import {
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import Image from 'next/image';

import MapboxMap from '@/components/map';

import ICONS from '@/lib/icons';
import { IContent, ISection } from '@/types/types';

type Props = Pick<ISection, '_id' | 'heading' | 'contentList'>;

function StickyScrollMap(props: Props) {
  const {
    _id,
    heading,
    contentList,
  } = props;

  const [markers] = useState(() => contentList
    .map((item) => ({
      ...item?.position,
      text: item.heading.split('||')[0],
    })));
  const [activeCard, setActiveCard] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
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
    <section id={_id} className="px-2 bg-color-light-gray">
      <div
        ref={ref}
        className={`
        py-10
        h-auto lg:h-[100svh]
        m-auto
        max-w-6xl
        overflow-y-auto 
        flex justify-start lg:justify-between
        flex-col lg:flex-row-reverse
        gap-8
        relative
        no-visible-scrollbar
        `}
      >
        <div className={`
        flex-shrink-0 
        overflow-hidden 
        static lg:sticky
        h-auto lg:h-full
        lg:px-4
        top-0
        z-10
      `}
        >
          <h2 className="text-2xl font-bold mb-4 text-right">{heading}</h2>
          <MapboxMap
            initialPosition={{ ...contentList[0]?.position, zoom: 6 }}
            flyToOptions={contentList[activeCard]?.position}
            markers={markers}
            className="lg:w-[600px] h-[350px] rounded-md"
          />
        </div>
        <div className="block div relative items-start">
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
      </div>
    </section>
  );
}

export default StickyScrollMap;
