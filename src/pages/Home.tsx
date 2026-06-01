import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { FadeUp } from "../components/ui/FadeUp";
import { Magnetic } from "../components/ui/Magnetic";
import { AnimatedImage } from "../components/ui/AnimatedImage";
import { Countdown } from "../components/ui/Countdown";

import imgHero from "../assets/images/black_woman_coding_1780252484086.png";
import imgKeynotes from "../assets/images/black_woman_presenting_1780253229641.png";
import imgCompetition from "../assets/images/black_man_typing_1780252525253.png";
import imgFormations from "../assets/images/black_students_hackathon_1780253265360.png";
import imgStudio from "../assets/images/black_man_studio_1780253248698.png";

export function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f5f5f7]">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 bg-black relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
           <AnimatedImage src={imgHero} alt="Woman coding" className="w-full h-full [&_img]:min-h-full [&_img]:object-cover opacity-80" />
           <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
          <Countdown />
          
          <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 bg-clip-text text-transparent mb-6"
          >
            L'IA pour l'environnement.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/70 font-medium leading-snug max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Le premier événement dédié à la création d'applications durables avec l'IA.
            <span className="block mt-4 text-lg text-white/50 font-normal">11 Juillet 2026 • CSCTICAO, Abidjan</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Magnetic>
              <Link 
                to="/inscription" 
                className="block px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition-transform duration-300 text-sm font-medium"
              >
                S'inscrire
              </Link>
            </Magnetic>
            <Magnetic>
              <Link 
                to="/competition" 
                className="group flex items-center gap-1 px-4 py-3 text-white text-sm font-medium hover:underline hover:underline-offset-4"
              >
                En savoir plus <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="w-full py-24 px-6 bg-white">
        <FadeUp className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-[#86868b] font-semibold text-lg md:text-xl tracking-tight mb-2">Notre Vision</h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent mb-8">
            Créer sans coder.
          </h2>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-relaxed max-w-3xl mx-auto">
            Le Vibeathon introduit une nouvelle approche : le <span className="text-[#1d1d1f] font-semibold">vibecoding</span>, permettant à chacun de transformer des idées en solutions concrètes grâce à l'IA et au langage naturel, sans aucune expertise technique.
          </p>
        </FadeUp>
        
        <div className="max-w-[1200px] mx-auto mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { title: "Démocratiser l'IA", desc: "Rendre la création numérique accessible à tous en vulgarisant les usages de l'intelligence artificielle." },
               { title: "Stimuler l'innovation", desc: "Encourager l'émergence de solutions locales adaptées aux problématiques environnementales ivoiriennes." },
               { title: "Détecter les talents", desc: "Valoriser de nouveaux profils créatifs et structurer un écosystème connectant talents, entreprises et institutions." }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1} className="bg-[#f5f5f7] p-10 rounded-3xl">
                 <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">{item.title}</h3>
                 <p className="text-[#86868b] font-medium leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="w-full py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Un événement pour tous.
            </h2>
            <p className="text-xl text-[#86868b] font-medium">L'innovation ouverte à une diversité de profils.</p>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1000px] mx-auto">
            {['Étudiants', 'Jeunes diplômés', 'Entrepreneurs', 'Professionnels & Porteurs de projets'].map((cible, idx) => (
              <FadeUp key={idx} delay={idx * 0.1} className="bg-white p-8 rounded-3xl shadow-sm flex items-center justify-center text-center h-32 hover:scale-105 transition-transform duration-300">
                 <h3 className="text-lg font-bold text-[#1d1d1f] leading-snug">{cible}</h3>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Program Bento Box */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent mb-4">
              Un programme riche.
            </h2>
            <p className="text-xl text-[#86868b] font-medium">Découvrez ce qui vous attend.</p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <FadeUp delay={0.1} className="col-span-1 md:col-span-2 lg:col-span-2">
              <ActivityItem 
                title="Keynotes"
                description="Des experts partagent leurs visions sur les enjeux de l'IA pour l'environnement."
                link="/speakers"
                className="bg-[#ffffff] h-[400px]"
                imgSrc={imgKeynotes}
              />
            </FadeUp>
            <FadeUp delay={0.2} className="col-span-1">
              <ActivityItem 
                title="Compétition"
                description="Créez et innovez en équipe pour un avenir durable."
                link="/competition"
                className="bg-black text-white h-[400px]"
                theme="dark"
                imgSrc={imgCompetition}
              />
            </FadeUp>
            <FadeUp delay={0.3} className="col-span-1">
              <ActivityItem 
                title="Formations"
                description="Apprenez le Vibecoding et la création d'agents."
                link="/formations"
                className="bg-[#ffffff] h-[400px]"
                imgSrc={imgFormations}
              />
            </FadeUp>
            <FadeUp delay={0.4} className="col-span-1 md:col-span-2">
              <ActivityItem 
                title="Le Studio IA"
                description="Testez la génération de photos, vidéos et musique."
                link="/programme"
                className="bg-[#ffffff] h-[400px]"
                imgSrc={imgStudio}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="w-full py-24 px-4 bg-white border-t border-[#d2d2d7]">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeUp delay={0.1} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-2">400</span>
              <span className="text-sm font-bold text-[#86868b] uppercase tracking-wider">Participants</span>
            </FadeUp>
            <FadeUp delay={0.2} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-2">100</span>
              <span className="text-sm font-bold text-[#86868b] uppercase tracking-wider">Compétiteurs</span>
            </FadeUp>
            <FadeUp delay={0.3} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-2">20</span>
              <span className="text-sm font-bold text-[#86868b] uppercase tracking-wider">Solutions</span>
            </FadeUp>
            <FadeUp delay={0.4} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-2">1M+</span>
              <span className="text-sm font-bold text-[#86868b] uppercase tracking-wider">FCFA de Prix</span>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeUp>
            <h2 className="text-[#86868b] font-semibold text-sm uppercase tracking-widest mb-12">
              Organisateurs & Partenaires
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
               <span className="text-2xl md:text-3xl font-bold text-[#1d1d1f] hover:opacity-100 transition-opacity">CREATIV'O</span>
               <span className="text-2xl md:text-3xl font-bold text-[#1d1d1f] hover:opacity-100 transition-opacity">RIT-AFRICA</span>
               <span className="text-2xl md:text-3xl font-bold text-[#1d1d1f] hover:opacity-100 transition-opacity">AFRINOVATECH</span>
               <span className="text-xl md:text-2xl font-bold text-[#1d1d1f] hover:opacity-100 transition-opacity">AE Tech Consulting</span>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

function ActivityItem({ title, description, link, className, theme = "light", imgSrc }: { title: string, description: string, link: string, className?: string, theme?: "light" | "dark", imgSrc?: string }) {
  const isDark = theme === "dark";
  return (
    <Link to={link} className={`rounded-3xl p-10 md:p-12 transition-transform hover:scale-[1.02] duration-300 flex flex-col justify-between overflow-hidden shadow-sm relative group/item ${className}`}>
      {imgSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={imgSrc} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item:scale-110 opacity-70" />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
      )}
      <div className="relative z-10">
        <h3 className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${isDark || imgSrc ? 'text-white' : 'text-[#1d1d1f]'}`}>{title}</h3>
        <p className={`text-lg font-medium leading-relaxed max-w-sm ${isDark || imgSrc ? 'text-white/80' : 'text-[#86868b]'}`}>{description}</p>
      </div>
      <div className="flex items-center gap-1 group relative z-10">
         <span className={`text-base font-medium ${isDark || imgSrc ? 'text-white' : 'text-[#06c]'} group-hover:underline`}>Découvrir</span>
         <ChevronRight className={`w-4 h-4 ${isDark || imgSrc ? 'text-white' : 'text-[#06c]'} group-hover:translate-x-1 transition-transform`} />
      </div>
    </Link>
  );
}
