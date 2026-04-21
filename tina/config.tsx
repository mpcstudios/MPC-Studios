import {
  UsernamePasswordAuthJSProvider,
  TinaUserCollection,
} from "tinacms-authjs/dist/tinacms";
import { defineConfig, LocalAuthProvider } from "tinacms";

import { ProjectCollection } from "./collections/project";
import { TestimonialCollection } from "./collections/testimonial";
import { BlogCollection } from "./collections/blog";
import { ResourceCollection } from "./collections/resource";
import { ClientCollection } from "./collections/client";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  contentApiUrlOverride: "/api/tina/gql",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-s3");
      return pack.TinaCloudS3MediaStore;
    },
  },
  schema: {
    collections: [
      TinaUserCollection,
      ProjectCollection,
      TestimonialCollection,
      BlogCollection,
      ResourceCollection,
      ClientCollection,
    ],
  },
});
