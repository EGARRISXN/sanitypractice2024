import dynamic from "next/dynamic";
import HomePage from "@/components/pages/home";
import {draftModeEnabled} from "@/lib/draft-mode";
import {loadPageWithPosts} from "@/lib/sanity/query/load-query";
import {urlForOpenGraphImage} from "@/lib/sanity/image";

const HomePagePreview = dynamic(() => import("@/components/pages/home/preview"));

export const generateMetadata = async () => {
  const {data} = await loadPageWithPosts({slug: "frontpage", limit: 2});
  const {page} = data;
  const ogImage = page && page.meta && page.meta.openGraphImage ? urlForOpenGraphImage(page.meta.openGraphImage) : null;
  // const ogImage = urlForOpenGraphImage(page?.meta?.openGraphImage) ?? null;

  return {
    title: (page?.meta?.metaTitle ?? page?.title) || "",
    description: page?.meta?.metaDescription || "",
    openGraph: {
      title: page?.meta?.openGraphTitle || "",
      description: page?.meta?.openGraphDescription || "",
      images: [
        {
          url: ogImage ?? "",
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

const IndexRoute = async () => {
  const isEnabled = draftModeEnabled();
  const initalData = await loadPageWithPosts({slug: "frontpage", limit: 2});
  const params = {slug: "frontpage", limit: 2};

  if (isEnabled) {
    return <HomePagePreview initial={initalData} params={params} />;
  }

  return <HomePage data={initalData.data} />;
};

export default IndexRoute;
