import React from 'react';
import {
  getProjectsByTitle,
  getServicesByTitles,
  industryBySlugQuery,
} from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { Post } from '@/lib/types';
import DetailPageTemplate from '@/components/DetailPageTemplate';

type Props = {
  params: { slug: string };
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const post = await client.fetch<Post>(industryBySlugQuery, {
    slug,
  });

  const relatedProjects = await getProjectsByTitle(post.title);
  const relatedServices = await getServicesByTitles(post.services);

  return (
    <DetailPageTemplate
      title="industries"
      post={post}
      relatedProjects={relatedProjects}
      relatedServices={relatedServices}
    />
  );
};

export default page;
