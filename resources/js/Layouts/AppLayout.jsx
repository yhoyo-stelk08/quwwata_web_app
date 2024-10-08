import DesktopMenu from "@/Components/common/DesktopMenu";
import FooterSection from "@/Components/sections/FooterSection";

export default function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <DesktopMenu />
      <main className="flex-grow">{children}</main>
      <FooterSection />
    </div>
  );
}
