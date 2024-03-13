import slug from "slugify";
import {format} from "date-fns";
import {RiArticleLine} from "react-icons/ri";
import {defineType, defineField} from "sanity";

const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  icon: RiArticleLine,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the page",

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Some frontends will require a slug to be set to be able to show the page",
      options: {
        source: "title",
        slugify: (input) => slug(input, {lower: true}),
      },
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   type: "metaFields",
    //   name: "meta",
    //   group: "meta",
    // }),
    // defineField({
    //   name: "author",
    //   title: "Author",
    //   type: "reference",
    //   description: "Select author for post",
    //   to: [{type: "person"}],
    //   group: "meta",
    //   validation: (Rule) => Rule.required(),
    // }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "You can use this field to schedule post where you show them",
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "keywords",
    //   type: "array",
    //   title: "Keywords",
    //   description: "Tags for your post",
    //   group: "meta",
    //   of: [{type: "string"}],
    //   options: {
    //     layout: "tags",
    //   },
    //   validation: (Rule) => Rule.unique(),
    // }),
    // defineField({
    //   name: "excerpt",
    //   type: "simpleBlockContent",
    //   title: "Excerpt",
    //   description: "This ends up on summary pages, when people share your post in social media.",
    //   group: "excerpt",
    //   validation: (Rule) => Rule.required(),
    // }),
    // defineField({
    //   name: "featuredImage",
    //   title: "Featured Image",
    //   description: "Image that is displayed in posts lists",
    //   group: "excerpt",
    //   type: "mainImage",
    // }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{type: "blockContent"}],
      description: "Add, edit, and reorder sections with content",
    }),
  ],
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const {title, publishedAt} = selection;

      return {
        title: `${title}`,
        subtitle: format(new Date(publishedAt), "MMM dd yyyy HH:mm"),
      };
    },
  },
});

export default post;
