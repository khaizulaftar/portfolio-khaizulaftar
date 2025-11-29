"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import data from "../../data.json"
import { motion } from 'framer-motion';
import BlurText from "../Animasi/BlurText"

interface Projects {
    image: string
    icon: string
    title: string
    description: string
    link: string
}

export default function ProjectSection() {

    const Data: Projects[] = data.projocts

    return (
        <>
            <div className="mt-16 px-4 max-w-screen-md mx-auto overflow-hidden" id="Projects">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4
                    }}
                >
                    <Badge variant="default" className="flex mx-auto text-md rounded-full px-3 shadow-xl font-normal">Projects</Badge>
                </motion.div>
                <BlurText
                    text="Building an app as proof of expertise"
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
                    className="max-w-lg mx-auto text-gray-500 text-center mt-6">I create and build websites and applications to support my abilities</motion.p>
                <div className="my-12 flex flex-col gap-8">
                    {
                        Data.map((v, i) => (
                            <motion.div
                                initial={{ scale: 1.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    duration:0.4,
                                    stiffness: 90,
                                    damping: 15,
                                    mass: 0.5
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                
                                key={i} className="group">
                                <div className="shadow-xl relative w-full rounded-4xl overflow-hidden bg-white cursor-pointer">
                                    <img src={v.image} alt="" className="w-full object-cover group-hover:scale-95 transition duration-300 p-4" />
                                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition duration gap-10">
                                        <div className="flex items-center gap-4 text-white">
                                            <Avatar className="w-15 h-15">
                                                <AvatarImage src={v.icon} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-lg font-semibold text-gray-800">{v.title}</p>
                                                <p className="text-sm hidden sm:block text-gray-600">{v.description}</p>
                                            </div>
                                        </div>
                                        <Button className="rounded-full p-6">
                                            <Link href={v.link}>View Project</Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>

            </div >
        </>
    )
}