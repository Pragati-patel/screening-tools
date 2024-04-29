import Header from "@/components/common/Header";
import FindGreatTalent from "@/components/home/FindGreatTalent";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWork";
import Revolutionize from "@/components/home/Revolutionize";

export default function Home() {
  return (
   <div>
    <Header/>
    <HeroSection/>
    <FindGreatTalent/>
    <Revolutionize/>
    <HowItWorks/>
   </div>
  );
}
