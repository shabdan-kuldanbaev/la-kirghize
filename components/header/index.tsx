'use server';

import ScrollWrapper from './scrollWrapper';
import LangSwitcher from './langSwitcher';
import ContactButton from './contactButton';
import DropDownMenu from './dropDownMenu';
import NavMenu from './navMenu';
import Logo from './logo';
import { getContactLink, getNavLinks } from '@/lib/links/dictionaries';
import { Locale } from '@/i18n.config';

export default async function Header({ lang }: { lang: Locale }) {
  const navLinks = await getNavLinks(lang);
  const contactLink = getContactLink(lang);

  return (
    <ScrollWrapper>
      <div className="container flex justify-between items-center px-4 py-2 lg:py-3 ">
        <Logo />
        <NavMenu navLinks={navLinks} />
        <LangSwitcher lang={lang} className="hidden lg:block" />
        <ContactButton {...contactLink} className="hidden lg:block" />
        <DropDownMenu navLinks={navLinks} contactLink={contactLink} lang={lang} />
      </div>
    </ScrollWrapper>
  );
}
