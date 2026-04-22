import type { Collection } from "tinacms";

export const ProjectCollection: Collection = {
  name: "project",
  label: "Projects",
  path: "content/projects",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "client",
      label: "Client",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      ui: { component: "textarea" },
    },
    {
      type: "string",
      name: "description",
      label: "Short Description",
      ui: { component: "textarea" },
    },
    {
      type: "string",
      name: "industry",
      label: "Industry",
      options: [
        "Banking",
        "Legal",
        "Construction",
        "Research",
        "Healthcare",
        "Nonprofit",
        "Other",
      ],
    },
    {
      type: "string",
      name: "bg",
      label: "Card Background (hex)",
      description: "e.g. #0d1a2e",
    },
    {
      type: "image",
      name: "coverImage",
      label: "Cover Image",
    },
    {
      type: "boolean",
      name: "featured",
      label: "Feature on Homepage",
    },
    {
      type: "number",
      name: "order",
      label: "Display Order",
    },
    {
      type: "string",
      name: "url",
      label: "Live Site URL",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Case Study",
      isBody: true,
    },
  ],
};
