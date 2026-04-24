"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const isFirstMount = useRef(true);
  const isAnimating = useRef(false);

  // Reveal animation whenever the route actually changes.
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
        gsap.set(overlayRef.current, { pointerEvents: "none" });
        gsap.set([panelRef.current, accentRef.current], { yPercent: 100 });
        gsap.set(logoRef.current, { opacity: 0, scale: 0.9 });
      },
    });

    tl.to(logoRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    })
      .to(
        accentRef.current,
        { yPercent: -100, duration: 0.7, ease: "power4.inOut" },
        0.05,
      )
      .to(
        panelRef.current,
        { yPercent: -100, duration: 0.75, ease: "power4.inOut" },
        0.15,
      );
  }, [pathname]);

  // Intercept internal <a> clicks so we can play a cover animation first.
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.button !== 0
      ) {
        return;
      }

      const link = (e.target as HTMLElement | null)?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // External, anchor, or special links — let the browser handle it.
      if (
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      ) {
        return;
      }
      if (link.target && link.target !== "" && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;

      // Strip hash/search for same-page comparison.
      const [path] = href.split("#");
      if (path === pathname) return;

      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      isAnimating.current = true;

      const tl = gsap.timeline({
        onComplete: () => router.push(href),
      });

      gsap.set(overlayRef.current, { pointerEvents: "auto" });
      gsap.set([panelRef.current, accentRef.current], { yPercent: 100 });
      gsap.set(logoRef.current, { opacity: 0, scale: 0.9 });

      tl.to(accentRef.current, {
        yPercent: 0,
        duration: 0.55,
        ease: "power4.inOut",
      })
        .to(
          panelRef.current,
          { yPercent: 0, duration: 0.6, ease: "power4.inOut" },
          0.08,
        )
        .to(
          logoRef.current,
          { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
          "-=0.2",
        );
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [router, pathname]);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Orange accent panel — leads the sweep */}
      <div
        ref={accentRef}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #fe6e64 0%, #F77837 55%, #ffc14f 100%)",
          transform: "translateY(100%)",
          willChange: "transform",
        }}
      />
      {/* Near-black panel — trails slightly and carries the logo */}
      <div
        ref={panelRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "#0E0E0E",
          transform: "translateY(100%)",
          willChange: "transform",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          ref={logoRef}
          src="/brand/White Logo.svg"
          alt=""
          style={{
            width: "clamp(120px, 18vw, 220px)",
            height: "auto",
            opacity: 0,
            transform: "scale(0.9)",
            willChange: "transform, opacity",
          }}
        />
      </div>
    </div>
  );
}
