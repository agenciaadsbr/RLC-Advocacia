# RLC Advocacia | LP de Direito Bancário

Landing page de Direito Bancário da RLC Advocacia, com captação de leads no Supabase e painel de leads com login.
Site estático (HTML, CSS e JS puros): não precisa de build nem de instalação.

## Páginas

| Arquivo | Endereço publicado | Para que serve |
|---|---|---|
| `index.html` | `/` | Landing page com formulário (nome + WhatsApp) |
| `redirect.html` | `/redirect` | Confirmação após o envio; abre o WhatsApp do escritório em 3 s |
| `dashboard.html` | `/dashboard` | Painel de leads (login, gráfico diário, conversão, lista com botão de WhatsApp) |
| `privacidade.html` | `/privacidade` | Política de Privacidade (LGPD) |

## Estrutura

```
rlc-advocacia-lp/
├── index.html
├── redirect.html
├── dashboard.html
├── privacidade.html
├── assets/
│   ├── js/config.js      ← configurações (Supabase, WhatsApp, GTM, login)
│   ├── img/              ← logo e fotografias
│   └── icons/            ← favicons
├── docs/supabase.md      ← como o banco está montado
├── vercel.json           ← URLs limpas e cabeçalhos de segurança
├── robots.txt
└── README.md
```

## Onde mudar cada coisa

Quase tudo que muda com frequência está em **`assets/js/config.js`**:

- `WHATSAPP_NUMBER`: número do escritório que abre após o envio (hoje 55 41 99917-3755)
- `WHATSAPP_MESSAGE`: mensagem inicial dessa conversa
- `SITE`: identificador da LP no banco (`rlc-advocacia`)
- `GTM_ID`: Google Tag Manager (hoje `GTM-WV4RZV28`, o mesmo do site atual)
- `SUPABASE_URL` / `SUPABASE_ANON_KEY`: conexão com o banco (chave pública, segura para ficar aqui)

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub (de preferência **privado**).
2. Na Vercel: **Add New → Project →** importe o repositório.
3. Em *Framework Preset*, escolha **Other**. Deixe *Build Command* e *Output Directory* em branco.
4. Clique em **Deploy**. Cada novo commit no GitHub publica sozinho.
5. Ligue o domínio em **Settings → Domains**.

Depois de ter o domínio final, troque em `index.html` a linha `og:image` para o endereço completo
(ex.: `https://seudominio.com.br/assets/img/og-rlc-bancario.jpg`), para a prévia aparecer certa no WhatsApp.

## Teste rápido depois de publicar

1. Abra a LP (isso grava uma visita).
2. Envie o formulário com um nome de teste. Deve abrir `/redirect` e depois o WhatsApp.
3. Entre em `/dashboard` com o usuário `Admin` e confira o lead e a visita.
4. Apague o lead de teste no Supabase.

## Observações

- Conteúdo revisado para o Provimento 205/2021 da OAB: sem promessa de resultado nem depoimentos.
- Animações respeitam a opção de "reduzir movimento" do sistema.
- Detalhes do banco e das permissões: `docs/supabase.md`.
