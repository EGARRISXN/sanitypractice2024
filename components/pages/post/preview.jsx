"use client";
import {useQuery} from "@sanity/react-loader";
import {pageWithPostsQuery} from "@/lib/sanity/queries";
import PostPage from "@/components/pages/post";

export default function PostPagePreview(props) {
  const {initial, params} = props;
  const {data, encodeDataAttribute} = useQuery(pageWithPostsQuery, params, {initial});

  return <PostPage data={data} encodeDataAttribute={encodeDataAttribute} />;
}
