# Backend (Supabase)

Projeto: **ADS BR CLIENTES** (`qxhnjzyhtllmtdrcyygi`), o mesmo das demais LPs da ADS BR.
Tabelas compartilhadas (multi-tenant pela coluna `site`), já existentes. Nenhuma migração é necessária.

| Tabela | O que grava | Quem grava |
|---|---|---|
| `lp_visits` | `site`, `referrer`, `path` | a LP, 1 linha por carregamento |
| `lp_leads` | `site`, `nome`, `whatsapp` (+55), `origem` | o formulário, 1 linha por envio |

Identificador desta LP: `site = 'rlc-advocacia'`.

## Permissões (RLS)
- Visitante anônimo: só **insere** em `lp_visits` e `lp_leads`. Não lê nada.
- Leitura: só usuário logado que tenha linha em `lp_acessos` para o site (função `pode_ver_site`).

## Login do painel (`/dashboard`)
- Usuário exibido na tela: `Admin`
- E-mail no Supabase Auth: `admin@rlc-advocacia.adsbr.internal` (mapeado em `assets/js/config.js`)
- A senha não fica nos arquivos. Para trocar, atualize o usuário no Supabase Auth.

## Sobre a chave em `assets/js/config.js`
É a chave pública (anon). Ela só permite inserir visitas e leads, por causa do RLS.
Nunca coloque a chave `service_role` em nenhum arquivo deste repositório.
