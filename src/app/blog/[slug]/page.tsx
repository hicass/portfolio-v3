import { client } from '@/sanity/lib/client';
import BlogPageContent from './components/BlogPageContent';

export const revalidate = 30;

export default async function blogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "blog" && slug.current == $slug][0]`;
  const BlogData = await client.fetch(query, {
    slug: `/blog/${params.slug}`,
  });

  return <BlogPageContent {...BlogData} />;
}
