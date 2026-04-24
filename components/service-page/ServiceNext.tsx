import Link from "next/link";

export type ServiceNextProps = {
  slug: string;
  name: string;
  label?: string;
  background?: string;
};

export default function ServiceNext({
  slug,
  name,
  label = "Next service",
  background = "#fff",
}: ServiceNextProps) {
  return (
    <section
      className="section-pad"
      style={{ background, paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="content-wrap">
        <Link
          data-hover
          href={`/services/${slug}`}
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            padding: "40px 0",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            textDecoration: "none",
            color: "#0E0E0E",
            cursor: "none",
          }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7A7670",
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              textAlign: "right",
            }}
          >
            {name} →
          </span>
        </Link>
      </div>
    </section>
  );
}
