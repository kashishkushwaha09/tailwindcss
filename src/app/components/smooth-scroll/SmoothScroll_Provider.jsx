"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function SmoothScrollProvider({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,        // smoothness (1–2 ideal)
      effects: true,      // data-speed, data-lag support
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
