import "../globals.css";
import dynamic from "next/dynamic";
import {draftMode} from "next/headers";
import {token} from "@/lib/sanity/fetch";

const PreviewProvider = dynamic(() => import("@/components/PreviewProvider"));

export default async function RootLayout({children}) {
  return <main>{draftMode().isEnabled ? <PreviewProvider token={token}>{children}</PreviewProvider> : children}</main>;
}

// import "../globals.css";
// import dynamic from "next/dynamic";
// import {draftMode} from "next/headers";
// import {Suspense} from "react";
// import {Header, Footer, MaxWidthWrapper} from "@/components/ui";
// import {loadQuery} from "@/lib/sanity/store";
// import {siteSettingsQuery} from "@/lib/sanity/queries";

// const LiveVisualEditing = dynamic(() => import("@/components/visual-editing"));

// export default async function RootLayout({children}) {
//   const {data: siteSettings} = await loadQuery(siteSettingsQuery, {});

//   return (
//     <>
//       <Suspense>
//         <Header siteSettings={siteSettings} />
//       </Suspense>
//       <MaxWidthWrapper className="flex flex-col pb-8 pt-4" type="main">
//         <Suspense>{children}</Suspense>
//       </MaxWidthWrapper>
//       <Suspense>
//         <Footer socialFields={siteSettings.socialFields} />
//       </Suspense>
//       {draftMode().isEnabled && <LiveVisualEditing />}
//     </>
//   );
// }
