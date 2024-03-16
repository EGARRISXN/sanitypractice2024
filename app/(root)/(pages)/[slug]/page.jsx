// import dynamic from "next/dynamic";
// import {draftMode} from "next/headers";
// import {loadQuery} from "@/lib/sanity/store";
// import {allPagesSlug, pageQuery} from "@/lib/sanity/queries";
// import {client} from "@/lib/sanity/client";
// import PageLayout from "@/components/pages/category";

// const PagePreview = dynamic(() => import("@/components/pages/category/preview"));

// export async function generateStaticParams() {
//   const pages = await client.fetch(allPagesSlug);

//   return pages.map((page) => ({
//     slug: page.slug.current,
//   }));
// }

// export default async function PageSlugPage({params}) {
//   const initial = await loadQuery(
//     pageQuery,
//     {slug: params.slug},
//     {
//       perspective: draftMode().isEnabled ? "previewDraft" : "published",
//     },
//   );

//   return draftMode().isEnabled ? <PagePreview initial={initial} params={params} /> : <PageLayout data={initial.data} />;
// }
