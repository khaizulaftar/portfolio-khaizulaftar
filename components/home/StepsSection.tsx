"use client"

import { Badge } from "../ui/badge";
import { motion } from "framer-motion"
import BlurText from "../Animasi/BlurText"

export default function StepsSection() {
    return (
        <>

            <div className="px-4 my-16 mx-auto max-w-screen-md" id="Workflow">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4
                    }}
                >
                    <Badge variant="default" className="flex mx-auto text-md rounded-full px-3 shadow-xl font-normal">Workflow</Badge>
                </motion.div>
                <BlurText
                    text="Complete your project quickly"
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
                    className="max-w-lg mx-auto text-gray-500 text-center mt-6">By following a clear and concise process with simple steps, you can bring your idea to life in a very effective and perfect way</motion.p>
                <div className="flex flex-col gap-2 md:gap-0 mt-12">
                    <div className="flex">
                        <div className="hidden md:block w-full p-6">
                        </div>
                        <div className="flex flex-col items-center  w-30">
                            <div className="flex items-center justify-center size-8 text-xs font-medium border rounded-full">
                                1
                            </div>
                            <div className="w-1 h-full bg-gray-300" />
                        </div>
                        <motion.div
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }}
                            viewport={{ amount: 1, once: true }}
                            className="p-6 bg-white border shadow-xl rounded-4xl w-full">
                            <h1 className="text-3xl sm:text-4xl font-semibold">Step 1</h1>
                            <h2 className="text-xl mt-6 font-semibold">Discussion about the website</h2>
                            <p className="mt-4 text-gray-500">Discussion about the website focuses on understanding the goals, target users, and main features needed</p>
                        </motion.div>
                    </div>
                    <div className="flex">
                        <div className="hidden md:block w-full order-3 p-6">
                        </div>
                        <div className="flex flex-col items-center   md:order-2 w-30">
                            <div className="flex items-center justify-center size-8 text-xs font-medium border rounded-full">
                                2
                            </div>
                            <div className="w-1 h-full bg-gray-300" />
                        </div>
                        <motion.div
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }}
                            viewport={{ amount: 1, once: true }}
                            className="p-6 bg-white border shadow-xl rounded-4xl w-full ">
                            <h1 className="text-3xl sm:text-4xl font-semibold">Step 2</h1>
                            <h2 className="text-xl mt-6 font-semibold">Website design and development</h2>
                            <p className="mt-4 text-gray-500">Website design and development involve creating the look and functionality of a website to meet user needs</p>
                        </motion.div>
                    </div>
                    <div className="flex">
                        <div className="hidden md:block w-full p-6">
                        </div>
                        <div className="flex flex-col items-center  w-30">
                            <div className="flex items-center justify-center size-8 text-xs font-medium border rounded-full">
                                3
                            </div>
                            <div className="w-1 h-full bg-gray-300" />
                        </div>
                        <motion.div
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }}
                            viewport={{ amount: 1, once: true }}
                            className="p-6 bg-white border shadow-xl rounded-4xl w-full">
                            <h1 className="text-3xl sm:text-4xl font-semibold">Step 3</h1>
                            <h2 className="text-xl mt-6 font-semibold">Revision and improvement</h2>
                            <p className="mt-4 text-gray-500">Revision and improvement involve updating and refining a project by incorporating feedback to enhance quality and meet expectations better</p>
                        </motion.div>
                    </div>
                    <div className="flex">
                        <div className="hidden md:block w-full order-3 p-6">
                        </div>
                        <div className="flex flex-col items-center   md:order-2 w-30">
                            <div className="flex items-center justify-center size-8 text-xs font-medium border rounded-full">
                                4
                            </div>
                            <div className="w-1 h-full bg-gray-300" />
                        </div>
                        <motion.div
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }}
                            viewport={{ amount: 1, once: true }}
                            className="p-6 bg-white border shadow-xl rounded-4xl w-full ">
                            <h1 className="text-3xl sm:text-4xl font-semibold">Step 4</h1>
                            <h2 className="text-xl mt-6 font-semibold">Website delivery & guide</h2>
                            <p className="mt-4 text-gray-500">Delivering the finished website and providing a user guide to help users understand how to use it effectivel</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}