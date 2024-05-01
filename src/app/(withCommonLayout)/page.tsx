import HeroSection from "@/components/Ui/HomePage/HeroSection";
import Specialist from "@/components/Ui/Specialist/Specialist";
import TopRatedDoctors from "@/components/Ui/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/Ui/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
}
