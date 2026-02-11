import About from '@/components/About';
import LeadershipGrid from './LeadershipGrid';
import { client } from '@/sanity/lib/client';
import { leadershipQuery } from '@/lib/queries';
import { Leadership } from '@/lib/types';

const AboutPage = async () => {
  const posts = await client.fetch<Leadership[]>(leadershipQuery);

  return (
    <div>
      {/* Overview */}
      <About />

      <div className="container flex flex-col gap-6">
        {/* Mission */}
        <div>
          <h2 className="h3">Mission</h2>
          <p>
            We help clients navigate complexity and succeed with transformative
            solutions at the intersection of geospatial intelligence, software
            engineering, data analytics, and trusted consultation.
          </p>
          <p>
            Industry and government agencies rely on our secure, scalable, and
            insight-driven systems and expertise to manage risk, strengthen
            resilience, and boost efficiency.
          </p>
        </div>

        {/* Leadership Team */}
        <div>
          <h2 className="h3">Our Team</h2>
          <LeadershipGrid posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
