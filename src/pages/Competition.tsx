import { Trophy, Code2, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp } from "../components/ui/FadeUp";
import { Magnetic } from "../components/ui/Magnetic";
import { AnimatedImage } from "../components/ui/AnimatedImage";

import imgBlackDevs from "../assets/images/black_devs_collab_1780252505317.png";

export function Competition() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Header */}
      <section className="w-full max-w-[1000px] mx-auto px-6 pt-32 pb-16 text-center">
        <FadeUp>
          <h2 className="text-[#86868b] font-semibold text-lg md:text-xl tracking-tight mb-2 mt-12">Compétition</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent mb-6">
            Innover. Sans coder.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-snug max-w-3xl mx-auto">
            Concevez des solutions innovantes répondant aux défis environnementaux, uniquement grâce à l'IA.
          </p>
        </FadeUp>
      </section>

      {/* Hero Image replacement */}
      <section className="w-full max-w-[1200px] mx-auto px-6 pb-24 relative overflow-hidden rounded-3xl min-h-[500px] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 w-full h-full">
           <AnimatedImage src={imgBlackDevs} alt="Developers collaborating" className="w-full h-full [&>img]:h-[150%] [&>img]:object-cover" />
           <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10"></div>
        </div>
        <FadeUp delay={0.2} className="relative z-20 p-12 md:p-24 w-full flex flex-col items-center justify-center">
           <h3 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent mb-6">5 personnes.<br/>3 jours.<br/>1 million.</h3>
           <p className="text-xl text-white/70 font-medium">L'avenir s'écrit maintenant.</p>
        </FadeUp>
      </section>

      {/* Concept */}
      <section className="w-full bg-[#f5f5f7] py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Le concept.</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <FadeUp delay={0.1} className="bg-white rounded-3xl p-10 md:p-12 shadow-sm">
                <h4 className="text-2xl font-bold tracking-tight text-[#1d1d1f] mb-6">Thématiques</h4>
                <ul className="space-y-4 text-lg font-medium text-[#86868b]">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div> Agriculture
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Énergie
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div> Transport
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div> Ressources
                  </li>
                </ul>
             </FadeUp>
             
             <FadeUp delay={0.2} className="bg-white rounded-3xl p-10 md:p-12 shadow-sm">
                <h4 className="text-2xl font-bold tracking-tight text-[#1d1d1f] mb-6">Récompenses</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline border-b border-[#d2d2d7] pb-4">
                    <span className="text-[#86868b] font-medium">1er Prix</span>
                    <span className="text-2xl font-bold text-[#1d1d1f]">500 000 FCFA</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-[#d2d2d7] pb-4">
                    <span className="text-[#86868b] font-medium">2e Prix</span>
                    <span className="text-xl font-bold text-[#1d1d1f]">300 000 FCFA</span>
                  </div>
                   <div className="flex justify-between items-baseline border-b border-[#d2d2d7] pb-4">
                    <span className="text-[#86868b] font-medium">3e Prix</span>
                    <span className="text-xl font-bold text-[#1d1d1f]">150 000 FCFA</span>
                  </div>
                  <div className="pt-2 space-y-2">
                     <h5 className="font-semibold text-[#1d1d1f]">Autres récompenses</h5>
                     <ul className="text-sm font-medium text-[#86868b] space-y-2">
                        <li>• Une journée avec un champion de la tech Ivoirienne</li>
                        <li>• 30 jours d'accompagnement pour les 5 finalistes</li>
                        <li>• 90 jours d'incubation pour les 3 lauréats (avec Démo Day)</li>
                     </ul>
                   </div>
                </div>
             </FadeUp>
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent">Le déroulement.</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { step: "01", title: "Candidature", desc: "Ouvert aux passionnés d'innovation." },
              { step: "02", title: "Sélection", desc: "100 profils retenus, répartis en 20 équipes." },
              { step: "03", title: "Bootcamp", desc: "3 jours intenses : vibecoding et pitch." },
              { step: "04", title: "Jour J", desc: "Compétition finale et démonstrations." },
            ].map((item, idx) => (
              <FadeUp key={item.step} delay={idx * 0.1} className="bg-[#f5f5f7] p-10 rounded-3xl">
                <div className="text-sm font-semibold text-[#86868b] mb-4 uppercase tracking-wider">Étape {item.step}</div>
                <h4 className="text-2xl font-bold tracking-tight text-[#1d1d1f] mb-2">{item.title}</h4>
                <p className="text-[#86868b] font-medium leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="w-full bg-[#f5f5f7] py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#06c] via-[#005bb5] to-teal-500 bg-clip-text text-transparent">Évaluation.</h2>
             <p className="text-xl text-[#86868b] font-medium mt-4">Les projets seront évalués selon des critères stricts.</p>
          </FadeUp>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             <FadeUp delay={0.1} className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <span className="text-3xl font-bold text-[#06c] block mb-2">30%</span>
                <span className="text-[#86868b] font-medium text-sm leading-tight">Impact problème / solution</span>
             </FadeUp>
             <FadeUp delay={0.2} className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <span className="text-3xl font-bold text-[#06c] block mb-2">20%</span>
                <span className="text-[#86868b] font-medium text-sm leading-tight">Faisabilité</span>
             </FadeUp>
             <FadeUp delay={0.3} className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <span className="text-3xl font-bold text-[#06c] block mb-2">20%</span>
                <span className="text-[#86868b] font-medium text-sm leading-tight">Usage pertinent de l'IA</span>
             </FadeUp>
             <FadeUp delay={0.4} className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <span className="text-3xl font-bold text-[#06c] block mb-2">15%</span>
                <span className="text-[#86868b] font-medium text-sm leading-tight">Innovation</span>
             </FadeUp>
             <FadeUp delay={0.5} className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <span className="text-3xl font-bold text-[#06c] block mb-2">15%</span>
                <span className="text-[#86868b] font-medium text-sm leading-tight">Qualité du pitch et clarté</span>
             </FadeUp>
          </div>

          <FadeUp delay={0.6} className="mt-16 flex justify-center">
             <Magnetic>
               <Link 
                to="/inscription" 
                className="px-8 py-4 bg-[#06c] text-white rounded-full hover:scale-105 transition-transform duration-300 text-sm font-medium inline-block"
              >
                Candidater à la compétition
              </Link>
             </Magnetic>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
