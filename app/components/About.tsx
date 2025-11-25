'use client'
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
    useInView,
    useAnimation
} from "framer-motion";


export const About = () => {
    return (
        <section className="text-slat-100 overflow-hidden bg-white/10 shadow-lg backdrop-blur-sm px-8 py-24 md:px-12 md:py-32">
            <div className="relative mx-auto max-w-5xl">
                <div className="pointer-events-none relative z-10">
                    <Reveal>
                        <h1 className="pointer-events-auto text-6xl font-black text-white md:text-8xl">
                            Hi, I'm Andy<span className="text-white">.</span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <h2 className="pointer-events-auto my-2 text-2xl text-white md:my-4 md:text-4xl">
                            I'm a{" "}
                            <span className="font-semibold text-indigo-500">
                                Web Developer
                            </span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="pointer-events-auto max-w-xl text-sm text-white md:text-base">
                            I've spent the last 5 years building and scaling software for some
                            pretty cool companies. I also teach people to paint online (incase
                            you've got an empty canvas layin' around 🎨). Let's connect!
                        </p>
                    </Reveal>
                    <Reveal>
                        <button className="pointer-events-auto mt-4 rounded bg-indigo-600 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6">
                            Contact me
                        </button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};


export const Reveal = ({ children }: { children: any }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: "all", margin: "0px 100px -50px 0px" });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className="relative w-fit overflow-hidden">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-white/10"
            />
        </div>
    );
};