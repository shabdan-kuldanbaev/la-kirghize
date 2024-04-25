'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { Tab, Tabs } from '@/components/ui/tabs';
import TextBlock from '@/components/text';
import { IContent, ISection } from '@/types/types';
import ICONS from '@/lib/icons';
import urlForImage from '@/sanity/lib/image';

function TabsSection({
  contentList,
  title,
}: ISection) {
  const tabs: Array<Tab> = useMemo(() => (contentList || []).map(({
    _id,
    title: tabTittle,
    description: tabDescription,
    text,
    contentList: tabContentList,
    image,
  }) => {
    const src = (image.asset && image.attribution) && urlForImage(image);

    return {
      title: tabTittle,
      value: _id,
      content: (
        <div className="flex flex-col gap-5 w-full h-full backdrop-blur-sm bg-base overflow-hidden overflow-y-auto px-2 py-6 sm:p-10 md:flex-row">
          <div className="flex-shrink-0 flex-grow-0 w-full md:w-1/2">
            <h4 className="text-3xl font-semibold mb-3 sm:text-4xl leading-[150%]">
              <span className="rounded-2xl bg-blue py-2 px-4">
                {tabTittle}
                :
              </span>
              {' '}
              {tabDescription}
            </h4>
            <TextBlock value={text} />
            {(tabContentList || []).map(({
              _id: itemId,
              title: itemTitle,
              description: itemDescription,
              wordsList: itemWordsList,
            }: IContent) => (
              <div key={itemId} className="flex justify-start items-end mt-4">
                {(ICONS[itemWordsList?.[0]]) && (
                  <Image
                    src={ICONS[itemWordsList[0]]}
                    alt={`${itemWordsList[0]}`}
                    width={48}
                    height={48}
                  />
                )}
                <h5 className="font-bold ml-3 text-lg">
                  {itemTitle}
                  <span className="font-normal pl-3">{itemDescription}</span>
                </h5>
              </div>
            ))}
          </div>
          <div className="relative flex flex-col flex-shrink-0 flex-grow-0 rounded-2xl overflow-hidden w-full md:w-1/2 h-72 md:h-full">
            {src && (
            <Image
              src={src}
              alt={image.attribution}
              fill
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            )}
          </div>
        </div>
      ),
    };
  }), [contentList]);

  return (
    <section className="pt-14 pb-48">
      <div className="container px-2 h-screen sm:h-[70vh]">
        {title && <h2 className="text-3xl font-semibold mb-4 sm:text-4xl">{title}</h2>}
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}

export default TabsSection;
