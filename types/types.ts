import { PortableTextProps } from '@portabletext/react';
import { IPosition } from '@/components/map';

export type ILinks = {
  fr: NavLink[];
  en: NavLink[];
};
export interface IPage {
  slug: string;
  sections: ISection[];
  metaImage: any;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface ISection {
  _id: string;
  heading: string;
  description: string;
  contentFile: string;
  sectionType: string;
  contentList: IContent[];
}

export interface IContent {
  _id: string;
  heading: string;
  description: string;
  text: Pick<PortableTextProps, 'value'>
  contentList: IContent[];
  wordsList: string[];
  image: any;
  position: IPosition;
  icon: string;
}

export interface IPageMetadata {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  metaImage: any;
}

export type DataFetch = IPage & IPageMetadata;

export interface NavLink {
  title: string,
  path: string,
  items?: LinkItem[]
}

export interface FooterLink {
  title: string,
  path?: string,
  items?: LinkItem[]
}

export interface LinkItem {
  title: string,
  path: string,
  image: string,
  description:string
}

export interface ContactLink {
  title: string;
  path: string;
}
