# Portfólio — Gustavo Miranda

Meu portfólio pessoal, feito com React, TypeScript e Vite. Fala um pouco sobre quem sou, o que faço e como entrar em contato.

**[gustavomiranda-portfolio.netlify.app](https://gustavomiranda-portfolio.netlify.app)**

---

## Stack

- React + TypeScript + Vite
- CSS com foco em responsividade mobile-first
- Netlify Functions (Node.js) para o formulário de contato via Nodemailer
- reCAPTCHA v2

---

## Seções

- **Hero** — apresentação principal
- **Soluções** — habilidades e serviços
- **Depoimentos** — feedbacks e referências
- **Colaboração** — modos de trabalho e disponibilidade
- **Contato** — formulário funcional com envio de e-mail
- **Footer** — redes sociais e links

---

## Rodando localmente

```bash
git clone https://github.com/gustavomiranda2302/gms-portfolio.git
cd gms-portfolio
npm install
cp .env.example .env
# Preencha as variáveis no .env
npm run dev
```

---

## Deploy

Hospedado na Netlify com deploy automático a partir da branch `main`. O formulário de contato é processado por uma Netlify Function (`/netlify/functions/contact.ts`), o que mantém as credenciais fora do frontend.

Variáveis necessárias no painel da Netlify:

```
EMAIL_USER=
EMAIL_PASS=
RECAPTCHA_SECRET_KEY=
```

---

## Estrutura

```
gms-portfolio/
├── netlify/
│   └── functions/
│       └── contact.ts
├── src/
│   ├── components/
│   ├── assets/
│   ├── styles/
│   └── main.tsx
├── .env.example
└── vite.config.ts
```

---

## Contato

- LinkedIn: [gustavo-miranda-dos-santos-5301062b6](https://www.linkedin.com/in/gustavo-miranda-dos-santos-5301062b6)
- GitHub: [@gustavomiranda2302](https://github.com/gustavomiranda2302)
