import React from 'react';
import {
  getIndustriesByTitles,
  getServicesByTitles,
  projectBySlugQuery,
} from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { Post } from '@/lib/types';
import DetailPageTemplate from '@/components/DetailPageTemplate';

type Props = {
  params: { slug: string };
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const post = await client.fetch<Post>(projectBySlugQuery, {
    slug,
  });

  const relatedServices = await getServicesByTitles(post.services);
  const relatedIndustries = await getIndustriesByTitles(post.industries);

  return (
    <DetailPageTemplate
      title="projects"
      post={post}
      relatedIndustries={relatedIndustries}
      relatedServices={relatedServices}
    />
  );
};

export default page;
