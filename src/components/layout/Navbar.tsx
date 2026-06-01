import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

const links = [
  { name: "Accueil", path: "/" },
  { name: "Compétition", path: "/competition" },
  { name: "Formations", path: "/formations" },
  { name: "Programme", path: "/programme" },
  { name: "Speakers", path: "/speakers" },
];

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-[#1d1d1f]"
    )}>
      <nav className="max-w-5xl mx-auto px-4 flex items-center justify-between h-12">
        <Link to="/" className="flex items-center font-bold tracking-tight text-sm hover:opacity-90 transition-opacity bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
          VibeathonCI 2026
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-xs font-normal text-white/80">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "transition-colors hover:text-white",
                    isActive ? "text-white" : ""
                  )}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center">
          <Link 
            to="/inscription"
            className="text-xs font-normal text-white/80 hover:text-white transition-colors"
          >
            S'inscrire
          </Link>
        </div>
      </nav>
    </header>
  );
}
