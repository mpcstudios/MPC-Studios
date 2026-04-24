"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);
  const isAnimating = useRef(false);

  // Fade the white overlay out on route change.
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    gsap.to(panelRef.current, {
      opacity: 0,
      duration: 0.45,
      ease: "power2.out",
      onComplete: () => {
        isAnimating.current = false;
        gsap.set(overlayRef.current, { pointerEvents: "none" });
      },
    });
  }, [pathname]);

  // Intercept internal link clicks so we can fade to white first.
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

      const [path] = href.split("#");
      if (path === pathname) return;

      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      isAnimating.current = true;

      gsap.set(overlayRef.current, { pointerEvents: "auto" });
      gsap.set(panelRef.current, { opacity: 0 });

      gsap.to(panelRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => router.push(href),
      });
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
      }}
    >
      <div
        ref={panelRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "#ffffff",
          opacity: 0,
          willChange: "opacity",
        }}
      />
    </div>
  );
}
