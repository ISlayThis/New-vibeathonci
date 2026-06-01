import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f7] border-t border-[#d2d2d7] flex flex-col z-20 mt-auto text-xs text-[#86868b]">
       <div className="max-w-[1024px] mx-auto w-full px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 pb-4 border-b border-[#d2d2d7]">
           <p>Plus d'informations sur la <Link to="/competition" className="text-blue-600 hover:underline">compétition</Link> et les <Link to="/formations" className="text-blue-600 hover:underline">formations</Link>.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
             <span>Copyright © 2026 Vibeathon Côte d'Ivoire. Tous droits réservés. vibeathonci.com</span>
          </div>
          <div className="flex gap-4">
            <Link to="/programme" className="hover:text-[#1d1d1f] hover:underline transition-colors">Programme</Link>
            <a href="mailto:nelly.ossey@creativoci.com" className="hover:text-[#1d1d1f] hover:underline transition-colors">Contact</a>
          </div>
        </div>
       </div>
    </footer>
  );
}
