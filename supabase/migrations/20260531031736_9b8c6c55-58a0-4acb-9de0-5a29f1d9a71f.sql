CREATE TABLE public.site_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  niche TEXT NOT NULL,
  launched_at DATE,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  images TEXT[] NOT NULL DEFAULT '{}',
  cover_url TEXT,
  project_url TEXT,
  description TEXT,
  objective TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.site_projects TO anon;
GRANT SELECT ON public.site_projects TO authenticated;
GRANT ALL ON public.site_projects TO service_role;

ALTER TABLE public.site_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Site projects are publicly viewable"
ON public.site_projects
FOR SELECT
USING (true);

INSERT INTO public.site_projects (name, niche, launched_at, technologies, cover_url, project_url, description, objective, display_order) VALUES
('Luma Estética', 'Beleza & Bem-estar', '2025-02-15', ARRAY['Next.js','Tailwind','Framer Motion'], 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&q=80', 'https://luma.example.com', 'Site institucional com agendamento integrado e foco em conversão de leads via WhatsApp.', 'Aumentar agendamentos online em 3x.', 1),
('NovaTech SaaS', 'Tecnologia B2B', '2025-04-02', ARRAY['React','Supabase','TypeScript'], 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80', 'https://novatech.example.com', 'Plataforma SaaS com dashboard analítico em tempo real e onboarding guiado.', 'Reduzir CAC e escalar MRR.', 2),
('Atelier Prime', 'Arquitetura', '2025-05-10', ARRAY['Next.js','GSAP','Tailwind'], 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80', 'https://atelier.example.com', 'Portfólio cinematográfico com galeria 3D e storytelling de projetos.', 'Posicionar o estúdio como autoridade premium.', 3),
('FitCore', 'Saúde & Performance', '2025-03-22', ARRAY['React','Tailwind','Meta Pixel'], 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80', 'https://fitcore.example.com', 'Landing page de alta conversão integrada a campanhas pagas.', 'Escalar vendas de planos premium.', 4),
('Capital Trust', 'Finanças', '2025-01-18', ARRAY['Next.js','Supabase','Stripe'], 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80', 'https://capital.example.com', 'Site institucional com calculadoras e captação de leads qualificados.', 'Transmitir confiança e gerar pipeline.', 5),
('Verde Orgânicos', 'E-commerce', '2025-06-01', ARRAY['Shopify','React','Tailwind'], 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80', 'https://verde.example.com', 'E-commerce premium com checkout otimizado e integração logística.', 'Aumentar ticket médio e recompra.', 6);