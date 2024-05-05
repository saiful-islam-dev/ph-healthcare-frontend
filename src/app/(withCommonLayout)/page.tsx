import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import Specialist from "@/components/HomePage/Specialist/Specialist";
import Stats from "@/components/HomePage/Stats/Stats";
import TopRatedDoctors from "@/components/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/HomePage/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
      <Stats />
    </>
  );
}
