import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const featureSectionAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".feature-section",
      scroller: "[data-scroll-container]",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // Center image
  tl.from(".feature-center", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  // Feature cards (from directions)
  tl.from(".feature-1", {
    y: -80,
    opacity: 0,
    duration: 0.6,
  }, "-=0.3");

  tl.from(".feature-2", {
    x: 80,
    opacity: 0,
    duration: 0.6,
  }, "-=0.4");

  tl.from(".feature-3", {
    y: 80,
    opacity: 0,
    duration: 0.6,
  }, "-=0.4");

  tl.from(".feature-4", {
    x: -80,
    opacity: 0,
    duration: 0.6,
  }, "-=0.4");
};
