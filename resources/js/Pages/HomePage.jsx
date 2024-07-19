import HeroSection from "@/Components/sections/HeroSection";
import LongParagraph from "@/Components/sections/LongParagraph";
import AppLayout from "@/Layouts/AppLayout";

export default function HomePage() {
  return (
    <AppLayout>
      <HeroSection />
      <LongParagraph />
    </AppLayout>
  );
}
