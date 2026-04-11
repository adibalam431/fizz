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
    const bg = el.querySelector(".bg-layer");
    const bg2 = el.querySelector(".bg-layer-2");

    // ===== ENTRY ANIMATION =====
    gsap.set(chars, { opacity: 0, y: 80 });
    gsap.set(stats, { opacity: 0, y: 40 });

    const entryTl = gsap.timeline();

    entryTl
      .to(chars, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 1,
        ease: "power4.out",
      })
      .to(
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

    // ===== MAIN SCROLL TIMELINE (IMPORTANT REFACTOR) =====
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // Image motion (base)
    scrollTl.to(
      image,
      {
        x: 350,
        y: -60,
        rotation: 6,
        scale: 1.06,
        ease: "none",
      },
      0
    );

    // Text parallax
    scrollTl.to(
      chars,
      {
        y: -20,
        ease: "none",
      },
      0
    );

    // Stats subtle motion
    scrollTl.to(
      stats,
      {
        y: -10,
        opacity: 0.85,
        ease: "none",
      },
      0
    );

    // Background parallax
    scrollTl
      .to(
        bg,
        {
          y: -150,
          x: 100,
          ease: "none",
        },
        0
      )
      .to(
        bg2,
        {
          y: 100,
          x: -100,
          ease: "none",
        },
        0
      );

   

    // ===== CLEANUP =====
    return () => {
      entryTl.kill();
      scrollTl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};