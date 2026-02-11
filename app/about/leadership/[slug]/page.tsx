import React from 'react';
import { leadershipBySlugQuery } from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { Leadership } from '@/lib/types';
import LeadershipDetailTemplate from '@/components/LeadershipDetailTemplate';

type Props = {
  params: { slug: string };
};

const LeaderPage = async ({ params }: Props) => {
  const { slug } = await params;

  const post = await client.fetch<Leadership>(leadershipBySlugQuery, {
    slug,
  });

  return <LeadershipDetailTemplate title="about / Leadership" post={post} />;
};

export default LeaderPage;
