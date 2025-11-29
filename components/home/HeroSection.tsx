"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import BlurText from "../Animasi/BlurText"
import Link from "next/link";

export default function HeroSection() {
    return (
        <>
            <div className="max-w-screen-md mx-auto px-4" id="Home">
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 0.4,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        mass: 0.5
                    }}
                    className="flex flex-col md:flex-row justify-between items-center md:gap-0 gap-4 mt-12 md:mt-6">
                    <div className="flex flex-col md:flex-row items-center text-center md:text-start gap-4">
                        <div className="relative">
                            <img className="object-cover w-16 h-16 rounded-full ring-2 ring-gray-200 dark:ring-gray-600" src="/images/profile-cover.jpeg" alt="" />
                            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-1 ring-white animate-pulse"></span>
                        </div>
                        <div>
                            <p className="font-semibold text-md">Khaizul Aftar</p>
                            <p className="text-gray-600 text-sm">Full-Stack Developer</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Badge className="bg-blue-500">Open To Work</Badge>
                        <div className="w-px h-8 bg-gray-300 hidden md:block" />
                        <div className="flex gap-2">
                            <Link href="https://www.linkedin.com/in/khaizulaftar/" target="_blank" rel="noopener noreferrer">
                                <Tooltip>
                                    <TooltipTrigger className="border p-2 rounded-md bg-white shadow-xl cursor-pointer">
                                        <img src="https://img.icons8.com/color/100/linkedin-2--v1.png" alt="" className="w-6" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Linkedin</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Link>
                            <Link href="https://github.com/khaizulaftar" target="_blank" rel="noopener noreferrer">
                                <Tooltip>
                                    <TooltipTrigger className="border p-2 rounded-md bg-white shadow-xl cursor-pointer">
                                        <img src="https://img.icons8.com/fluency/100/github.png" alt="" className="w-6" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Link>
                            <Link href="mailto:khaizulaftar150704@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Tooltip>
                                    <TooltipTrigger className="border p-2 rounded-md bg-white shadow-xl cursor-pointer">
                                        <img src="https://img.icons8.com/color/100/gmail-new.png" alt="" className="w-6" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Gmail</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Link>
                            <Link href="https://www.instagram.com/khais1507" target="_blank" rel="noopener noreferrer">
                                <Tooltip>
                                    <TooltipTrigger className="border p-2 rounded-md bg-white shadow-xl cursor-pointer">
                                        <img src="https://img.icons8.com/fluency/100/instagram-new.png" alt="" className="w-6" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Instagram</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <div className="mx-auto mt-12 md:mt-24">
                    <BlurText
                        text="Introduce Myself"
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className="flex justify-center font-semibold text-4xl sm:text-5xl tracking-tight"
                    />
                    <motion.p
                        initial={{ y: 300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 80,
                            damping: 15,
                            mass: 0.5
                        }}
                        className="mx-auto text-gray-900 text-center mt-6 text-lg font-medium">I am a developer with more than 4 years of experience in building applications and websites, my experience as a personal secretary has made me a disciplined and responsible personality</motion.p>
                    <motion.div
                        initial={{ y: 300, opacity: 0 }}
                        animate={{
                            y: 0, opacity: 1,
                            transition: {
                                delay: 1.2,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }
                        }}

                        whileHover={{
                            x: 4,
                            y: -4,
                            rotate: -4,
                            scale: 1.05,
                            transition: {
                                duration: 0.2,
                            },
                        }}
                        className="overflow-hidden flex justify-center mt-6">
                    </motion.div>
                </div>
            </div>
        </>
    )
}