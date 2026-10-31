# Fase 1. Triagem de setores

Data: 31/10/2026 | 52 subsetores avaliados | Detalhes, dados e fontes de cada um em [`setores/`](setores/)

## 1. Como ler esta triagem

**Método (premissas adotadas)**
- Cada subsetor recebeu 8 notas de 1 a 5. Em todas, **5 significa mais favorável para um empreendedor novo com capital limitado**. Assim, nota 5 em "capital" significa que exige pouco capital, nota 5 em "juros" significa pouca sensibilidade a juros e consumo, nota 5 em "digitalização" significa setor pouco digitalizado (mais espaço), e nota 5 em "regulação" significa barreira baixa para quem entra vendendo serviço ou software ao setor.
- A nota final é a média simples das 8 notas. Empates foram desfeitos pela média de quatro critérios mais ligados ao perfil do Felipe (capital, juros, digitalização e tendências), coluna "Desempate".
- Setores pesados (indústria, construção, saneamento, frota) foram avaliados **como mercado-alvo para venda de serviço ou software**, não como negócio a operar. Por isso alguns aparecem com nota de capital 4: a nota vale para quem vende para eles, não para quem opera neles.
- As notas são **ANÁLISE**. Os dados que as sustentam estão em cada arquivo de subsetor, com fonte e data.

**Limitação importante sobre as fontes.** Durante a pesquisa, a rede desta sessão bloqueou a abertura de páginas (WebFetch) para quase todos os sites, inclusive gov.br, bcb.gov.br, ibge.gov.br e grandes jornais. Todos os números foram confirmados no conteúdo exibido pelos resultados de busca, com o link da página que traz o número, mas as páginas não foram abertas na íntegra. Cada arquivo traz esse aviso. Recomendo reconferir na fonte primária os números que forem usados em decisão de investimento ou em material para terceiros.

**Viés conhecido da rubrica (ANÁLISE).** A rubrica premia fragmentação e baixa digitalização. Isso favorece setores com muitos clientes pequenos, que também costumam ter ticket baixo, churn alto e pouca disposição a pagar. A Fase 2 corrige isso olhando dor por dor, com disposição a pagar, defensabilidade e canal de venda.

## 2. Contexto macro em 10 linhas (DADO, detalhes em [`capital/panorama_macro.md`](capital/panorama_macro.md))
- Selic em **13,75%** desde 16/09/2026, depois de ficar em 15% até março de 2026 ([Poder360](https://www.poder360.com.br/poder-economia/copom-reduz-selic-para-1375-ao-ano/)). Focus de 26/10/2026 (coletado antes do 2º turno): Selic de 13,25% no fim de 2026 e 11,75% no fim de 2027 ([Money Times](https://www.moneytimes.com.br/economistas-cortam-inflacao-e-selic-em-novas-projecoes-veja-o-focus-desta-segunda-feira-26/)).
- PIB cresceu 3,4% em 2024 e 2,3% em 2025; no 2º trimestre de 2026 cresceu 0,5% sobre o trimestre anterior, com consumo das famílias caindo 0,4% ([IBGE](https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/45968-pib-cresce-2-3-em-2025-e-fecha-o-ano-em-r-12-7-trilhoes); [B3 Bora Investir](https://borainvestir.b3.com.br/noticias/pib-do-brasil-cresce-05-no-segundo-trimestre-mostra-ibge/)).
- Crédito livre em agosto de 2026: 61,7% a.a. para pessoa física e 24,2% a.a. para empresas ([Agência Brasil](https://agenciabrasil.ebc.com.br/economia/noticia/2026-09/juros-para-familias-sobem-em-agosto-e-inadimplencia-chega-6)). Endividamento das famílias em recorde ([Poder360](https://www.poder360.com.br/poder-economia/endividamento-das-familias-atinge-maxima-historica-diz-bc/)).
- Desemprego de 5,2% no 3º trimestre de 2026, o menor para o período desde 2012 ([IBGE](https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/48411-30-10-noticia-2)).
- Lula reeleito em 25/10/2026; no dia seguinte o Ibovespa caiu 13,88% e o dólar subiu 8,21%, para R$ 5,40 ([TSE](https://www.tse.jus.br/comunicacao/noticias/2026/Outubro/presidente-do-tse-anuncia-reeleicao-de-lula-e-faz-balanco-do-2o-turno-das-eleicoes-2026); [Agência Brasil](https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/dolar-sobe-821-e-bolsa-cai-1388-apos-reeleicao-de-lula)).
- Reforma tributária: 2026 é ano de teste (CBS 0,9% e IBS 0,1%, sem cobrança efetiva para quem cumpre obrigações acessórias); cobrança real começa em 2027; split payment gradual; transição até 2033 ([LC 214/2025](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm); [Agência Brasil](https://agenciabrasil.ebc.com.br/economia/noticia/2026-04/reforma-tributaria-governo-regulamenta-cobranca-da-cbs-e-do-ibs)).
- Envelhecimento: população com 60+ passa de 15,6% (2023) para 37,8% (2070) [DADO ANTIGO, projeção IBGE de ago/2024, ainda vigente] ([IBGE](https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/41056-populacao-do-pais-vai-parar-de-crescer-em-2041)).
- Regional: o Centro-Oeste teve a maior alta do PIB em 2023 (7,6%) e o Sudeste perdeu participação ([IBGE, Contas Regionais 2023](https://agenciadenoticias.ibge.gov.br/pt/agencia-noticias/45142-pib-cresce-em-todos-os-27-estados-do-pais-em-2023.html?lang=pt-BR)).

**ANÁLISE.** O cenário pune quem depende de crédito, estoque ou consumo financiado de pessoa física e premia quem vende eficiência, conformidade e recuperação de receita para empresas, com receita recorrente paga pelo próprio cliente.

## 3. Ranking dos 52 subsetores
