import 'server-only';

import { FooterLink } from '@/types/types';

const footerLink: { [key: string]: () => Promise<(FooterLink)[]> } = {
  en: () => import('./footerLinksEn').then((module) => module.default),
  fr: () => import('./footerLinksFr').then((module) => module.default),
};

export const getFooterLinks = async (locale: string) => footerLink[locale]();
