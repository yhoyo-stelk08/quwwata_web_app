import HeroSection from "@/Components/sections/HeroSection";
import ProductCategoriesSection from "@/Components/sections/ProductCategoriesSection";
import TestimonySection from "@/Components/sections/TestimonySection";
import AppLayout from "@/Layouts/AppLayout";

export default function HomePage() {
  return (
    <AppLayout>
      <HeroSection />
      <ProductCategoriesSection />
      <TestimonySection />
    </AppLayout>
  );
}
