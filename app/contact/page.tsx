"use client";

import { useState } from "react";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const contactInfo = [
  { label: "Email", value: "hello@mpcstudios.com", href: "mailto:hello@mpcstudios.com" },
  { label: "Phone", value: "+1 (956) 335-7727", href: "tel:+19563357727" },
  { label: "Location", value: "Harlingen, Texas", href: undefined },
  { label: "Hours", value: "Mon\u2013Fri, 9am\u20135pm CST", href: undefined },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#F4F3F1",
  border: "none",
  borderRadius: "12px",
  padding: "16px",
  fontSize: "1rem",
  fontFamily: "inherit",
  color: "#0E0E0E",
  outline: "none",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Cursor />
      <RevealInit />
      <Nav />

      <main>
        {/* Hero */}
        <section style={{ background: "#fff", padding: "200px 0 60px" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F77837", marginBottom: "20px" }}>
                Get in touch
              </p>
              <h1 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#0E0E0E", marginBottom: "24px" }}>
                Let&apos;s build something{" "}
                <span style={{ color: "#F77837" }}>great together</span>
              </h1>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "#7A7670" }}>
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "64px", alignItems: "start" }}>
              {/* Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <input name="name" placeholder="Name" value={form.name} onChange={handleChange} style={inputStyle} />
                  <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle} />
                </div>
                <input name="company" placeholder="Company" value={form.company} onChange={handleChange} style={inputStyle} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, color: form.service ? "#0E0E0E" : "#7A7670", appearance: "none" }}>
                    <option value="" disabled>Service interested in</option>
                    <option>Website Design & Development</option>
                    <option>Custom Software</option>
                    <option>AI & Automation</option>
                    <option>Content Creation</option>
                    <option>Digital Marketing</option>
                    <option>Other</option>
                  </select>
                  <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, color: form.budget ? "#0E0E0E" : "#7A7670", appearance: "none" }}>
                    <option value="" disabled>Project budget</option>
                    <option>Under $10k</option>
                    <option>$10k – $25k</option>
                    <option>$25k – $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <button
                  type="submit"
                  className="btn-gradient"
                  style={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    padding: "16px 36px",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                    alignSelf: "flex-start",
                  }}
                >
                  Send message ↗
                </button>
              </form>

              {/* Contact Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {contactInfo.map(({ label, value, href }) => (
                  <div key={label} style={{ background: "#F4F3F1", borderRadius: "20px", padding: "24px" }}>
                    <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7A7670", marginBottom: "8px" }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0E0E0E", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F77837")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#0E0E0E")}
                      >{value}</a>
                    ) : (
                      <div style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0E0E0E" }}>{value}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
