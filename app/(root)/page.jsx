import {client} from "@/lib/sanity/client";

export default async function RootIndex() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <a href={post?.slug.current}>{post?.title}</a>
        </li>
      ))}
    </ul>
  );
}

// import dynamic from "next/dynamic";
// import {draftMode} from "next/headers";
// import {loadQuery} from "@/lib/sanity/store";
// import {pageWithPostsQuery} from "@/lib/sanity/queries";
// import HomePage from "@/components/pages/home";

// const HomePagePreview = dynamic(() => import("@/components/pages/home/preview"));

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

// export default async function IndexRoute() {
//   const initial = await loadPageWithPosts({slug: "frontpage"});
//   const params = {slug: "frontpage"};

//   return draftMode().isEnabled ? (
//     <HomePagePreview initial={initial} params={params} />
//   ) : (
//     <HomePage data={initial.data} />
//   );
// }
