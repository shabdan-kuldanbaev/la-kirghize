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
import { ContactLink, NavLink } from '@/types/header';
import ContactButton from './contactButton';

function DropDownMenu(
  {
    navLinks, contactLink,
  } : {
    navLinks: NavLink[], contactLink: ContactLink },
) {
  const [open, setOpen] = useState(false);

  return (
    <div className="block md:hidden h-[48px] w-[48px]">
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
                        className="flex flex-row justify-between items-center w-full max-w-[100vw] mx-auto"
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
              <ContactButton
                onClick={() => setOpen(false)}
                className="block mt-2 mx-auto"
                {...contactLink}
              />
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
