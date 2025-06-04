"use client"

import { motion } from "framer-motion"
import data from "../../data.json"
import { Badge } from "@/components/ui/badge"
import BlurText from "../Animasi/BlurText"

interface Certificate {
    image: string
}
export default function Certificate() {
    const Data: Certificate[] = data.Certificate
    return (
        <>
            <div>
                <BlurText
                    text="Earned certifications to show skills"
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
                    className="max-w-lg mx-auto text-gray-500 text-center mt-6">I obtained several certificates from various online platforms to support and enhance my skills</motion.p>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 15,
                        mass: 0.5
                    }}
                    className="overflow-hidden whitespace-nowrap mt-6">
                    <div className="inline-block animate-marquee">
                        {Data.map((v, i) => (
                            <img key={i} src={v.image} className="inline-block w-[300] h-full mx-2 rounded-2xl p-2 bg-white" />
                        ))}
                    </div>
                    <style jsx>{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                        .animate-marquee {
                            animation: marquee 10s linear infinite;
                        }
                `}
                    </style>
                </motion.div>
            </div>
        </>
    )
}