'use client'
import { useEffect } from "react";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "motion/react"
import { MobNav } from "./MobileNav";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Nav() {

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
        <nav
            className="font-ze-dots flex flex-col align-center items-center w-full p-10 h-42 fixed top-0 z-50"
        >
            <motion.ul style={{ border, boxShadow }} className="hidden md:flex lg:flex mx-auto items-center gap-8 bg-white/10 shadow-lg backdrop-blur-sm p-3 rounded-full">
                <motion.li
                    whileHover={{
                        transition: { duration: 0.1 }
                    }}
                    transition={{ duration: 0.5 }}
                    className="p-1 px-2 hover:bg-black/20 hover:text-white hover:py-1 hover:px-2 hover:rounded-full"><a href="#">Home</a></motion.li>
                <motion.li whileHover={{
                    transition: { duration: 0.1 }
                }}
                    transition={{ duration: 0.5 }}
                    className="p-1 px-2 hover:bg-black/20 hover:text-white hover:py-1 hover:px-2 hover:rounded-full"><a href="#">Services</a></motion.li>
                <motion.li whileHover={{
                    transition: { duration: 0.1 }
                }}
                    transition={{ duration: 0.5 }}
                    className="p-1 px-2 hover:bg-black/20 hover:text-white hover:py-1 hover:px-2 hover:rounded-full"><a href="#">About</a></motion.li>
                <motion.li whileHover={{
                    transition: { duration: 0.1 }
                }}
                    transition={{ duration: 0.5 }}
                    className="p-1 px-2 hover:bg-black/20 hover:text-white hover:py-1 hover:px-2 hover:rounded-full"><a href="#">Contact</a></motion.li>
            </motion.ul>
            <MobNav />
        </nav>
    )
}