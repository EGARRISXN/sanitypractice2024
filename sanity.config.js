'use client'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {pageStructure, singletonPlugin} from '@/sanity/plugins/settings'
import {locate} from '@/sanity/plugins/locate'
import {schema} from '@/sanity/schemas'
import {path, id, dataset, version, title} from '@/sanity/lib/api'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'

export default defineConfig({
  title: title,
  projectId: id,
  dataset: dataset,
  basePath: path,
  schema: schema,
  plugins: [
    structureTool({
      structure: pageStructure([home, settings]),
    }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
          disable: '/api/disable-draft',
        },
      },
    }),
    singletonPlugin([home.name, settings.name]),
    visionTool({defaultApiVersion: version}),
  ],
})
