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
    <header className="fixed top-0 z-50 w-full bg-gray-100/40">
      <div className="container flex justify-between items-center px-4 py-2 lg:py-3 ">
        <Logo />
        <NavMenu navLinks={navLinks} />
        <ContactButton {...contactLink} className="hidden md:block" />
        <DropDownMenu navLinks={navLinks} contactLink={contactLink} />
      </div>
    </header>
  );
}
