import { PortableTextBlock } from '@portabletext/types';
import { Slug } from 'sanity';
import { SanityImage } from './sanity';

export interface MainPageContentProps {
  /** The data for the About section */
  aboutData: AboutData;
  /** The data for the Blog section */
  blogData: BlogData[];
}

export type AboutData = {
  /** The title of the About data bio */
  title: string;
  /** The bio of the About data */
  bio: PortableTextBlock[];
};

export type BlogData = {
  /** The type */
  _type: 'blog';
  /** The title of the Blog */
  title: string;
  /** The main image that goes with the Blog */
  mainImage: SanityImage;
  /** The slug of the Blog */
  slug: Slug;
  /** The name of the Author */
  author: string;
  /** When the Blog was published */
  date: string;
  /** The preview description of the Blog */
  description: string;
  /** The body of the Blog */
  body: PortableTextBlock[];
};

export interface BlogSectionProps {
  /** The array of Blog posts */
  blogData: BlogData[];
}

export type Project = {
  /** The title of the project */
  title: string;
  /** The description of the project */
  description: string;
  /** The date of the project */
  date: string;
  /** The path to the image in the public directory */
  imagePath: string;
  /** The alternative text for the image */
  imageAlt: string;
  /** The list of technologies used in the project */
  techList: ProjectTech[];
  /** The link to the live project */
  liveLink: string;
  /** The type of the object */
  _type: 'project';
};

type ProjectTech = {
  title: string;
};
