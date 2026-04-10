import React from "react";

const Hero = () => {
  const text = "WELCOME ITZFIZZ";

  return (
    <section className="hero h-screen flex flex-col justify-center items-center overflow-hidden">
      
      {/* Heading */}
      <h1 className="hero-text text-5xl md:text-6xl font-bold tracking-[0.5em] text-center">
        {text.split("").map((char, i) => (
          <span key={i} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Stats */}
      <div className="stats flex gap-10 mt-10">
        <div className="stat text-center">
          <h2 className="text-3xl font-bold">95%</h2>
          <p className="text-sm opacity-70">Client Satisfaction</p>
        </div>

        <div className="stat text-center">
          <h2 className="text-3xl font-bold">120+</h2>
          <p className="text-sm opacity-70">Projects Delivered</p>
        </div>
      </div>

      {/* Visual Element (we animate this later) */}
      <div className="hero-image mt-20 w-64 h-40 bg-gray-300 flex items-center justify-center text-black">
        Visual
      </div>

    </section>
  );
};

export default Hero;