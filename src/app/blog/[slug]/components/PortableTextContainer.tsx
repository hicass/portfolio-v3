import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { urlFor } from '@/sanity/lib/image';

interface PortableTextBlockContainerProps {
  /** The Sanity Portable Text content */
  body: PortableTextBlock[];
}

export const PortableTextBlockContainer = ({
  body,
}: PortableTextBlockContainerProps) => {
  // TODO: Make the custom components type safe
  const customComponents = {
    types: {
      // eslint-disable-next-line
      image: ({ value }: any) => (
        <div className="w-full flex flex-col items-center">
          <Image
            src={value.url ?? urlFor(value.asset!).url()}
            alt={value.alt || 'Image'}
            width={500}
            height={500}
            priority={false}
          />
        </div>
      ),
    },
    block: {
      // eslint-disable-next-line
      h1: ({ children }: any) => <h1 className="font-bold">{children}</h1>,
      // eslint-disable-next-line
      h2: ({ children }: any) => (
        <h2 className="font-bold mt-12">{children}</h2>
      ),
      // eslint-disable-next-line
      h3: ({ children }: any) => (
        <h3 className="font-bold text-2xl mt-6">{children}</h3>
      ),
      // eslint-disable-next-line
      h4: ({ children }: any) => (
        <h4 className="font-bold text-xl mt-2">{children}</h4>
      ),
      // eslint-disable-next-line
      normal: ({ children }: any) => <p className="text-lg">{children}</p>,
    },
    marks: {
      // eslint-disable-next-line
      strong: ({ children }: any) => (
        <span className="font-bold">{children}</span>
      ),
      // eslint-disable-next-line
      em: ({ children }: any) => <span className="italic">{children}</span>,
      // eslint-disable-next-line
      link: ({ value, children }: any) => {
        const { href } = value;
        const isExternal = href?.startsWith('http');
        return (
          <>
            <a
              href={href}
              className=""
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          </>
        );
      },
    },
    list: {
      // eslint-disable-next-line
      bullet: ({ children }: any) => (
        <ul className="list-disc ml-6 space-y-4 text-lg">{children}</ul>
      ),
      // eslint-disable-next-line
      number: ({ children }: any) => (
        <ol className="list-decimal ml-6 space-y-2 text-lg">{children}</ol>
      ),
    },
    listItem: {
      // eslint-disable-next-line
      bullet: ({ children }: any) => <li>{children}</li>,
      // eslint-disable-next-line
      number: ({ children }: any) => <li>{children}</li>,
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <PortableText value={body} components={customComponents} />
    </div>
  );
};
