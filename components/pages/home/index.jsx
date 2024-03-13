import {Heading} from "@/components/ui";
import {PostList} from "@/components/shared";
import {RenderSection} from "@/components/sections";

const HomePage = ({data}) => {
  const {page, posts} = data ?? {};

  return (
    <>
      {page?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
      <Heading level="h2" weight="semibold" className="py-8">
        Recent articles
      </Heading>
      {posts && <PostList posts={posts} />}
    </>
  );
};

export default HomePage;
