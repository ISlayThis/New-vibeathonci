import { FadeUp } from "../components/ui/FadeUp";

export function Program() {
  const schedule = [
    { time: "07:30 - 09:00", title: "Accueil des participants" },
    { time: "09:00 - 10:30", title: "Keynotes", type: "highlight" },
    { time: "10:30 - 12:00", title: "Panels" },
    { time: "12:00 - 13:30", title: "Pause déjeuner & Networking", type: "break" },
    { time: "13:30 - 17:30", title: "Compétition vibecoding, Ateliers & Studio IA", type: "highlight" },
    { time: "17:30 - 19:00", title: "Première délibération & Pitch des 10 finalistes" },
    { time: "19:00 - 19:30", title: "Délibération finale, Remise des prix & Clôture", type: "highlight" },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Header */}
      <section className="w-full max-w-[1000px] mx-auto px-6 pt-32 pb-16 text-center">
        <FadeUp>
          <h2 className="text-[#86868b] font-semibold text-lg md:text-xl tracking-tight mb-2 mt-12">Programme</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent mb-6">
            Une journée inédite.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-snug max-w-3xl mx-auto">
            Déroulé de la journée du 11 juillet 2026.
          </p>
        </FadeUp>
      </section>

      {/* Schedule */}
      <section className="w-full max-w-[1000px] mx-auto px-6 py-24">
        <FadeUp delay={0.2} className="bg-[#f5f5f7] rounded-3xl p-8 md:p-12 shadow-sm">
             <div className="divide-y divide-[#d2d2d7]">
                {schedule.map((slot, index) => (
                  <div key={index} className="flex flex-col md:flex-row py-8 md:py-12 group transition-colors">
                    <div className={`md:w-64 font-semibold text-sm mb-4 md:mb-0 uppercase tracking-wider ${slot.type === 'break' ? 'text-[#86868b] opacity-80' : 'text-[#86868b]'}`}>
                      {slot.time}
                    </div>
                    <div className={`text-2xl md:text-4xl font-bold tracking-tight ${slot.type === 'break' ? 'text-[#86868b]' : 'text-[#1d1d1f]'}`}>
                      {slot.title}
                    </div>
                  </div>
                ))}
             </div>
        </FadeUp>
      </section>

      {/* Studio Experience IA */}
      <section className="w-full bg-[#f5f5f7] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-4">
                Studio IA.
             </h2>
             <p className="text-xl text-[#86868b] font-medium max-w-2xl mx-auto">
                Espace immersif pour découvrir la puissance de l'IA générative en la testant directement dans un cadre dédié.
             </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.1} className="bg-white p-10 md:p-12 rounded-3xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">Photo</h3>
              <p className="text-[#86868b] font-medium text-lg leading-relaxed">Génération de portraits et manipulation en temps réel.</p>
            </FadeUp>
            
            <FadeUp delay={0.2} className="bg-white p-10 md:p-12 rounded-3xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">Musique</h3>
              <p className="text-[#86868b] font-medium text-lg leading-relaxed">Composition assistée et pistes audio fluides.</p>
            </FadeUp>

            <FadeUp delay={0.3} className="bg-white p-10 md:p-12 rounded-3xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">Vidéo</h3>
              <p className="text-[#86868b] font-medium text-lg leading-relaxed">Avatarisation et synthèse vidéo instantanée.</p>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
