import {defineCliConfig} from 'sanity/cli'
import {id, dataset} from '@/sanity/lib/api'

export default defineCliConfig({
  api: {
    projectId: id,
    dataset: dataset,
  },
})
