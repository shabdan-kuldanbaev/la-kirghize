'use server';

import ContactButton from './contactButton';
import DropDownMenu from './dropDownMenu';
import NavMenu from './navMenu';
import Logo from './logo';
import { getContactLink, getNavLinks } from '@/lib/links/dictionaries';

export default async function Header({ lang }: { lang: string }) {
  const navLinks = await getNavLinks(lang);
  const contactLink = getContactLink(lang);

  return (
    <header className="sticky top-0 bg-gray-100/50 shadow-sm shadow-zinc-300">
      <div className="container flex justify-between items-center px-4 py-2 lg:py-3 ">
        <Logo />
        <NavMenu navLinks={navLinks} />
        <ContactButton {...contactLink} className="hidden md:block" />
        <DropDownMenu navLinks={navLinks} contactLink={contactLink} />
      </div>
    </header>
  );
}
