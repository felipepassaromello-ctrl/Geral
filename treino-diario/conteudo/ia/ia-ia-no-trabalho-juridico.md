---
id: ia-ia-no-trabalho-juridico
trilha: ia
tipo: licao
titulo: Como usar IA bem no trabalho jurídico
resumo: Contexto, estrutura, verificação de fontes e sigilo profissional, com um exercício para fazer no escritório.
nivel: 1
minutos: 10
ordem: 30
tags: [ia, advocacia, sigilo, ética, prompts]
desafio: false
verificado: 2026-11-05
---

## Lição

### Quatro hábitos que separam bom uso de mau uso
**1. Dê contexto como daria a um estagiário brilhante que chegou hoje.** A IA não sabe quem é o cliente, qual é a operação nem o que o sócio quer. Diga o papel ("você é um associado de M&A revisando um SPA pelo comprador"), o objetivo ("listar riscos para a call de amanhã"), o público ("o sócio, que lê em 5 minutos"), as restrições ("lei brasileira, sem jurisprudência inventada") e o material de base. Quanto mais específico o pedido, menos genérica a resposta.

**2. Peça estrutura.** Em vez de "analise este contrato", peça o formato da entrega: uma tabela com cláusula, risco, gravidade (alta, média ou baixa) e sugestão de redação. Peça que separe o que está no documento do que é opinião, e que diga "não encontrei" quando não houver base. Respostas estruturadas são mais fáceis de conferir.

**3. Verifique toda fonte.** Modelos de linguagem podem produzir citações plausíveis e falsas: artigo de lei errado, número de processo inexistente, ementa inventada. Regra: nenhum dispositivo, precedente ou número sai do seu e-mail sem você ter aberto a fonte oficial (Planalto, site do tribunal, CVM). Use a IA para achar o caminho e redigir; a conferência é sua.

**4. Proteja o sigilo.** O Código de Ética e Disciplina da OAB (Resolução 02/2015 do Conselho Federal) trata do sigilo profissional nos arts. 35 a 38: o advogado deve guardar sigilo sobre os fatos que conhece no exercício da profissão. O Estatuto da Advocacia (Lei 8.906/1994, art. 34, VII) prevê como infração disciplinar violar o sigilo sem justa causa. Colar a minuta de um cliente numa ferramenta pública que pode usar os dados para treinamento é um risco real. Use só as ferramentas aprovadas pelo escritório, com contrato que proíba o uso dos dados para treino. Na dúvida, anonimize: troque nomes, valores e datas por marcadores como [VENDEDORA] e [PREÇO]. Em M&A há ainda o NDA da operação e, se houver companhia aberta, as regras sobre informação privilegiada.

### O que a OAB já disse
Em 11/11/2024, o Conselho Federal da OAB aprovou a Recomendação nº 001/2024 sobre o uso de IA generativa na prática jurídica. Ela é uma orientação, não uma norma que cria infrações novas. Organiza-se em quatro eixos: legislação aplicável, confidencialidade e privacidade, prática ética e comunicação ao cliente sobre o uso. Em resumo: a IA é apoio, o julgamento continua sendo do advogado, as ferramentas devem proteger os dados inseridos e o cliente deve ser informado. Em maio de 2026, a 1ª Turma do Tribunal de Ética e Disciplina da OAB SP também publicou diretrizes éticas sobre o tema (verificar a ementa).

### Onde a IA mais ajuda
Primeira versão de checklists de due diligence, resumo de documentos longos, comparação entre versões de minuta, tradução técnica, perguntas para preparar uma reunião e revisão de português. Onde ela mais erra: citação de fontes, cálculo e conclusões jurídicas sem base no material fornecido.

## Exemplo
**Pedido fraco:** "Resuma este contrato."

**Pedido forte:** "Você é associado de M&A do lado comprador. Abaixo está a cláusula de indenização de um SPA, com nomes trocados por marcadores. Monte uma tabela com: (1) gatilho da indenização, (2) limite (cap), (3) franquia (basket), (4) prazo de sobrevivência, (5) o que falta em relação a um padrão pró-comprador. Cite o trecho exato da cláusula em cada linha. Se algum item não estiver no texto, escreva 'não consta'. Não cite lei nem jurisprudência."

O segundo pedido tem papel, objetivo, formato, regra contra invenção e material anonimizado. A conferência fica fácil: cada linha aponta o trecho de origem.

## No seu trabalho
**Exercício (20 minutos, com uma minuta já pública ou anonimizada):**
1. Escolha uma cláusula real que você revisou nesta semana e troque nomes, valores e datas por marcadores.
2. Escreva o pedido fraco e o pedido forte, com os cinco elementos: papel, objetivo, público, formato e regra contra invenção.
3. Rode os dois na ferramenta aprovada pelo escritório e compare: qual resposta você conseguiria mandar ao sócio com menos edição?
4. Confira cada afirmação da melhor resposta no texto da cláusula. Anote quantas estavam erradas ou sem base.
5. Guarde o pedido forte num arquivo de modelos. Na próxima semana, reutilize-o e ajuste.

## Quiz

### Qual pedido tende a gerar a resposta mais útil para revisar um SPA?
- [ ] "Analise este contrato."
- [ ] "Diga se o contrato é bom."
- [x] Um pedido com papel, objetivo, formato de tabela, trecho citado e instrução para dizer "não consta"
- [ ] Um pedido curto em inglês, porque a IA entende melhor
> Contexto e estrutura reduzem respostas genéricas e facilitam a conferência linha a linha.

### Onde o Código de Ética e Disciplina da OAB trata do sigilo profissional?
- [ ] Arts. 1º a 5º
- [x] Arts. 35 a 38
- [ ] Art. 254-A
- [ ] Não trata do tema
> O capítulo do sigilo profissional está nos arts. 35 a 38 da Resolução 02/2015. O art. 254-A é da Lei das S.A., sobre tag along.

### Qual é a natureza da Recomendação nº 001/2024 do Conselho Federal da OAB sobre IA?
- [ ] Lei federal aprovada pelo Congresso
- [x] Orientação para o uso ético da IA generativa, sem criar infrações novas
- [ ] Proibição do uso de IA por advogados
- [ ] Norma do CNJ para juízes
> É uma recomendação: orienta sobre confidencialidade, ética e comunicação ao cliente, mas os deveres de sigilo já existiam no Código de Ética e no Estatuto.

### A IA citou um precedente do STJ que sustenta sua tese. O que fazer?
- [ ] Usar, porque a IA foi treinada com decisões reais
- [ ] Usar, desde que a ementa pareça coerente
- [x] Abrir o precedente na fonte oficial antes de usar
- [ ] Pedir à IA que confirme se o precedente existe
> Modelos podem inventar precedentes plausíveis, e perguntar ao próprio modelo não é verificação.

## Flashcards
- Cinco elementos de um bom pedido à IA :: Papel, objetivo, público, formato da entrega e regra contra invenção
- Sigilo no Código de Ética da OAB :: Arts. 35 a 38 da Resolução 02/2015 do Conselho Federal
- Violação de sigilo no Estatuto da Advocacia :: Infração disciplinar prevista no art. 34, VII, da Lei 8.906/1994
- Recomendação CFOAB nº 001/2024 :: Orientação de 11/11/2024 sobre IA generativa: legislação, confidencialidade, ética e comunicação ao cliente
- Anonimizar antes de colar :: Trocar nomes, valores e datas por marcadores como [VENDEDORA] e [PREÇO]

## Explique
Explique para um colega que entrou no escritório esta semana, em até 6 linhas, por que ele não deve colar a minuta de um cliente num chat de IA gratuito e o que ele deve fazer em vez disso.
### Pontos-chave
- Dever de sigilo profissional (Código de Ética, arts. 35 a 38; Estatuto, art. 34, VII)
- Risco de a ferramenta guardar ou usar os dados para treinamento
- NDA da operação e confidencialidade do cliente
- Usar só ferramentas aprovadas pelo escritório, com contrato adequado
- Anonimizar quando possível e revisar tudo o que a IA produzir
### Resposta modelo
O advogado tem dever de sigilo sobre o que sabe do cliente, e violar esse sigilo sem justa causa é infração disciplinar. Ferramentas gratuitas podem guardar o que você cola e, dependendo dos termos, usar os dados para treinar modelos. Além disso, quase toda operação de M&A tem NDA. Então use só as ferramentas que o escritório aprovou, com contrato que proíbe uso dos dados para treino. Se precisar testar algo fora delas, troque nomes, valores e datas por marcadores. E confira tudo o que a IA devolver antes de mandar para alguém.

## Verificar
- Redação exata dos arts. 35 a 38 do Código de Ética e Disciplina da OAB e do art. 34, VII, da Lei 8.906/1994 (os sites oficiais não puderam ser abertos nesta sessão; conteúdo confirmado por fontes secundárias).
- Ementa e alcance das diretrizes da 1ª Turma do TED da OAB SP sobre IA (maio de 2026).
- Item exato da Recomendação 001/2024 que trata da comunicação prévia ao cliente (fontes secundárias citam números diferentes).

## Fontes
- [Lei 8.906/1994 (Estatuto da Advocacia), art. 34, VII](https://www.planalto.gov.br/ccivil_03/leis/l8906.htm) — infração por violação de sigilo
- [Código de Ética e Disciplina da OAB (Resolução CFOAB 02/2015), cópia publicada pela OAB Goiás](https://www.oabgo.org.br/wp-content/uploads/2024/04/codigodeeticarevnv.pdf) — arts. 35 a 38, sigilo profissional
- [OAB Nacional, OAB aprova recomendações para uso de IA na prática jurídica (11/11/2024)](https://www.oab.org.br/noticia/62704/oab-aprova-recomendacoes-para-uso-de-ia-na-pratica-juridica)
- [OAB Nacional, versão final da recomendação do CFOAB sobre IA](https://www.oab.org.br/noticia/62711/confira-versao-final-da-recomendacao-do-cfoab-sobre-o-uso-de-ia-na-pratica-juridica)
- [OAB SP, TED define diretrizes éticas para o uso de IA na advocacia (maio/2026)](https://www.oabsp.org.br/jornaldaadvocacia/26-05-14-1720-ted-da-oab-sao-paulo-define-diretrizes-eticas-para-o-uso-de-inteligencia-artificial-na-advocacia)
