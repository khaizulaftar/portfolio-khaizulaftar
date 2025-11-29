"use client"

import { motion } from "framer-motion"
import BlurText from "../Animasi/BlurText"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "../ui/badge"

export default function AcordingSection() {
    return (
        <>
            <div className="px-4 my-16 mb-24 max-w-screen-md mx-auto" id="FAQ">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4
                    }}
                >
                    <Badge variant="default" className="flex mx-auto text-md rounded-full px-3 shadow-xl font-normal">FAQ</Badge>
                </motion.div>
                <BlurText
                    text="Frequently Asked Questions"
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
                    className="max-w-lg mx-auto text-gray-500 text-center mt-6">Create customized apps that suit you, built by professional developers</motion.p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full flex flex-col gap-2 mt-12"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1" className="bg-white px-7 py-1 rounded-4xl shadow-2xl hover:scale-105 transition-all ease-in-out duration-400">
                        <AccordionTrigger className="text-lg cursor-pointer">What technologies do you usually us</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                I usually work with Next.js, React.js, Tailwind CSS, Node.js, MySQL, and REST APIs. For styling, I also use Shadcn/ui
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="bg-white px-7 py-1 rounded-4xl shadow-2xl hover:scale-105 transition-all ease-in-out duration-400">
                        <AccordionTrigger className="text-lg cursor-pointer">What services do you offer</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                I offer professional front-end and back-end web development services for projects ranging from small to large, including custom websites, landing pages, portfolios, company profiles, and online stores
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="bg-white px-7 py-1 rounded-4xl shadow-2xl hover:scale-105 transition-all ease-in-out duration-400">
                        <AccordionTrigger className="text-lg cursor-pointer">Can work in a team and meet tight deadlines</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Sure. As a web developer, I’m used to collaborating in teams using GitHub and delivering work on time within tight deadlines
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="bg-white px-7 py-1 rounded-4xl shadow-2xl hover:scale-105 transition-all ease-in-out duration-400">
                        <AccordionTrigger className="text-lg cursor-pointer">Can you create mobile-friendly websites</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Sure, all the websites I build are fully responsive and optimized to provide a seamless user experience across all screen sizes, from mobile devices to desktops
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="bg-white px-7 py-1 rounded-4xl shadow-2xl hover:scale-105 transition-all ease-in-out duration-400">
                        <AccordionTrigger className="text-lg cursor-pointer">Do you provide documentation</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes, I always include clear and concise documentation to help clients easily understand and manage their websites efficiently
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6" className="bg-white px-7 py-1 rounded-4xl shadow-2xl hover:scale-105 transition-all ease-in-out duration-400">
                        <AccordionTrigger className="text-lg cursor-pointer">How do I contact you</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Please feel free to contact me via email or LinkedIn, or you can fill out the contact form available on my website. I’m happy to assist you and will respond as soon as possible
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7" className="bg-white px-7 py-1 rounded-4xl shadow-2xl hover:scale-105 transition-all ease-in-out duration-400">
                        <AccordionTrigger className="text-lg cursor-pointer">Do you accept freelance projects</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes, I am available for freelance projects, whether short-term or long-term, and I look forward to collaborating professionally to deliver the best results.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}