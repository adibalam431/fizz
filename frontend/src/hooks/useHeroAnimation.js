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

    // ===== ENTRY ANIMATION =====
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

    // ===== SCROLL ANIMATION =====
    gsap.to(image, {
      x: 400,
      rotation: 10,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};