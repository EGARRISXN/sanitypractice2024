import {createClient} from 'next-sanity'
import {id, dataset, version, path} from './api'

const secret = process.env.SANITY_SECRET

export const client = createClient({
  projectId: id,
  dataset: dataset,
  apiVersion: version,
  useCdn: secret ? false : true,
  perspective: 'published',
  stega: {
    studioUrl: path,
    logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === 'title') {
        return true
      }

      return props.filterDefault(props)
    },
  },
})
