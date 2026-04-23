import { notFound } from "next/navigation";
import Link from "next/link";
import client from "@/tina/__generated__/databaseClient";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PostBody from "./PostBody";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let res;
  try {
    res = await client.queries.blog({
      relativePath: `${slug}.mdx`,
    });
  } catch {
    notFound();
  }

  const post = res.data.blog;

  return (
    <>
      <Cursor />
      <RevealInit />
      <Nav />

      <main>
        <section className="blog-hero-pad" style={{ background: "#fff" }}>
          <div className="content-wrap" style={{ maxWidth: "760px" }}>
            <Link
              href="/resources"
              style={{
                fontSize: "0.85rem",
                color: "#7A7670",
                textDecoration: "none",
                marginBottom: "32px",
                display: "inline-block",
              }}
            >
              ← All posts
            </Link>
            {post.category && (
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F77837",
                  marginBottom: "16px",
                }}
              >
                {post.category}
              </p>
            )}
            <h1
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
                color: "#0E0E0E",
                marginBottom: "20px",
              }}
            >
              {post.title}
            </h1>
            <p style={{ fontSize: "0.9rem", color: "#7A7670", marginBottom: "40px" }}>
              {post.date ? formatDate(post.date) : ""}
              {post.readTime ? ` · ${post.readTime} read` : ""}
              {post.author ? ` · ${post.author}` : ""}
            </p>
            {post.coverImage && (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  background: `#0E0E0E url(${post.coverImage}) center/cover`,
                  borderRadius: "20px",
                  marginBottom: "48px",
                }}
              />
            )}
            {post.body && (
              <div
                className="prose"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "#2a2a2a",
                }}
              >
                <PostBody body={post.body} />
              </div>
            )}
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
