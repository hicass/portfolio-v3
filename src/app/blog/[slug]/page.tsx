import { client } from '@/sanity/lib/client';
import BlogPageContent from './components/BlogPageContent';

export const revalidate = 30;

// Function to render to dynamic route blog detail page
export default async function BlogDetailPage({
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
