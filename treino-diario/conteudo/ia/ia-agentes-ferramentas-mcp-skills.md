---
id: ia-agentes-ferramentas-mcp-skills
trilha: ia
tipo: licao
titulo: Agentes, ferramentas, MCP e skills
resumo: Como um modelo de linguagem vira um agente que age, e o que são tool use, MCP, skills e um agente de código como o Claude Code.
nivel: 2
minutos: 10
ordem: 20
tags: [agentes, mcp, skills, claude code]
desafio: false
verificado: 2026-11-05
---

## Lição

### Do chat ao agente
Um modelo de linguagem, sozinho, recebe texto e devolve texto. Ele não abre arquivos, não consulta bases e não envia e-mails. O que muda o jogo é dar a ele **ferramentas** e deixá-lo trabalhar em ciclo.

### Tool use (uso de ferramentas)
No uso de ferramentas, a aplicação informa ao modelo quais ferramentas existem, com nome, descrição e formato de entrada. Por exemplo: "buscar_jurisprudencia(termo)". Quando o modelo acha útil, ele não executa nada: ele devolve um pedido estruturado dizendo qual ferramenta quer usar e com quais parâmetros. A aplicação executa, devolve o resultado e o modelo continua o raciocínio. Quem age de fato é o programa ao redor do modelo, e é nele que ficam as permissões.

### O que é um agente
A Anthropic, num texto de dezembro de 2024, separa dois desenhos. Em um **workflow**, o caminho é fixo e definido em código: passo 1, passo 2, passo 3. Em um **agente**, o próprio modelo decide dinamicamente quais passos dar e quais ferramentas usar até cumprir o objetivo. O ciclo típico é: entender a tarefa, planejar, chamar uma ferramenta, observar o resultado, corrigir o rumo e repetir até terminar ou precisar de uma pessoa.

### MCP (Model Context Protocol)
Cada sistema tinha a sua integração própria com cada modelo. O **MCP** é um padrão aberto para conectar aplicações de IA a fontes de dados e ferramentas externas, como Google Drive, Jira, bancos de dados ou o GitHub. A documentação oficial compara o MCP a uma porta USB-C: um conector único em vez de um cabo por aparelho. Funciona em modelo cliente e servidor. O aplicativo de IA é o cliente, e cada **servidor MCP** expõe ferramentas, dados (recursos) e modelos de instrução (prompts). Escrito um servidor, qualquer cliente compatível pode usá-lo. Em 9 de dezembro de 2025, a Anthropic doou o MCP à Agentic AI Foundation, fundação criada com Block e OpenAI dentro da Linux Foundation; em outubro de 2026, o padrão de skills foi para a mesma fundação.

### Skills
Uma **skill** é uma pasta com um arquivo `SKILL.md`: um cabeçalho com nome e descrição e, abaixo, as instruções de como fazer uma tarefa específica, às vezes com scripts e material de referência. O agente vê só o nome e a descrição de cada skill e carrega o conteúdo completo quando a tarefa pede. Isso economiza espaço de contexto. MCP dá acesso a sistemas; a skill ensina o procedimento. Exemplo: a skill "revisar NDA" diz quais cláusulas checar e em que ordem.

### Agente de código: o Claude Code
O **Claude Code** é um agente de programação. Segundo a documentação, ele lê o código do projeto, edita arquivos, roda comandos no terminal e trabalha com git (cria branches, commits e pull requests). Roda no terminal, em editores como o VS Code, num aplicativo de desktop e no navegador. Ele lê um arquivo `CLAUDE.md` com as regras do projeto, pode usar servidores MCP e skills e pedir permissão antes de ações sensíveis.

### Riscos
O principal é a **injeção de prompt** (prompt injection): um documento ou site lido pelo agente pode conter instruções escondidas. A documentação recomenda conectar só servidores MCP confiáveis. Regra prática: dê ao agente o mínimo de acesso necessário e revise o que ele fez antes de aprovar.

## Exemplo
Felipe pede: "atualize o Lastro com 3 livros novos e publique". Um agente de código lê o `COMO-ESCREVER.md` (contexto do projeto), cria os 3 arquivos (ferramenta de escrita), roda o script de build (ferramenta de terminal), vê um erro de formato num quiz, corrige e roda de novo. Depois cria a branch e o pull request (git). São cerca de 6 chamadas de ferramenta decididas pelo próprio modelo. Num workflow, o mesmo processo seria um roteiro fixo que não saberia reagir ao erro do quiz.

## Quiz

### No tool use, quem executa a ferramenta?
- [ ] O próprio modelo, dentro dos servidores dele
- [x] A aplicação ao redor do modelo, que recebe o pedido estruturado e devolve o resultado
- [ ] O usuário, manualmente, sempre
- [ ] Ninguém: a ferramenta é só uma descrição
> O modelo só pede a chamada, com nome e parâmetros. Quem executa e controla as permissões é o programa que o envolve.

### Qual é a diferença entre workflow e agente, no texto da Anthropic de dez/2024?
- [ ] Workflow usa IA e agente não usa
- [ ] Agente é sempre mais barato
- [x] No workflow o caminho é fixo em código; no agente o modelo decide os passos e as ferramentas
- [ ] Não há diferença prática
> Workflows seguem caminhos predefinidos. Agentes dirigem o próprio processo, o que dá flexibilidade e exige mais controle.

### O que o MCP padroniza?
- [ ] O treinamento de modelos de linguagem
- [x] A conexão entre aplicações de IA e ferramentas ou fontes de dados externas
- [ ] O formato de arquivos de planilha
- [ ] A cobrança das APIs de IA
> O MCP é um protocolo aberto de integração. Um servidor escrito uma vez serve a qualquer cliente compatível.

### Qual frase descreve melhor uma skill?
- [ ] Um modelo de IA menor e especializado
- [ ] Um servidor que dá acesso a um banco de dados
- [x] Uma pasta com instruções (SKILL.md) que ensina o agente a fazer uma tarefa, carregada quando relevante
- [ ] Uma senha de acesso a sistemas
> Skill ensina o procedimento. O acesso a sistemas vem de ferramentas e servidores MCP.

## Flashcards
- Tool use :: O modelo pede a chamada de uma ferramenta com parâmetros; a aplicação executa e devolve o resultado
- Agente :: Sistema em que o modelo decide dinamicamente os passos e as ferramentas até cumprir o objetivo
- MCP :: Padrão aberto para conectar aplicações de IA a ferramentas e dados externos, em modelo cliente e servidor
- Skill :: Pasta com SKILL.md que ensina um procedimento ao agente e é carregada quando a tarefa pede
- Injeção de prompt :: Instruções maliciosas escondidas em conteúdo que o agente lê, tentando desviar o que ele faz

## Verificar
- A analogia do MCP com a porta USB-C vem da documentação oficial em modelcontextprotocol.io; a página não pôde ser aberta nesta sessão (verificar redação atual).

## Fontes
- [Anthropic, Building effective agents (19/12/2024)](https://www.anthropic.com/research/building-effective-agents) — workflows x agentes
- [Anthropic Docs, Tool use](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview) — como funciona o uso de ferramentas
- [Model Context Protocol, Introduction](https://modelcontextprotocol.io/docs/getting-started/intro) — definição do MCP
- [Claude Code Docs, Overview](https://code.claude.com/docs/en/overview) — o que o Claude Code faz e onde roda
- [Claude Code Docs, MCP](https://code.claude.com/docs/en/mcp) — servidores MCP e alerta de injeção de prompt
- [Claude Code Docs, Skills](https://code.claude.com/docs/en/skills) — SKILL.md e carregamento sob demanda
- [Anthropic, Donating the Model Context Protocol and establishing the Agentic AI Foundation (09/12/2025)](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) — MCP sob governança neutra
- [Anthropic, Donating Agent Skills to the Agentic AI Foundation (22/10/2026)](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) — governança de MCP e skills
