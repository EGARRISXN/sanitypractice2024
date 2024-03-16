"use client";
import {useQuery} from "@sanity/react-loader";
import {pageWithPostsQuery} from "@/lib/sanity/queries";
import HomePage from "@/components/pages/home";

export default function HomepagePreview(props) {
  const {initial, params} = props;
  const {data, encodeDataAttribute} = useQuery(pageWithPostsQuery, params, {initial});

  return <HomePage data={data} encodeDataAttribute={encodeDataAttribute} />;
}
