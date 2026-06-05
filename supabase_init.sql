-- Création des tables pour le CMS Visuel
-- Ces tables n'interfèrent pas avec le backend existant

CREATE TABLE IF NOT EXISTS public.cms_settings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  theme_json jsonb DEFAULT '{}'::jsonb,
  typography_json jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.cms_pages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  meta_json jsonb DEFAULT '{}'::jsonb,
  is_published boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.cms_sections (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id uuid REFERENCES public.cms_pages(id) ON DELETE CASCADE,
  type text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  is_visible boolean DEFAULT true,
  design_json jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.cms_components (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id uuid REFERENCES public.cms_sections(id) ON DELETE CASCADE,
  type text NOT NULL,
  content_json jsonb DEFAULT '{}'::jsonb,
  style_json jsonb DEFAULT '{}'::jsonb,
  animations_json jsonb DEFAULT '{}'::jsonb,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Activez le RLS (Row Level Security) sur toutes ces tables
ALTER TABLE public.cms_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cms_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cms_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cms_components ENABLE ROW LEVEL SECURITY;

-- Autoriser la lecture pour tout le monde (accès public au site)
CREATE POLICY "Lecture publique des settings" ON public.cms_settings FOR SELECT USING (true);
CREATE POLICY "Lecture publique des pages" ON public.cms_pages FOR SELECT USING (is_published = true);
CREATE POLICY "Lecture publique des sections" ON public.cms_sections FOR SELECT USING (true);
CREATE POLICY "Lecture publique des composants" ON public.cms_components FOR SELECT USING (true);

-- (Optionnel) Autoriser toutes les opérations pour le développement.
-- À REMPLACER PAR UNE VÉRIFICATION DE RÔLE (ex: auth.uid() IN (...admins...)) EN PRODUCTION
CREATE POLICY "Dev Access Settings" ON public.cms_settings FOR ALL USING (true);
CREATE POLICY "Dev Access Pages" ON public.cms_pages FOR ALL USING (true);
CREATE POLICY "Dev Access Sections" ON public.cms_sections FOR ALL USING (true);
CREATE POLICY "Dev Access Components" ON public.cms_components FOR ALL USING (true);

-- Création d'un bucket public pour les médias du CMS (si non existant)
INSERT INTO storage.buckets (id, name, public) VALUES ('cms-media', 'cms-media', true) ON CONFLICT DO NOTHING;

-- Policy pour permettre de lire les images du CMS publiquement
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'cms-media');
-- Policy pour permettre l'upload (En dev : ouvert, En prod : auth.uid() != null)
CREATE POLICY "Dev Upload Access" ON storage.objects FOR ALL USING (bucket_id = 'cms-media');
