// import dynamic from "next/dynamic";
// import {draftMode} from "next/headers";
// import {loadQuery} from "@/lib/sanity/store";
// import {pageWithPostsQuery} from "@/lib/sanity/queries";
// import PageLayout from "@/components/pages/posts";

// const PagePreview = dynamic(() => "@/components/pages/posts/preview");

// export const loadPageWithPosts = ({slug}) => {
//   return loadQuery(
//     pageWithPostsQuery,
//     {
//       slug,
//     },
//     {
//       perspective: draftMode().isEnabled ? "previewDrafts" : "published",
//     },
//   );
// };

// export default async function PostsRoute() {
//   const initial = await loadPageWithPosts({slug: "posts"});
//   const params = {slug: "posts"};

//   return draftMode().isEnabled ? <PagePreview initial={initial} params={params} /> : <PageLayout data={initial.data} />;
// }
