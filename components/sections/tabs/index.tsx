'use client';

import { Tab, Tabs } from '@/components/ui/tabs';
import TextBlock from '@/components/text';
import { ISection } from '@/types/types';

function TabsSection({ contentList }: ISection) {
  const tabs: Array<Tab> = (contentList || []).map((tab) => ({
    title: tab.title,
    value: tab._id,
    content: (
      <div className="w-full h-full p-4 backdrop-blur-sm bg-base overflow-hidden overflow-y-auto">
        <TextBlock value={tab.text} />
      </div>
    ),
  }));

  return (
    <section className="h-screen py-24 snap-start ">
      <div className="container px-2 h-full">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}

export default TabsSection;
