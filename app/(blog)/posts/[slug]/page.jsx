import dynamic from "next/dynamic";
import {loadPostQuery} from "@/lib/sanity/query/load-query";
import PageLayout from "@/components/pages/post";
import {generatePostsSlugs} from "@/lib/sanity/query/generate-slugs";
import {urlForOpenGraphImage} from "@/lib/sanity/image";
import {draftModeEnabled} from "@/lib/draft-mode";

const PagePreview = dynamic(() => import("@/components/pages/post/preview"));

export const generateStaticParams = async () => {
  return await generatePostsSlugs();
};

export const generateMetadata = async ({params}) => {
  const {data: post} = await loadPostQuery({slug: params.slug});
  const ogImage = urlForOpenGraphImage(post.meta?.openGraphImage);

  return {
    title: post.meta?.metaTitle ?? post.title,
    description: post.meta?.metaDescription,
    openGraph: {
      title: post.meta?.openGraphTitle,
      description: post.meta?.openGraphDescription,
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

const Page = async ({params}) => {
  const isEnabled = draftModeEnabled();
  const initialData = await loadPostQuery({slug: params.slug});

  if (isEnabled) {
    return <PagePreview initial={initialData} />;
  }

  return <PageLayout data={initialData.data} />;
};

export default Page;
