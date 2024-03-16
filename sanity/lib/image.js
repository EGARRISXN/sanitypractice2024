import createImageUrlBuilder from '@sanity/image-url'
import {id, dataset} from './api'

const imageBuilder = createImageUrlBuilder({
  projectId: id,
  dataset: dataset,
})

export const urlForImage = (source) => {
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format').fit('max')
}

export function urlForOpenGraphImage(image) {
  return urlForImage(image)?.width(1200).height(627).fit('crop').url()
}
