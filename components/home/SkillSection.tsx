"use client"

import { Badge } from "@/components/ui/badge"
import data from "../../data.json"
import { motion } from "framer-motion"
import BlurText from "../Animasi/BlurText"

interface skill {
    image: string
    title: string
    descripion: string
    persen: string
}

export default function SkillSection() {

    const skills: skill[] = data.Skill

    return (
        <>
            <div className="px-4 my-16 max-w-screen-md mx-auto" id="Skills">
                <motion.div
                    initial={{opacity:0, scale:0}}
                    whileInView={{opacity:1, scale:1}}
                    transition={{
                        duration:0.4
                    }}
                >
                    <Badge variant="default" className="flex mx-auto text-sm rounded-full px-3 shadow-xl font-normal">Skill Set</Badge>
                </motion.div>
                <BlurText
                    text="Powerful Technology and Skill Set"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="max-w-lg mx-auto flex justify-center text-4xl sm:text-5xl font-semibold mt-6"
                />
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 15,
                        mass: 0.5
                    }}
                    className="max-w-lg mx-auto text-gray-500 text-center mt-6">Leveraging the latest technology and expertise in application development to bring ideas to life with outstanding results</motion.p>
                <div className="mt-12">
                    {
                        skills.map((Skills) => (
                            <motion.div
                                initial={{ scaleX: 0.8, }}
                                whileInView={{ scaleX: 1 }}
                                transition={{
                                    duration: 0.4
                                }}
                                key={Skills.title} className="relative p-2 mt-1.5 flex justify-between items-center bg-white rounded-2xl shadow-xl">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{
                                        width: `${Skills.persen}%`,
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 h-full rounded-2xl bg-black">
                                </motion.div>
                                <div className="flex items-center gap-2 z-10">
                                    <div className="p-2 rounded-lg bg-gray-100">
                                        <img src={Skills.image} className="w-12 h-12" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold text-white">{Skills.title}</p>
                                        <p className="text-sm text-gray-400 hidden sm:block">{Skills.descripion}</p>
                                    </div>
                                </div>
                                <div className="rounded-full text-sm font-semibold mr-4 py-2 px-3.5 z-10 text-white backdrop-blur bg-black/25 border border-gray-500">{Skills.persen}%</div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}