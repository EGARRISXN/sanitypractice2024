import "../globals.css";
import dynamic from "next/dynamic";
import {Suspense} from "react";
import {Header, Footer, MaxWidthWrapper} from "@/components/ui";
import {loadSiteSettings} from "@/lib/sanity/query/load-query";
import {draftModeEnabled} from "@/lib/draft-mode";

const VisualEditing = dynamic(() => import("@/components/visual-editing"));

const RootLayout = async ({children}) => {
  const {data: siteSettings} = await loadSiteSettings();
  const isEnabled = draftModeEnabled();

  return (
    <>
      <Suspense>
        <Header siteSettings={siteSettings} />
      </Suspense>
      <MaxWidthWrapper className="flex flex-col pb-8 pt-4" type="main">
        <Suspense>{children}</Suspense>
      </MaxWidthWrapper>
      <Suspense>
        <Footer socialFields={siteSettings.socialFields} />
      </Suspense>
      {isEnabled && <VisualEditing />}
    </>
  );
};

export default RootLayout;
