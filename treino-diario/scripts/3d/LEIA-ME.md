# Objetos 3D do Lastro

As imagens em `assets/3d/` (moedas de vidro, gema, blocos, anéis, esfera, gelatinas, fita) são renderizadas com **Three.js** num navegador sem tela e salvas como WebP com fundo transparente. O app usa só as imagens; este script serve para criar ou ajustar objetos.

## Como rodar

Precisa de Node.js e do Chromium do Playwright, que já vêm nas sessões do Claude Code na nuvem.

```bash
cd treino-diario/scripts/3d
npm install                 # instala o three (fica em node_modules, fora do git)
node renderizar.mjs         # renderiza todos
node renderizar.mjs gema    # renderiza só um
```

## Como funciona

- `cena.html` monta a cena. Cada objeto é uma entrada em `PRESETS`, com tamanho, fundo (`claro` ou `escuro`), rotação e a função que constrói a geometria e o material.
- A luz é um "estúdio" lavanda com caixas de luz brancas, rosas e lilases, que gera os reflexos.
- Vidro precisa de algo atrás para refratar. Por isso cada objeto é renderizado três vezes:
  1. só o fundo;
  2. a cor, com o fundo;
  3. a silhueta em branco, que vira a transparência.

  As bordas são "desmisturadas" do fundo para não ficar halo.
- As gelatinas e as moedas têm um núcleo luminoso por dentro e uma casca de vidro por fora, que refrata esse brilho.
- As moedas também ganham uma versão desfocada (`-desfocada.webp`), usada para dar profundidade no hero.

## Para pedir ao Claude Code

> Crie um objeto 3D novo no estilo das gelatinas (por exemplo, um raio amarelo) seguindo `scripts/3d/LEIA-ME.md`, renderize e use na tela de conquistas.
