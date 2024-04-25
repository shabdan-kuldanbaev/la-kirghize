'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { Tab, Tabs } from '@/components/ui/tabs';
import TextBlock from '@/components/text';
import { IContent, ISection } from '@/types/types';
import ICONS from '@/lib/icons';
import urlForImage from '@/sanity/lib/image';

function TabsSection({ contentList }: ISection) {
  const tabs: Array<Tab> = useMemo(() => (contentList || []).map(({
    _id,
    title,
    text,
    contentList: tabContentList,
    image,
  }) => {
    const src = (image.asset && image.attribution) && urlForImage(image);
    return {
      title,
      value: _id,
      content: (
        <div className="flex flex-col gap-5 w-full h-full backdrop-blur-sm bg-base overflow-hidden overflow-y-auto px-2 py-6 sm:p-10 sm:flex-row">
          <div className="flex-shrink-0 flex-grow-0 w-full sm:w-1/2">
            <h4 className="text-5xl font-semibold mb-3">{title}</h4>
            <TextBlock value={text} />
          </div>
          <div className="flex flex-col flex-shrink-0 flex-grow-0 w-full sm:w-1/2">
            <div className="relative w-full rounded-2xl overflow-hidden h-72 sm:h-1/2 order-2 sm:order-1">
              {src && <Image src={src} alt={image.attribution} fill objectFit="cover" />}
            </div>
            <div className="order-1 sm:order-2">
              {(tabContentList || []).map(({
                _id: itemId,
                title: itemTitle,
                description: itemDescription,
                wordsList: itemWordsList,
              }: IContent) => (
                <div key={itemId} className="flex justify-start items-end mb-4 sm:mt-4">
                  {ICONS[itemWordsList[0]] && (
                  <Image
                    src={ICONS[itemWordsList[0]]}
                    alt={`${itemWordsList[0]}`}
                    width={48}
                    height={48}
                  />
                  )}
                  <h5 className="font-bold ml-3 text-xl">
                    {itemTitle}
                    <span className="font-normal pl-3">{itemDescription}</span>
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    };
  }), [contentList]);

  return (
    <section className="h-screen pt-24 pb-32">
      <div className="container px-2 h-full">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}

export default TabsSection;
