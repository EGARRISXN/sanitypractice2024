// import {createClient} from "@sanity/client/stega";
import {createClient} from "next-sanity";

export const client = createClient({
  projectId: "o7nkx9dn",
  dataset: "production",
  apiVersion: "2024-02-19",
  useCdn: false,
  perspective: "published",
  // stega: {
  //   studioUrl: "/studio",
  //   logger: console,
  // },
});
