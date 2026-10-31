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
| # | Subsetor | Grupo | Cresc. | Margem | Concorr. | Capital | Juros | Digit. | Regul. | Tend. | Média | Desempate* |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [Saúde: Cuidado de idosos (ILPIs, home care, cuidadores e economia prateada)](setores/15_saude_cuidado_idosos.md) | Saúde | 5 | 3 | 4 | 4 | 4 | 5 | 3 | 5 | **4,13** | 4,50 |
| 2 | [BPO financeiro e backoffice terceirizado para PMEs](setores/25_prof_bpo_backoffice_pme.md) | Serviços profissionais | 4 | 3 | 4 | 5 | 3 | 4 | 5 | 5 | **4,13** | 4,25 |
| 3 | [Educação corporativa e qualificação profissional (requalificação, cursos livres, mão de obra técnica, IA)](setores/46_educacao_corporativa_qualificacao.md) | Educação | 4 | 4 | 3 | 5 | 3 | 3 | 5 | 5 | **4,00** | 4,00 |
| 4 | [Agro: hortifruti e frescos (cadeia de perecíveis, Ceasas, perdas)](setores/06_agro_hortifruti_frescos.md) | Agro | 3 | 2 | 4 | 5 | 4 | 5 | 4 | 4 | **3,88** | 4,50 |
| 5 | [Contabilidade (escritórios contábeis, reforma tributária CBS/IBS, split payment, IA)](setores/22_prof_contabilidade.md) | Serviços profissionais | 3 | 3 | 4 | 5 | 4 | 3 | 4 | 5 | **3,88** | 4,25 |
| 6 | [Automotivo pós-venda: oficinas independentes, autopeças, frota circulante e seminovos](setores/43_automotivo_posvenda.md) | Varejo e consumo | 3 | 3 | 4 | 4 | 4 | 5 | 4 | 4 | **3,88** | 4,25 |
| 7 | [Condomínios e facilities: administração de condomínios, síndicos profissionais, facilities, manutenção predial](setores/31_imob_condominios_facilities.md) | Construção e imobiliário | 3 | 3 | 3 | 5 | 5 | 3 | 4 | 4 | **3,75** | 4,25 |
| 8 | [Energia: geração distribuída solar, mercado livre (abertura para baixa tensão), comercializadoras, eficiência energética](setores/32_energia_gd_mercado_livre.md) | Energia, saneamento e telecom | 4 | 3 | 3 | 4 | 4 | 4 | 3 | 5 | **3,75** | 4,25 |
| 9 | [Saúde: Clínicas médicas independentes, consultórios e clínicas populares (mercado-alvo de serviço e software)](setores/10_saude_clinicas_consultorios.md) | Saúde | 4 | 3 | 3 | 5 | 3 | 3 | 4 | 5 | **3,75** | 4,00 |
| 10 | [Fitness e bem-estar: academias, estúdios, agregadores corporativos e saúde mental](setores/42_fitness_bem_estar.md) | Varejo e consumo | 4 | 3 | 3 | 5 | 3 | 3 | 4 | 5 | **3,75** | 4,00 |
| 11 | [Serviços domésticos e autônomos (MEIs, prestadores residenciais, diaristas, eletricistas, marketplaces de serviços)](setores/52_servicos_domesticos_e_autonomos.md) | Setor público, indústria e outros | 3 | 3 | 4 | 5 | 3 | 4 | 4 | 4 | **3,75** | 4,00 |
| 12 | [Saúde: Farmácias e drogarias (redes, independentes, associativismo e manipulação)](setores/14_saude_farmacias.md) | Saúde | 4 | 2 | 3 | 4 | 5 | 3 | 4 | 4 | **3,63** | 4,00 |
| 13 | [Seguros e insurtech (SUSEP, CNseg, penetração, corretores, Open Insurance)](setores/20_fin_seguros_insurtech.md) | Serviços financeiros | 3 | 4 | 3 | 4 | 4 | 4 | 3 | 4 | **3,63** | 4,00 |
| 14 | [Cobrança e recuperação de crédito (inadimplência de famílias e empresas, renegociação, Desenrola, NPL)](setores/21_fin_cobranca_recuperacao.md) | Serviços financeiros | 4 | 3 | 3 | 4 | 5 | 3 | 3 | 4 | **3,63** | 4,00 |
| 15 | [Reciclagem, resíduos e economia circular (PNRS, logística reversa, cooperativas, crédito de reciclagem)](setores/51_reciclagem_residuos_economia_circular.md) | Setor público, indústria e outros | 4 | 2 | 4 | 3 | 4 | 4 | 3 | 5 | **3,63** | 4,00 |
| 16 | [Agro: rastreabilidade, EUDR, carbono e certificações](setores/08_agro_rastreabilidade_esg.md) | Agro | 4 | 4 | 3 | 4 | 3 | 3 | 4 | 4 | **3,63** | 3,50 |
| 17 | [Govtech e serviços públicos (compras públicas, municípios, arrecadação, reforma tributária ISS/IBS)](setores/47_govtech_servicos_publicos.md) | Setor público, indústria e outros | 3 | 4 | 3 | 3 | 4 | 4 | 2 | 5 | **3,50** | 4,00 |
| 18 | [Saúde: Healthtechs e saúde digital (telemedicina, prontuário eletrônico, IA clínica, scribes)](setores/13_saude_healthtechs_digital.md) | Saúde | 4 | 4 | 2 | 4 | 4 | 2 | 3 | 5 | **3,50** | 3,75 |
| 19 | [Telecom: provedores regionais de internet (ISPs), fibra, consolidação, 5G](setores/34_telecom_isps.md) | Energia, saneamento e telecom | 2 | 4 | 3 | 4 | 4 | 3 | 4 | 4 | **3,50** | 3,75 |
| 20 | [Beleza e estética: salões, clínicas de estética, profissionais autônomos e cosméticos](setores/40_beleza_estetica.md) | Varejo e consumo | 3 | 3 | 3 | 5 | 3 | 3 | 4 | 4 | **3,50** | 3,75 |
| 21 | [Agro: crédito rural (Plano Safra, CPR, Fiagro, agfintechs, inadimplência e recuperações judiciais)](setores/05_agro_credito_rural.md) | Agro | 4 | 4 | 3 | 3 | 3 | 3 | 3 | 5 | **3,50** | 3,50 |
| 22 | [Agro: pecuária (bovinos de corte e leite, aves, suínos; frigoríficos como mercado-alvo)](setores/02_agro_pecuaria.md) | Agro | 3 | 2 | 2 | 4 | 3 | 4 | 4 | 5 | **3,38** | 4,00 |
| 23 | [Agro: agroindústria de alimentos e bebidas (como mercado-alvo)](setores/07_agro_agroindustria_alimentos.md) | Agro | 3 | 2 | 3 | 4 | 3 | 3 | 4 | 5 | **3,38** | 3,75 |
| 24 | [Saúde: Hospitais (privados e filantrópicos) como mercado-alvo de serviços e software](setores/09_saude_hospitais.md) | Saúde | 3 | 2 | 3 | 4 | 4 | 3 | 4 | 4 | **3,38** | 3,75 |
| 25 | [Saúde: Laboratórios e medicina diagnóstica (como mercado-alvo de serviços e software)](setores/11_saude_laboratorios_diagnostico.md) | Saúde | 3 | 3 | 2 | 4 | 4 | 3 | 4 | 4 | **3,38** | 3,75 |
| 26 | [Saúde animal e mercado pet (clínicas veterinárias, planos pet, serviços)](setores/17_saude_animal_pet.md) | Saúde | 3 | 3 | 3 | 4 | 3 | 3 | 4 | 4 | **3,38** | 3,50 |
| 27 | [Construção civil: incorporadoras, MCMV, obras de pequeno porte, empreiteiros, mão de obra](setores/28_construcao_civil.md) | Construção e imobiliário | 2 | 3 | 4 | 4 | 2 | 4 | 4 | 4 | **3,38** | 3,50 |
| 28 | [Imobiliário: locação residencial, imobiliárias, proptechs, financiamento SBPE/poupança, short stay](setores/30_imob_incorporacao_locacao.md) | Construção e imobiliário | 4 | 3 | 3 | 4 | 3 | 3 | 3 | 4 | **3,38** | 3,50 |
| 29 | [Turismo e hotelaria: hotéis independentes, pousadas, agências, OTAs e eventos](setores/39_turismo_hotelaria.md) | Varejo e consumo | 3 | 3 | 3 | 4 | 2 | 4 | 4 | 4 | **3,38** | 3,50 |
| 30 | [Saúde: Odontologia (consultórios, clínicas, redes, planos odontológicos e alinhadores) como mercado-alvo](setores/16_saude_odontologia.md) | Saúde | 3 | 3 | 4 | 5 | 2 | 3 | 4 | 3 | **3,38** | 3,25 |
| 31 | [Materiais de construção, reformas, autoconstrução e profissionais autônomos](setores/29_construcao_materiais_reforma.md) | Construção e imobiliário | 2 | 3 | 4 | 4 | 2 | 4 | 5 | 3 | **3,38** | 3,25 |
| 32 | [Jurídico (advocacia, contencioso de massa, lawtechs, IA jurídica)](setores/23_prof_juridico.md) | Serviços profissionais | 4 | 3 | 2 | 4 | 4 | 3 | 2 | 4 | **3,25** | 3,75 |
| 33 | [Transporte rodoviário de cargas (TRC): transportadoras pequenas, caminhoneiros autônomos, frete, CT-e/MDF-e, roubo de cargas](setores/26_log_transporte_cargas.md) | Logística | 2 | 2 | 3 | 4 | 3 | 4 | 4 | 4 | **3,25** | 3,75 |
| 34 | [Saneamento: Marco do Saneamento, SINISA/SNIS, concessões, perdas de água (como mercado-alvo para serviços)](setores/33_saneamento.md) | Energia, saneamento e telecom | 4 | 3 | 3 | 2 | 4 | 4 | 2 | 4 | **3,25** | 3,50 |
| 35 | [Food service B2B: distribuição, compras e fornecedores para restaurantes](setores/38_alimentacao_food_service_b2b.md) | Varejo e consumo | 3 | 2 | 3 | 3 | 3 | 4 | 4 | 4 | **3,25** | 3,50 |
| 36 | [Segurança privada e eletrônica (vigilância, monitoramento, segurança condominial)](setores/48_seguranca_privada_eletronica.md) | Setor público, indústria e outros | 4 | 3 | 3 | 3 | 4 | 3 | 2 | 4 | **3,25** | 3,50 |
| 37 | [Indústria de transformação PME como mercado-alvo (manutenção, compras, qualidade, NR, energia)](setores/49_industria_transformacao_pme.md) | Setor público, indústria e outros | 2 | 3 | 3 | 4 | 2 | 4 | 4 | 4 | **3,25** | 3,50 |
| 38 | [Varejo alimentar: supermercados, atacarejo e mercados de vizinhança](setores/35_varejo_supermercados_alimentar.md) | Varejo e consumo | 2 | 1 | 3 | 4 | 4 | 3 | 4 | 4 | **3,13** | 3,75 |
| 39 | [Agro: insumos (fertilizantes, defensivos, sementes, bioinsumos, revendas agrícolas)](setores/03_agro_insumos.md) | Agro | 3 | 2 | 3 | 4 | 2 | 3 | 4 | 4 | **3,13** | 3,25 |
| 40 | [RH, folha, benefícios e recrutamento (eSocial, trabalho temporário, turnover, CAGED)](setores/24_prof_rh_folha_recrutamento.md) | Serviços profissionais | 3 | 3 | 2 | 4 | 3 | 2 | 4 | 4 | **3,13** | 3,25 |
| 41 | [Educação básica privada (escolas particulares, sistemas de ensino, gestão escolar)](setores/44_educacao_basica_privada.md) | Educação | 2 | 3 | 3 | 4 | 3 | 3 | 4 | 3 | **3,13** | 3,25 |
| 42 | [Moda e vestuário: varejo de moda, concorrência asiática, revenda e segunda mão](setores/41_moda_vestuario.md) | Varejo e consumo | 2 | 3 | 2 | 5 | 2 | 3 | 4 | 3 | **3,00** | 3,25 |
| 43 | [Last mile e logística de e-commerce: entregas urbanas, Correios, Loggi, operadores logísticos, armazenagem](setores/27_log_last_mile_ecommerce.md) | Logística | 4 | 2 | 2 | 4 | 3 | 2 | 4 | 3 | **3,00** | 3,00 |
| 44 | [E-commerce, marketplaces e sellers PME](setores/36_varejo_ecommerce_marketplaces.md) | Varejo e consumo | 4 | 2 | 2 | 4 | 3 | 1 | 4 | 4 | **3,00** | 3,00 |
| 45 | [Mídia, marketing e economia de creators (publicidade digital, agências, social commerce, IA generativa)](setores/50_midia_marketing_creator.md) | Setor público, indústria e outros | 4 | 3 | 2 | 5 | 2 | 1 | 4 | 3 | **3,00** | 2,75 |
| 46 | [Agro: grãos (soja, milho, algodão)](setores/01_agro_graos.md) | Agro | 2 | 2 | 2 | 4 | 2 | 3 | 4 | 4 | **2,88** | 3,25 |
| 47 | [Saúde: Planos de saúde e operadoras (como mercado-alvo de serviços e software)](setores/12_saude_planos_operadoras.md) | Saúde | 3 | 2 | 2 | 3 | 3 | 3 | 3 | 4 | **2,88** | 3,25 |
| 48 | [Alimentação fora do lar: bares, restaurantes independentes, delivery e dark kitchens](setores/37_alimentacao_fora_do_lar.md) | Varejo e consumo | 2 | 1 | 3 | 4 | 2 | 3 | 4 | 4 | **2,88** | 3,25 |
| 49 | [Educação superior e EAD (graduação privada, marco regulatório do EAD, FIES)](setores/45_educacao_superior_ead.md) | Educação | 2 | 4 | 2 | 4 | 2 | 2 | 3 | 3 | **2,75** | 2,75 |
| 50 | [Agro: maquinário agrícola (máquinas, concessionárias, pós-venda, agricultura de precisão)](setores/04_agro_maquinario.md) | Agro | 2 | 2 | 2 | 3 | 1 | 3 | 4 | 3 | **2,50** | 2,50 |
| 51 | [Crédito para PMEs (FIDCs, antecipação de recebíveis, duplicata escritural, Open Finance)](setores/18_fin_credito_pme.md) | Serviços financeiros | 3 | 3 | 2 | 2 | 1 | 2 | 2 | 4 | **2,38** | 2,25 |
| 52 | [Pagamentos (Pix, Pix Automático, Pix Parcelado, adquirência, maquininhas)](setores/19_fin_pagamentos.md) | Serviços financeiros | 3 | 2 | 1 | 2 | 3 | 1 | 2 | 3 | **2,13** | 2,25 |

\* Desempate: média de capital, juros, digitalização e tendências.

### Média por grande setor (ANÁLISE, média simples das médias dos subsetores)
| Grande setor | Média | Nº de subsetores |
|---|---|---|
| Serviços profissionais (contabilidade, jurídico, RH, BPO) | 3,60 | 4 |
| Energia, saneamento e telecom | 3,50 | 3 |
| Saúde | 3,49 | 9 |
| Construção e imobiliário | 3,47 | 4 |
| Setor público, indústria e outros | 3,40 | 6 |
| Varejo e consumo | 3,31 | 9 |
| Educação | 3,29 | 3 |
| Agro | 3,29 | 8 |
| Logística | 3,13 | 2 |
| Serviços financeiros | 2,94 | 4 |

## 4. Leitura do ranking (ANÁLISE)

**O que sobe.** Os subsetores do topo têm quatro coisas em comum: (1) muitos clientes pequenos e médios sem um líder digital dominante; (2) uma obrigação ou mudança com data marcada que força o cliente a agir (reforma tributária, NR-1 de riscos psicossociais desde 26/05/2026, abertura do mercado livre de energia em nov/2027 e nov/2028, identificação de bovinos a partir de 2027, EUDR); (3) demanda pouco dependente de crédito (manutenção de carro velho, condomínio, contabilidade obrigatória, cuidado de idoso); (4) dá para entrar vendendo serviço com apoio de IA, sem ativo pesado.

**O que cai.** Crédito para PME e pagamentos (capital regulatório, guerra de preço, Pix e grandes bancos), ensino superior e EAD (oligopólio e novo marco regulatório), maquinário agrícola (ciclo ruim e venda cíclica), grãos, restaurantes e operadoras de saúde (margens apertadas e concentração). Varejo de moda e e-commerce sofrem com plataformas asiáticas e consumo fraco.

**Cuidados com o topo.**
- *Cuidado de idosos* lidera pelo vento demográfico e pela informalidade, mas quem paga é a família, com orçamento apertado, e há passivo trabalhista e responsabilidade civil. A nota é de oportunidade, não de facilidade.
- *Hortifruti* aparece em 4º lugar porque a cadeia é fragmentada e pouco digitalizada, mas a margem do cliente é baixíssima e a Frubana saiu do Brasil em 2025 depois de captar cerca de US$ 271 milhões ([ver benchmarking](benchmarking/fracasso_01_frubana.md)). Só faz sentido como software leve para o meio da cadeia.
- *Educação corporativa* tem barreira de entrada baixíssima. Isso vale para o Felipe e para qualquer concorrente, e a IA barateia conteúdo. A defesa precisa vir de nicho, resultado medido e canal.
- *Contabilidade* e *BPO financeiro* são irmãos. A reforma tributária cria demanda datada até 2033, mas Omie, Conta Azul (agora da Visma) e os próprios contadores disputam o mesmo cliente.

**Setores pesados que continuam relevantes como mercado-alvo.** Saneamento (perdas de água de 40%), telecom (mais de 20 mil provedores regionais), construção (back-office do MCMV), indústria (NR-1 e falta de técnicos) e transporte de cargas (conformidade de frete em 2026) aparecem no meio da tabela. Todos foram rebaixados para o perfil do Felipe porque o ciclo de venda é longo e o cliente exige credencial técnica, mas têm dores pontuais boas, listadas nos arquivos.

## 5. Destaques para um empreendedor com capital limitado

Filtro aplicado (ANÁLISE): nota de capital igual ou maior que 4, nota de juros igual ou maior que 3 e média igual ou maior que 3,5. Passam:

| Subsetor | Média | Por que interessa para capital limitado |
|---|---|---|
| Cuidado de idosos | 4,13 | Coordenação de cuidado e formalização de cuidadores sem operar ILPI |
| BPO financeiro para PMEs | 4,13 | Serviço recorrente, vendido via contadores, operado com IA |
| Educação corporativa | 4,00 | Treinamento B2B vertical (IA aplicada, NR-1, técnico de entrada) sem capital |
| Hortifruti | 3,88 | Software de pedidos e cobrança para atacadistas, sem estoque |
| Contabilidade | 3,88 | Produtos para o contador vender reforma tributária |
| Automotivo pós-venda | 3,88 | Frota velha, oficinas sem sistema, orçamento e relacionamento digital |
| Condomínios | 3,75 | Cliente recorrente e pouco sensível a juros; síndico profissional como canal |
| Energia (GD e mercado livre) | 3,75 | Abertura do mercado livre com data marcada; consultoria por êxito |
| Clínicas e consultórios | 3,75 | Faltas e reativação de pacientes, faturamento de convênio |
| Fitness e bem-estar | 3,75 | NR-1 psicossocial e retenção de alunos |
| Serviços domésticos e autônomos | 3,75 | Manutenção residencial vertical e B2B2C |
| Agro: rastreabilidade, EUDR e carbono | 3,63 | Dossiê EUDR para cooperativas e identificação de bovinos com data marcada (2027) |
| Farmácias | 3,63 | Cadastro fiscal da reforma e serviços farmacêuticos via associações |
| Seguros (corretores) | 3,63 | IA para renovação e cotação de 152 mil corretores |
| Cobrança e recuperação | 3,63 | Contra-cíclico, cobrança B2B por nicho e por êxito |
| Beleza e estética | 3,50 | Conformidade de clínicas e reativação |
| Saúde digital | 3,50 | Adequação à Resolução CFM 2.454/2026 sobre IA |
| Telecom (provedores regionais) | 3,50 | Cobrança e preparação para venda de ISPs |

Ficaram de fora por exigir mais capital para entrar (nota 3), apesar da média alta: reciclagem e resíduos (3,63) e govtech (3,50).

## 6. Os 8 subsetores escolhidos para a Fase 2

Pela regra da média com desempate, os 8 primeiros são: **cuidado de idosos, BPO financeiro para PMEs, educação corporativa, hortifruti, contabilidade, automotivo pós-venda, condomínios e energia (GD e mercado livre)**.

Clínicas, fitness e serviços domésticos empataram em 3,75 com condomínios e energia e perderam no desempate. Como as dores de clínicas (faltas e glosas), de NR-1 (fitness, indústria, RH) e de cobrança B2B são fortes, elas foram levadas em conta na seleção final de oportunidades como "dores transversais", com a origem indicada.

## 7. Justificativas de cada nota, por subsetor
### 1. Saúde: Cuidado de idosos (ILPIs, home care, cuidadores e economia prateada) (média 4,13)
Arquivo: [setores/15_saude_cuidado_idosos.md](setores/15_saude_cuidado_idosos.md)

| Critério | Nota | Justificativa |
|---|---|---|
| 1. Crescimento 5 anos | 5 | 60+ cresceu 56% em 12 anos, 80+ acelera; MPEs de cuidado domiciliar +74% de 2020 a 2025. |
| 2. Margem típica | 3 | Serviço intensivo em mão de obra barata; software e intermediação têm margem melhor. |
| 3. Concorrência | 4 | Muito fragmentado, maior player na casa de R$ 100 mi; franquias locais, sem líder digital. |
| 4. Capital para entrar | 4 | Plataforma, agência digital ou SaaS cabem em menos de R$ 100 mil; ILPI não. |
| 5. Sensibilidade a juros/consumo | 4 | Demanda essencial e crescente, mas paga do bolso das famílias. |
| 6. Grau de digitalização | 5 | Mercado informal, coordenado por WhatsApp e indicação. |
| 7. Barreiras regulatórias | 3 | Software é livre; intermediar cuidadores traz risco trabalhista e civil; ILPI exige Anvisa. |
| 8. Tendências | 5 | Envelhecimento, Política Nacional de Cuidados e IA criam dores pagáveis. |

### 2. BPO financeiro e backoffice terceirizado para PMEs (média 4,13)
Arquivo: [setores/25_prof_bpo_backoffice_pme.md](setores/25_prof_bpo_backoffice_pme.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Base de 24,2 mi empresas crescendo, BPO total projetado em 11,6% a.a. (IMARC, baixa confiabilidade) e reforma cria tarefas novas [1][4][7]. |
| Margem típica | 3 | Serviço recorrente com margem moderada, melhorando com IA (sem dado de fonte). |
| Concorrência | 4 | Serviço fragmentado, sem líder; concentração está nas ferramentas (Omie, Visma) [15][16]. |
| Capital para entrar | 5 | Começa com menos de R$ 50 mil. |
| Sensibilidade a juros | 3 | Recorrente, mas mortalidade alta e inadimplência recorde geram churn [3][5]. |
| Digitalização | 4 | PMEs ainda em planilha; ferramentas existem, serviço não. |
| Barreiras regulatórias | 5 | Sem licença; só LGPD e cuidado contratual. |
| Tendências | 5 | IA reduz custo; apuração híbrida 2027, split payment 2027/2028 e duplicata escritural criam dores datadas [6][7][8]. |

### 3. Educação corporativa e qualificação profissional (requalificação, cursos livres, mão de obra técnica, IA) (média 4,00)
Arquivo: [setores/46_educacao_corporativa_qualificacao.md](setores/46_educacao_corporativa_qualificacao.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Demanda de 14 milhões de requalificações e IA criando necessidade contínua. |
| Margem típica | 4 | Serviço intelectual e digital com custo marginal baixo (ANÁLISE). |
| Concorrência | 3 | Fragmentado, porém Sistema S subsidiado e conteúdo gratuito pressionam preço. |
| Capital para entrar | 5 | Começa com menos de R$ 30 mil (instrutores freelancers, ferramentas prontas). |
| Sensibilidade a juros/consumo | 3 | T&D é cortado em crise, mas NRs obrigatórias dão piso de demanda. |
| Digitalização | 3 | Metade das horas já online, mas PMEs e chão de fábrica pouco atendidos. |
| Barreiras regulatórias | 5 | Cursos livres sem autorização do MEC. |
| Tendências | 5 | IA, escassez técnica e envelhecimento são ventos a favor. |

### 4. Agro: hortifruti e frescos (cadeia de perecíveis, Ceasas, perdas) (média 3,88)
Arquivo: [setores/06_agro_hortifruti_frescos.md](setores/06_agro_hortifruti_frescos.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Volume nas Ceasas estável em 2025 e valor -9,3%; exportação de frutas +12% (Conab, Abrafrutas). |
| Margem típica | 2 | Atacado com margem fina e perdas altas; saída da Frubana mostra economia unitária difícil (análise). |
| Concorrência e concentração | 4 | Base muito fragmentada, mas food service já tem players capitalizados (Cayena, Praso, Arado). |
| Capital para entrar | 5 | Software leve de pedidos e cobrança cabe em menos de R$ 50 mil. |
| Sensibilidade a juros/consumo | 4 | Alimento essencial; pouco dependente de crédito ao consumidor. |
| Grau de digitalização | 5 | Permissionários operam com telefone, caderno e WhatsApp. |
| Barreiras regulatórias | 4 | Baixas para software; alíquota zero e crédito presumido geram demanda. |
| Tendências | 4 | Reforma tributária força formalização; IA barateia previsão. |

### 5. Contabilidade (escritórios contábeis, reforma tributária CBS/IBS, split payment, IA) (média 3,88)
Arquivo: [setores/22_prof_contabilidade.md](setores/22_prof_contabilidade.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Base de empresas cresce (21,7 mi para 24,2 mi em pouco mais de um ano) e a reforma gera horas, mas escrituração encolhe com IA e escritórios devem consolidar [3][9]. |
| Margem típica | 3 | Metade dos escritórios fatura até R$ 180 mil/ano; consultoria e SaaS com margem melhor (ANÁLISE) [4]. |
| Concorrência | 4 | 70 a 98 mil escritórios, 99% micro/pequenos, sem líder no escritório pequeno; Omie e Visma disputam o canal, não o serviço [2][3][5]. |
| Capital para entrar | 5 | Serviço, treinamento ou SaaS leve cabe em menos de R$ 100 mil. |
| Sensibilidade a juros | 4 | Obrigação legal recorrente; pouco sensível, embora PMEs inadimplentes atrasem honorários [11]. |
| Digitalização | 3 | Softwares maduros existem; processos de escritório ainda manuais. |
| Barreiras regulatórias | 4 | Assinatura técnica exige CRC; produtos ao redor não. |
| Tendências | 5 | Opção do Simples (set/2026 a mar/2027), obrigações de 2026, CBS 2027 e split payment 2027/2028 criam dores datadas [8][18][19]. |

### 6. Automotivo pós-venda: oficinas independentes, autopeças, frota circulante e seminovos (média 3,88)
Arquivo: [setores/43_automotivo_posvenda.md](setores/43_automotivo_posvenda.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Autopeças +6,5% nominal; frota cresce pouco, mas envelhece; usados +17%. |
| Margem típica | 3 | Sem dado verificado; oficinas razoáveis, distribuição apertada (ANÁLISE). |
| Concorrência e concentração | 4 | Cerca de 92 mil oficinas fragmentadas; cotação de peças já disputada. |
| Capital para entrar | 4 | Software ou serviço com menos de R$ 100 mil; catálogo de peças encarece. |
| Sensibilidade a juros/consumo | 4 | Manutenção essencial; crédito caro adia troca e favorece pós-venda. |
| Grau de digitalização | 5 | 65% das oficinas pequenas e médias sem sistema de gestão (sobe de 4 para 5). |
| Barreiras regulatórias | 4 | Baixas para software. |
| Tendências | 4 | Frota velha, eletrificação (dor de capacitação), IA; elétricos são vento contra no longo prazo. |

### 7. Condomínios e facilities: administração de condomínios, síndicos profissionais, facilities, manutenção predial (média 3,75)
Arquivo: [setores/31_imob_condominios_facilities.md](setores/31_imob_condominios_facilities.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Base cresce cerca de 3% a.a. em SP; nichos (síndico profissional, portaria remota) crescem 20% a 25% a.a. |
| Margem típica | 3 | Software e serviço com margem razoável; facilities baixa; sem dado de margem. |
| Concorrência | 3 | Software básico concentrado e capitalizado; nichos (manutenção, auditoria) abertos. |
| Capital necessário | 5 | Serviço/SaaS de nicho com bem menos de R$ 100 mil. |
| Sensibilidade a juros | 5 | Despesa obrigatória e recorrente; juros afetam inadimplência, não a demanda. |
| Digitalização | 3 | Administração digitalizada; manutenção e sindicatura ainda manuais. |
| Barreiras regulatórias | 4 | Baixas para software; PL do síndico profissional e inspeção predial criam incerteza (e demanda). |
| Tendências | 4 | Profissionalização, envelhecimento de prédios, IA, inspeção predial, abertura do mercado de energia. |

### 8. Energia: geração distribuída solar, mercado livre (abertura para baixa tensão), comercializadoras, eficiência energética (média 3,75)
Arquivo: [setores/32_energia_gd_mercado_livre.md](setores/32_energia_gd_mercado_livre.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Abertura da baixa tensão já em lei (2027/2028); GD e migrações Grupo A desaceleram. |
| Margem típica | 3 | Intermediação/consultoria com boa margem; GD em guerra de preço. |
| Concorrência | 3 | Grandes grupos comprando startups de canal; varejo de baixa tensão ainda sem líder. |
| Capital necessário | 4 | Consultoria/comparador com menos de R$ 100 mil; comercializadora não. |
| Sensibilidade a juros | 4 | Economia na conta é demanda forte; só GD depende de crédito. |
| Digitalização | 4 | Faturas e contratos ainda pouco digitais para PMEs. |
| Barreiras regulatórias | 3 | Consultor livre; comercialização exige CCEE; regras ainda sendo detalhadas. |
| Tendências | 5 | Abertura legal datada, tarifa subindo 9,4%, IA e eletrificação. |

### 9. Saúde: Clínicas médicas independentes, consultórios e clínicas populares (mercado-alvo de serviço e software) (média 3,75)
Arquivo: [setores/10_saude_clinicas_consultorios.md](setores/10_saude_clinicas_consultorios.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Médicos crescem ~10% ao ano no curto prazo (575 mil para 636 mil em 1 ano) e ~6% ao ano até 2035 (1,15 mi, cálculo do revisor) e clínicas populares expandem. |
| Margem típica | 3 | Sem dado confiável; consultórios têm margem boa, clínicas de convênio apertada. |
| Concorrência e concentração | 3 | Software concentrado em Docplanner e Afya; clínicas e serviços terceirizados muito fragmentados. |
| Capital para entrar | 5 | Automação de WhatsApp ou BPO de faturamento começa com menos de R$ 50 mil. |
| Sensibilidade a juros/consumo | 3 | Saúde é essencial, mas consulta particular e clínica popular dependem da renda das famílias. |
| Grau de digitalização | 3 | 65% usam software pago, mas confirmação, cobrança e glosa seguem manuais. |
| Barreiras regulatórias | 4 | Prestador de serviço/software não precisa de licença; exige LGPD, regras de publicidade CFM e TISS. |
| Impacto de tendências | 5 | Excesso de oferta médica + IA conversacional barata criam dor pagável de agenda e retenção. |

### 10. Fitness e bem-estar: academias, estúdios, agregadores corporativos e saúde mental (média 3,75)
Arquivo: [setores/42_fitness_bem_estar.md](setores/42_fitness_bem_estar.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Smart Fit +22%, TotalPass +75%, penetração dobrou para cerca de 8%. |
| Margem típica | 3 | Líder com EBITDA de 32,7%, mas independentes comprimidas; sem dado do setor. |
| Concorrência e concentração | 3 | 41 mil academias fragmentadas; agregadores e softwares já concentrados e capitalizados. |
| Capital para entrar | 5 | Serviço ou micro-SaaS com menos de R$ 50 mil. |
| Sensibilidade a juros/consumo | 3 | Mensalidade cortável; B2B corporativo e obrigação NR-1 mais estáveis. |
| Grau de digitalização | 3 | Gestão e canal B2B digitais; engajamento e saúde mental em PME fracos. |
| Barreiras regulatórias | 4 | Baixas para software; atendimento clínico exige CRP. |
| Tendências | 5 | NR-1 em fase punitiva, envelhecimento, GLP-1 e IA. |

### 11. Serviços domésticos e autônomos (MEIs, prestadores residenciais, diaristas, eletricistas, marketplaces de serviços) (média 3,75)
Arquivo: [setores/52_servicos_domesticos_e_autonomos.md](setores/52_servicos_domesticos_e_autonomos.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Base de MEIs cresce, mas emprego doméstico encolhe; demanda estável com vento demográfico. |
| Margem típica | 3 | Serviço gerenciado com margem moderada; leads tem margem alta mas receita em queda. |
| Concorrência | 4 | Sem líder digital (GetNinjas saiu do jogo); concorrente real é a indicação informal. |
| Capital para entrar | 5 | Menos de R$ 20 mil para piloto em um bairro. |
| Sensibilidade a juros/consumo | 3 | Reparos e limpeza são essenciais; reformas são adiáveis. |
| Digitalização | 4 | 72,9% dos conta própria sem CNPJ; contratação por indicação e WhatsApp. |
| Barreiras regulatórias | 4 | Baixas, com atenção a vínculo trabalhista e NR-10. |
| Tendências | 4 | Envelhecimento, diarização e IA de atendimento a favor. |

### 12. Saúde: Farmácias e drogarias (redes, independentes, associativismo e manipulação) (média 3,63)
Arquivo: [setores/14_saude_farmacias.md](setores/14_saude_farmacias.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Varejo +10,88% (MAT out/2025) e redes +14,9% em 2025; GLP-1 e envelhecimento sustentam crescimento real acima de 5%. |
| Margem típica | 2 | EBITDA de 6,5% (Pague Menos) a 8% (RD Saúde); independentes com lucro em queda. |
| Concorrência e concentração | 3 | Redes concentram ~48%, mas há ~49 mil independentes e milhares de lojas associativas como clientes fragmentados. |
| Capital para entrar | 4 | Serviço fiscal, kit de conformidade ou software leve começa com menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 5 | Medicamento é essencial e de uso contínuo; pouco sensível ao crédito. |
| Grau de digitalização | 3 | Redes muito digitalizadas (24% online); independentes com ERP básico e processos manuais em serviços e fiscal. |
| Barreiras regulatórias | 4 | Fornecedor de software/serviço não precisa de licença; produto precisa respeitar regras sanitárias e de publicidade. |
| Impacto de tendências | 4 | GLP-1, serviços clínicos (RDC 978) e reforma tributária criam dores novas e com prazo. |

### 13. Seguros e insurtech (SUSEP, CNseg, penetração, corretores, Open Insurance) (média 3,63)
Arquivo: [setores/20_fin_seguros_insurtech.md](setores/20_fin_seguros_insurtech.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | +5,7% nominal projetado; penetração baixa dá espaço, mas real moderado. |
| Margem típica | 4 | Seguradoras com ROE alto; corretagem recorrente com boa margem. |
| Concorrência | 3 | Produção concentrada, distribuição muito fragmentada. |
| Capital para entrar | 4 | Corretora ou SaaS para corretor cabe em menos de R$ 100 mil. |
| Sensibilidade a juros | 4 | Seguro empresarial e vida são recorrentes; auto sensível a crédito. |
| Digitalização | 4 | Corretores e PMEs ainda muito analógicos. |
| Barreiras regulatórias | 3 | Registro SUSEP para corretar; software livre; seguradora muito difícil. |
| Tendências | 4 | Lei 15.040, IA e envelhecimento criam dores pagáveis. |

### 14. Cobrança e recuperação de crédito (inadimplência de famílias e empresas, renegociação, Desenrola, NPL) (média 3,63)
Arquivo: [setores/21_fin_cobranca_recuperacao.md](setores/21_fin_cobranca_recuperacao.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Inadimplência recorde e NPL crescendo 20% a 73% em 2026. |
| Margem típica | 3 | Success fee bom, mas taxa de recuperação baixa e custo operacional. |
| Concorrência | 3 | PF concentrado; B2B de PME fragmentado. |
| Capital para entrar | 4 | Serviço com IA cabe em menos de R$ 100 mil; NPL não. |
| Sensibilidade a juros | 5 | Contra-cíclico: juros altos aumentam a demanda. |
| Digitalização | 3 | PF já digital; B2B PME ainda manual. |
| Barreiras regulatórias | 3 | Sem licença, mas CDC, LGPD, Anatel e OAB limitam. |
| Tendências | 4 | IA barateia operação e reforma cria dor de documentar perdas. |

### 15. Reciclagem, resíduos e economia circular (PNRS, logística reversa, cooperativas, crédito de reciclagem) (média 3,63)
Arquivo: [setores/51_reciclagem_residuos_economia_circular.md](setores/51_reciclagem_residuos_economia_circular.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Metas legais progressivas (22% a 40%) e crescimento de organizações de catadores. |
| Margem típica | 2 | Ponta física com margem baixa (renda de catador perto de R$ 1,4 mil); software melhor. |
| Concorrência | 4 | Muito fragmentado, mas eureciclo e Polen já ocupam a intermediação de créditos. |
| Capital para entrar | 3 | Compliance/software barato; operação física cara. |
| Sensibilidade a juros/consumo | 4 | Obrigação legal, pouco ligada a crédito. |
| Digitalização | 4 | Cadeia pouco digital, mas plataforma federal e players digitais reduzem o vazio. Baixei de 5. |
| Barreiras regulatórias | 3 | Licenças para operar; baixas para software e consultoria. |
| Tendências | 5 | Decreto 12.688/2025, crédito presumido na reforma e ESG criam dores novas e datadas. Subi de 4. |

### 16. Agro: rastreabilidade, EUDR, carbono e certificações (média 3,63)
Arquivo: [setores/08_agro_rastreabilidade_esg.md](setores/08_agro_rastreabilidade_esg.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | EUDR com data firme (dez/2026 e jun/2027) e acordo Mercosul-UE ampliam a demanda. |
| Margem típica | 4 | Software sobre dados públicos tem margem alta (análise, sem dado). |
| Concorrência e concentração | 3 | Plataformas capitalizadas no topo, cauda de implementação aberta. |
| Capital para entrar | 4 | Serviço de dossiê e coleta cabe em menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 3 | Obrigatório resiste; ESG voluntário é cortado. |
| Grau de digitalização | 3 | Grandes digitalizadas; pequenos produtores e cooperativas não. |
| Barreiras regulatórias | 4 | Baixas para prestar serviço; certificação formal exige credenciamento. |
| Tendências | 4 | EUDR firme e risco padrão criam dor; SBCE exclui o agro primário (vento contra no carbono). |

### 17. Govtech e serviços públicos (compras públicas, municípios, arrecadação, reforma tributária ISS/IBS) (média 3,50)
Arquivo: [setores/47_govtech_servicos_publicos.md](setores/47_govtech_servicos_publicos.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | PNCP e capital govtech crescem, mas orçamento municipal está pressionado (IR, perda populacional). |
| Margem típica | 4 | Software e serviço intelectual, contratos plurianuais (ANÁLISE, sem dado). |
| Concorrência | 3 | Incumbentes regionais fortes; nichos (14.133, IBS, fornecedor MPE) abertos. |
| Capital para entrar | 3 | Barato para servir fornecedores; caro em tempo para vender a prefeituras. |
| Sensibilidade a juros/consumo | 4 | Demanda pública pouco ligada a juros, mas ligada a ciclo político e fiscal. |
| Digitalização | 4 | Compras se digitalizam, mas gestão de municípios pequenos segue manual. |
| Barreiras regulatórias | 2 | Licitação, atestados, compliance; CPSI pouco usado. |
| Tendências | 5 | Reforma tributária, Lei 14.133 e IA criam dores obrigatórias. |

### 18. Saúde: Healthtechs e saúde digital (telemedicina, prontuário eletrônico, IA clínica, scribes) (média 3,50)
Arquivo: [setores/13_saude_healthtechs_digital.md](setores/13_saude_healthtechs_digital.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Telemedicina cresceu 15 vezes desde 2020 e IA clínica está em adoção inicial acelerada. |
| Margem típica | 4 | Software e serviços digitais têm margem alta, embora custo de IA pressione ticket baixo. |
| Concorrência e concentração | 2 | Scribes, PEP e telemedicina já têm players capitalizados (Prosus, a16z, Docplanner, Afya). |
| Capital para entrar | 4 | Serviço de implantação/governança começa com pouco; produto próprio exige milhões. |
| Sensibilidade a juros/consumo | 4 | Demanda B2B ligada à eficiência; juros altos afetam captação de startups, não a dor. |
| Grau de digitalização | 2 | É o segmento já digital; 92% têm registro eletrônico. |
| Barreiras regulatórias | 3 | CFM 2.454/2026, LGPD e possível SaMD na Anvisa elevam exigências. |
| Impacto de tendências | 5 | IA generativa e nova norma do CFM criam demanda nova e urgente. |

### 19. Telecom: provedores regionais de internet (ISPs), fibra, consolidação, 5G (média 3,50)
Arquivo: [setores/34_telecom_isps.md](setores/34_telecom_isps.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Acessos fixos +3% a/a; mercado maduro. |
| Margem típica | 4 | Brisanet com EBITDA de 42%; ISPs negociados a cerca de 5,5x EBITDA (subiu de 3). |
| Concorrência | 3 | 22 mil ISPs como clientes, mas ERPs, TeiaH, Boreal e Serasa já atacam as dores principais (desceu de 4). |
| Capital necessário | 4 | Serviço/SaaS com menos de R$ 100 mil. |
| Sensibilidade a juros | 4 | Internet é essencial; ISPs alavancados sentem a Selic. |
| Digitalização | 3 | Gestão em ERP, mas subnotificação e cobrança manual indicam baixa maturidade. |
| Barreiras regulatórias | 4 | Baixas para quem vende serviço ao ISP. |
| Tendências | 4 | IA, reforma tributária e M&A criam dores pagáveis; consolidação reduz compradores. |

### 20. Beleza e estética: salões, clínicas de estética, profissionais autônomos e cosméticos (média 3,50)
Arquivo: [setores/40_beleza_estetica.md](setores/40_beleza_estetica.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Mercado +6,8% nominal em 2025 (desacelerando), mas aberturas de negócios +18,5%. |
| Margem típica | 3 | Espaçolaser com EBITDA aj. de cerca de 23% e lucro líquido de 3%; salões sem dado. |
| Concorrência e concentração | 3 | Indústria concentrada (Natura e Boticário com cerca de 31%), serviços fragmentados, agenda saturada. |
| Capital para entrar | 5 | Serviço ou micro-SaaS com menos de R$ 50 mil. |
| Sensibilidade a juros/consumo | 3 | Parte recorrente, parte discricionária; endividamento recorde. |
| Grau de digitalização | 3 | Agenda digital comum; financeiro, conformidade e reativação fracos. |
| Barreiras regulatórias | 4 | Baixas para software; altas e incertas para estética invasiva (fora do escopo). |
| Tendências | 4 | Formalização MEI, IA de relacionamento, envelhecimento, demanda de conformidade. |

### 21. Agro: crédito rural (Plano Safra, CPR, Fiagro, agfintechs, inadimplência e recuperações judiciais) (média 3,50)
Arquivo: [setores/05_agro_credito_rural.md](setores/05_agro_credito_rural.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Crédito via mercado de capitais (CPR +13% a/a, Fiagro +38% em 16 meses) cresce forte; crédito oficial estagnado em termos reais. |
| Margem típica | 4 | Serviços de análise, cobrança e formalização têm margem alta; concessão de crédito tem margem comprimida por provisões. |
| Concorrência e concentração | 3 | Concessão concentrada, mas serviços de suporte fragmentados e sem líder digital claro. |
| Capital para entrar | 3 | Serviço e software cabem em menos de R$ 100 mil; qualquer coisa com balanço exige muito mais. |
| Sensibilidade a juros/consumo | 3 | Juros altos aumentam a dor (inadimplência) e a demanda por cobrança, mas reduzem o volume de originação. |
| Grau de digitalização | 3 | Bancos e B3 digitalizados; revendas, cerealistas e pequenos Fiagros ainda manuais. |
| Barreiras regulatórias | 3 | Baixas para serviço; altas para conceder crédito ou registrar títulos; advocacia exige parceria. |
| Tendências | 5 | Ciclo de RJ, MP só bancária, migração para mercado de capitais e IA criam dores novas e urgentes. |

### 22. Agro: pecuária (bovinos de corte e leite, aves, suínos; frigoríficos como mercado-alvo) (média 3,38)
Arquivo: [setores/02_agro_pecuaria.md](setores/02_agro_pecuaria.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Recordes em 2025 (abate +8,2%, exportação +40% em US$), mas retenção reduz abate bovino em 2026 a 2028. |
| Margem típica | 2 | Friboi 5,9%, JBS 6,0%, Minerva 8,3% de margem EBITDA; só Seara passa de 12%. |
| Concorrência e concentração | 2 | Compradores concentrados; já há agtechs de rastreabilidade capitalizadas. |
| Capital para entrar | 4 | Serviço de cadastro/compliance cabe em menos de R$ 100 mil; hardware não. |
| Sensibilidade a juros/consumo | 3 | Proteína essencial e exportadora, mas retenção e confinamento dependem de crédito. |
| Grau de digitalização | 4 | Pecuária de corte e leite pouco digitalizadas; PNIB parte quase do zero. |
| Barreiras regulatórias | 4 | Baixas para serviço; sanitárias só para quem opera. |
| Tendências | 5 | PNIB obrigatório a partir de 2027 cria demanda forçada; EUDR e crédito presumido somam. |

### 23. Agro: agroindústria de alimentos e bebidas (como mercado-alvo) (média 3,38)
Arquivo: [setores/07_agro_agroindustria_alimentos.md](setores/07_agro_agroindustria_alimentos.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | +8,02% nominal em 2025; ABIA projeta 2% a 2,5% real em 2026. |
| Margem típica | 2 | Camil 8,2% EBITDA e 1,3% líquida; M. Dias Branco 7% a 13% EBITDA por trimestre. |
| Concorrência e concentração | 3 | Topo concentrado; base de cerca de 42 mil empresas, 93% MPME. |
| Capital para entrar | 4 | Serviço tributário, de rotulagem ou qualidade cabe em menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 3 | Alimento é essencial, mas pequena indústria no pior momento desde 2020 e crédito caro. |
| Grau de digitalização | 3 | Grandes digitalizadas; MPMEs com lacunas. |
| Barreiras regulatórias | 4 | Baixas para quem presta serviço. |
| Tendências | 5 | Reforma tributária por NCM, Imposto Seletivo, crédito presumido e rotulagem criam dores obrigatórias. |

### 24. Saúde: Hospitais (privados e filantrópicos) como mercado-alvo de serviços e software (média 3,38)
Arquivo: [setores/09_saude_hospitais.md](setores/09_saude_hospitais.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Redes crescem ~10% nominal, mas hospitais pequenos fecham; crescimento real moderado. |
| Margem típica | 2 | EBITDA médio Anahp abaixo de 10% no 1º tri 2026; filantrópicos no vermelho. |
| Concorrência e concentração | 3 | Topo concentrado com fornecedores estabelecidos; cauda fragmentada e mal servida. |
| Capital para entrar | 4 | Serviço de recurso de glosa por êxito começa com menos de R$ 100 mil, desde que haja know-how. |
| Sensibilidade a juros/consumo | 4 | Demanda essencial; juros altos até aumentam a dor de capital de giro. |
| Grau de digitalização | 3 | TISS é digital, mas o processo de glosa e recurso segue manual em boa parte. |
| Barreiras regulatórias | 4 | Prestador de BPO/software não precisa de licença; exige LGPD e domínio de TISS. |
| Impacto de tendências | 4 | IA nas operadoras cria demanda por IA do prestador; reforma cria dor fiscal temporária. |

### 25. Saúde: Laboratórios e medicina diagnóstica (como mercado-alvo de serviços e software) (média 3,38)
Arquivo: [setores/11_saude_laboratorios_diagnostico.md](setores/11_saude_laboratorios_diagnostico.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Exames +10% em 2024 e listados crescendo 12% a 14%, mas o ganho vai para consolidadores; independente estagnado. |
| Margem típica | 3 | Fleury com EBITDA 26,5%, Dasa 13,7%; independentes provavelmente bem abaixo (sem dado). |
| Concorrência e concentração | 2 | Topo em consolidação acelerada (Fleury, Sabin, Dasa, possível Rede D'Or); cauda encolhendo. |
| Capital para entrar | 4 | Serviço de faturamento, acreditação ou conformidade começa com menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 4 | Demanda essencial e recorrente; juros afetam mais o comprador (laboratório endividado) que a demanda. |
| Grau de digitalização | 3 | LIS e laudo online são padrão; gestão de glosa, qualidade e atendimento seguem manuais nos pequenos. |
| Barreiras regulatórias | 4 | Prestador de serviço/software não precisa de licença sanitária; precisa de domínio de RDC 978 e LGPD. |
| Impacto de tendências | 4 | RDC 978 cria milhares de novos "serviços Tipo I"; GLP-1 e envelhecimento ampliam exames; reforma gera dor temporária. |

### 26. Saúde animal e mercado pet (clínicas veterinárias, planos pet, serviços) (média 3,38)
Arquivo: [setores/17_saude_animal_pet.md](setores/17_saude_animal_pet.md)

| Critério | Nota | Justificativa |
|---|---|---|
| 1. Crescimento 5 anos | 3 | 2025 cresceu 3,45% nominal (quase zero real); serviços e planos crescem mais que o total. |
| 2. Margem típica | 3 | Clínicas com margem moderada; SaaS e assinatura melhores, mas ticket baixo. |
| 3. Concorrência | 3 | Clínicas fragmentadas, mas varejo, software e planos concentrados (Petz-Cobasi, Petlove). |
| 4. Capital para entrar | 4 | Serviço ou software para clínicas cabe em menos de R$ 100 mil. |
| 5. Sensibilidade a juros/consumo | 3 | Ração é recorrente, mas serviços e procedimentos são discricionários; desaceleração em 2025. |
| 6. Grau de digitalização | 3 | ERPs veterinários já existem e foram consolidados; clínicas pequenas ainda subutilizam. |
| 7. Barreiras regulatórias | 4 | Baixas para software e serviços; telemedicina restrita; planos sem regra clara. |
| 8. Tendências | 4 | Humanização, envelhecimento dos pets e IA favorecem; penetração de planos baixa. |

### 27. Construção civil: incorporadoras, MCMV, obras de pequeno porte, empreiteiros, mão de obra (média 3,38)
Arquivo: [setores/28_construcao_civil.md](setores/28_construcao_civil.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | PIB da construção +0,5% em 2025 e projeção de +1,2% em 2026 (CBIC); só MCMV cresce. |
| Margem típica | 3 | Listadas MCMV com margem bruta de 31% a 40%; cauda de empreiteiros apertada. |
| Concorrência | 4 | Muito fragmentado na obra pequena; ERPs fortes só no topo. |
| Capital necessário | 4 | Serviço/SaaS de nicho com menos de R$ 100 mil. |
| Sensibilidade a juros | 2 | Muito sensível, mas MCMV com funding FGTS sustentou vendas (+5,4% no 1º sem. 2026). |
| Digitalização | 4 | Obra pequena praticamente analógica. |
| Barreiras regulatórias | 4 | Baixas para quem vende software ou serviço. |
| Tendências | 4 | Escassez e custo de mão de obra (+9,23% em 2025) e IA criam dores pagáveis. |

### 28. Imobiliário: locação residencial, imobiliárias, proptechs, financiamento SBPE/poupança, short stay (média 3,38)
Arquivo: [setores/30_imob_incorporacao_locacao.md](setores/30_imob_incorporacao_locacao.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Domicílios alugados crescem todo ano (23,8% em 2025); crédito +23% no 1º sem. 2026; aluguel +9,44% em 2025. |
| Margem típica | 3 | Administração de aluguel recorrente; intermediação cíclica; sem dado de margem. |
| Concorrência | 3 | Capitais dominadas por QuintoAndar/Loft; 70 mil imobiliárias fragmentadas no interior. |
| Capital necessário | 4 | Serviço/SaaS de nicho com menos de R$ 100 mil. |
| Sensibilidade a juros | 3 | Crédito sensível, mas locação é favorecida por juros altos. |
| Digitalização | 3 | Capitais digitalizadas; interior manual. |
| Barreiras regulatórias | 3 | CRECI para intermediação; software e serviço livres; short stay em insegurança jurídica. |
| Tendências | 4 | Reforma tributária no aluguel de PF, novo modelo de crédito e tese do STJ criam dores novas. |

### 29. Turismo e hotelaria: hotéis independentes, pousadas, agências, OTAs e eventos (média 3,38)
Arquivo: [setores/39_turismo_hotelaria.md](setores/39_turismo_hotelaria.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Estrangeiro forte (+45% até set/2025), doméstico recuando em 2026. |
| Margem típica | 3 | Diária de rede +10,5% em 2025; independentes sem dado (ANÁLISE). |
| Concorrência e concentração | 3 | Oferta fragmentada; distribuição concentrada em OTAs; software lotado. |
| Capital para entrar | 4 | Serviço e IA de atendimento com menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 2 | Gasto discricionário; IBGE mostra queda em 2026. |
| Grau de digitalização | 4 | Cauda longa pouco digitalizada e informal (26% no Cadastur). |
| Barreiras regulatórias | 4 | Baixas para prestador de software. |
| Tendências | 4 | IA multilíngue e turismo estrangeiro em alta. |

### 30. Saúde: Odontologia (consultórios, clínicas, redes, planos odontológicos e alinhadores) como mercado-alvo (média 3,38)
Arquivo: [setores/16_saude_odontologia.md](setores/16_saude_odontologia.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Planos odonto crescem ~3% ao ano; Odontoprev +7% nominal; estética e alinhadores crescem mais. |
| Margem típica | 3 | Operadora tem EBITDA de 31%, mas consultórios sofrem com excesso de oferta e repasses baixos. |
| Concorrência e concentração | 4 | Consultórios extremamente fragmentados; software concentrado, mas serviços comerciais não. |
| Capital para entrar | 5 | Serviço de follow-up/reativação começa com menos de R$ 30 mil. |
| Sensibilidade a juros/consumo | 2 | Tratamentos particulares de alto ticket são discricionários e dependem de crédito. |
| Grau de digitalização | 3 | Software difundido, mas processo comercial e de retenção é manual. |
| Barreiras regulatórias | 4 | Baixas para prestador; atenção a publicidade CFO e LGPD. |
| Impacto de tendências | 3 | IA facilita automação comercial; excesso de dentistas é vento contra para o cliente, mas aumenta a dor de captar. |

### 31. Materiais de construção, reformas, autoconstrução e profissionais autônomos (média 3,38)
Arquivo: [setores/29_construcao_materiais_reforma.md](setores/29_construcao_materiais_reforma.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Abramat negativa em 2025 e -1,7% em 2026 até agosto; projeção 2026 de só +0,5%. |
| Margem típica | 3 | Varejo com margem média/baixa; software e serviço de nicho melhores. |
| Concorrência | 4 | Varejo de bairro e profissionais muito fragmentados; líder com cerca de 4%. |
| Capital necessário | 4 | Software/serviço de nicho com menos de R$ 100 mil. |
| Sensibilidade a juros | 2 | Bem discricionário; juros já derrubaram vendas. |
| Digitalização | 4 | Lojas de bairro e autônomos pouco digitalizados; mais de 80% das obras sem profissional técnico. |
| Barreiras regulatórias | 5 | Praticamente nenhuma para software/intermediação. |
| Tendências | 3 | IA, envelhecimento e Reforma Casa Brasil ajudam; consumo apertado atrapalha. |

### 32. Jurídico (advocacia, contencioso de massa, lawtechs, IA jurídica) (média 3,25)
Arquivo: [setores/23_prof_juridico.md](setores/23_prof_juridico.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Casos novos em recorde (40,9 mi, +3,5%), previdenciário +23,7%, IA jurídica atraindo capital; preço por ato cai. |
| Margem típica | 3 | Massa apertada; consultivo e SaaS melhores (ANÁLISE, sem dado). |
| Concorrência | 2 | Advocacia fragmentada, mas camada de IA tomada por players muito capitalizados (Enter unicórnio, Jusbrasil com 300 mil usuários/mês). |
| Capital para entrar | 4 | Software/backoffice de nicho cabe em pouco capital. |
| Sensibilidade a juros | 4 | Litígio, RJ e cobrança aumentam em crise. |
| Digitalização | 3 | Processo eletrônico generalizado e IA em adoção rápida; escritórios pequenos ainda manuais. |
| Barreiras regulatórias | 2 | Reserva da OAB, Recomendação 001/2024, provimento de IA vindo, OAB-SP processando "substituto de advogado". |
| Tendências | 4 | IA, previdenciário, RJs, NPL e reforma criam demanda nova. |

### 33. Transporte rodoviário de cargas (TRC): transportadoras pequenas, caminhoneiros autônomos, frete, CT-e/MDF-e, roubo de cargas (média 3,25)
Arquivo: [setores/26_log_transporte_cargas.md](setores/26_log_transporte_cargas.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Volume acompanha PIB e agro; confiança dos transportadores abaixo de 50 em 2025. |
| Margem típica | 2 | Setor de margem apertada; custos 92% em mão de obra, diesel e produtividade. |
| Concorrência | 3 | Transporte pulverizado, mas software e pagamento de frete já têm players fortes. |
| Capital necessário | 4 | Serviço de compliance/BPO entra com menos de R$ 100 mil. |
| Sensibilidade a juros | 3 | Frete é essencial, mas cai com bens duráveis e construção. |
| Digitalização | 4 | Base de TAC e pequenas ETCs ainda muito manual. |
| Barreiras regulatórias | 4 | Prestador de software/serviço não precisa de RNTRC; IPEF sim (evitar). |
| Tendências | 4 | MP 1.343/2026 e IBS/CBS no CT-e criam obrigações novas pagáveis. |

### 34. Saneamento: Marco do Saneamento, SINISA/SNIS, concessões, perdas de água (como mercado-alvo para serviços) (média 3,25)
Arquivo: [setores/33_saneamento.md](setores/33_saneamento.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Investimento privado recorde (R$ 29,8 bi em 2025) e pipeline de R$ 88,6 bi; obrigação até 2033. |
| Margem típica | 3 | Concessionárias com EBITDA de cerca de 58%, mas fornecedores de campo têm margem baixa; software/success fee pode ser alto. |
| Concorrência | 3 | Compradores concentrados; fornecedores fragmentados, mas grandes players já atacam perdas. |
| Capital necessário | 2 | Atestados, equipe técnica e prazo de recebimento exigem caixa; software puro é exceção. |
| Sensibilidade a juros | 4 | Demanda obrigatória; mas clientes muito alavancados sentem a Selic de 13,75%. |
| Digitalização | 4 | Perdas de 40% e base declaratória fraca mostram operação pouco digital. |
| Barreiras regulatórias | 2 | Licitação, homologação de fornecedor e credenciais técnicas. |
| Tendências | 4 | Meta de perdas de 25%, IA em dados de consumo e pressão de custo de atendimento; reforma tributária encarece tarifa (vento misto). |

### 35. Food service B2B: distribuição, compras e fornecedores para restaurantes (média 3,25)
Arquivo: [setores/38_alimentacao_food_service_b2b.md](setores/38_alimentacao_food_service_b2b.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Atacado distribuidor +11% real em 2025, mas restaurantes com crescimento real perto de zero. |
| Margem típica | 2 | Distribuição com margem líquida baixa (estimativa); cliente final apertado. |
| Concorrência e concentração | 3 | Distribuição fragmentada; Cayena capitalizada e apps de indústria. |
| Capital para entrar | 3 | Software e serviço leves; marketplace com crédito exige muito capital. |
| Sensibilidade a juros/consumo | 3 | Insumo essencial, mas crédito ao restaurante é sensível a juros. |
| Grau de digitalização | 4 | Pedidos ainda majoritariamente por WhatsApp e telefone (ANÁLISE). |
| Barreiras regulatórias | 4 | Baixas para software; crédito exige parceiro regulado. |
| Tendências | 4 | Reforma tributária (créditos) e IA de pedidos criam dores novas. |

### 36. Segurança privada e eletrônica (vigilância, monitoramento, segurança condominial) (média 3,25)
Arquivo: [setores/48_seguranca_privada_eletronica.md](setores/48_seguranca_privada_eletronica.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Eletrônica +16,1% em 2024 e portaria remota +25,3% em 2025 (Abese); vigilância humana estável. |
| Margem típica | 3 | Recorrência boa no monitoramento (Gabriel em break-even); vigilância com margem apertada. |
| Concorrência | 3 | Muitos instaladores e clandestinos, mas grandes monitoradoras e fabricantes fortes. |
| Capital para entrar | 3 | Compliance/software barato; operar monitoramento agora exige estrutura PF. |
| Sensibilidade a juros/consumo | 4 | Demanda essencial e recorrente. |
| Digitalização | 3 | Hardware digital, gestão e compliance de pequenos players pouco digital. |
| Barreiras regulatórias | 2 | Autorização PF obrigatória para monitoramento (Decreto 13.012/2026); baixas só para quem vende compliance/software. |
| Tendências | 4 | Novo estatuto cria dor de compliance com prazo; IA de vídeo; envelhecimento. |

### 37. Indústria de transformação PME como mercado-alvo (manutenção, compras, qualidade, NR, energia) (média 3,25)
Arquivo: [setores/49_industria_transformacao_pme.md](setores/49_industria_transformacao_pme.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | PIM +0,6% em 2025, SP -2,2%, máquinas -8,4% projetado para 2026. |
| Margem típica | 3 | Serviços técnicos de margem moderada (ANÁLISE). |
| Concorrência | 3 | Prestadores locais fragmentados, mas manutenção digital tem líder forte (Tractian). Baixei de 4. |
| Capital para entrar | 4 | Serviço com rede de parceiros e software no-code cabe em menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 2 | Indústria cíclica; ABIMAQ atribui a queda aos juros. |
| Digitalização | 4 | SST, compras e energia em PMEs pouco digitalizados. |
| Barreiras regulatórias | 4 | Baixas para software/consultoria; laudos exigem profissional habilitado. |
| Tendências | 4 | NR-1 em vigor, mercado livre BT em 2027, reforma tributária, IA. |

### 38. Varejo alimentar: supermercados, atacarejo e mercados de vizinhança (média 3,13)
Arquivo: [setores/35_varejo_supermercados_alimentar.md](setores/35_varejo_supermercados_alimentar.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Crescimento real de 3,7% em 2025 e PMC negativa no mês em 2026. |
| Margem típica | 1 | EBITDA de 5,6% no Assaí; margem líquida de 1% a 3% no setor. |
| Concorrência e concentração | 3 | Cauda longa de lojas, mas fornecedores de tecnologia fortes já presentes. |
| Capital para entrar | 4 | Serviço ou SaaS de nicho começa com menos de R$ 100 mil; integração com ERP encarece. |
| Sensibilidade a juros/consumo | 4 | Demanda essencial; o volume cai pouco, mas o orçamento de TI do cliente sofre. |
| Grau de digitalização | 3 | Grandes digitalizadas; médias e pequenas operam com ERP básico e planilha. |
| Barreiras regulatórias | 4 | Nenhuma licença para prestador de software; LGPD em CRM. |
| Tendências | 4 | Reforma tributária e IA de previsão criam dores pagáveis e urgentes. |

### 39. Agro: insumos (fertilizantes, defensivos, sementes, bioinsumos, revendas agrícolas) (média 3,13)
Arquivo: [setores/03_agro_insumos.md](setores/03_agro_insumos.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Volume +7% a +8%, mas valor estável (defensivos +0,7%, distribuição +2,4%); bioinsumos +15%. |
| Margem típica | 2 | Preços em queda e deságios de 50% a 85% nas RJs mostram margem corroída. |
| Concorrência e concentração | 3 | Indústria oligopolizada, mas canal de revendas voltou a se fragmentar após o fracasso dos consolidadores. |
| Capital para entrar | 4 | Serviço a revendas cabe em menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 2 | Venda a prazo financiada; custeio do Plano Safra caiu 7,2%. |
| Grau de digitalização | 3 | Indústria digitalizada; revendas médias pouco. |
| Barreiras regulatórias | 4 | Baixas para serviço. |
| Tendências | 4 | Crise de crédito, exclusão dos fornecedores da MP e reforma tributária criam dores pagáveis. |

### 40. RH, folha, benefícios e recrutamento (eSocial, trabalho temporário, turnover, CAGED) (média 3,13)
Arquivo: [setores/24_prof_rh_folha_recrutamento.md](setores/24_prof_rh_folha_recrutamento.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Saldo formal 2026 -25,2%, mas desemprego mínimo e turnover recorde sustentam demanda. |
| Margem típica | 3 | SaaS bom; BPO e recrutamento moderados; benefícios comprimidos pelo teto de 3,6%. |
| Concorrência | 2 | Gupy, Humand, Factorial, HR Path, Flash, Caju; 4 grandes com mais de 80% em benefícios. |
| Capital para entrar | 4 | Serviço vertical ou de compliance cabe em pouco capital. |
| Sensibilidade a juros | 3 | Folha e compliance essenciais; recrutamento cíclico. |
| Digitalização | 2 | eSocial e plataformas já digitalizaram o núcleo. |
| Barreiras regulatórias | 4 | Baixas para software e serviço; ETT exige registro; NR-1 exige profissional habilitado no laudo. |
| Tendências | 4 | NR-1 psicossocial, abertura do PAT, consignado CLT e turnover recorde criam dores novas (subiu de 3 para 4). |

### 41. Educação básica privada (escolas particulares, sistemas de ensino, gestão escolar) (média 3,13)
Arquivo: [setores/44_educacao_basica_privada.md](setores/44_educacao_basica_privada.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Volume quase estável (+0,6% em 2025) e demografia contra; receita cresce por preço. |
| Margem típica | 3 | Escola tem margem apertada; software/serviço para escola tem margem boa mas churn. |
| Concorrência | 3 | Escolas fragmentadas, porém dezenas de ERPs escolares e sistemas de ensino concentrados. |
| Capital para entrar | 4 | Serviço/SaaS para escolas cabe em menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 3 | Mensalidade é prioridade das famílias, mas inadimplência de ~20% mostra fragilidade. |
| Digitalização | 3 | Escolas pequenas pouco digitais, mas oferta de software já é ampla. |
| Barreiras regulatórias | 4 | Baixas para fornecedor; atenção à LGPD com dados de menores e à Lei 9.870. |
| Tendências | 3 | IA e reforma tributária criam dores; demografia é vento contra. |

### 42. Moda e vestuário: varejo de moda, concorrência asiática, revenda e segunda mão (média 3,00)
Arquivo: [setores/41_moda_vestuario.md](setores/41_moda_vestuario.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Confecção +0,7% em 2025, Renner +1,1% no 2T26 e Azzas -7,1%; só revenda (Enjoei +25% de GMV) cresce forte. |
| Margem típica | 3 | Margem EBITDA de 17% a 22% nas grandes (2T26), mas líquida de um dígito e revenda no prejuízo. |
| Concorrência e concentração | 2 | Guerra de preço com Shein, Temu e Shopee. |
| Capital para entrar | 5 | Serviço de IA de catálogo começa com menos de R$ 30 mil. |
| Sensibilidade a juros/consumo | 2 | Discricionário e dependente de crediário. |
| Grau de digitalização | 3 | Grandes digitalizadas; confecções e brechós muito pouco. |
| Barreiras regulatórias | 4 | Baixas para prestador. |
| Tendências | 3 | IA ajuda; isenção de importados e reforma pesam contra o cliente. |

### 43. Last mile e logística de e-commerce: entregas urbanas, Correios, Loggi, operadores logísticos, armazenagem (média 3,00)
Arquivo: [setores/27_log_last_mile_ecommerce.md](setores/27_log_last_mile_ecommerce.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | E-commerce crescendo cerca de 10% a 18% a.a. nominal (2024-2025). |
| Margem típica | 2 | Operação de entrega é de margem baixa; software é exceção. |
| Concorrência | 2 | Marketplaces verticalizados e agregadores consolidados. |
| Capital necessário | 4 | Serviço/SaaS de nicho entra com menos de R$ 100 mil. |
| Sensibilidade a juros | 3 | Consumo online sente juros, mas frete é recorrente. |
| Digitalização | 2 | Camada de software já bem servida para e-commerce. |
| Barreiras regulatórias | 4 | Baixas para software e intermediação. |
| Tendências | 3 | IA e same-day ajudam; verticalização dos gigantes atrapalha. |

### 44. E-commerce, marketplaces e sellers PME (média 3,00)
Arquivo: [setores/36_varejo_ecommerce_marketplaces.md](setores/36_varejo_ecommerce_marketplaces.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | +15% em 2025 e +10% projetado em 2026, nominais. |
| Margem típica | 2 | Plataforma líder com EBIT de 6,7%; seller com margem fina. |
| Concorrência e concentração | 2 | Plataformas oligopolizadas e ferramentas para sellers lotadas e consolidando. |
| Capital para entrar | 4 | Serviço ou micro-SaaS com menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 3 | Bens discricionários, mas canal ganha participação mesmo em ciclo fraco. |
| Grau de digitalização | 1 | Setor nativamente digital. |
| Barreiras regulatórias | 4 | Baixas para prestador; reforma e importação mudam regras dos clientes. |
| Tendências | 4 | IA de conteúdo e reforma tributária criam dores novas. |

### 45. Mídia, marketing e economia de creators (publicidade digital, agências, social commerce, IA generativa) (média 3,00)
Arquivo: [setores/50_midia_marketing_creator.md](setores/50_midia_marketing_creator.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 4 | Digital +12,7% e Cenp +10% em 2025; social commerce em explosão. |
| Margem típica | 3 | Execução com margem baixa; performance e software melhores (sem dado). |
| Concorrência | 2 | Saturado; plataformas dominam a verba; milhões de creators. |
| Capital para entrar | 5 | Menos de R$ 20 mil. |
| Sensibilidade a juros/consumo | 2 | Verba de marketing é cíclica. |
| Digitalização | 1 | Internet já é o principal meio. |
| Barreiras regulatórias | 4 | Baixas, exceto apostas e saúde (Conar e PLs em curso). |
| Tendências | 3 | IA cria e destrói valor; social commerce a favor. |

### 46. Agro: grãos (soja, milho, algodão) (média 2,88)
Arquivo: [setores/01_agro_graos.md](setores/01_agro_graos.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Volume cresce 1% a 2% ao ano (Conab); renda do produtor em queda no ciclo 2026/27. |
| Margem típica | 2 | Produtor com margem estreita (equilíbrio de 52 a 55 sc/ha) e tradings de margem baixa; software B2B pode ter boa margem, mas o cliente pressiona preço. |
| Concorrência e concentração | 2 | Tradings e cooperativas dominam; software com players capitalizados (Grão Direto, TOTVS, Aegro). |
| Capital para entrar | 4 | Serviço tributário, consultoria ou software de nicho cabem em menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 2 | Agro depende de crédito caro; ciclo de RJs e corte de custo no produtor. |
| Grau de digitalização | 3 | Grandes grupos digitalizados; médio produtor e cerealistas ainda em planilha e WhatsApp. |
| Barreiras regulatórias | 4 | Baixas para software e serviço; altas só para crédito e registro de títulos. |
| Tendências | 4 | Reforma tributária e risco de crédito criam dores novas e pagáveis; IA barateia produto. |

### 47. Saúde: Planos de saúde e operadoras (como mercado-alvo de serviços e software) (média 2,88)
Arquivo: [setores/12_saude_planos_operadoras.md](setores/12_saude_planos_operadoras.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Receita cresce por reajuste; vidas crescem pouco com juros altos. |
| Margem típica | 2 | Margem líquida ~6% em 2025 (cálculo sobre dados ANS), muito dependente de sinistralidade e resultado financeiro. |
| Concorrência e concentração | 2 | Lucro concentrado nas grandes; IA de auditoria já tem líder capitalizado. |
| Capital para entrar | 3 | Serviço para operadoras pequenas começa com pouco capital, mas exige auditores habilitados e segurança da informação. |
| Sensibilidade a juros/consumo | 3 | Saúde é essencial, mas vidas dependem de emprego formal; juros altos ajudam o lucro financeiro. |
| Grau de digitalização | 3 | TISS digital e grandes já usam IA; pequenas e médias ainda manuais. |
| Barreiras regulatórias | 3 | Fornecedor não precisa de registro ANS, mas precisa seguir TISS, prazos, LGPD e atos médicos de auditoria. |
| Impacto de tendências | 4 | Envelhecimento e reforma criam dores pagáveis; IA reduz custo de serviço. |

### 48. Alimentação fora do lar: bares, restaurantes independentes, delivery e dark kitchens (média 2,88)
Arquivo: [setores/37_alimentacao_fora_do_lar.md](setores/37_alimentacao_fora_do_lar.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Real de 0,92% em 2025 e tráfego em queda. |
| Margem típica | 1 | Só 42% lucram; 20% no prejuízo (jul/2026). |
| Concorrência e concentração | 3 | Clientes fragmentados; softwares baratos e muitos; iFood domina distribuição. |
| Capital para entrar | 4 | Serviço ou SaaS com menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 2 | Gasto discricionário e cliente endividado. |
| Grau de digitalização | 3 | Pedido digitalizado pelo delivery; gestão interna fraca. |
| Barreiras regulatórias | 4 | Nenhuma para prestador; Cade mexe com delivery. |
| Tendências | 4 | Guerra de delivery, IA de atendimento e reforma tributária criam dores novas. |

### 49. Educação superior e EAD (graduação privada, marco regulatório do EAD, FIES) (média 2,75)
Arquivo: [setores/45_educacao_superior_ead.md](setores/45_educacao_superior_ead.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Matrículas +2,5% (2024) e captação EAD em queda de 34% a 37% em 2026. |
| Margem típica | 4 | EBITDA de 28% a 30% nas listadas, mas lucro líquido comprimido por juros. |
| Concorrência | 2 | Oligopólio de grandes grupos; IES pequenas perdendo escala. |
| Capital para entrar | 4 | Como fornecedor de serviço (retenção, cobrança, polos) cabe em menos de R$ 100 mil. |
| Sensibilidade a juros/consumo | 2 | Dependente de renda, crédito (FIES pequeno) e emprego; inadimplência relevante. |
| Digitalização | 2 | EAD e grandes grupos já muito digitalizados. |
| Barreiras regulatórias | 3 | Baixas para fornecedor, mas produto depende de regra MEC volátil. |
| Tendências | 3 | Marco do EAD cria dores de transição; IA pressiona tutoria e avaliação. |

### 50. Agro: maquinário agrícola (máquinas, concessionárias, pós-venda, agricultura de precisão) (média 2,50)
Arquivo: [setores/04_agro_maquinario.md](setores/04_agro_maquinario.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 2 | Receita -21,6% até set/2026 após +7,4% em 2025; recuperação só a partir de 2027/28. |
| Margem típica | 2 | Fabricante (CNH) com EBIT de 5% a 5,5% em Agricultura; pós-venda melhor, sem dado. |
| Concorrência e concentração | 2 | Fabricantes oligopolistas controlam canal e dados; chineses entram com preço. |
| Capital para entrar | 3 | Serviço/marketplace barato; locação e hardware exigem ativos. |
| Sensibilidade a juros/consumo | 1 | Bem durável financiado; Moderfrota cortado em 54%. |
| Grau de digitalização | 3 | Máquinas digitalizadas; usados, retomadas e concessionárias pouco. |
| Barreiras regulatórias | 4 | Baixas para serviço; drones têm regulação própria em revisão. |
| Tendências | 3 | Inadimplência e importados criam dor em usados e pós-venda; demanda de novos contra. |

### 51. Crédito para PMEs (FIDCs, antecipação de recebíveis, duplicata escritural, Open Finance) (média 2,38)
Arquivo: [setores/18_fin_credito_pme.md](setores/18_fin_credito_pme.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Crédito PJ cresce ~8,7% nominal e FIDCs dois dígitos, mas real moderado e ciclo de inadimplência. |
| Margem típica | 3 | Spread alto, mas perdas e custo de funding comem margem; originador sem balanço tem margem boa e receita incerta. |
| Concorrência | 2 | Bancos, digitais, ERPs e adquirentes já oferecem antecipação embutida. |
| Capital para entrar | 2 | Emprestar exige capital e licença; só originação/software cabe em < R$ 100 mil. |
| Sensibilidade a juros | 1 | Diretamente ligado a Selic e inadimplência. |
| Digitalização | 2 | Open Finance, Pix e registradoras tornam o núcleo muito digital. |
| Barreiras regulatórias | 2 | IF exige autorização BCB; correspondente e software são mais leves. |
| Tendências | 4 | Duplicata escritural, Open Finance e split payment criam dores novas e datadas. |

### 52. Pagamentos (Pix, Pix Automático, Pix Parcelado, adquirência, maquininhas) (média 2,13)
Arquivo: [setores/19_fin_pagamentos.md](setores/19_fin_pagamentos.md)

| Critério | Nota | Justificativa |
|---|---|---|
| Crescimento 5 anos | 3 | Pix cresce forte em quantidade, mas receita das adquirentes estagnada. |
| Margem típica | 2 | Compressão de MDR e Pix de baixo custo; só SaaS tem margem boa. |
| Concorrência | 1 | Seis adquirentes com 81% e bancos dominam Pix. |
| Capital para entrar | 2 | Infra exige licença e capital; só aplicação cabe em pouco capital. |
| Sensibilidade a juros | 3 | Volume é essencial, mas antecipação depende de juros. |
| Digitalização | 1 | Um dos setores mais digitalizados do país. |
| Barreiras regulatórias | 2 | IP/PSP exige BCB; MED, LGPD, split payment. |
| Tendências | 3 | Pix Automático e split payment criam dores, mas capturadas por incumbentes. |

