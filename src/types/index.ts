import { PortableTextBlock } from '@portabletext/types';

export interface MainPageContentProps {
  /** The data for the about section */
  aboutData: AboutData;
}

export type AboutData = {
  /** The title of the about data bio */
  title: string;
  /** The bio of the about data */
  bio: PortableTextBlock[];
};

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref?: string;
    url: string;
  };
  alt?: string;
}

export interface SanityLink {
  _type: 'link';
  href: string;
}
