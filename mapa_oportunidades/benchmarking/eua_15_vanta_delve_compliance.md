# EUA 15: Vanta e Delve (compliance e certificações de segurança automatizados)
Última atualização: 31/10/2026 | Pesquisador: agente benchmarking EUA (rodada 2)

> Nota de método: números confirmados no conteúdo dos resultados de busca; páginas não abertas por restrição de rede.

## Problema que resolve
Para vender a empresas maiores, startups e empresas de software precisam provar segurança (SOC 2, ISO 27001, HIPAA, GDPR). O processo manual leva meses, exige consultoria cara e coleta de evidências em dezenas de sistemas. Vanta conecta-se aos sistemas da empresa (nuvem, RH, código) e coleta evidências automaticamente; Delve usa agentes de IA que coletam evidências, escrevem relatórios e atualizam registros de auditoria (TMCnet [6]).

## Modelo de negócio e como ganha dinheiro
**DADO/ANÁLISE:** assinatura anual (SaaS), com preço por framework e porte da empresa; parcerias com auditoras que emitem o relatório. Preços exatos: não encontrei fonte confiável nesta rodada.

## Velocidade de crescimento e investimento (DADO)
**Vanta**
- Série C de US$ 150 milhões a US$ 2,45 bilhões (jul/2024, TechCrunch [2]) [DADO ANTIGO].
- Série D de US$ 150 milhões a cerca de US$ 4,15 bilhões em 2025 (agregadores [3]; investidor líder não confirmado).
- ARR acima de US$ 300 milhões em abr/2026, triplicando em dois anos (Fortune, 29/04/2026 [1]). Número de clientes conflitante entre fontes (8 mil a 16 mil).

**Delve (Y Combinator)**
- Seed de US$ 3 milhões (jan/2025) e Série A de US$ 32 milhões a valuation de US$ 300 milhões, liderada pela Insight Partners, jul/2025 (Delve [4]; Fintech Global [5]). O valuation do seed não aparece nas fontes, então a alta entre as rodadas não foi calculada.

## Já existe no Brasil?
**DADO:**
- DPOnet: automação de LGPD via SaaS, aporte seed de R$ 6 milhões (Startupi [7]; data da rodada não confirmada).
- Imara Trust: plataforma de compliance para SOC 2, ISO 27001 e LGPD feita para empresas no Brasil (página de lançamento [8]; sem dado de aporte).
- Privacy Tools: software de LGPD com clientes como Sancor Seguros [9].
- ANPD transformada em agência reguladora pela Lei 15.352/2026, o que deve aumentar o gasto com LGPD (Estado de Minas, jul/2026 [10]).

**ANÁLISE (por que não replicou em escala):**
1. Menos startups de software B2B vendendo para enterprise americano; a demanda por SOC 2 é menor.
2. LGPD foi tratada como projeto jurídico pontual (escritórios e consultorias), não como monitoramento contínuo.
3. Exigências brasileiras relevantes são setoriais (Bacen 4.893 para instituições financeiras, ANS, ANPD) e mudam a cada órgão, o que fragmenta o produto.

## Viabilidade de tropicalizar (ANÁLISE)
| Fator | Nota | Justificativa |
|---|---|---|
| Renda | 3 | Médias empresas pagam, mas com ticket menor que nos EUA. |
| Crédito | 4 | Não depende. |
| Tributação | 4 | Neutra. |
| Regulação | 5 | Regulação cria a demanda (LGPD, ANPD agência, Bacen, PIX, ANS, Marco de IA em discussão). |
| Logística | 5 | Digital. |
| Comportamento | 3 | Empresas fazem o mínimo até haver fiscalização ou exigência de cliente. |
| Tamanho de mercado | 3 | Menor que nos EUA; cresce com fintechs, healthtechs e fornecedores de grandes empresas. |
| **Geral** | **3,5** | Bom encaixe em nichos regulados (fintechs/correspondentes, clínicas, fornecedores de bancos). |

## Defensabilidade na era da IA
Média. Integrações e parcerias com auditoras são o fosso; mas agentes de IA reduzem o custo de construir a ferramenta (a Delve mostra isso). No Brasil, o fosso seria conhecer as normas setoriais locais e ter rede de auditores e DPOs parceiros.

## Encaixe para o Felipe
Médio. Possível começar como serviço "DPO como serviço" ou "compliance contínuo com IA" para um nicho (ex.: fintechs pequenas, correspondentes bancários, clínicas), com advogado ou especialista em segurança sócio, usando ferramentas existentes. Produto próprio exige time técnico.

## Fontes
1. Fortune, "Exclusive: Vanta ARR $300 million", 29/04/2026. https://www.fortune.com/2026/04/29/exclusive-vanta-arr-300-million-sequoia-shadow-ai-claude-cursor/
2. TechCrunch, "Trust management platform Vanta raises $150M Series C, now valued at $2.45B", 24/07/2024 [DADO ANTIGO]. https://techcrunch.com/2024/07/24/trust-management-platform-vanta-raises-150m-series-c-now-valued-at-2-45b
3. Komo, "Vanta funding" (agregador). https://komo.ai/directory/vanta-funding
4. Delve, "Series A". https://www.delve.co/blog/series-a
5. Fintech Global, "Delve secures $32m to automate compliance processes", 25/07/2025. https://fintech.global/2025/07/25/delve-secures-32m-to-automate-compliance-processes/
6. TMCnet, "Delve raises 32 million to build AI agents that automate compliance workflows", jul/2025. https://blog.tmcnet.com/blog/rich-tehrani/ai/delve-raises-32-million-to-build-ai-agents-that-automate-compliance-workflows.html
7. Startupi, "Startup que automatiza a implementação e gestão da LGPD capta R$ 6 milhões". https://startupi.com.br/startup-que-automatiza-a-implementacao-e-gestao-da-lgpd-capta-r-6-milhoes/
8. Hunted.space, "Imara Trust". https://hunted.space/product/imara-trust
9. Privacy Tools, "Sancor Seguros in compliance with LGPD with Privacy Tools". https://privacytools.com.br/en/?p=11962
10. Estado de Minas, "Every Cybersecurity projeta crescimento de 667% em 2027", jul/2026. https://www.em.com.br/mundo-corporativo/2026/07/amp/7469352-every-cybersecurity-projeta-crescimento-de-667-em-2027.html
