import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {schemasTypes} from "./studio";
import {singletonPlugin} from "./studio/plugins/singletonPlugin";
import {presentationTool} from "sanity/presentation";
import {structure} from "./studio/structure";
import {locate} from "./studio/plugins/locate";

export default defineConfig({
  projectId: "o7nkx9dn",
  dataset: "production",
  name: "Studio",
  basePath: "/studio",
  schema: {
    types: schemasTypes,
  },
  plugins: [
    structureTool({structure}),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    singletonPlugin({types: ["siteSettings"]}),
    structureTool(),
    visionTool({defaultApiVersion: "2024-02-19"}),
  ],
});
