import "./app/(admin)/studio.css";
import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {schema} from "./studio/schemas";
import {singletonPlugin} from "./studio/plugins/singletonPlugin";
import {presentationTool} from "sanity/presentation";
import {locate} from "./studio/plugins/locate";

export default defineConfig({
  projectId: "o7nkx9dn",
  dataset: "production",
  name: "Studio",
  basePath: "/studio",
  schema: schema,
  plugins: [
    structureTool(),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
          disable: "/api/disable-draft",
        },
      },
    }),
    singletonPlugin({types: ["siteSettings"]}),
    visionTool({defaultApiVersion: "2024-02-19"}),
  ],
});
