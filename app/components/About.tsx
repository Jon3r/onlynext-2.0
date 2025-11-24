'use client'
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


export default function About() {
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

        <motion.section
            className="relative grid min-h-screen min-w-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
            <motion.div>
                <h1>About me</h1>
            </motion.div>
        </motion.section >
    );
}
