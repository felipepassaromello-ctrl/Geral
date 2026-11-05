---
id: ia-github-na-pratica
trilha: ia
tipo: licao
titulo: GitHub na prática
resumo: Repositório, commit, branch, pull request e merge, e como publicar um site com o GitHub Pages.
nivel: 1
minutos: 9
ordem: 10
tags: [github, git, programação, ferramentas]
desafio: false
verificado: 2026-11-05
---

## Lição

### Git e GitHub não são a mesma coisa
O **Git** é um programa de controle de versões: ele guarda o histórico de cada mudança feita nos arquivos de um projeto. O **GitHub** é um serviço na internet que hospeda projetos Git e acrescenta colaboração: revisão de código, discussão, automações e publicação de sites. Pense no Git como o controle de versões de um contrato e no GitHub como o data room onde todo mundo trabalha sobre a mesma versão.

### Os cinco conceitos que você precisa
- **Repositório (repo):** a pasta do projeto com todo o seu histórico. O próprio Lastro mora num repositório no GitHub.
- **Commit:** uma fotografia das mudanças, com autor, data e uma mensagem explicando o porquê. Bom commit é pequeno e tem mensagem clara, como "corrige cálculo do EBITDA no quiz 3". Commit não é salvar: você escolhe o que entra (o *stage*) e depois registra.
- **Branch (ramo):** uma linha paralela de trabalho. A branch principal costuma se chamar `main`. Para mexer em algo sem risco, você cria uma branch, por exemplo `nova-trilha-livros`, trabalha nela e só depois leva as mudanças para a `main`.
- **Pull request (PR):** o pedido formal para levar as mudanças de uma branch para outra. O PR mostra a diferença linha a linha (o *diff*), recebe comentários e aprovações e pode rodar testes automáticos. É o equivalente a mandar a minuta em marcas de revisão para o sócio aprovar.
- **Merge:** a incorporação das mudanças aprovadas na branch de destino. Se duas pessoas mudaram a mesma linha, aparece um **conflito**, que alguém precisa resolver escolhendo a versão certa, como quando dois advogados editam a mesma cláusula.

### O fluxo do dia a dia
1. Atualize sua cópia local (`git pull`).
2. Crie uma branch (`git switch -c minha-mudanca`).
3. Edite, revise o que mudou (`git status`, `git diff`) e faça commits (`git add` e `git commit -m "mensagem"`).
4. Envie a branch para o GitHub (`git push`).
5. Abra o pull request, peça revisão e faça o merge quando estiver aprovado.

Você não precisa decorar comandos: agentes de código como o Claude Code executam esse fluxo por você, mas entender cada passo permite revisar o que foi feito e desfazer um erro.

### GitHub Pages
O **GitHub Pages** publica um site estático (HTML, CSS e JavaScript, sem servidor próprio) direto de um repositório. Você escolhe a branch e a pasta de origem nas configurações, e o site ganha um endereço do tipo `usuario.github.io/projeto`. Cada merge na branch publicada atualiza o site. Atenção: o site publicado é público na internet mesmo que o repositório seja privado, conforme o plano da conta (verificar regras atuais na documentação), então nunca publique dados de clientes.

## Exemplo
Felipe quer acrescentar 3 unidades de livros ao Lastro. Ele cria a branch `livros-novembro`, adiciona os 3 arquivos `.md`, faz 1 commit com a mensagem "adiciona 3 livros: Outsiders, Voss, Kahneman" e envia a branch. No pull request, o diff mostra 3 arquivos novos. Um teste automático confere se cada quiz tem exatamente uma resposta certa. Ele revisa, faz o merge na `main` e, se o app estiver publicado pelo GitHub Pages a partir da `main`, a nova versão entra no ar em seguida. Se algo der errado, basta reverter aquele commit: o histórico guarda a versão anterior.

## Quiz

### Qual é a diferença entre Git e GitHub?
- [ ] São nomes diferentes para o mesmo programa
- [x] Git controla versões; GitHub hospeda repositórios Git e adiciona colaboração
- [ ] GitHub controla versões; Git é só o site
- [ ] Git serve só para sites e GitHub serve só para código
> O Git é a ferramenta de versionamento e funciona até sem internet. O GitHub é o serviço que hospeda os repositórios e oferece PR, revisão e Pages.

### Para que serve um pull request?
- [ ] Para baixar a versão mais recente do projeto
- [ ] Para apagar uma branch antiga
- [x] Para propor, discutir e revisar a incorporação de mudanças de uma branch em outra
- [ ] Para publicar o site automaticamente
> O PR é o pedido de revisão. Baixar a versão mais recente é o `git pull`, que, apesar do nome parecido, é outra coisa.

### O que causa um conflito de merge?
- [ ] Um commit sem mensagem
- [x] Duas mudanças diferentes na mesma parte do mesmo arquivo
- [ ] Um repositório privado
- [ ] Ter mais de duas branches
> O Git consegue juntar mudanças em partes diferentes. Quando a mesma linha foi alterada dos dois lados, alguém precisa decidir qual versão fica.

### O que o GitHub Pages publica?
- [ ] Bancos de dados e servidores de aplicação
- [ ] Apenas arquivos PDF
- [x] Sites estáticos a partir de um repositório
- [ ] Somente repositórios com mais de um colaborador
> O Pages serve arquivos estáticos (HTML, CSS, JavaScript). Não executa código de servidor.

## Flashcards
- Commit :: Registro de um conjunto de mudanças, com autor, data e mensagem explicando o porquê
- Branch :: Linha paralela de trabalho que permite mexer no projeto sem afetar a principal (main)
- Pull request :: Pedido de revisão para incorporar as mudanças de uma branch em outra
- Merge :: Incorporação das mudanças aprovadas na branch de destino
- GitHub Pages :: Serviço que publica um site estático diretamente de um repositório

## Explique
Explique para um sócio do escritório, que nunca programou, o que são branch, pull request e merge, usando a analogia da revisão de uma minuta de contrato.
### Pontos-chave
- Branch como cópia de trabalho separada da versão oficial
- Pull request como envio da minuta com marcas de revisão para aprovação
- Revisão linha a linha e comentários antes de aprovar
- Merge como incorporar a versão aprovada à versão oficial
- Histórico permite saber quem mudou o quê e voltar atrás
### Resposta modelo
Imagine que a versão oficial do contrato fica numa pasta que ninguém edita direto. Quem quer mudar algo faz uma cópia de trabalho: isso é a branch. Depois de editar, a pessoa envia as mudanças em marcas de revisão pedindo aprovação: isso é o pull request. O revisor vê exatamente quais linhas mudaram, comenta e pede ajustes. Quando aprova, as mudanças entram na versão oficial: isso é o merge. Tudo fica registrado, então dá para saber quem alterou cada cláusula e voltar a uma versão anterior se necessário.

## Verificar
- Regras atuais de disponibilidade do GitHub Pages para repositórios privados por plano de conta.

## Fontes
- [GitHub Docs, About Git](https://docs.github.com/pt/get-started/using-git/about-git) — conceitos de Git
- [GitHub Docs, About pull requests](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) — pull requests
- [GitHub Docs, What is GitHub Pages?](https://docs.github.com/pt/pages/getting-started-with-github-pages/what-is-github-pages) — GitHub Pages
- [Claude Code, Overview](https://code.claude.com/docs/en/overview) — o agente cria commits, branches e pull requests
