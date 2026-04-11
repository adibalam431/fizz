import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useHeroAnimation = (containerRef) => {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    const chars = el.querySelectorAll(".char");
    const stats = el.querySelectorAll(".stat");

    // IMPORTANT: set initial state explicitly
    gsap.set(chars, { opacity: 0, y: 80 });
    gsap.set(stats, { opacity: 0, y: 40 });

    const tl = gsap.timeline();

    tl.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.04,
      duration: 1,
      ease: "power4.out",
    }).to(
      stats,
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    return () => {
      tl.kill(); // cleanup properly
    };
  }, []);
};