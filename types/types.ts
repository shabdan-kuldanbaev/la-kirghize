import { TypedObject } from 'sanity';

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
  contentList: IContent[] | null;
}

export interface IContent {
  _id: string;
  title: string;
  text: TypedObject | TypedObject[];
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
  title?: string,
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
