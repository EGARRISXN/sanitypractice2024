import {map} from "rxjs";

// Pass 'context' as the second argument
export const locate = (params, context) => {
  if (params.type === "post") {
    return null;
  }
  // Set up locations for page documents
  if (params.type === "page") {
    // Subscribe to the latest slug and title for the page
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      params,
      {perspective: "previewDrafts"}, // returns a draft article if it exists
    );
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null;
        }
        return {
          locations: [
            {
              title: doc.title || "Untitled",
              href: `/${doc.slug.current}`,
            },
            {
              title: "Pages",
              href: "/",
            },
          ],
        };
      }),
    );
  }

  // Set up locations for post documents
  if (params.type === "post") {
    // Subscribe to the latest slug and title for the post
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      params,
      {perspective: "previewDrafts"}, // returns a draft article if it exists
    );
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null;
        }

        return {
          locations: [
            {
              title: doc.title || "Untitled",
              href: `/posts/${doc.slug.current}`,
            },
            {
              title: "Posts",
              href: "/",
            },
          ],
        };
      }),
    );
  }

  return null;
};
