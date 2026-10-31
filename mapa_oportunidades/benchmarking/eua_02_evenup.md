# EUA 02: EvenUp (IA para escritórios de danos pessoais, "pre-litigation as a service")
Última atualização: 31/10/2026 | Pesquisador: agente benchmarking EUA

> Nota de método: WebFetch bloqueado pela política de rede nesta sessão; números confirmados no conteúdo dos resultados de busca das páginas citadas. Dados do Brasil não verificados (limite de buscas atingido).

## Problema que resolve
Escritórios de "personal injury" (danos pessoais, acidentes) nos EUA trabalham por êxito e precisam montar "demand letters" (cartas de cobrança à seguradora) com prontuários médicos, cálculo de danos e precedentes. É trabalho manual, lento e feito por paralegais. EvenUp automatiza a leitura de prontuários, o cálculo do valor do caso e a redação da carta, e passou a oferecer o pré-contencioso como serviço.

## Modelo de negócio e como ganha dinheiro
- Cobrança por documento/caso e por assinatura de plataforma (ANÁLISE: preço exato não público; não encontrei fonte confiável).
- Lançou "Pre-Litigation as a Service (PLAAS)", ou seja, vende o resultado do trabalho e não só o software (DADO, EvenUp blog [5]). É um exemplo puro da tese "services as software".
- Lançou agentes de gestão médica e de comunicação com clientes (EvenUp blog [6]).

## Velocidade de crescimento (DADO)
- Mais de 2.000 escritórios clientes, incluindo 20% dos 100 maiores escritórios de danos pessoais dos EUA (EvenUp, out/2025 [1]).
- ARR "dobrando ano contra ano", sem valor em dólar divulgado (autodeclarado, EvenUp, out/2025 [1]).
- Volume na plataforma quase dobrou em seis meses, para 10.000 casos por semana (Crunchbase News, out/2025 [3]).
- Mais de 200.000 casos resolvidos e mais de US$ 10 bilhões em indenizações obtidas, número posteriormente atualizado para US$ 14 bilhões (autodeclarado [1]).
- Em out/2024 vendia para mais de 1.000 escritórios (Bloomberg [4]) [DADO ANTIGO].

## Investimento, investidores e valuation (DADO)
- Série D: US$ 135 milhões, valuation acima de US$ 1 bilhão (out/2024, Bloomberg [4]) [DADO ANTIGO].
- Série E: US$ 150 milhões, valuation acima de US$ 2 bilhões, liderada por Bessemer, com REV (braço de VC da RELX/LexisNexis), B Capital, SignalFire, Lightspeed, HarbourVest, Adams Street e Broadlight. Total captado: US$ 385 milhões (07/10/2025, Bloomberg Law [2] e Fortune [7]).

## Já existe no Brasil?
- Não verificado nesta rodada. Há legaltechs de contencioso de massa e jurimetria no Brasil (exemplos conhecidos: plataformas de gestão de contencioso para departamentos jurídicos de bancos e varejistas; startups de "acordos" e indenização a passageiros aéreos). Não confirmei tração nem rodadas com fonte.
- ANÁLISE: o equivalente brasileiro não é "personal injury" (que lá é movido a seguro de responsabilidade civil e júri), e sim o contencioso de massa: ações consumeristas, trabalhistas, previdenciárias (INSS) e DPVAT/seguros. Do lado do autor, há milhares de escritórios pequenos que vivem de êxito em causas repetitivas (previdenciário, trabalhista, consumidor). Do lado do réu, bancos, telecom e varejo pagam escritórios terceirizados por volume.
- Por que não foi replicado: honorários baixos por caso, judiciário que resolve por sentença (menos "demand letter" negociada com seguradora), e cultura de escritórios pequenos com pouca disposição a pagar software. Ainda assim, a lógica de "IA monta a peça a partir de documentos e calcula o valor" é diretamente aplicável a previdenciário (cálculo de benefício, CNIS) e trabalhista (cálculo de verbas).

## Viabilidade de tropicalizar (ANÁLISE)
| Fator | Nota | Justificativa |
|---|---|---|
| Renda | 3 | Ticket por caso menor que nos EUA, mas volume altíssimo. |
| Crédito | 4 | Não depende de crédito; escritório paga por peça. |
| Tributação | 3 | Neutro; atenção à reforma (CBS/IBS sobre serviços). |
| Regulação | 3 | OAB proíbe captação de clientela e exercício por não advogado; vender ferramenta ou peça para o advogado assinar é permitido, mas "serviço jurídico" direto ao cliente final não. |
| Logística | 5 | Digital. |
| Comportamento | 3 | Advogado pequeno é sensível a preço, mas compra o que aumenta produção (modelo por peça ajuda). |
| Tamanho de mercado | 5 | Volume de processos e de advogados no Brasil é muito grande (40,9 milhões de casos novos em 2025 segundo o CNJ; ver [setores/23_prof_juridico.md](../setores/23_prof_juridico.md)). |
| **Geral** | **4** | Um dos modelos mais tropicalizáveis do benchmarking, se focado em nicho (previdenciário ou trabalhista). |

## Defensabilidade na era da IA
Gerar uma peça com IA é copiável em semanas. O que defende: (1) dados de desfecho (quanto cada tipo de caso rende, por vara/tribunal) que melhoram a precificação; (2) integração com fontes de documentos (prontuários lá; CNIS, holerites, PJe aqui); (3) controle de qualidade com humanos (advogados revisores) e responsabilidade pelo resultado; (4) base instalada e marca entre escritórios. No Brasil, jurimetria por vara e cálculo correto (previdenciário é complexo) seriam o fosso.

## Encaixe para o Felipe
Médio a alto. Pode começar como serviço "humano + IA" para um nicho (ex.: peças e cálculos previdenciários para escritórios pequenos), com advogado parceiro e sem time técnico, cobrando por peça. Teste em poucas semanas com 10 escritórios. Riscos: regras da OAB, responsabilidade por erros de cálculo, e concorrência de ferramentas genéricas baratas.

## Fontes
1. EvenUp, "EvenUp Raises $150M Series E at $2B+ Valuation to Redefine Personal Injury Law", out/2025. https://www.evenuplaw.com/blog/evenup-2b-valuation/
2. Bloomberg Law, "AI Legal Tech EvenUp Raises $150 Million at $2 Billion Valuation", 07/10/2025. https://news.bloomberglaw.com/artificial-intelligence/ai-legal-tech-evenup-raises-150-million-at-2-billion-valuation
3. Crunchbase News, "EvenUp, AI Software For Personal Injury Law, Doubles Valuation To $2B...", out/2025. https://news.crunchbase.com/venture/legal-tech-ai-unicorn-evenup-ai-doubles-valuation/
4. Bloomberg, "EvenUp AI Startup for Personal Injury Law Valued at Over $1 Billion", 08/10/2024 [DADO ANTIGO]. https://www.bloomberg.com/news/articles/2024-10-08/ai-startup-for-personal-injury-law-valued-at-over-1-billion
5. EvenUp, "Introducing Pre-Litigation as a Service (PLAAS)". https://www.evenuplaw.com/blog/introducing-pre-litigation-as-a-service-plaas/
6. EvenUp, "EvenUp Unveils Medical Management and AI Communication Agents". https://www.evenuplaw.com/blog/medical-management-ai-communication-agents/
7. Fortune, "Exclusive: EvenUp raises $150 million Series E at $2 billion valuation...", 07/10/2025. https://fortune.com/2025/10/07/exclusive-evenup-raises-150-million-series-e-at-2-billion-valuation-as-ai-reshapes-personal-injury-law/
