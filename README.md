# Lastro

Treino intelectual diário de 15 a 40 minutos em finanças de deals, M&A, PE e VC, mercados e estruturas, IA, livros e empreendedorismo. O app funciona no celular como um aplicativo instalado, tem modo só áudio para o carro e guarda o progresso no próprio aparelho.

**Abrir o app:** https://felipepassaromello-ctrl.github.io/Geral/

> O endereço só funciona depois que o GitHub Pages estiver ligado. É um passo único, explicado em "Ativar o site" mais abaixo.

## Instalar no celular

**iPhone**

1. Abra o link acima no **Safari**. Outros navegadores do iPhone não instalam o app.
2. Toque em **Compartilhar** (o quadrado com a seta para cima).
3. Toque em **Adicionar à Tela de Início** e depois em **Adicionar**.
4. Abra pelo ícone novo. O app abre em tela cheia, sem a barra do navegador, e funciona sem internet depois da primeira abertura.

**Android:** abra o link no Chrome, toque no menu ⋮ e depois em **Instalar app**.

**Voz melhor no modo direção (iPhone):** vá em Ajustes › Acessibilidade › Conteúdo Falado › Vozes › Português (Brasil) e baixe uma voz "Aprimorada" ou "Premium". Depois escolha essa voz no Lastro, em Progresso › Ajustes.

## Como usar no dia a dia

- **Hoje:** escolha quanto tempo você tem (15, 20, 30 ou 40 minutos) e o momento do dia:
  - **Manhã:** algo novo;
  - **Noite:** revisão do que você já viu.

  Depois toque em **Começar**. O app monta a sessão sozinho: lição, quiz, caso prático, flashcards e "explique com suas palavras".
- **Ouvir:** abre o modo direção, só com áudio e botões grandes. Você responde as perguntas tocando na letra ou falando "letra B".
- **Trilhas:** escolha uma trilha e estude uma unidade específica, fora da pauta automática.
- **Progresso:** traz o domínio por trilha, o mapa do que você já sabe, o histórico com as suas anotações, os ajustes e o backup.

O progresso fica salvo só no aparelho em que você usa. Para levar para outro aparelho ou não perder nada, use **Progresso › Backup do progresso**.

## Ativar o site (uma vez só)

O GitHub não deixa ninguém ligar o site por você, então este é o único clique manual:

1. No repositório, abra **Settings** › **Pages**.
2. Em **Build and deployment**, no campo **Source**, escolha **GitHub Actions**.
3. Abra a aba **Actions**, escolha **Lastro — validar e publicar** e clique em **Run workflow** › **Run workflow**.
4. Em cerca de um minuto, a execução fica verde e o app está no ar no endereço acima.

## Como mudar o app depois

Peça ao Claude Code em linguagem normal. Alguns exemplos:

> Gere mais 10 unidades da trilha financas seguindo treino-diario/conteudo/COMO-ESCREVER.md, confira as contas e abra um pull request.

> Atualize o Radar de IA de dezembro.

> Quero um novo formato de sessão: 5 perguntas relâmpago antes da lição.

O fluxo é sempre o mesmo, e é o fluxo padrão do GitHub:

1. O Claude trabalha numa **branch**, uma cópia paralela do projeto.
2. Ele abre um **pull request**, a lista do que mudou para você revisar.
3. Você clica em **Merge pull request**.
4. O **GitHub Actions** valida o conteúdo e publica o site sozinho. No celular, o app se atualiza na próxima abertura.

Pequenas correções de texto você mesmo pode fazer pelo site do GitHub: abra o arquivo em `treino-diario/conteudo/`, clique no lápis, edite e faça o commit.

## O que tem neste repositório

| Caminho | O que é |
|---|---|
| `treino-diario/` | O app: páginas, estilos, lógica, ícones, imagens 3D e conteúdo |
| `treino-diario/conteudo/` | As lições em Markdown, uma pasta por trilha (`COMO-ESCREVER.md` explica o formato) |
| `treino-diario/DECISOES.md` | Decisões de produto, design e tecnologia, com as referências visuais |
| `treino-diario/README.md` | Detalhes técnicos: estrutura, rodar no computador, objetos 3D |
| `.github/workflows/lastro.yml` | Valida o conteúdo a cada mudança e publica o site |
| `.claude/skills/` e `skills-lock.json` | Skills de design do Emil Kowalski que o Claude Code usa neste projeto |

## Privacidade e custo

- **Visibilidade:** o repositório é público, então o código e o conteúdo das lições ficam visíveis para qualquer pessoa. Seu progresso e suas anotações não ficam, porque nunca saem do seu aparelho. Não coloque nada confidencial em `treino-diario/conteudo/`.
- **Custo:** zero. GitHub, GitHub Pages e GitHub Actions são grátis para repositório público, a voz é a do próprio navegador e o conteúdo é gerado no Claude Code, dentro da assinatura.

## Arquivos antigos

Este repositório antes guardava o mapa de oportunidades e os materiais da aula G4 de 08/10/2026. Eles saíram da pasta atual para o repositório ficar só com o Lastro, mas continuam no histórico do git:

- [ver os arquivos como estavam](https://github.com/felipepassaromello-ctrl/Geral/tree/e1472c1dfbb6dfb12b7f2b7fc23d43ea7f23289c);
- para trazer de volta, peça ao Claude Code: "restaure a pasta mapa_oportunidades do commit e1472c1".

Como o repositório é público, esse histórico também é público.
