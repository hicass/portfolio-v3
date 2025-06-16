'use client';
import moment from 'moment';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { slideUpFast } from '@/app/utils/animations';
import { BlogData } from '@/types';
import { urlFor } from '@/sanity/lib/image';

export type Project = {
  title: string;
  description?: string;
  date: string;
  imagePath: string;
  imageAlt: string;
  techList: ProjectTech[];
  liveLink: string;
  repoLink?: string;
  _type: 'project';
};

type ProjectTech = {
  title: string;
};

type ProjectOrBlog = Project | BlogData;

interface ProjectCardProps {
  item: ProjectOrBlog;
}

const ProjectCard: FC<ProjectCardProps> = ({ item }) => {
  const formattedDate = moment(item.date, moment.ISO_8601).format('MMMM Do, YYYY');

  if (item) {
    if (item._type === 'blog') {
      return (
        <a
          href={item.slug.current}
          className="group transition hover:cursor-pointer"
        >
          <motion.article
            variants={slideUpFast}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{
              once: true,
              amount: 0.01,
            }}
            className="flex flex-col w-full gap-4 p-4 rounded-lg border-t-[1px] md:border-t-transparent border-t-slate-50/10 bg-slate-50/[3%] md:hover:border-t-slate-50/10 md:bg-transparent md:hover:bg-slate-50/[3%] z-40"
          >
            {/* Top Section */}
            <div className="flex flex-col w-full lg:flex-row gap-6">
              <figure className="w-full lg:w-1/2">
                {/* Image that showcases the project */}
                <Image
                  src={
                    item.mainImage.url ?? urlFor(item.mainImage.asset!).url()
                  }
                  alt={item.mainImage.alt}
                  height={800}
                  width={800}
                  className="rounded"
                />
              </figure>

              {/* Information about the project */}
              <div className="flex flex-col gap-4 lg:w-1/2">
                <header className="flex justify-between">
                  <h4 className="text-2xl w-[90%]">{item.title}</h4>
                  <MdOutlineArrowOutward className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-orange" />
                </header>

                <p className="text-lg">{item.description}</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-end gap-4 w-full">
              <p className="text-lg">{formattedDate}</p>
            </div>
          </motion.article>
        </a>
      );
    }

    if (item._type === 'project') {
      let techListElements;
      if (item.techList) {
        techListElements = item.techList.map((tech, idx) => (
          <li
            key={idx}
            className="py-1 px-2 rounded h-fit text-sm border-t-[1px] border-t-slate-50/10 bg-slate-50/[5%]"
          >
            {tech.title}
          </li>
        ));
      }

      return (
        <a
          href={item.liveLink}
          target="_blank"
          className="group transition hover:cursor-pointer"
        >
          <motion.article
            variants={slideUpFast}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{
              once: true,
              amount: 0.01,
            }}
            className="flex flex-col w-full gap-4 p-4 rounded-lg border-t-[1px] md:border-t-transparent border-t-slate-50/10 bg-slate-50/[3%] md:hover:border-t-slate-50/10 md:bg-transparent md:hover:bg-slate-50/[3%] z-40"
          >
            {/* Top Section */}
            <div className="flex flex-col w-full lg:flex-row gap-6">
              <figure className="w-full lg:w-1/2">
                {/* Image that showcases the project */}
                <Image
                  src={item.imagePath}
                  alt={item.imageAlt}
                  height={800}
                  width={800}
                  className="rounded"
                />
              </figure>

              {/* Information about the project */}
              <div className="flex flex-col gap-4 lg:w-1/2">
                <header className="flex justify-between">
                  <h4 className="text-2xl w-[90%]">{item.title}</h4>
                  <MdOutlineArrowOutward className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-orange" />
                </header>

                <p className="text-lg">{item.description}</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row items-end gap-6">
              <div className="w-full lg:w-1/2">
                <ul className="flex flex-wrap gap-2">{techListElements}</ul>
              </div>

              <div className="flex md:justify-end gap-4 w-full lg:w-1/2">
                <p className="text-lg">{item.date}</p>
              </div>
            </div>
          </motion.article>
        </a>
      );
    }
  } else {
    return <p>No project found</p>;
  }
};

export default ProjectCard;
