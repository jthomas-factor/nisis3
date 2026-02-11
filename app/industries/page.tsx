import { client } from '@/sanity/lib/client';
import { industriesQuery } from '@/lib/queries';
import { Post } from '@/lib/types';
import ListPageTemplate from '@/components/ListPageTemplate';

const Industries = async () => {
  const posts = await client.fetch<Post[]>(industriesQuery);
  const title = 'industries';

  return <ListPageTemplate title={title} posts={posts} />;
};

export default Industries;
