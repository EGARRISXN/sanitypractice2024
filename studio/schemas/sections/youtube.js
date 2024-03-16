import {RiYoutubeLine} from "react-icons/ri";
import {defineField} from "sanity";

export const youtube = defineField({
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  icon: RiYoutubeLine,
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
      validation: (Rule) => Rule.required().uri({scheme: ["http", "https"]}),
    },
  ],
});
