
CREATE TABLE public.cases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client TEXT NOT NULL,
  objective TEXT NOT NULL,
  investment NUMERIC NOT NULL DEFAULT 0,
  reach INTEGER NOT NULL DEFAULT 0,
  conversations INTEGER NOT NULL DEFAULT 0,
  cpa NUMERIC NOT NULL DEFAULT 0,
  image_url TEXT,
  description TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.cases TO anon, authenticated;
GRANT ALL ON public.cases TO service_role;

ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cases are publicly viewable"
ON public.cases FOR SELECT
TO anon, authenticated
USING (true);

INSERT INTO public.cases (client, objective, investment, reach, conversations, cpa, description, display_order) VALUES
('E-commerce Fashion', 'Escalar vendas via Meta Ads', 1850.00, 124500, 387, 4.78, 'Reestruturação completa de campanhas de conversão com pixel otimizado e públicos customizados.', 1),
('Clínica Estética Premium', 'Geração de leads qualificados', 980.00, 68200, 215, 4.56, 'Funil de captação multi-etapa com automação WhatsApp e qualificação via formulário inteligente.', 2),
('SaaS B2B', 'Demonstrações agendadas', 3200.00, 89400, 142, 22.53, 'Estratégia de inbound pago via LinkedIn Ads + Google Ads com nurturing automatizado.', 3);
