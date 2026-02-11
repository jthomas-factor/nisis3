import Worklist from './Worklist';
import { Post } from '@/lib/types';
import { client } from '@/sanity/lib/client';

const Work = async () => {
  const posts = await client.fetch<Post[]>(`
  *[_type == "post" && section == "projects"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    summary,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "categories": categories[]->title
  }
`);

  return <Worklist posts={posts} />;
};

export default Work;
