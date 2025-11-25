'use client'
import Image from "next/image";
import { AuroraHero } from "./components/Hero";
import { About } from "./components/About";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <main className="relative min-h-screen w-full bg-gray-950 text-gray-200 font-sans">
      <motion.section
        style={{
          backgroundImage,
        }}
        className="fixed inset-0 z-0"
      />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas>
          <Stars radius={10} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <AuroraHero />
        <About />
      </div>
    </main>
  );
}
