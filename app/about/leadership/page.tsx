import { client } from '@/sanity/lib/client';
import { leadershipQuery } from '@/lib/queries';
import { Leadership } from '@/lib/types';
import ListLeadershipTemplate from '@/components/ListLeadershipTemplate';

const LeadershipPage = async () => {
  const posts = await client.fetch<Leadership[]>(leadershipQuery);

  return <ListLeadershipTemplate posts={posts} />;
};

export default LeadershipPage;
