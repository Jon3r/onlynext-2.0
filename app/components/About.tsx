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
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


export const About = () => {

    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    const textColor = useMotionTemplate`${color}`;


    return (
        <section className="w-full md:w-3/4 mx-auto text-slat-100 overflow-hidden bg-white/10 shadow-lg backdrop-blur-sm px-8 py-24 md:px-12 md:py-32">
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
                            <motion.span style={{ color: textColor }} className="font-semibold">
                                Web Developer
                            </motion.span>
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
                        <motion.button
                            style={{
                                border,
                            }}
                            whileHover={{
                                scale: 1.015,
                            }}
                            whileTap={{
                                scale: 0.985,
                            }}
                            className="cursor-pointer font-ze-dots group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                        >
                            Get to know me
                            <FiArrowRight className="transition-transform group-hover:-rotate-270 group-hover:ease-in-out group-hover:duration-200 group-active:-rotate-12 group-click:-rotate-270" />
                        </motion.button>
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