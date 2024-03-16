import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder({
  projectId: "o7nkx9dn",
  dataset: "production",
});

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export function urlForOpenGraphImage(image) {
  return urlForImage(image).url();
}
