import BottomNavigation from "@/components/BottomNavigation";
import AcordingSection from "@/components/home/AcordingSection";
import Background from "@/components/home/Background";
import Certificate from "@/components/home/Certificate";
import HeroSection from "@/components/home/HeroSection";
import HorizontalCards from "@/components/home/HorizontalCards";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";
import StepsSection from "@/components/home/StepsSection";
import TapsScreen from "@/components/home/TapsScreen";

export default function HomePage() {
    return (
        <>
            <Background/>
            <HeroSection />
            <HorizontalCards />
            <SkillSection />
            <Certificate/>
            <ProjectSection />
            <StepsSection />
            <TapsScreen />
            <AcordingSection />
            <BottomNavigation />
        </>
    )
}