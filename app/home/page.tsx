import BottomNavigation from "@/components/BottomNavigation";
import AcordingSection from "@/components/home/AcordingSection";
import Background from "@/components/home/Background";
import Certificate from "@/components/home/Certificate";
import Experineces from "@/components/home/Experiences";
import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";


export default function HomePage() {
    return (
        <>
            <Background/>
            <HeroSection />
            <Experineces/>
            <SkillSection />
            <Certificate/>
            <ProjectSection />
            <AcordingSection />
            <BottomNavigation />
        </>
    )
}