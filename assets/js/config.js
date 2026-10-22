/*
 * Configuração central da LP de Financiamento de Veículos | RLC Advocacia
 * Único lugar para ajustar backend, WhatsApp e rastreamento.
 * A chave abaixo é a chave PÚBLICA (anon) do Supabase: só permite inserir visitas/leads.
 * A leitura exige login (Supabase Auth + RLS por site). Nunca coloque a service_role aqui.
 */
window.RLC_CONFIG = {
  // Backend: projeto Supabase "ADS BR CLIENTES" (tabelas multi-tenant lp_visits / lp_leads)
  SUPABASE_URL: "https://qxhnjzyhtllmtdrcyygi.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4aG5qenlodGxsbXRkcmN5eWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMzczNjgsImV4cCI6MjA5NzgxMzM2OH0.DWf4I_x9F--H7ZZHUt_n4V3B__Nlsf1jNZdUV0vNBLU",
  LEADS_TABLE: "lp_leads",
  VISITS_TABLE: "lp_visits",

  // Identificador desta LP na coluna "site"
  SITE: "rlc-advocacia",
  CLIENT_NAME: "RLC Advocacia",

  // Login do painel de leads: usuário exibido -> e-mail no Supabase Auth
  DASH_USERS: { "admin": "admin@rlc-advocacia.adsbr.internal" },

  // WhatsApp oficial (número publicado em rlcadvocacia.com, botão do site atual)
  WHATSAPP_NUMBER: "5541999173755",
  WHATSAPP_MESSAGE: "Olá, entrei em contato pela página de financiamento de veículos da RLC Advocacia e gostaria de obter informações sobre o meu caso.",
  REDIRECT_DELAY_MS: 3000,

  // Google Tag Manager já instalado no site atual (rlcadvocacia.com)
  GTM_ID: "GTM-WV4RZV28"
};
