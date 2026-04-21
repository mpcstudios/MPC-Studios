"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const dotInnerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const dotInner = dotInnerRef.current;
    const ring = ringRef.current;
    if (!dot || !dotInner || !ring) return;

    let mouseX = 0,
      mouseY = 0,
      ringX = 0,
      ringY = 0;
    let rafId: number;

    let ringHalf = 18;
    const applyDot = () => {
      dot.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;
    };
    const applyRing = () => {
      ring.style.transform = `translate3d(${ringX - ringHalf}px, ${ringY - ringHalf}px, 0)`;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      applyDot();
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      applyRing();
      rafId = requestAnimationFrame(animateRing);
    };

    rafId = requestAnimationFrame(animateRing);

    const onEnter = () => {
      dotInner.style.transform = "scale(2.5)";
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.opacity = "0.2";
      ringHalf = 30;
      applyRing();
    };
    const onLeave = () => {
      dotInner.style.transform = "scale(1)";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.5";
      ringHalf = 18;
      applyRing();
    };

    document.addEventListener("mousemove", onMouseMove);

    const targets = document.querySelectorAll("a, button, [data-hover]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          pointerEvents: "none",
          zIndex: 9999,
          background: "transparent",
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        <div
          ref={dotInnerRef}
          className="cursor-dot-inner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#F77837",
            transform: "scale(1)",
            transition: "transform 0.15s ease",
            willChange: "transform",
          }}
        />
      </div>
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          border: "1.5px solid #F77837",
          borderRadius: "50%",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0.5,
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0)",
          transition: "width 0.3s, height 0.3s, opacity 0.2s",
        }}
      />
    </>
  );
}
