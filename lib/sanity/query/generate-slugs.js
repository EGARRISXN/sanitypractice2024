import "server-only";

import {client} from "../client";
import {token} from "../token";
import {allPostSlug, allPagesSlug} from "../../queries";

// Not using loadQuery as it's optimized for fetching in the RSC lifecycle
export const generateCategorySlugs = async () => {
  const pages = await client
    .withConfig({
      token,
      perspective: "published",
      useCdn: false,
      stega: false,
    })
    .fetch(allPagesSlug);

  return pages?.map((page) => ({
    slug: page,
  }));
};

// Not using loadQuery as it's optimized for fetching in the RSC lifecycle
export const generatePostsSlugs = async () => {
  const posts = await client
    .withConfig({
      token,
      perspective: "published",
      useCdn: false,
      stega: false,
    })
    .fetch(allPostSlug);

  return posts?.map((post) => ({
    slug: post.slug.current,
  }));
};
