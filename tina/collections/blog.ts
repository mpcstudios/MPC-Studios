import type { Collection } from "tinacms";

export const BlogCollection: Collection = {
  name: "blog",
  label: "Blog Posts",
  path: "content/blog",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: { component: "textarea" },
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: [
        "Branding",
        "AI & Automation",
        "Digital Marketing",
        "Content",
        "Strategy",
        "Web Design",
      ],
    },
    {
      type: "datetime",
      name: "date",
      label: "Publish Date",
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author",
    },
    {
      type: "string",
      name: "readTime",
      label: "Read Time",
      description: "e.g. 5 min",
    },
    {
      type: "image",
      name: "coverImage",
      label: "Cover Image",
    },
    {
      type: "string",
      name: "bg",
      label: "Card Background (hex)",
      description: "fallback when no cover image, e.g. #1a0e08",
    },
    {
      type: "string",
      name: "status",
      label: "Status",
      options: ["draft", "published"],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
  defaultItem: () => ({
    status: "draft",
    date: new Date().toISOString(),
  }),
};
