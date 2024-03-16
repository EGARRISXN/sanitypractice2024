"use client";
import {useQuery} from "@sanity/react-loader";
import {pageWithPostsQuery} from "@/lib/sanity/queries";
import PostsPage from "@/components/pages/posts";

export default function PostsPagePreview(props) {
  const {initial, params} = props;
  const {data, encodeDataAttribute} = useQuery(pageWithPostsQuery, params, {initial});

  return <PostsPage data={data} encodeDataAttribute={encodeDataAttribute} />;
}
