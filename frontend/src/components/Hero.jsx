import React, { useRef } from "react";
import { useHeroAnimation } from "../hooks/useHeroAnimation";

const Hero = () => {
  const containerRef = useRef(null);
  useHeroAnimation(containerRef);

  const text = "WELCOME ITZFIZZ";

  return (
    <section
    
      ref={containerRef}
      className="h-screen flex flex-col justify-center items-center"
    >
        <div className="bg-layer absolute w-[800px] h-[800px] bg-purple-500/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
        <div className="bg-layer-2 absolute w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      {/* Heading */}
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-[0.4em] text-center mt-24">
        {text.split("").map((char, i) => (
          <span key={i} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Stats */}
      <div className="flex gap-16 mt-12">
        <div className="stat text-center">
          <h2 className="text-4xl font-bold">95%</h2>
          <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
            Client Satisfaction
          </p>
        </div>

        <div className="stat text-center">
          <h2 className="text-4xl font-bold">120+</h2>
          <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
            Projects Delivered
          </p>
        </div>
      </div>

      {/* Visual */}
      <img
  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  alt="visual"
  className="hero-image mt-20 w-[500px] rounded-xl shadow-2xl"
/>
    </section>
  );
};

export default Hero;