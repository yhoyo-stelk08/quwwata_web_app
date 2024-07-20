import ProductCategories from "@/Components/common/ProductCategories";
import HeroSection from "@/Components/sections/HeroSection";
import TestimonySection from "@/Components/sections/TestimonySection";
import AppLayout from "@/Layouts/AppLayout";

export default function HomePage() {
  return (
    <AppLayout>
      <HeroSection />
      <ProductCategories />
      <TestimonySection />
    </AppLayout>
  );
}
