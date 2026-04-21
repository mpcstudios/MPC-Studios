import type { Collection } from "tinacms";

export const TestimonialCollection: Collection = {
  name: "testimonial",
  label: "Testimonials",
  path: "content/testimonials",
  format: "md",
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "role",
      label: "Role / Company",
    },
    {
      type: "string",
      name: "company",
      label: "Company",
    },
    {
      type: "string",
      name: "quote",
      label: "Quote",
      required: true,
      ui: { component: "textarea" },
    },
    {
      type: "reference",
      name: "project",
      label: "Related Project",
      collections: ["project"],
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
    },
    {
      type: "number",
      name: "order",
      label: "Display Order",
    },
  ],
};
