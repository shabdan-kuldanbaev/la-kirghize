'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import ListItem from './listItem';
import { NavLink } from '@/types/types';

function NavMenu({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {navLinks.map(({ title, items, path }) => (items ? (
          <NavigationMenuItem key={path}>
            <NavigationMenuTrigger>
              <Link href={path}>
                {title}
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      href={items[0].path}
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {items[0].title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {items[0].description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {items.slice(1).map((item) => (
                  <ListItem
                    key={item.path}
                    title={item.title}
                    href={item.path}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem key={path}>
            <Link href={path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
