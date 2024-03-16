import {PostList} from "@/components/shared";
import {RenderSection} from "@/components/sections";

export default function PostsPage({data}) {
  const {page, posts} = data ?? {};

  return (
    <>
      {page?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}

      {posts && <PostList posts={posts} />}
    </>
  );
}
