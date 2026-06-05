import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Layers, FileText, Activity } from 'lucide-react';

export function AdminDashboard() {
  const [stats, setStats] = useState({ pages: 0, sections: 0 });

  useEffect(() => {
    async function fetchStats() {
      const [pagesRes, sectionsRes] = await Promise.all([
        supabase.from('cms_pages').select('id', { count: 'exact' }),
        supabase.from('cms_sections').select('id', { count: 'exact' })
      ]);

      setStats({
        pages: pagesRes.count || 0,
        sections: sectionsRes.count || 0
      });
    }
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tableau de bord CMS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <FileText className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Pages publiées</p>
            <p className="text-2xl font-bold text-gray-900">{stats.pages}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <Layers className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Sections actives</p>
            <p className="text-2xl font-bold text-gray-900">{stats.sections}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <Activity className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Statut Base de Données</p>
            <p className="text-sm font-bold text-emerald-600 flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Connectée
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center mt-8">
        <h3 className="text-xl font-bold mb-2">Bienvenue dans votre CMS</h3>
        <p className="text-gray-500 max-w-lg mx-auto">
          Vous pouvez dès maintenant gérer les pages de votre site, modifier le design (couleurs, typographies) et administrer le contenu visuellement.
        </p>
      </div>
    </div>
  );
}
