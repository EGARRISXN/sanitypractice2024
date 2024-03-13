import "server-only";

import * as queryStore from "@sanity/react-loader";
import {client} from "../client";
import {token} from "../token";
import {pageQuery, pageWithPostsQuery, postsQuery, siteSettingsQuery, postQuery} from "../../queries";
import {draftModeEnabled} from "../../draft-mode";

const serverClient = client.withConfig({
  token,
  stega: {
    // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
    enabled: process.env.VERCEL_ENV !== "production",
  },
});
/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient);
const usingCdn = serverClient.config().useCdn;

export const loadQuery = (query, params = {}, options = {}) => {
  const isEnabled = draftModeEnabled();

  const {perspective = isEnabled ? "previewDrafts" : "published"} = options;
  let revalidate = 0;

  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false;
  } else if (usingCdn) {
    revalidate = 60;
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // @TODO add support in `@sanity/client/stega` for the below
    // stega: {enabled: draftMode().isEnabled}
  });
};

export const loadSiteSettings = () => {
  return loadQuery(siteSettingsQuery, {});
};

export const loadPageWithPosts = ({slug, limit = 10}) => {
  return loadQuery(pageWithPostsQuery, {
    slug,
    limit,
  });
};

export const loadPageQuery = ({slug}) => {
  return loadQuery(pageQuery, {
    slug,
  });
};

export const loadPostsQuery = ({limit}) => {
  return loadQuery(postsQuery, {
    limit,
  });
};

export const loadPostQuery = ({slug}) => {
  return loadQuery(postQuery, {
    slug,
  });
};
