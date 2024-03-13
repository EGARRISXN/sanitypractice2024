import {createClient} from "@sanity/client/stega";

export const client = createClient({
  projectId: "o7nkx9dn",
  dataset: "production",
  useCdn: "6fa323aed948cd33167cbd21c84f1d2e" ? false : true,
  perspective: "published",
  apiVersion: "2024-02-19",
  stega: {
    studioUrl: "/studio",
  },
});
