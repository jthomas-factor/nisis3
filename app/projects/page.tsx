import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/lib/queries';
import { Post } from '@/lib/types';
import ListPageTemplate from '@/components/ListPageTemplate';

const Projects = async () => {
  const posts = await client.fetch<Post[]>(projectsQuery);
  const title = 'projects';

  return <ListPageTemplate title={title} posts={posts} />;
};

export default Projects;
