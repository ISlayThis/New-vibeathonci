import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp } from "../components/ui/FadeUp";
import { Magnetic } from "../components/ui/Magnetic";

export function Formations() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Header */}
      <section className="w-full max-w-[1000px] mx-auto px-6 pt-32 pb-16 text-center">
        <FadeUp>
          <h2 className="text-[#86868b] font-semibold text-lg md:text-xl tracking-tight mb-2 mt-12">Formations</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent mb-6">
            Maîtriser. L'avenir.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-snug max-w-3xl mx-auto">
            Six sessions pratiques pour maîtriser les outils de demain. Des ateliers interactifs encadrés par des experts.
          </p>
        </FadeUp>
      </section>

      {/* Piliers */}
      <section className="w-full bg-[#f5f5f7] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent">Le programme.</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Prompt Engineering", desc: "Apprenez à formuler des requêtes précises pour obtenir exactement ce que vous souhaitez des modèles d'IA." },
              { title: "Vibecoding", desc: "Découvrez comment générer des applications complètes et fonctionnelles uniquement en dialoguant avec l'IA." },
              { title: "Création d'agents IA", desc: "Concevez des assistants virtuels spécialisés capables d'automatiser des tâches complexes de manière autonome." },
              { title: "Création de contenu", desc: "Développez des stratégies pour produire du texte, des images et des vidéos à grande échelle." },
              { title: "Productivité & IA", desc: "Optimisez vos processus professionnels avec les outils basés sur l'intelligence artificielle." },
              { title: "Génération Visuelle", desc: "Maîtrisez la création d'images et la manipulation créative via les générateurs visuels." },
            ].map((formation, idx) => (
              <FadeUp key={idx} delay={idx * 0.1} className="bg-white p-10 md:p-12 rounded-3xl shadow-sm flex flex-col justify-between group h-full transition-transform hover:scale-[1.01] duration-300">
                <div>
                  <div className="text-sm font-semibold text-[#86868b] mb-4">Module 0{idx + 1}</div>
                  <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">{formation.title}</h3>
                  <p className="text-lg font-medium text-[#86868b] leading-relaxed">{formation.desc}</p>
                </div>
                <Magnetic>
                  <Link 
                    to="/inscription"
                    className="mt-8 inline-flex items-center gap-1 text-[#06c] font-medium hover:underline group-hover:underline"
                  >
                    S'inscrire <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Magnetic>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Formateurs */}
      <section className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Les experts.</h2>
             <p className="text-xl text-[#86868b] font-medium mt-4">L'équipe qui vous accompagnera dans cette évolution.</p>
          </FadeUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <FadeUp key={i} delay={i * 0.1} className="bg-[#f5f5f7] p-8 rounded-3xl flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
                <div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-white shadow-sm">
                  <img src={`https://i.pravatar.cc/300?img=${i + 15}`} alt="Formateur" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-1">Expert {i + 1}</h4>
                <p className="text-[#86868b] font-medium text-sm">Formateur IA</p>
              </FadeUp>
            ))}
            <FadeUp delay={0.5} className="bg-[#f5f5f7] p-8 rounded-3xl flex flex-col items-center justify-center text-center border-2 border-dashed border-[#d2d2d7]">
               <p className="text-[#86868b] font-medium leading-relaxed">Et d'autres annonces<br/>à venir...</p>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
