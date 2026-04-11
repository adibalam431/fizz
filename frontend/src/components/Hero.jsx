import React, { useRef, useState, useEffect } from "react";
import { useHeroAnimation } from "../hooks/useHeroAnimation";

const words = [
  "WELCOME",
  "BIENVENUE",
  "WILLKOMMEN",
  "ようこそ",
  "환영합니다",
  "स्वागत है",
];

const Hero = () => {
  const containerRef = useRef(null);
  useHeroAnimation(containerRef);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-2xl rounded-full top-[20%] left-[30%] pointer-events-none" />
      {/* Changing Title */}
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-[0.3em] text-center transition-opacity duration-500 mt-30">
        {words[index]}
      </h1>

      {/* Static ITZFIZZ */}
      <h2 className="text-xl mt-4 tracking-widest text-gray-400">
        ITZFIZZ
      </h2>

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

      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        alt="visual"
        className="hero-image mt-20 w-[90vw] max-w-[500px] rounded-xl shadow-2xl"
      />

      <div className="grid grid-cols-2 gap-6 mt-16 max-w-3xl w-full px-4">
  
  {["Fast", "Secure", "Scalable", "Reliable"].map((item, i) => (
    <div
      key={i}
      className="card bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] hover:rotate-1"
    >
      <h3 className="text-lg font-semibold">{item}</h3>
      <p className="text-sm text-gray-400 mt-2">
        High quality performance and optimized experience.
      </p>
    </div>
  ))}

</div>
    </section>
  );
};

export default Hero;