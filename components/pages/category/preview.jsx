"use client";
import CategoryPage from "@/components/pages/category";
import {useQuery} from "@/lib/sanity/query/use-query";
import {pageWithPostsQuery} from "@/lib/queries";

const CategoryPagePreview = ({initial}) => {
  const {data, encodeDataAttribute} = useQuery(pageWithPostsQuery, {}, {initial});

  return <CategoryPage data={data} encodeDataAttribute={encodeDataAttribute} />;
};
export default CategoryPagePreview;
