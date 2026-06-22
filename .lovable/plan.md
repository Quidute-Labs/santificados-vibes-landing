## Landing Page – Retiro SANTIFICADOS 2026

Single-page TanStack route (`/`) mobile-first, com estética streetwear cristã / surf vintage. Tudo em uma rota só com seções ancoradas + navegação por scroll.

### Direção visual
- **Paleta** (tokens em `src/styles.css`, oklch): Azul Oceano `#1E66D0`, Azul Claro `#72B8F5`, Amarelo Sol `#F4C316`, Laranja `#F57C00`, Off-white `#F6F1E7`, Preto `#121212`.
- **Tipografia** via `@fontsource`: **Alfa Slab One** (display, parecido a Cooper Black) + **Poppins** 400/600. Instalo via `bun add`.
- **Textura**: overlay SVG de grão/noise + bordas serrilhadas em algumas seções (clip-path / mask) para aspecto de adesivo serigrafado.
- **Logos**: subo as 3 imagens enviadas via `lovable-assets` (arch, badge completo, banner horizontal) e uso cada uma na seção apropriada.

### Estrutura das seções
1. **Hero** (100vh) – fundo gradiente azul + SVG de raios amarelos animados (rotação lenta), ondas SVG no rodapé com loop, logo badge centralizado, badge "RETIRO CATIVAR 2026", versículo, 2 CTAs (Quero Participar / Quero ser Padrinho – outline), scroll indicator animado.
2. **Contador** – fundo preto envelhecido, 4 cards arredondados off-white com flip animation (dias/horas/min/seg). Target: **15/08/2026 08:00 BRT**.
3. **O que vamos viver** – título display + 4 cards orgânicos (border-radius irregular via clip-path) com ícones lucide-react (Users, Flame, Bird, Waves) e hover scale.
4. **O que está incluso** – fundo off-white, ícones grandes, grid horizontal em desktop / carrossel (embla) em mobile.
5. **Local** – card com placeholder de mapa estilizado + foto placeholder (usuário envia depois), datas/horários/ponto de saída/retorno.
6. **Investimento** – fundo amarelo, R$150 enorme com tipografia display, CTA laranja "GARANTIR MINHA VAGA".
7. **Galeria** – grid de polaroids com rotação randômica + animação fade-in on scroll (IntersectionObserver). Placeholders até receber fotos.
8. **FAQ** – shadcn `Accordion` com 5 perguntas listadas.
9. **Chamada final** – mirror do hero, fundo azul + ondas + pomba + sol, CTA "QUERO FAZER PARTE".
10. **Footer** mínimo com créditos / redes sociais placeholder.

### Microinterações
- `IntersectionObserver` hook para fade-in/translate-up em cada seção.
- Parallax discreto no sol/ondas do hero (transform on scroll, sem libs).
- Hover scale 1.05 nos CTAs.
- `scroll-behavior: smooth`.

### CTAs
Todos os botões de inscrição apontam para `EXTERNAL_FORM_URL` (constante única no topo do arquivo) — você cola o link do Google Forms/Sympla depois e atualiza num lugar só. Por enquanto fica `#` com `target="_blank"`.

### SEO
`head()` na rota `/`: title "Santificados • Retiro Cativar 2026", description conforme PRD, og:title/og:description, og:image apontando para o logo badge (asset CDN), canonical "/".

### Arquivos a criar/editar
- `src/styles.css` – adicionar tokens da paleta + utilitários (grão, ondas).
- `src/main.tsx` – `import '@fontsource/alfa-slab-one'` e `@fontsource/poppins/{400,600}.css`.
- `src/routes/index.tsx` – orquestrador da landing (substitui placeholder).
- `src/components/santificados/` – `Hero.tsx`, `Countdown.tsx`, `Experience.tsx`, `Included.tsx`, `Location.tsx`, `Pricing.tsx`, `Gallery.tsx`, `Faq.tsx`, `FinalCta.tsx`, `Footer.tsx`, `Waves.tsx` (SVG), `SunRays.tsx` (SVG), `GrainOverlay.tsx`.
- `src/hooks/use-reveal.ts` – IntersectionObserver helper.
- `src/assets/logo-*.asset.json` – 3 pointers para as logos enviadas.

### Próximos passos depois do build
Você me envia: (1) link do formulário de inscrição, (2) fotos da galeria e foto da chácara, (3) endereço/ponto de saída exatos. Eu plugo tudo em um único PR.