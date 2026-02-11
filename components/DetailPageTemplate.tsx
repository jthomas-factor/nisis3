import Link from 'next/link';
import PostTemplate from '@/components/PostTemplate';
import PostListTemplate from '@/components/PostListTemplate';
import PreTitle from '@/components/PreTitle';
import { Post } from '@/lib/types';

export default function DetailPageTemplate({
  title,
  post,
  relatedProjects,
  relatedServices,
  relatedIndustries,
}: {
  title: string;
  post: Post;
  relatedProjects?: Post[];
  relatedServices?: Post[];
  relatedIndustries?: Post[];
}) {
  return (
    <div className="container">
      {/* Breadcrumbs */}
      <nav className="my-8 text-sm text-gray-500 flex items-center gap-2">
        <Link
          href={`/${title}`}
          className="hover:text-primary transition-colors"
        >
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Link>
        <span>/</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>

      {/* Layout */}
      <div className="grid grid-cols-6 gap-8">
        {/* Main Content */}
        <div className="col-span-6 lg:col-span-4">
          <PostTemplate post={post} />
        </div>

        {/* Sidebar */}
        <div className="col-span-2 hidden lg:block">
          <div className="flex flex-col gap-4">
            {relatedProjects && (
              <>
                <PreTitle text="Related Projects" />
                <PostListTemplate title="projects" posts={relatedProjects} />
              </>
            )}

            {relatedServices && (
              <>
                <PreTitle text="Related Services" />
                <PostListTemplate title="services" posts={relatedServices} />
              </>
            )}

            {relatedIndustries && (
              <>
                <PreTitle text="Related Industries" />
                <PostListTemplate
                  title="industries"
                  posts={relatedIndustries}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
