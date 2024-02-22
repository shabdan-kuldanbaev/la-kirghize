'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Fade as Hamburger } from 'hamburger-react';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import ContactButton from './contactButton';
import LangSwitcher from './langSwitcher';
import { ContactLink, NavLink } from '@/types/header';
import { Locale } from '@/i18n.config';

function DropDownMenu(
  {
    navLinks,
    contactLink,
    lang,
  } : {
    navLinks: NavLink[],
    contactLink: ContactLink
    lang: Locale
  },
) {
  const [open, setOpen] = useState(false);

  return (
    <div className="block lg:hidden h-[48px] w-[48px]">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Hamburger toggled={open} toggle={setOpen} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="p-0">
            <ScrollArea className="w-[100vw] h-[70vh]">
              <Accordion type="single" collapsible>
                {navLinks.map(({ path, title, items }) => (items?.length ? (
                  <AccordionItem key={path} value={path}>
                    <AccordionTrigger className="hover:no-underline p-3">
                      <Link
                        href={path}
                        onClick={() => setOpen(false)}
                      >
                        {title}
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Carousel
                        opts={{ loop: true }}
                        className="flex flex-row justify-center items-center w-full max-w-[100vw] mx-auto"
                      >
                        <CarouselContent className="flex-shrink-0 flex-grow-0">
                          {items.map((item) => (
                            <CarouselItem
                              key={item.path}
                              className="max-w-72"
                            >
                              <Link href={item.path} onClick={() => setOpen(false)}>
                                <Card className="bg-inherit border-none rounded-none shadow-none">
                                  <div
                                    className="rounded-xl w-auto h-auto bg-cover bg-no-repeat bg-zinc-300 aspect-square"
                                    style={{
                                      backgroundImage: `url(${item.image})`,
                                    }}
                                  />
                                  <CardContent className="pt-4 pb-0 px-0">
                                    <h4 className="text-[14px] font-medium text-x text-left">
                                      {item.title}
                                    </h4>
                                    <p className="text-[12px] text-left text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </CardContent>
                                </Card>
                              </Link>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <AccordionItem
                    key={path}
                    value={path}
                    className="text-left p-3"
                  >
                    <Link
                      href={path}
                      onClick={() => setOpen(false)}
                    >
                      {title}
                    </Link>
                  </AccordionItem>
                )))}
              </Accordion>
              <div className="flex justify-between mt-2 px-3">
                <LangSwitcher lang={lang} />
                <ContactButton
                  onClick={() => setOpen(false)}
                  className="block"
                  {...contactLink}
                />
              </div>
            </ScrollArea>
          </DrawerHeader>
          <DrawerFooter className="items-center">
            <Button onClick={() => setOpen(false)}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DropDownMenu;
