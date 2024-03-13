"use client";
import PostPage from "@/components/pages/post";
import {useQuery} from "@/lib/sanity/query/use-query";
import {pageWithPostsQuery} from "@/lib/queries";

const PostPagePreview = ({initial}) => {
  const {data, encodeDataAttribute} = useQuery(pageWithPostsQuery, {}, {initial});

  return <PostPage data={data} encodeDataAttribute={encodeDataAttribute} />;
};
export default PostPagePreview;
