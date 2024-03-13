const title = "TITLE HERE";
const description = "DESCRIPTION HERE";
const url = "https://sanitypractice2024.vercel.app";

const config = {
  metadataBase: new URL(url),
  title,
  description,
  canonical: "/",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url,
    site_name: "sanitypractice2024.vercel.app",
    title,
    description,
    images: [
      {
        url: "/opengraph-image.png",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default config;
