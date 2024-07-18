import DesktopMenu from "@/Components/common/DesktopMenu";
import HeroSection from "@/Components/sections/HeroSection";
import AppLayout from "@/Layouts/AppLayout";

export default function HomePage() {
  return (
    <AppLayout>
      <DesktopMenu />
      <HeroSection />
    </AppLayout>
  );
}
