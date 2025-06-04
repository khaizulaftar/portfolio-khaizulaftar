"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button"
import BlurText from "../Animasi/BlurText"

export default function TapsScreen() {
    return (
        <>
            <div className="px-4 my-16 max-w-screen-md mx-auto">
                <BlurText
                    text="List of affordable packages and prices"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="max-w-lg mx-auto flex justify-center text-4xl sm:text-5xl font-semibold"
                />
                <div className="mt-12">
                    <Tabs defaultValue="Basic">
                        <TabsList className="mx-auto h-auto rounded-full shadow-xl">
                            <TabsTrigger value="Basic" className="px-6 py-3 rounded-full">Basic</TabsTrigger>
                            <TabsTrigger value="Plus" className="px-6 py-3 rounded-full">Plus</TabsTrigger>
                            <TabsTrigger value="Premium" className="px-6 py-3 rounded-full">Premium</TabsTrigger>
                        </TabsList>
                        <div className="bg-gray-100 p-2 mt-6 rounded-4xl shadow-xl">
                            <TabsContent value="Basic">
                                <div className="p-6 bg-gray-200 rounded-3xl">
                                    <p className="text-3xl font-semibold">Basic</p>
                                    <p className="text-gray-500 mt-1">Simple project</p>
                                    <div className="p-4 bg-white rounded-2xl mt-6 mb-8">
                                        <p className="text-sm">Personal Portfolio or Digital Resume - Product or Service Landing Page - Business, Community, or Organization Profile - Personal Branding</p>
                                    </div>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Free hosting
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Free domain email
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Modern & responsive design
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Up to 3 pages
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Contact form (optional)
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Social media integration
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
                                    <div className="flex gap-1 items-center">
                                        <span className="text-3xl font-semibold">$16,00</span>
                                        <span>/</span>
                                        <span>Project</span>
                                    </div>
                                    <Button className="p-6 rounded-full shadow-xl">Order Now</Button>
                                </div>
                            </TabsContent>
                            <TabsContent value="Plus">
                                <div className="p-6 bg-gray-200 rounded-3xl">
                                    <p className="text-3xl font-semibold">Plus</p>
                                    <p className="text-gray-500 mt-1">Small to medium project</p>
                                    <div className="p-4 bg-white rounded-2xl mt-6 mb-8">
                                        <p className="text-sm">Small businesses & SMEs - Simple online store - Professional services (designers, consultants, photographers, etc.) - Organizations or communities - Business profile with complete services</p>
                                    </div>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Free hosting & domain
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Free domain email
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Free maintenance
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Custom design and domain
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Up to 5 pages
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Modern & responsive design
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Social media & Google Maps integration (optional)
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Interactive forms (messages, inquiries, etc.)
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Photo & video gallery (optional)
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
                                    <div className="flex gap-1 items-center">
                                        <span className="text-3xl font-semibold">$183,00</span>
                                        <span>/</span>
                                        <span>Project</span>
                                    </div>
                                    <Button className="p-6 rounded-full shadow-xl">Order Now</Button>
                                </div>
                            </TabsContent>
                            <TabsContent value="Premium">
                                <div className="p-6 bg-gray-200 rounded-3xl">
                                    <p className="text-3xl font-semibold">Premium</p>
                                    <p className="text-gray-500 mt-1">Medium to large project</p>
                                    <div className="p-4 bg-white rounded-2xl mt-6 mb-8">
                                        <p className="text-sm">Companies, startups, or professional brands - Companies, startups, or professional brands - Service websites with complex features - Booking systems, product catalogs, blogs, and more - Organizations with high functional requirements</p>
                                    </div>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Free hosting & domain
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Free domain email
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Free maintenance
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Custom design and domain
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Up to 10 pages
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Premium, modern & responsive design
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Social media & Google Maps integration (optional)
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Interactive forms (for messages, inquiries, etc.)
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Advanced forms (booking, orders, custom questions)
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Photo & video gallery (optional)
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-500">
                                            ✅ Blog, product catalog, and additional features (optional)
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
                                    <div className="flex gap-1 items-center">
                                        <span className="text-3xl font-semibold">$428,00</span>
                                        <span>/</span>
                                        <span>Project</span>
                                    </div>
                                    <Button className="p-6 rounded-full shadow-xl">Order Now</Button>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    )
}