import person from "./schemas/documents/person";
import page from "./schemas/documents/page";
import post from "./schemas/documents/post";
import siteSettings from "./schemas/documents/site-settings";
import columns from "./schemas/objects/columns";
import externalLink from "./schemas/objects/external-link";
import internalLink from "./schemas/objects/internal-link";
import link from "./schemas/objects/link";
import metaFields from "./schemas/objects/meta";
import socialFields from "./schemas/objects/social-fields";
import simpleBlockContent from "./schemas/objects/simple-block-content";
import blockContent from "./schemas/sections/block-content";
import grid from "./schemas/sections/grid";
import mainImage from "./schemas/sections/main-image";
import spacer from "./schemas/sections/spacer";
import youtube from "./schemas/sections/youtube";

export const schemasTypes = [
  person,
  page,
  post,
  siteSettings,
  metaFields,
  columns,
  externalLink,
  internalLink,
  link,
  simpleBlockContent,
  grid,
  mainImage,
  socialFields,
  blockContent,
  spacer,
  youtube,
];
