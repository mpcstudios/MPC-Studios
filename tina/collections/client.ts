import type { Collection } from "tinacms";

export const ClientCollection: Collection = {
  name: "client",
  label: "Clients",
  path: "content/clients",
  format: "md",
  fields: [
    {
      type: "string",
      name: "name",
      label: "Client Name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
    {
      type: "string",
      name: "url",
      label: "Website URL",
    },
    {
      type: "number",
      name: "order",
      label: "Display Order",
    },
    {
      type: "boolean",
      name: "featured",
      label: "Show in Logo Marquee",
    },
  ],
};
