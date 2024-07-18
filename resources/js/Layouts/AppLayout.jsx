import DesktopMenu from "@/Components/common/DesktopMenu";

export default function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <DesktopMenu />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
