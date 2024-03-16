import "server-only";

import {draftMode} from "next/headers";
import {client} from "./client";
export const token = process.env.SANITY_API_TOKEN;

export async function sanityFetch({query, params = {}, tags}) {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error("The `SANITY_API_TOKEN` environment variable is required.");
  }

  return client.fetch(query, params, {
    ...(isDraftMode && {
      token: token,
      perspective: "previewDrafts",
    }),
    next: {
      revalidate: isDraftMode ? 0 : false,
      tags,
    },
  });
}
