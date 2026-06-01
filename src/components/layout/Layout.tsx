import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "../ui/CustomCursor";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-[#1d1d1f] relative overflow-hidden selection:bg-blue-200 selection:text-black">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 w-full flex flex-col pt-0 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

