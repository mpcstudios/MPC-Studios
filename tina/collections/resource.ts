import type { Collection } from "tinacms";

export const ResourceCollection: Collection = {
  name: "resource",
  label: "Resources",
  path: "content/resources",
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
      name: "type",
      label: "Type",
      options: ["Guide", "Template", "Tool", "Checklist", "Whitepaper"],
    },
    {
      type: "datetime",
      name: "date",
      label: "Publish Date",
      required: true,
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
      description: "fallback when no cover image",
    },
    {
      type: "string",
      name: "downloadUrl",
      label: "Download URL",
      description: "Optional external link for downloadable resources",
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
