"use client";
import HomePage from "@/components/pages/home";
import {useQuery} from "@/lib/sanity/query/use-query";
import {pageWithPostsQuery} from "@/lib/queries";

const HomepagePreview = ({initial, params}) => {
  const {data, encodeDataAttribute} = useQuery(pageWithPostsQuery, params, {initial});

  return <HomePage data={data} encodeDataAttribute={encodeDataAttribute} />;
};
export default HomepagePreview;
