import 'server-only';

import { contactEn, contactFr } from './links';
import { ContactLink, NavLink } from '@/types/types';

const navigationLinks: { [key: string]: () => Promise<(NavLink)[]> } = {
  en: () => import('./navLinksEn').then((module) => module.default),
  fr: () => import('./navLinksFr').then((module) => module.default),
};

const contactLinks: { [key: string]: ContactLink } = {
  en: contactEn,
  fr: contactFr,
};

export const getNavLinks = async (locale: string) => navigationLinks[locale]();
export const getContactLink = (locale: string) => contactLinks[locale];
