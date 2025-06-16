export interface SanityImage {
  _type: 'image';
  alt: string;
  url: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
  crop: {
    _type: 'sanity.imageCrop';
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot: {
    _type: 'sanity.imageHotspot';
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

export interface Slug {
  current: string;
  _type: string;
}

export interface SanityLink {
  _type: 'link';
  href: string;
}