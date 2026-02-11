import { client } from '@/sanity/lib/client';
import { Post } from './types';

export const projectsQuery = `
  *[_type == "post" && section == "projects"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title,
    "services": services[]->title
  }
`;

export const projectBySlugQuery = `
  *[_type == "post" && section == "projects" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    tools,
    "slug": slug.current,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title,
    "services": services[]->title,
    body
  }
`;

export async function getProjectsByTitle(name: string) {
  return client.fetch<Post[]>(
    `
    *[
      _type == "post" &&
      section == "projects" &&
      ($name in industries[]->title || $name in services[]->title)
    ]
    | order(publishedAt desc) {
      _id,
      title,
      subtitle,
      "slug": slug.current,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      "industries": industries[]->{
        title
      },
      "services": services[]->{
        title
      },
      summary,
      body,
      tools
    }
    `,
    { name },
  );
}

export const servicesQuery = `
  *[_type == "post" && section == "services"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title
  }
`;

export const serviceBySlugQuery = `
  *[_type == "post" && section == "services" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title,
    "services": services[]->title,
    body
  }
`;

export async function getServicesByTitles(titles: string[]) {
  return client.fetch<Post[]>(
    ` *[ _type == "post" && section == "services" && title in $services ] | order(publishedAt desc) { _id, title, "slug": slug.current, subtitle, "imageUrl": mainImage.asset->url, } `,
    { services: titles },
  );
}

export const industriesQuery = `
  *[_type == "post" && section == "industries"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "services": services[]->title
  }
`;

export const industryBySlugQuery = `
  *[_type == "post" && section == "industries" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title,
    "services": services[]->title,
    body
  }
`;

export async function getIndustriesByTitles(titles: string[]) {
  return client.fetch<Post[]>(
    ` *[ _type == "post" && section == "industries" && title in $industries ] | order(publishedAt desc) { _id, title, "slug": slug.current, subtitle, "imageUrl": mainImage.asset->url, } `,
    { industries: titles },
  );
}

export const leadershipQuery = `
  *[_type == "leadership"] | order(publishedAt asc) {
    _id,
    name,
    "slug": slug.current,
    position,
    "imageUrl": profileImage.asset->url,
    education
  }
`;

export const leadershipBySlugQuery = `
  *[_type == "leadership" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    position,
    "imageUrl": profileImage.asset->url,
    education,
    bio,
    linkedin
  }
`;
