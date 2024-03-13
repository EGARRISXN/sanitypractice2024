const title = "TITLE HERE";
const description = "DESCRIPTION HERE";
const url = "https://sanitypractice2024.vercel.app";

const config = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: "website",
    locale: "en_EN",
    url,
    site_name: "Sanity Practice",
    title,
    description,
    icons: [
      {
        url: "https://sanitypractice2024.vercel.app/favicon.ico",
        size: "32x32",
        type: "image/x-icon",
      },
    ],
    images: [
      {
        url: "https://sanitypractice2024.vercel.app/og-image.png",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default config;
