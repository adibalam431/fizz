import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = (containerRef) => {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    const chars = el.querySelectorAll(".char");
    const stats = el.querySelectorAll(".stat");
    const image = el.querySelector(".hero-image");

    // ===== ENTRY =====
    gsap.set(chars, { opacity: 0, y: 60 });
    gsap.set(stats, { opacity: 0, y: 30 });

    const entry = gsap.timeline();

    entry
      .to(chars, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        stats,
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // ===== SCROLL (ONLY ONE) =====
    gsap.to(image, {
      x: 250,
      y: -40,
      rotation: 2,
      scale: 1.02,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    return () => {
      entry.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};