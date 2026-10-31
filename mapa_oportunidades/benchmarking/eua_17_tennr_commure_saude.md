# EUA 17: Tennr e Commure/Athelas (operações e ciclo de receita em saúde com IA)
Última atualização: 31/10/2026 | Pesquisador: agente benchmarking EUA (rodada 2)

> Nota de método: números confirmados no conteúdo dos resultados de busca; páginas não abertas por restrição de rede.

## Problema que resolve
- **Tennr:** nos EUA, encaminhamentos de pacientes (para exames de imagem, home care, equipamentos médicos) chegam por fax e PDFs desorganizados; muitos se perdem ("buraco negro do encaminhamento"). A Tennr lê os documentos com IA, extrai dados, verifica elegibilidade e agenda. Processava cerca de 10 milhões de documentos por mês na Série C (agregador [4]).
- **Commure/Athelas:** ciclo de receita (RCM) de hospitais e clínicas: codificação, cobrança a seguradoras, glosas e recursos, além de scribe e automação operacional.

## Modelo de negócio e como ganha dinheiro
**ANÁLISE (com base nos dados):** Tennr cobra por plataforma e volume de documentos processados. No RCM, o padrão americano é cobrar um percentual da receita recuperada ou cobrada (tipicamente alguns pontos percentuais), alinhando o preço ao resultado. Preços exatos: não encontrei fonte confiável.

## Velocidade de crescimento e investimento (DADO)
**Tennr**
- Série A de US$ 18 milhões (mar/2024) [DADO ANTIGO], Série B de US$ 37 milhões (out/2024) [DADO ANTIGO], Série C de US$ 101 milhões liderada pela IVP, com a16z e Lightspeed, valuation de US$ 605 milhões (18/06/2025; Fierce Healthcare [1]; MobiHealthNews [2]).
- Receita de "oito dígitos", cerca de 3x a da Série B (agregador, baixa confiabilidade [4]).

**Commure/Athelas**
- US$ 70 milhões a valuation pós-money de US$ 7 bilhões, liderado pela General Catalyst, com Sequoia, Morgan Stanley IM e Kirkland & Ellis (19/05/2026; Athelas [5]; MobiHealthNews [6]).
- Mais de US$ 200 milhões de ARR contratado, dobrando por três anos seguidos (declaração da empresa citada em [5][7]).

## Já existe no Brasil?
**DADO:**
- Rede Mater Dei implantou agentes de IA com a consultoria A3Data, com retorno de 517% sobre o investimento via redução de glosas e antecipação de receita, e cerca de 12 agentes em desenvolvimento para o ciclo de receita (Baguete [8]).
- Marisa.Care: agentes de IA para operações hospitalares, pré-seed de R$ 8 milhões liderado pela Afya (ago/2025), presente em 14 redes privadas e no SUS (Baguete [9]).
- GHAS investiu R$ 8 milhões em IA para eficiência hospitalar (Diário do Comércio [10], data não confirmada).
- Não encontrei startup brasileira focada em glosas com aporte em 2025/2026 (busca dedicada).

**ANÁLISE (por que não replicou):**
1. No Brasil o fluxo é TISS/TUSS (padrão ANS), mais padronizado que o caos de fax americano; a dor de encaminhamento é menor, mas a de glosa é enorme.
2. Hospitais e clínicas compram devagar e terceirizam faturamento para empresas de auditoria médica tradicionais.
3. Operadoras usam a glosa como instrumento de caixa; o conflito prestador x operadora é estrutural, o que gera demanda, mas também ciclos longos de venda.

## Viabilidade de tropicalizar (ANÁLISE)
| Fator | Nota | Justificativa |
|---|---|---|
| Renda | 4 | Hospitais e clínicas faturam alto; glosa é dinheiro perdido mensurável. |
| Crédito | 4 | Não depende (antecipação de recebíveis é um adicional possível). |
| Tributação | 3 | Reforma traz regime específico para saúde; neutra a levemente positiva. |
| Regulação | 3 | ANS, TISS, LGPD com dados sensíveis; exige cuidado mas não licença. |
| Logística | 5 | Digital. |
| Comportamento | 3 | Gestores conservadores, mas pagam por resultado (percentual da glosa recuperada). |
| Tamanho de mercado | 4 | Saúde suplementar grande e com glosas relevantes (valor a confirmar com ANS/ANAHP). |
| **Geral** | **4** | Recuperação de glosas e faturamento com IA, cobrando por resultado, é muito aderente ao Brasil. |

## Defensabilidade na era da IA
Média a alta. Fosso: conhecimento das regras de cada operadora, histórico de glosas e recursos, integração com sistemas hospitalares (MV, Tasy, etc.) e contrato por sucesso. IA genérica não conhece as tabelas e contratos específicos.

## Encaixe para o Felipe
Alto para começar como serviço: "recuperação de glosas com IA para clínicas e hospitais médios", cobrando percentual do valor recuperado, com um sócio auditor ou faturista experiente. Capital baixo, venda consultiva, primeira receita em poucos meses. Ciclo de venda em hospital é o principal risco; clínicas de imagem, oncologia e laboratórios podem ser mais rápidos.

## Fontes
1. Fierce Healthcare, "Tennr clinches $101M to build out AI that automates patient referral workflows", 18/06/2025. https://fiercehealthcare.com/health-tech/tennr-clinches-101m-build-out-ai-automates-patient-referral-workflows
2. MobiHealthNews, "Tennr raises $101M to automate referrals, hits $605M valuation", jun/2025. https://mobihealthnews.com/news/tennr-raises-101m-automate-referrals-hits-605m-valuation
3. Fortune, "Tennr health tech AI patient referral... Series C", 18/06/2025. https://fortune.com/2025/06/18/tennr-health-tech-ai-patient-referral-ivp-a16z-lightspeed-iconiq-series-c
4. NeuronFeed, perfil Tennr (agregador, baixa confiabilidade). https://neuronfeed.com/startups/tennr
5. Athelas, "Athelas Raises $70M at $7B Valuation to Transform Healthcare Operations Using AI", mai/2026. https://www.athelas.com/tbh/athelas-raises-70m-at-7b-valuation-to-transform-healthcare-operations-using-ai
6. MobiHealthNews, "Commure raises $70M, boosting post-money valuation to $7B", mai/2026. https://mobihealthnews.com/news/commure-raises-70m-boosting-post-money-valuation-7b
7. Healthcare IT Today, "Commure Raises $70M at $7B Valuation...", 05/06/2026. https://www.healthcareittoday.com/2026/06/05/commure-raises-70m-at-7b-valuation-to-transform-healthcare-operations-using-ai/
8. Baguete, "Rede Mater Dei implanta agentes com A3Data". https://www.baguete.com.br/noticias/rede-mater-dei-implanta-agentes-com-a3data
9. Baguete, "Marisa Care capta R$ 8 milhões com Afya", ago/2025. https://www.baguete.com.br/noticias/marisa-care-capta-r-8-milhoes-com-afya
10. Diário do Comércio, "GHAS investe R$ 8 milhões e aposta em IA". https://diariodocomercio.com.br/negocios/ghas-investe-r-8-milhoes-aposta-ia/
