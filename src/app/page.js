import Header from "@/components/common/Header";
import BestFeatures from "@/components/home/Bestfeatures";
import Difference from "@/components/home/Difference";
import FindGreatTalent from "@/components/home/FindGreatTalent";
import HeroSection from "@/components/home/HeroSection";
import HiringExperience from "@/components/home/HiringExperience";
import HowItWorks from "@/components/home/HowItWork";
import Revolutionize from "@/components/home/Revolutionize";
import SmartScreening from "@/components/home/SmartScreening";

export default function Home() {
  return (
   <div>
    <Header/>
    <HeroSection/>
    <FindGreatTalent/>
    <Revolutionize/>
    <HowItWorks/>
    <SmartScreening/>
    <BestFeatures/>
    <Difference/>
    <HiringExperience/>
   </div>
  );
}
