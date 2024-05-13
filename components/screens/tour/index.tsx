'use client';

import {
  MutableRefObject,
  RefObject,
  createRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useParams } from 'next/navigation';

import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import RenderSection from '@/components/sections/renderSection';
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import TextGenerateEffect from '@/components/ui/text-generate-effect';
import Asset from '@/components/ui/asset';

import { cn, revealAnimation } from '@/lib/utils';
import { IPage, ISection } from '@/types/types';

interface Props {
  data: IPage
}

function SlugScreen({ data }: Props) {
  const { sections, title, metaImage } = data;

  const { lang } = useParams();
  const [activeSection, setActiveSection] = useState<string>();
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end end'],
  });
  const y = useTransform(scrollYProgress, (value) => value * 300);

  const refs = useMemo(() => sections
    .reduce<{ [key: string]: RefObject<HTMLElement> }>((acc, cur) => {
    acc[cur._id] = createRef();

    return acc;
  }, {}), [sections]);

  const handleClick = (id: string) => {
    refs[id].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const scrollContainer = ref.current;

    if (scrollContainer) {
      const handleScroll = () => {
        sections.forEach((section) => {
          const el = document.getElementById(section._id);

          if (el) {
            const { top, bottom } = el.getBoundingClientRect();

            if (top <= 200 && bottom >= 200) {
              setActiveSection(section._id);
            }
          }
        });
      };

      scrollContainer.addEventListener('scroll', handleScroll);

      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [activeSection]);

  return (
    <main ref={ref} className="overflow-y-auto scroll-smooth h-screen ">
      <motion.section
        {...revealAnimation}
        style={{ y }}
        className="relative h-[30vh] lg:h-[40vh]"
      >
        <Asset image={metaImage} className="select-none" />
        <div className={`
               absolute top-0 left-0 
               h-full w-full
               flex flex-col 
               items-center justify-center
               z-10
               px-2
          `}
        >
          <h1 className="text-2xl lg:text-5xl text-white text-center font-semibold">
            <TextGenerateEffect words={title} />
          </h1>
        </div>
      </motion.section>
      <motion.div
        {...revealAnimation}
        className={`
        sticky top-0 z-10 py-4 px-2
        md:px-4 lg:px-10 bg-color-light-gray
        `}
      >
        <Breadcrumb className="max-w-6xl mb-4 mx-auto">
          <BreadcrumbList>
            <BreadcrumbLink href={`/${lang}/`}>{lang === 'fr' ? 'Accueil' : 'Home' }</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink href={`/${lang}/circuits`}>{lang === 'fr' ? 'Circuits' : 'Tours' }</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
        <nav className="max-w-6xl mx-auto overflow-x-scroll no-visible-scrollbar">
          <ul className="flex justify-start gap-4">
            {(sections || []).map(({ _id, heading }) => (
              <button
                key={_id}
                type="button"
                onClick={() => handleClick(_id)}
                className={cn(
                  'px-4 rounded-lg transition-all whitespace-nowrap last:mr-2',
                  { 'bg-black text-white': activeSection === _id },
                )}
              >
                {heading}
              </button>
            ))}
          </ul>
        </nav>
      </motion.div>
      {(sections || []).map((section: ISection) => (
        <RenderSection
          key={section._id}
          elRef={refs[section._id]}
          {...section}
        />
      ))}
    </main>
  );
}

export default SlugScreen;
