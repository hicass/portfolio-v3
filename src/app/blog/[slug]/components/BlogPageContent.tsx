import Image from 'next/image';
import moment from 'moment';
import { BlogData } from '@/types';
import { urlFor } from '@/sanity/lib/image';
import { PortableTextBlockContainer } from './PortableTextContainer';
import './../../../mesh-gradient.css';

export default function BlogPageContent({
  title,
  mainImage,
  author,
  date,
  body,
}: BlogData) {
  const formattedDate = moment(date, moment.ISO_8601).format('MMMM Do, YYYY');

  const Header = () => {
    return (
      <div className="flex flex-col w-full items-center">
        <h1 className="text-4xl text-center xl:w-10/12 font-bold mb-6">
          {title}
        </h1>
        <Image
          src={mainImage.url ?? urlFor(mainImage.asset!).url()}
          alt={mainImage.alt}
          height={1000}
          width={1000}
          className="rounded"
        />
      </div>
    );
  };

  const Credit = () => {
    return (
      <div className="w-full flex gap-10 mt-4">
        <p>
          <span className="font-bold">Author:</span> {author}
        </p>
        <p>
          <span className="font-bold">Date:</span> {formattedDate}
        </p>
      </div>
    );
  };

  return (
    <main>
      <div className="flex flex-col items-center overflow-y-visible overflow-x-hidden h-screen w-screen relative text-white font-[family-name:var(--font-satoshi)]">
        <div className="flex flex-col items-center mx-4 my-14 md:max-w-3xl lg:w-full xl:max-w-4xl p-8 rounded-lg border-t-[1px] border-t-slate-50/10 bg-slate-50/[3%]">
          <Header />

          <Credit />

          <div>
            <PortableTextBlockContainer body={body} />
          </div>
        </div>
      </div>
    </main>
  );
}
