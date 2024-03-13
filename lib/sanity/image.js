import createImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
  projectId: "o7nkx9dn",
  dataset: "production",
});

export const urlForImage = (source) => {
  if (!source?.asset?._ref) {
    return undefined;
  }
  return imageBuilder?.image(source).auto("format").fit("max");
};

export const urlForOpenGraphImage = (image) => {
  return urlForImage(image)?.width(1200).height(627).fit("crop").url();
};
