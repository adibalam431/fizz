import { useEffect } from "react";
import gsap from "gsap";

export const useHeroAnimation = (ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      
      // Heading animation (stagger letters)
      gsap.from(".char", {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });

      // Stats animation
      gsap.from(".stat", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5,
        duration: 0.6,
        ease: "power2.out",
      });

    }, ref);

    return () => ctx.revert(); // cleanup (important)
  }, [ref]);
};