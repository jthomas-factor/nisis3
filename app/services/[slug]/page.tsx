import React from 'react';
import {
  getIndustriesByTitles,
  getProjectsByTitle,
  serviceBySlugQuery,
} from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { Post } from '@/lib/types';
import DetailPageTemplate from '@/components/DetailPageTemplate';

type Props = {
  params: { slug: string };
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const post = await client.fetch<Post>(serviceBySlugQuery, {
    slug,
  });

  const relatedProjects = await getProjectsByTitle(post.title);
  const relatedIndustries = await getIndustriesByTitles(post.industries);

  return (
    <DetailPageTemplate
      title="industries"
      post={post}
      relatedProjects={relatedProjects}
      relatedIndustries={relatedIndustries}
    />
  );
};

export default page;
