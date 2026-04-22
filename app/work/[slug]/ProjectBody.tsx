"use client";

import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";

export default function ProjectBody({ body }: { body: TinaMarkdownContent }) {
  return <TinaMarkdown content={body} />;
}
