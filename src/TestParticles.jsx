import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";

export default function TestParticles() {
  return (
    <div className="relative h-screen bg-dark">
      <ParticlesBackground />
      <h1 className="z-10 relative text-white text-3xl text-center pt-40">
        🚀 Particle Test Pageee
      </h1>
    </div>
  );
}
