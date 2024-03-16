"use client";
import {useQuery} from "@sanity/react-loader";
import {pageWithPostsQuery} from "@/lib/sanity/queries";
import CategoryPage from "@/components/pages/category";

export default function CategoryPagePreview(props) {
  const {initial, params} = props;
  const {data, encodeDataAttribute} = useQuery(pageWithPostsQuery, params, {initial});

  return <CategoryPage data={data} encodeDataAttribute={encodeDataAttribute} />;
}
