"use client"

import { motion } from "framer-motion"
import BlurText from "../Animasi/BlurText"
import { Badge } from "../ui/badge"


export default function Experineces() {


    return (
        <>
            <div className="px-4 my-16 mx-auto max-w-screen-md" id="Experince">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4
                    }}
                >
                    <Badge variant="default" className="flex mx-auto text-md rounded-full px-3 shadow-xl font-normal">Experience</Badge>
                </motion.div>
                <BlurText
                    text="Experience is proof of skill"
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
                    className="max-w-lg mx-auto text-gray-500 text-center mt-6">I have experience as a developer and personal secretary, making me a disciplined and creative person</motion.p>
                <div className="mt-12 flex flex-col gap-8">

                    <div className="flex gap-4">

                        <div className="">
                            <motion.div
                                initial={{ backgroundColor: '#9CA3AF' }}
                                whileInView={{ backgroundColor: '#111827' }}
                                transition={{ duration: 0.2 }}
                                viewport={{ amount: 0.1 }}
                                className="mx-auto flex items-center justify-center size-8 text-xs text-white font-medium border rounded-full relative z-10"
                            >
                                1
                            </motion.div>

                            <div className="mx-auto w-1 h-full bg-gray-400 relative">
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ duration: 0.8, ease: "linear", delay: 0.1 }}
                                    style={{ originY: 0 }}
                                    viewport={{ amount: 0.1 }}
                                    className="w-full h-full bg-gray-900 absolute top-0 left-0"
                                />
                            </div>
                        </div>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }}
                            viewport={{ amount: 0.1, once: true, margin: "-30% 0px -30% 0px" }}
                            className="p-6 bg-white border shadow-xl rounded-4xl w-full">
                            <img className="size-16" src="/images/Logo-Dicoding.jpg" alt="" />
                            <h2 className="text-xl mt-3 font-semibold">Course Experience Tester</h2>
                            <p>Dicoding Indonesia</p>
                            <p className="text-gray-500">July - December 2025 · 5 months</p>
                            <p className="text-gray-500">Padang, Sumatera Barat, Indonesia</p>
                            <ul className="mt-6 list-disc ml-6 text-gray-900">
                                <li>Responsible for testing and evaluating the quality of Dicoding classes.</li>
                                <li>Providing detailed feedback to ensure improvements and optimal class quality standards.</li>
                                <li>CET Wave 1 - Reviewed the "Belajar Dasar Pemrograman JavaScript" course.</li>
                                <li>CET Wave 2 - Reviewed the "Belajar Fundamental Aplikasi Android" course.</li>
                                <li>CET Wave 3 - Reviewed the "Belajar Membuat Aplikasi Android Dengan Jetpack Compose" course.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="flex gap-4">
                        <div className="">
                            <motion.div
                                initial={{ backgroundColor: '#9CA3AF' }}
                                whileInView={{ backgroundColor: '#111827' }}
                                transition={{ duration: 0.2 }}
                                viewport={{ amount: 0.1 }}
                                className="mx-auto flex items-center justify-center size-8 text-xs text-white font-medium border rounded-full relative z-10"
                            >
                                2
                            </motion.div>
                            <div className="mx-auto w-1 h-full bg-gray-400 relative">
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ duration: 0.8, ease: "linear", delay: 0.3 }}
                                    style={{ originY: 0 }}
                                    viewport={{ amount: 0.1 }}
                                    className="w-full h-full bg-gray-900 absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }}
                            viewport={{ amount: 0.1, once: true, margin: "-30% 0px -30% 0px" }}
                            className="p-6 bg-white border shadow-xl rounded-4xl w-full">
                            <img className="size-16" src="/images/Logo-BEKUP.png" alt="" />
                            <h2 className="text-xl mt-3 font-semibold">Multi-Platform App Developer (Flutter) Cohort</h2>
                            <p>BEKUP - Baparekraf for Startup</p>
                            <p className="text-gray-500">July 2025 - November 2025 · 5 months</p>
                            <p className="text-gray-500">Indonesia</p>
                            <ul className="mt-6 list-disc ml-6 text-gray-900">
                                <li>Complete the program with “ahead of schedule” status, Achieve 100% progress in all classes, Complete all assignments and Attend all team meetings, ILT-SS, ILT-FL, consultation sessions.</li>
                                <li>Creating a capstone project application with a team called "Traveljoy" with the theme "Inovasi Teknologi untuk Digitalisasi Pariwisata Indonesia".</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="flex gap-4">
                        <div className="">
                            <motion.div
                                initial={{ backgroundColor: '#9CA3AF' }}
                                whileInView={{ backgroundColor: '#111827' }}
                                transition={{ duration: 0.2 }}
                                viewport={{ amount: 0.1 }}
                                className="mx-auto flex items-center justify-center size-8 text-xs text-white font-medium border rounded-full relative z-10"
                            >
                                3
                            </motion.div>
                            <div className="mx-auto w-1 h-full bg-gray-400 relative">
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ duration: 0.8, ease: "linear", delay: 0.5 }}
                                    style={{ originY: 0 }}
                                    viewport={{ amount: 0.1 }}
                                    className="w-full h-full bg-gray-900 absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.4,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }}
                            viewport={{ amount: 0.1, once: true, margin: "-30% 0px -30% 0px" }}
                            className="p-6 bg-white border shadow-xl rounded-4xl w-full">
                            <img className="size-16" src="/images/Logo-Dicoding.jpg" alt="" />
                            <h2 className="text-xl mt-3 font-semibold">Android Developer Cohort</h2>
                            <p>Dicoding Indonesia</p>
                            <p className="text-gray-500">January 2025 - May 2025 · 5 months</p>
                            <p className="text-gray-500">Indonesia</p>
                            <ul className="mt-6 list-disc ml-6 text-gray-900">
                                <li>Completed Dicoding Bootcamp Batch 5 Android Developer with "ahead of schedule" status, Achieve 100% progress in all classes, Completed all assignments and Attended all Technical Briefings, Team Meetings, Capstone Briefings, ILT-SS, ILT-FL, Consultation Sessions, Dicoding Expert Sessions.</li>
                                <li>Create an individual capstone project application called "TaskEase" with the theme "Membangun Ekosistem Digital untuk UMKM".</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="flex gap-4">
                        <div className="">
                            <motion.div
                                initial={{ backgroundColor: '#9CA3AF' }}
                                whileInView={{ backgroundColor: '#111827' }}
                                transition={{ duration: 0.2 }}
                                viewport={{ amount: 0.1 }}
                                className="mx-auto flex items-center justify-center size-8 text-xs text-white font-medium border rounded-full relative z-10"
                            >
                                4
                            </motion.div>
                            <div className="mx-auto w-1 h-full bg-gray-400 relative">
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ duration: 0.8, ease: "linear", delay: 0.7 }}
                                    style={{ originY: 0 }}
                                    viewport={{ amount: 0.1 }}
                                    className="w-full h-full bg-gray-900 absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }}
                            viewport={{ amount: 0.1, once: true, margin: "-30% 0px -30% 0px" }}
                            className="p-6 bg-white border shadow-xl rounded-4xl w-full">
                            <img className="size-16" src="/images/logo-polri.png" alt="" />
                            <h2 className="text-xl mt-3 font-semibold">Personal Secretary</h2>
                            <p>Kepolisian Resor Kota</p>
                            <p className="text-gray-500">March 2023 to March 2025 - 2 years 1 month</p>
                            <p className="text-gray-500">Padang, Sumatera Barat, Indonesia</p>
                            <ul className="mt-6 list-disc ml-6 text-gray-900">
                                <li>Managed all administrative tasks, including scheduling, document management, and efficient filing systems.</li>
                                <li>Drafted, processed, and handled official correspondence and internal/external communications.</li>
                                <li>Prepared and presented reports, memos, and other important documents with accuracy and timeliness.</li>
                                <li>Provided comprehensive administrative support to ensure the smooth daily operations of superiors and the office.</li>
                                <li>Maintained the confidentiality of sensitive information and data with high integrity.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="flex gap-4">
                        <div className="">
                            <motion.div
                                initial={{ backgroundColor: '#9CA3AF' }}
                                whileInView={{ backgroundColor: '#111827' }}
                                transition={{ duration: 0.2 }}
                                viewport={{ amount: 0.1 }}
                                className="mx-auto flex items-center justify-center size-8 text-xs text-white font-medium border rounded-full relative z-10"
                            >
                                5
                            </motion.div>
                            <div className="mx-auto w-1 h-full bg-gray-400 relative">
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ duration: 0.8, ease: "linear", delay: 0.9 }}
                                    style={{ originY: 0 }}
                                    viewport={{ amount: 0.1 }}
                                    className="w-full h-full bg-gray-900 absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.5
                            }}
                            viewport={{ amount: 0.1, once: true, margin: "-30% 0px -30% 0px" }}
                            className="p-6 bg-white border shadow-xl rounded-4xl w-full">
                            <img className="size-16" src="/images/Logo-SikoKebab.png" alt="" />
                            <h2 className="text-xl mt-3 font-semibold">Web Developer</h2>
                            <p>Siko Kebab</p>
                            <p className="text-gray-500">February - March 2025 · 1 month</p>
                            <p className="text-gray-500">Padang, Sumatera Barat, Indonesia</p>
                            <ul className="mt-6 list-disc ml-6 text-gray-900">
                                <li>Building a fullstack web application using Next.js, Tailwind CSS, and MySQL.</li>
                                <li>Create a shop management website that manages income and materials.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}