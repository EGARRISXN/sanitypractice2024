import {createClient} from "next-sanity";

export const client = createClient({
  projectId: "o7nkx9dn",
  dataset: "production",
  apiVersion: "2024-02-19",
  useCdn: true,
});

// import {createClient} from "@sanity/client/stega";
// import {apiVersion, dataset, projectId, revalidateSecret, studioUrl} from "./api-constants";

// export const client = createClient({
//   dataset,
//   projectId,
//   useCdn: revalidateSecret ? false : true,
//   perspective: "published",
//   apiVersion,
//   stega: {
//     studioUrl,
//   },
// });
