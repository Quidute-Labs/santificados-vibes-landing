## O que será feito

Ajustar o componente `src/components/santificados/FinalCta.tsx` para refinar a seção final da landing page:

1. **Remover o sol girando ao fundo**
   - Excluir o container absoluto que renderiza `<SunRays />` com animação `animate-spin-slow`.
   - Remover o import não utilizado de `SunRays` no `Waves.ts` se ele deixar de ser usado em todo o projeto.

2. **Remover o texto "Dois dias que podem..."**
   - Excluir o parágrafo `<p className="text-[var(--cream)]/85 mb-10 ...">`.
   - Ajustar o espaçamento do botão para manter o equilíbrio visual sem o parágrafo.

3. **Garantir a logo simplificada na seção**
   - A imagem já aponta para `src/assets/logo-simplificada.jpg.asset.json`.
   - Confirmar que o import e o `src` estão corretos após as edições.

4. **Verificar build e preview**
   - Rodar `bun run build:dev`.
   - Tirar screenshot da seção final no preview para confirmar o resultado visual.

## Arquivos envolvidos
- `src/components/santificados/FinalCta.tsx` (edição)
- `src/components/santificados/Waves.tsx` (possível remoção de import `SunRays`)