'use client'
import Image from "next/image";
import { AuroraHero } from "./components/Hero";
import About from "./components/About";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";


export default function Home() {
  return (
    <>
      <motion.section>
        <div className="flex flex-col min-h-screen min-w-screen items-center justify-center bg-zinc-50 font-sans bg-black">
          <AuroraHero />
          <About />
        </div>
        <div className="absolute inset-0 z-0 fixed">
          <Canvas>
            <Stars radius={10} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section >
    </>
  );
}
