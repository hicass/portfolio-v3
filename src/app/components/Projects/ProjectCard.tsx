'use client';
import moment from 'moment';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { slideUpFast } from '@/app/utils/animations';
import { ProjectCardProps } from '@/types';
import { urlFor } from '@/sanity/lib/image';

// Helper for formatting the date data
const formatDate = (date?: string) =>
  date ? moment(date).format('MMMM YYYY') : 'Present';

// Helper for rendering the list of technologies used in a project
const TechList = ({ tech }: { tech: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {tech.map((item, idx) => (
      <li
        key={idx}
        className="py-1 px-2 rounded h-fit text-sm border-t-[1px] border-t-slate-50/10 bg-slate-50/[5%]"
      >
        {item}
      </li>
    ))}
  </ul>
);

// Helper for rendering the image on the project card
const CardMediaSection = ({ image, alt }: { image: string; alt: string }) => (
  <figure className="w-full lg:w-1/2">
    <Image src={image} alt={alt} width={800} height={800} className="rounded" />
  </figure>
);

// Helper for rendering the text section on the card that has the title and description
const CardTextSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-4 lg:w-1/2">
    <header className="flex justify-between">
      <h4 className="text-2xl w-[90%]">{title}</h4>
      <MdOutlineArrowOutward className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-orange" />
    </header>
    <p className="text-lg">{description}</p>
  </div>
);

// Function to render the project card component
export default function ProjectCard({ item }: ProjectCardProps) {
  if (!item) return <p>No project data available</p>;

  const isBlog = item._type === 'blog';
  const isProject = item._type === 'project';

  const href = isBlog ? item.slug.current : item.link;

  const image = isBlog
    ? (item.mainImage?.url ?? urlFor(item.mainImage.asset!).url())
    : (item.image?.url ?? urlFor(item.image.asset!).url());
  const alt = isBlog ? item.mainImage?.alt : item.image?.alt;
  const title = item.title;
  const description = item.description;

  const bottomRightText = isBlog
    ? moment(item.date).format('MMMM Do, YYYY')
    : `${formatDate(item.duration?.startDate)} – ${formatDate(item.duration?.endDate)}`;

  return (
    <a
      href={href}
      target={isProject ? '_blank' : undefined}
      className="group transition hover:cursor-pointer"
    >
      <motion.article
        variants={slideUpFast}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.01 }}
        className="flex flex-col w-full gap-4 p-4 rounded-lg border-t-[1px] md:border-t-transparent border-t-slate-50/10 bg-slate-50/[3%] md:hover:border-t-slate-50/10 md:bg-transparent md:hover:bg-slate-50/[3%] z-40"
      >
        <div className="flex flex-col w-full lg:flex-row gap-6">
          <CardMediaSection image={image} alt={alt} />
          <CardTextSection title={title} description={description} />
        </div>

        <div className="flex flex-col lg:flex-row items-end gap-6">
          {isProject && item.technologyOverview?.length > 0 ? (
            <div className="w-full lg:w-1/2">
              <TechList tech={item.technologyOverview} />
            </div>
          ) : (
            <div className="w-full lg:w-1/2" />
          )}

          <div className="flex md:justify-end gap-4 w-full lg:w-1/2">
            <p className="text-lg">{bottomRightText}</p>
          </div>
        </div>
      </motion.article>
    </a>
  );
}
