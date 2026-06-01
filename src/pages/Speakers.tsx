import { FadeUp } from "../components/ui/FadeUp";

export function Speakers() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f5f5f7]">
      {/* Header */}
      <section className="w-full max-w-[1000px] mx-auto px-6 pt-32 pb-16 text-center">
        <FadeUp>
          <h2 className="text-[#86868b] font-semibold text-lg md:text-xl tracking-tight mb-2 mt-12">Speakers</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent mb-6">
            La voix de l'innovation.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-snug max-w-3xl mx-auto">
            Mise en avant des experts et des intervenants qui façonnent l'avenir.
          </p>
        </FadeUp>
      </section>

      {/* Panels */}
      <section className="w-full bg-white py-24">
         <div className="max-w-[1200px] mx-auto px-6 pb-8">
           <FadeUp className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Les grands débats.</h2>
           </FadeUp>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp delay={0.1} className="bg-[#f5f5f7] p-10 md:p-12 rounded-3xl group flex flex-col justify-between shadow-sm min-h-[350px]">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#86868b] mb-4">Panel 1</span>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent pb-1">Environnement</h2>
                <p className="text-[#86868b] text-lg font-medium leading-relaxed max-w-sm">
                  Exploration des enjeux de l'IA face au changement climatique, à la transition énergétique et à l'optimisation des ressources.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="bg-[#f5f5f7] p-10 md:p-12 rounded-3xl group flex flex-col justify-between shadow-sm min-h-[350px]">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#86868b] mb-4">Panel 2</span>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent pb-1">Socio-économie</h2>
                <p className="text-[#86868b] text-lg font-medium leading-relaxed max-w-sm">
                  Comment l'intelligence artificielle peut-elle stimuler une croissance inclusive et soutenir le développement durable ?
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="w-full py-24 bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeUp className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
              Les organisateurs.
            </h2>
            <p className="text-xl text-[#86868b] font-medium mt-4">L'équipe derrière l'événement.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.1} className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col items-center">
               <div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-white shadow-sm flex items-center justify-center bg-[#f5f5f7] font-bold text-3xl text-[#1d1d1f]">
                  NO
               </div>
               <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-1">Nelly Ossey</h3>
               <p className="text-[#86868b] font-medium text-sm mb-4">Commissaire Générale</p>
               <p className="text-xs text-[#86868b]">Directrice Générale CREATIV'O</p>
            </FadeUp>
            
            <FadeUp delay={0.2} className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col items-center">
               <div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-white shadow-sm flex items-center justify-center bg-[#f5f5f7] font-bold text-3xl text-[#1d1d1f]">
                  RI
               </div>
               <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-1">Ruben Ipote</h3>
               <p className="text-[#86868b] font-medium text-sm mb-4">Chef de projet</p>
               <p className="text-xs text-[#86868b]">Directeur Général RIT-AFRICA</p>
            </FadeUp>
            
            <FadeUp delay={0.3} className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col items-center">
               <div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-white shadow-sm flex items-center justify-center bg-[#f5f5f7] font-bold text-3xl text-[#1d1d1f]">
                  ED
               </div>
               <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-1">Esaie Diei</h3>
               <p className="text-[#86868b] font-medium text-sm mb-4">Responsable Partenariats</p>
               <p className="text-xs text-[#86868b]">Directeur Général AFRINOVATECH</p>
            </FadeUp>
          </div>
          
          <FadeUp className="mt-24 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#06c] via-[#005bb5] to-teal-500 bg-clip-text text-transparent">
              Intervenants.
            </h2>
            <p className="text-xl text-[#86868b] font-medium mt-4">Plusieurs experts pour animer la journée.</p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <FadeUp key={i} delay={(i % 4) * 0.1} className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                 <div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-white shadow-sm">
                    <img 
                      src={`https://i.pravatar.cc/300?img=${i + 20}`} 
                      alt="Speaker" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                 </div>
                 <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-1">Speaker {i + 1}</h3>
                 <p className="text-[#86868b] font-medium text-sm">Expert Mondial</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
