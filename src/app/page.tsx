import { client } from '@/sanity/lib/client';
import MainPageContent from './components/MainPageContent';

export default async function MainPage() {
  const AboutData = await client.fetch(`*[_type == "about"][0]`);

  return <MainPageContent aboutData={AboutData} />;
};
