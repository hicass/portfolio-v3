import { client } from '@/sanity/lib/client';
import MainPageContent from './components/MainPageContent';

export const revalidate = 30;

// Function to render and fetch data for the main page
export default async function MainPage() {
  const AboutData = await client.fetch(`*[_type == "about"][0]`);
  const BlogData = await client.fetch(`*[_type == "blog"]`);
  const ProjectData = await client.fetch(
    `*[_type == "project" && !defined(personal)]`
  );
  const PlaygroundData = await client.fetch(
    `*[_type == "project" && personal == true]`
  );

  return (
    <MainPageContent
      aboutData={AboutData}
      projectData={ProjectData}
      blogData={BlogData}
      playgroundData={PlaygroundData}
    />
  );
}
