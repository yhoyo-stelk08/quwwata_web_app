import CubeSlider from "@/Components/sections/CubeSlider";
import HeroSection from "@/Components/sections/HeroSection";
import LongParagraph from "@/Components/sections/LongParagraph";
import TestimonySection from "@/Components/sections/TestimonySection";
import AppLayout from "@/Layouts/AppLayout";

export default function HomePage() {
  return (
    <AppLayout>
      <HeroSection />
      <CubeSlider />
      <LongParagraph />
      <TestimonySection />
    </AppLayout>
  );
}
