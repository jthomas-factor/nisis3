import { client } from '@/sanity/lib/client';
import { servicesQuery } from '@/lib/queries';
import { Post } from '@/lib/types';
import ListPageTemplate from '@/components/ListPageTemplate';

const Services = async () => {
  const posts = await client.fetch<Post[]>(servicesQuery);
  const title = 'services';

  return <ListPageTemplate title={title} posts={posts} />;
};

export default Services;
