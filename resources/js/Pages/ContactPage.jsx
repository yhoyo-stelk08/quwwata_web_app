import Contact from "@/Components/common/Contact";
import AppLayout from "@/Layouts/AppLayout";

export default function ContactPage() {
  return (
    <AppLayout>
      <div className="mt-56 md:mt-40 md:mb-20 container mx-auto">
        <Contact />
      </div>
    </AppLayout>
  );
}
