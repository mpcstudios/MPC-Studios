"use client";
const testimonials = [
  {
    quote:
      "MPC Studios exceeded expectations and delivered a visually appealing, highly functional website that was better than I could have imagined.",
    name: "Grant Buck",
    role: "Texas Regional Bank",
    initials: "GB",
    dark: false,
  },
  {
    quote:
      "I\u2019ve worked with MPC Studios for years, and it\u2019s always been a great experience. With other vendors, I had to micromanage everything, but with MPC, I know it\u2019s going to be done right.",
    name: "Ren\u00e9 Xavier Gonz\u00e1lez",
    role: "SIDEE Industrial Development",
    initials: "RG",
    dark: true,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad"
      style={{ background: "#fff" }}
    >
      <div className="content-wrap">
      <div
        className="testi-outer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div className="reveal">
          <p className="section-label" style={{ marginBottom: "20px" }}>
            Kind words
          </p>
          <h2
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              color: "#0E0E0E",
              marginBottom: "20px",
            }}
          >
            Clients who
            <br />
            trust us
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "#7A7670",
            }}
          >
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped grow.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "28px",
            }}
          >
            <span style={{ color: "#F77837", fontSize: "0.9rem" }}>
              ★★★★★
            </span>
            <span style={{ fontSize: "0.82rem", color: "#7A7670" }}>
              5.0 on Google Reviews
            </span>
          </div>
        </div>

        {/* Grid */}
        <div
          className="reveal reveal-d1 testi-inner-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {testimonials.map(({ quote, name, role, initials, dark }) => (
            <div
              key={name}
              style={{
                background: dark ? "#0E0E0E" : "#F4F3F1",
                color: dark ? "#fff" : "#0E0E0E",
                borderRadius: "20px",
                padding: "28px",
                transition: "transform 0.25s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)")
              }
            >
              <div
                style={{
                  color: "#F77837",
                  fontSize: "0.85rem",
                  letterSpacing: "2px",
                  marginBottom: "14px",
                }}
              >
                ★★★★★
              </div>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  color: dark ? "rgba(255,255,255,0.55)" : "#7A7670",
                  marginBottom: "20px",
                }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#F77837",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    flexShrink: 0,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: dark ? "#fff" : "#0E0E0E",
                    }}
                  >
                    {name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: dark ? "rgba(255,255,255,0.35)" : "#7A7670",
                    }}
                  >
                    {role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
