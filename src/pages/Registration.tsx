import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { cn } from "../lib/utils";
import { Check, Ticket, BookOpen, Gamepad2, Trophy, CreditCard, Smartphone, CheckCircle, Award } from "lucide-react";
import { FadeUp } from "../components/ui/FadeUp";
import { Magnetic } from "../components/ui/Magnetic";
import { motion, AnimatePresence } from "motion/react";

const pricing = [
  {
    name: "Visiteur",
    price: "500 FCFA",
    desc: "Vivez l'événement de l'intérieur.",
    features: [
      "Accès aux Keynotes",
      "Accès aux Panels et conférences",
      "Accès au Pitch Final des compétiteurs"
    ],
    type: "visiteur",
    buttonLabel: "Payer 500 FCFA",
    icon: Ticket
  },
  {
    name: "Formation Adulte",
    price: "10 000 FCFA",
    desc: "Développez vos compétences en IA.",
    features: [
      "Accès à toutes les formations",
      "Accès à 1 atelier au choix",
      "Certificat de participation (optionnel)"
    ],
    type: "formation_adulte",
    buttonLabel: "Payer 10 000 FCFA",
    icon: BookOpen
  },
  {
    name: "Formation Kids",
    price: "5 000 FCFA",
    desc: "Une initiation ludique pour les jeunes.",
    features: [
      "Accès à 1 atelier adapté aux enfants",
      "Goûter inclus",
      "Encadrement par des formateurs"
    ],
    type: "formation_kids",
    buttonLabel: "Payer 5 000 FCFA",
    icon: Gamepad2
  },
  {
    name: "Compétiteur",
    price: "20 000 FCFA",
    desc: "Vivez l'expérience complète en équipe.",
    features: [
      "Accès à toutes les activités",
      "Participation à toutes les compétitions",
      "Accès aux formations et ateliers",
      "Participation au Pitch Final"
    ],
    type: "competition",
    popular: true,
    buttonLabel: "Payer 20 000 FCFA",
    icon: Trophy
  }
];

function PaymentLogo({ type }: { type: string }) {
  switch (type) {
    case "campaign":
      return (
        <div className="w-12 h-12 bg-gradient-to-tr from-[#ff7900] via-[#06c] to-[#1bd7e4] rounded-2xl flex items-center justify-center shadow-md mb-3 text-white">
          <Award className="w-6 h-6 text-white" />
        </div>
      );
    case "all":
      return (
        <div className="w-12 h-12 bg-gradient-to-tr from-[#06c] via-[#0551aa] to-teal-500 rounded-2xl flex items-center justify-center shadow-md mb-3 text-white">
          <CreditCard className="w-6 h-6" />
        </div>
      );
    case "wave":
      return (
        <div className="w-12 h-12 bg-[#1bd7e4] rounded-2xl flex items-center justify-center shadow-sm mb-3">
           <svg viewBox="0 0 100 100" className="w-8 h-8">
             {/* Flippers */}
             <path d="M 32 45 C 15 45, 18 20, 25 22" stroke="#0A0A0A" strokeWidth="12" strokeLinecap="round" fill="none" />
             <path d="M 68 45 C 85 45, 82 70, 75 75" stroke="#0A0A0A" strokeWidth="12" strokeLinecap="round" fill="none" />
             
             {/* Feet */}
             <ellipse cx="38" cy="82" rx="9" ry="5" fill="#F18122" />
             <ellipse cx="62" cy="82" rx="9" ry="5" fill="#F18122" />

             {/* Body */}
             <rect x="28" y="16" width="44" height="66" rx="22" fill="#0A0A0A" />

             {/* Belly */}
             <ellipse cx="50" cy="62" rx="14" ry="19" fill="#FFFFFF" />

             {/* Eyes */}
             <circle cx="43" cy="32" r="3.5" fill="#FFFFFF" />
             <circle cx="57" cy="32" r="3.5" fill="#FFFFFF" />

             {/* Beak */}
             <path d="M 44 40 Q 50 45 56 40 Q 50 36 44 40 Z" fill="#F18122" />
           </svg>
        </div>
      );
    case "orange":
      return (
        <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-sm mb-3">
           <svg viewBox="0 0 100 100" className="w-8 h-8">
             <path d="M 18 36 L 42 36 L 42 60 M 18 60 L 42 36" stroke="#FFFFFF" fill="none" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
             <path d="M 82 64 L 58 64 L 58 40 M 82 40 L 58 64" stroke="#ff7900" fill="none" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
           </svg>
        </div>
      );
    case "mtn":
      return (
        <div className="w-12 h-12 bg-[#ffcc00] rounded-full flex flex-col items-center justify-center shadow-sm border-[3px] border-white mb-3">
           <span className="text-[#004f71] font-black text-[13px] leading-none tracking-tighter">MTN</span>
           <span className="text-[#004f71] font-bold text-[7px] leading-none mt-0.5">MoMo</span>
        </div>
      );
    case "card":
      return (
        <div className="w-12 h-12 bg-[#1d1d1f] rounded-2xl flex items-center justify-center shadow-sm mb-3">
           <div className="flex -space-x-3 opacity-90">
             <div className="w-6 h-6 rounded-full bg-[#ff5f00] mix-blend-screen"></div>
             <div className="w-6 h-6 rounded-full bg-[#f2a900] mix-blend-screen"></div>
           </div>
        </div>
      );
  }
  return null;
}

export function Registration() {
  const [activeForm, setActiveForm] = useState<"visiteur" | "formation_adulte" | "formation_kids" | "competition">("visiteur");
  const [formData, setFormData] = useState({ nom: "", email: "", tel: "", extra: "", message: "" });
  const [paymentMethod, setPaymentMethod] = useState<"all" | "wave" | "orange" | "mtn" | "card" | "">("wave");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [successDetails, setSuccessDetails] = useState({ plan: "", name: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("payment") === "success") {
      setPaymentSuccess(true);
      const planCode = params.get("plan") || "";
      const planObj = pricing.find(p => p.type === planCode);
      setSuccessDetails({
        plan: planObj?.name || "Pass Inscription",
        name: params.get("name") || "Participant"
      });
      // Efface les paramètres de l'URL pour garder une URL propre
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Veuillez sélectionner un moyen de paiement.");
      return;
    }

    setIsProcessing(true);
    const plan = pricing.find(p => p.type === activeForm);

    const amountMap: Record<string, number> = {
      visiteur: 500,
      formation_adulte: 10000,
      formation_kids: 5000,
      competition: 20000,
    };
    const amount = amountMap[activeForm] ?? 500;

    try {
      localStorage.setItem("vibeathon_pending_reg", JSON.stringify({
        plan: plan?.name, name: formData.nom, email: formData.email,
        tel: formData.tel, type: activeForm, amount,
        date: new Date().toISOString()
      }));
    } catch (_) {}

    const channelMap: Record<string, string> = {
      wave: "WAVE", orange: "ORANGE", mtn: "MTN", card: "CARD", all: "",
    };

    const merchantId = import.meta.env.VITE_PAIEMENTPRO_MERCHANT_ID || "PP-F92248";
    const baseUrl = window.location.origin + window.location.pathname;

    const payload = {
      merchantId,
      amount,
      description: `Inscription Vibeathon 2026 - ${plan?.name}`,
      channel: channelMap[paymentMethod] ?? "",
      countryCurrencyCode: "952",
      referenceNumber: `VB-${Date.now()}`,
      customerEmail: formData.email,
      customerFirstName: formData.nom || "Participant",
      customerLastname: formData.nom || "Participant",
      customerPhoneNumber: formData.tel || "0000000000",
      returnURL: `${baseUrl}?payment=success&plan=${activeForm}&name=${encodeURIComponent(formData.nom)}`,
      notificationURL: `${baseUrl}?payment=success&plan=${activeForm}&name=${encodeURIComponent(formData.nom)}`,
      returnContext: "",
      url: "",
      success: false,
    };

    try {
      const response = await fetch("/api/payment/init", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        console.error("PaiementPro response:", data);
        alert("Erreur lors de l'initialisation du paiement. Veuillez réessayer.");
        setIsProcessing(false);
      }
    } catch (err) {
      console.error("PaiementPro fetch error:", err);
      alert("Impossible de contacter le service de paiement. Vérifiez votre connexion.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Header Pricing */}
      <section className="w-full max-w-[1000px] mx-auto px-6 pt-32 pb-16 text-center">
        <FadeUp>
          <h2 className="text-[#86868b] font-semibold text-lg md:text-xl tracking-tight mb-2 mt-12">Inscriptions</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent mb-6">
            Rejoignez le mouvement.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-snug max-w-3xl mx-auto">
            Choisissez le pass qui correspond à votre profil d'innovation.
          </p>
        </FadeUp>
      </section>

      {/* Pricing Grid */}
      <section className="w-full bg-[#f5f5f7] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan, idx) => (
              <FadeUp key={plan.name} delay={idx * 0.1} className={`bg-white/70 backdrop-blur-md rounded-3xl p-8 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative transition-transform hover:scale-[1.02] duration-300 border border-white/50 ${plan.popular ? 'ring-2 ring-[#06c]' : ''}`}>
                {plan.popular && (
                   <span className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-[#06c] to-[#005bb5] text-white text-xs font-bold rounded-full shadow-md">
                     Populaire
                   </span>
                )}
                <div className="w-14 h-14 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white">
                  <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-[#06c]' : 'text-[#1d1d1f]'}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f] mb-2">{plan.name}</h3>
                <p className="text-[#86868b] text-sm font-medium leading-relaxed mb-6 h-12">{plan.desc}</p>
                
                <div className="mb-6 pb-6 border-b border-[#d2d2d7]">
                  <div className="text-3xl font-bold tracking-tight text-[#1d1d1f] bg-clip-text text-transparent bg-gradient-to-r from-[#1d1d1f] to-[#434353]">
                    {plan.price}
                  </div>
                </div>

                <ul className="mb-8 space-y-4 flex-1">
                  {plan.features.map(feat => (
                    <li key={feat} className="flex items-start text-sm text-[#1d1d1f] font-medium">
                      <Check className="w-4 h-4 mr-3 text-[#06c] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Magnetic>
                  <button 
                    onClick={() => {
                      setActiveForm(plan.type as any);
                      document.getElementById('registration-forms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-4 rounded-full text-sm font-bold transition-all shadow-sm flex items-center justify-center group ${plan.popular ? 'bg-gradient-to-r from-[#06c] to-[#005bb5] text-white hover:shadow-lg hover:scale-[1.02]' : 'bg-white border border-[#d2d2d7] text-[#1d1d1f] hover:border-[#1d1d1f] hover:bg-gray-50'}`}
                  >
                    {plan.buttonLabel}
                  </button>
                </Magnetic>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Forms */}
      <section id="registration-forms" className="w-full py-24 bg-white">
         <div className="max-w-[800px] mx-auto px-6">
            <FadeUp className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-orange-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-4">
                Formulaire.
              </h2>
              <p className="text-xl text-[#86868b] font-medium">Remplissez le formulaire selon la catégorie choisie.</p>
            </FadeUp>

            {/* Form Tabs */}
            <FadeUp delay={0.1} className="flex flex-wrap md:flex-nowrap bg-[#f5f5f7] p-1 rounded-full mb-12 gap-1 md:gap-0">
              <button 
                type="button"
                onClick={() => setActiveForm("visiteur")}
                className={cn("w-full md:flex-1 py-3 px-4 text-sm font-medium rounded-full transition-all duration-300", activeForm === "visiteur" ? "bg-white text-[#1d1d1f] shadow-md" : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-gray-200/50")}
              >
                Visiteur
              </button>
              <button 
                type="button"
                onClick={() => setActiveForm("formation_adulte")}
                className={cn("w-full md:flex-1 py-3 px-4 text-sm font-medium rounded-full transition-all duration-300", activeForm === "formation_adulte" ? "bg-white text-[#1d1d1f] shadow-md" : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-gray-200/50")}
              >
                Formation Adulte
              </button>
              <button 
                type="button"
                onClick={() => setActiveForm("formation_kids")}
                className={cn("w-full md:flex-1 py-3 px-4 text-sm font-medium rounded-full transition-all duration-300", activeForm === "formation_kids" ? "bg-white text-[#1d1d1f] shadow-md" : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-gray-200/50")}
              >
                Formation Kids
              </button>
              <button 
                type="button"
                onClick={() => setActiveForm("competition")}
                className={cn("w-full md:flex-1 py-3 px-4 text-sm font-medium rounded-full transition-all duration-300", activeForm === "competition" ? "bg-white text-[#1d1d1f] shadow-md" : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-gray-200/50")}
              >
                Compétiteur
              </button>
            </FadeUp>

            {/* Dynamic Form */}
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 sm:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f5f5f7]">
              {activeForm === "visiteur" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom complet</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="hello@exemple.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Numéro de téléphone</label>
                    <input 
                      type="tel" required value={formData.tel} onChange={e => setFormData({...formData, tel: e.target.value})}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                      placeholder="+225 01 02 03 04 05"
                    />
                  </div>
                </div>
              )}

              {activeForm === "formation_adulte" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom complet</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="hello@exemple.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Atelier au choix</label>
                      <select 
                        required 
                        value={formData.extra} 
                        onChange={e => setFormData({...formData, extra: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Sélectionnez un atelier</option>
                        <option value="prompt">Prompt Engineering avancé</option>
                        <option value="vibecoding">Vibecoding de A à Z</option>
                        <option value="agents">Création d'agents intelligents</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Numéro de téléphone</label>
                      <input 
                        type="tel" required value={formData.tel} onChange={e => setFormData({...formData, tel: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="+225 01 02 03 04 05"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeForm === "formation_kids" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom de l'enfant</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Léo Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email du parent</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="parent@exemple.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Âge de l'enfant</label>
                      <input 
                        type="number" required 
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Âge"
                        min="6" max="15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Numéro de téléphone</label>
                      <input 
                        type="tel" required value={formData.tel} onChange={e => setFormData({...formData, tel: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="+225 01 02 03 04 05"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeForm === "competition" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom de l'équipe</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Les Innovateurs"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email du représentant</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="chef@exemple.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Thématique du projet</label>
                      <select 
                        required 
                        value={formData.extra} 
                        onChange={e => setFormData({...formData, extra: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Sélectionnez un thème</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="energie">Énergie</option>
                        <option value="transport">Transport</option>
                        <option value="ressources">Gestion des ressources</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Numéro de téléphone</label>
                      <input 
                        type="tel" required value={formData.tel} onChange={e => setFormData({...formData, tel: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="+225 01 02 03 04 05"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Description courte du projet</label>
                    <textarea 
                      required rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b] resize-none" 
                      placeholder="Décrivez votre idée en quelques mots..."
                    />
                  </div>
                </div>
              )}

              {/* Payment Section */}
              <div className="pt-8 border-t border-[#d2d2d7]/50 mt-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                    <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">Moyen de paiement</h3>
                    <span className="text-xs bg-[#06c]/10 text-[#06c] font-bold px-3 py-1 rounded-full">Partenaire officiel : Paiement Pro</span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {[
                      { id: "all", label: "Portail Paiement Pro", activeClass: "border-[#06c] bg-[#06c]/5" },
                      { id: "wave", label: "Wave", activeClass: "border-[#1bd7e4] bg-[#1bd7e4]/5" },
                      { id: "orange", label: "Orange Money", activeClass: "border-[#ff7900] bg-[#ff7900]/5" },
                      { id: "mtn", label: "MTN MoMo", activeClass: "border-[#ffcc00] bg-[#ffcc00]/5" },
                      { id: "card", label: "Carte Bancaire", activeClass: "border-[#1d1d1f] bg-[#1d1d1f]/5" }
                    ].map(pm => (
                      <label 
                        key={pm.id} 
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative ${paymentMethod === pm.id ? pm.activeClass + ' scale-[1.02] shadow-sm' : 'border-transparent bg-[#f5f5f7] hover:bg-[#e8e8ed]'}`}
                      >
                        <input 
                           type="radio" 
                           name="payment" 
                           value={pm.id} 
                           checked={paymentMethod === pm.id}
                           onChange={() => setPaymentMethod(pm.id as any)}
                           className="hidden" 
                        />
                        <PaymentLogo type={pm.id} />
                        <span className={`text-[10px] font-bold text-center leading-tight ${paymentMethod === pm.id ? 'text-[#1d1d1f]' : 'text-[#86868b]'}`}>{pm.label}</span>
                      </label>
                    ))}
                  </div>

                  <div className="mt-6 bg-[#f5f5f7] border border-gray-200 rounded-2xl p-5 text-sm text-[#1d1d1f] leading-relaxed">
                    <p className="text-gray-600">
                      🔒 Vous serez redirigé vers la page de paiement sécurisée <strong>Paiement Pro</strong> — Wave, Orange Money, MTN MoMo, Moov, Visa et Mastercard acceptés.
                    </p>
                  </div>
              </div>

              <div className="pt-8 flex justify-center">
                <Magnetic>
                  <button disabled={isProcessing} type="submit" className={`w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-[#06c] to-[#005bb5] shadow-lg shadow-[#06c]/20 text-white font-bold text-base transition-all rounded-full flex items-center justify-center group ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}>
                    {isProcessing ? "Traitement en cours..." : "Procéder au paiement"}
                  </button>
                </Magnetic>
              </div>
            </form>
            </FadeUp>
         </div>
      </section>

      <AnimatePresence>
        {paymentSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-[2.5rem] p-10 md:p-12 w-full max-w-lg text-center shadow-2xl relative border border-[#f5f5f7]"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                <CheckCircle className="w-10 h-10 text-emerald-500" strokeWidth={1.5} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Félicitations !
              </h2>
              <p className="text-xl text-[#1d1d1f] font-semibold mb-6">
                Votre paiement a été validé.
              </p>

              <div className="bg-[#f5f5f7] rounded-xl p-6 mb-8 text-left space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-[#86868b] text-sm font-medium">Participant / Équipe</span>
                  <span className="text-[#1d1d1f] text-sm font-bold">{successDetails.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#86868b] text-sm font-medium">Formule Choisie</span>
                  <span className="text-sm font-bold bg-[#06c] text-white px-3 py-1 rounded-full">{successDetails.plan}</span>
                </div>
              </div>

              <p className="text-[#86868b] text-sm font-medium mb-8 leading-relaxed">
                Un e-mail de confirmation vous a été envoyé. Veuillez le présenter à l'entrée le jour de l'événement.
              </p>

              <div className="space-y-3">
                <Magnetic>
                  <button 
                    onClick={() => {
                      setPaymentSuccess(false);
                      window.location.href = "/";
                    }}
                    className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 text-white font-bold text-sm rounded-full transition-all duration-300"
                  >
                    Retour à l'accueil
                  </button>
                </Magnetic>
                <button 
                  onClick={() => setPaymentSuccess(false)}
                  className="w-full py-3 text-sm text-[#86868b] font-semibold hover:text-[#1d1d1f] transition-colors"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
