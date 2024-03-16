// import dynamic from "next/dynamic";
// import {draftMode} from "next/headers";
// import {loadQuery} from "@/lib/sanity/store";
// import {allPostSlug, pageQuery} from "@/lib/sanity/queries";
// import {client} from "@/lib/sanity/client";
// import PageLayout from "@/components/pages/post";

// const PagePreview = dynamic(() => import("@/components/pages/post/preview"));

// export async function generateStaticParams() {
//   const posts = await client.fetch(allPostSlug);

//   return posts.map((post) => ({
//     slug: post.slug.current,
//   }));
// }

// export default async function PostSlugPage({params}) {
//   const initial = await loadQuery(
//     pageQuery,
//     {slug: params.slug},
//     {
//       perspective: draftMode().isEnabled ? "previewDraft" : "published",
//     },
//   );

//   return draftMode().isEnabled ? <PagePreview initial={initial} /> : <PageLayout data={initial.data} />;
// }
