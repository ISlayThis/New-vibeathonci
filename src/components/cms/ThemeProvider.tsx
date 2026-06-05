import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadTheme() {
      const { data } = await supabase.from('cms_settings').select('theme_json, typography_json').limit(1).single();
      
      if (data) {
        const root = document.documentElement;
        
        if (data.theme_json) {
          if (data.theme_json.primaryColor) root.style.setProperty('--cms-primary', data.theme_json.primaryColor);
          if (data.theme_json.secondaryColor) root.style.setProperty('--cms-secondary', data.theme_json.secondaryColor);
          if (data.theme_json.backgroundColor) root.style.setProperty('--cms-bg', data.theme_json.backgroundColor);
          if (data.theme_json.textColor) root.style.setProperty('--cms-text', data.theme_json.textColor);
        }
        
        if (data.typography_json) {
          if (data.typography_json.fontFamily) root.style.setProperty('--cms-font', data.typography_json.fontFamily);
        }
      }
      setIsLoaded(true);
    }
    loadTheme();
  }, []);

  if (!isLoaded) return null; // Ou un spinner de chargement

  return <>{children}</>;}
