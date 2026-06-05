import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Save, Palette, Type } from 'lucide-react';

export function AdminTheme() {
  const [settingsId, setSettingsId] = useState<string | null>(null);
  const [theme, setTheme] = useState({
    primaryColor: '#06c',
    secondaryColor: '#f18122',
    backgroundColor: '#ffffff',
    textColor: '#1d1d1f'
  });
  const [typography, setTypography] = useState({
    fontFamily: 'Inter, sans-serif',
    headingBaseSize: '1.5rem',
    textBaseSize: '1rem'
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function fetchSettings() {
      const { data, error } = await supabase.from('cms_settings').select('*').limit(1).single();
      if (data) {
        setSettingsId(data.id);
        if (data.theme_json) setTheme({ ...theme, ...data.theme_json });
        if (data.typography_json) setTypography({ ...typography, ...data.typography_json });
      }
    }
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      if (settingsId) {
        await supabase.from('cms_settings').update({
          theme_json: theme,
          typography_json: typography,
          updated_at: new Date().toISOString()
        }).eq('id', settingsId);
      } else {
        const { data } = await supabase.from('cms_settings').insert([{
          theme_json: theme,
          typography_json: typography
        }]).select().single();
        if (data) setSettingsId(data.id);
      }
      alert('Paramètres sauvegardés avec succès !');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la sauvegarde.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Design & Thème</h1>
        <button 
          onClick={handleSave} 
          disabled={isSaving}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          <Save className="w-4 h-4" />
          {isSaving ? 'Sauvegarde...' : 'Enregistrer'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Couleurs */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Couleurs Globales</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Couleur Primaire</label>
              <div className="flex gap-3">
                <input type="color" value={theme.primaryColor} onChange={e => setTheme({...theme, primaryColor: e.target.value})} className="w-10 h-10 rounded cursor-pointer border-0 p-0" />
                <input type="text" value={theme.primaryColor} onChange={e => setTheme({...theme, primaryColor: e.target.value})} className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Couleur Secondaire</label>
              <div className="flex gap-3">
                <input type="color" value={theme.secondaryColor} onChange={e => setTheme({...theme, secondaryColor: e.target.value})} className="w-10 h-10 rounded cursor-pointer border-0 p-0" />
                <input type="text" value={theme.secondaryColor} onChange={e => setTheme({...theme, secondaryColor: e.target.value})} className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Couleur de Fond (Background)</label>
              <div className="flex gap-3">
                <input type="color" value={theme.backgroundColor} onChange={e => setTheme({...theme, backgroundColor: e.target.value})} className="w-10 h-10 rounded cursor-pointer border-0 p-0" />
                <input type="text" value={theme.backgroundColor} onChange={e => setTheme({...theme, backgroundColor: e.target.value})} className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Typographie */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
              <Type className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Typographie</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Famille de Police (Font Family)</label>
              <select value={typography.fontFamily} onChange={e => setTypography({...typography, fontFamily: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="Inter, sans-serif">Inter</option>
                <option value="Roboto, sans-serif">Roboto</option>
                <option value="'Open Sans', sans-serif">Open Sans</option>
                <option value="'Montserrat', sans-serif">Montserrat</option>
                <option value="'Playfair Display', serif">Playfair Display</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Taille de Base (Text)</label>
              <input type="text" value={typography.textBaseSize} onChange={e => setTypography({...typography, textBaseSize: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="ex: 1rem ou 16px" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Taille de Base (Titres)</label>
              <input type="text" value={typography.headingBaseSize} onChange={e => setTypography({...typography, headingBaseSize: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="ex: 1.5rem" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Aperçu en direct */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Aperçu du rendu</h2>
        <div 
          className="p-8 rounded-xl border border-gray-100 transition-colors duration-300 shadow-inner"
          style={{ 
            backgroundColor: theme.backgroundColor,
            fontFamily: typography.fontFamily,
            color: theme.textColor
          }}
        >
          <h1 style={{ fontSize: `calc(${typography.headingBaseSize} * 1.5)`, color: theme.primaryColor }} className="font-bold mb-4">
            Ceci est un grand titre (H1)
          </h1>
          <h2 style={{ fontSize: typography.headingBaseSize, color: theme.secondaryColor }} className="font-semibold mb-4">
            Ceci est un sous-titre (H2)
          </h2>
          <p style={{ fontSize: typography.textBaseSize }} className="leading-relaxed opacity-80 mb-6">
            Ceci est un paragraphe de texte normal. Il sert à prévisualiser la taille de base de la police ainsi que l'espacement et la couleur par défaut. Modifiez les paramètres ci-dessus pour voir le changement en temps réel.
          </p>
          <button 
            style={{ backgroundColor: theme.primaryColor, color: '#fff' }}
            className="px-6 py-3 rounded-full font-bold shadow-md hover:opacity-90 transition-opacity"
          >
            Bouton Principal
          </button>
        </div>
      </div>
    </div>
  );
}
