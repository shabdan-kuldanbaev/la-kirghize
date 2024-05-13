import { PortableTextProps } from '@portabletext/react';
import { LngLatLike } from 'mapbox-gl';
import type { Image } from 'sanity';

export type ILinks = {
  fr: NavLink[];
  en: NavLink[];
};
export interface IPage {
  slug: string;
  sections: ISection[];
  metaImage: Image;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  title: string;
}

export interface ISection {
  _id: string;
  heading: string;
  description: string;
  contentFile: string;
  sectionType: string;
  contentList: IContent[];
  imageList: Image[];
}

export interface IContent {
  _id: string;
  heading: string;
  description: string;
  text: Pick<PortableTextProps, 'value'>
  contentList: IContent[];
  wordsList: string[];
  image: Image;
  position: IPosition;
  icon: string;
}

export interface IPageMetadata {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  metaImage: Image;
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

export interface IPosition {
  center: LngLatLike;
  zoom: number;
  text?: string;
}
