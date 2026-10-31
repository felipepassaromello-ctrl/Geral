# Briefing comum para os pesquisadores

Projeto: mapa de oportunidades para empreender no Brasil. Cliente: Felipe, trabalha em São Paulo, aberto a qualquer setor, NÃO é programador (pode contratar ou usar IA para desenvolver), quer algo que possa começar com capital limitado, de preferência em paralelo ao emprego, leve em ativos, escalável e testável em poucas semanas. Setores pesados (indústria, mineração, infraestrutura, frota) só interessam como MERCADO-ALVO para vender serviço ou solução, nunca para operar o negócio pesado.

Data de hoje: 31/10/2026. "Últimos 24 meses" = de nov/2024 em diante.

## Regras inegociáveis
1. Todo número, estatística ou previsão precisa de fonte com link. Só cite um link que você de fato abriu (WebFetch) ou que apareceu como resultado de busca com o conteúdo confirmando o número. Para os números mais importantes de cada arquivo (tamanho de mercado, crescimento, margens), abra a página com WebFetch e confirme. Se não achar fonte confiável, escreva literalmente "não encontrei fonte confiável". NUNCA invente número, link, empresa, rodada ou aquisição.
2. Registre a data de cada dado (ex.: "2025", "1º sem. 2026"). Marque com [DADO ANTIGO] qualquer dado anterior a nov/2024.
3. Separe sempre DADO (com fonte) de ANÁLISE (sua opinião). Use os rótulos **DADO** e **ANÁLISE** ou seções separadas.
4. Fontes preferidas: IBGE, Banco Central, IPEA, CVM, ANS, ANEEL, ANATEL, Conab, MAPA, INEP, Sebrae, CNI, CNC, associações setoriais (Abras, ABComm, Abrasel, ANAHP, Abramge, ABIMAQ, CBIC, Abrafarma, ABSOLAR, Fenabrave etc.), relatórios de consultorias (McKinsey, Bain, BCG, Euromonitor, Mordor/IMARC só como último recurso e sinalizado), Distrito, Sling Hub, ABVCAP, LAVCA, Valor Econômico, Exame, Folha, Estadão, InfoMoney, Pipeline, Bloomberg Línea, Brazil Journal, NeoFeed, Startups.com.br. Sites de "market research" genéricos com números redondos devem ser sinalizados como "fonte de baixa confiabilidade".
5. Português do Brasil. PROIBIDO usar travessão (— ou –). Use vírgula, ponto, dois-pontos ou parênteses. Hífen comum em palavras compostas é permitido.
6. Seja crítico: aponte riscos e motivos para NÃO entrar.
7. Considere o cenário atual: Selic na casa de 14% a 15% em 2026 (confirme o valor mais recente se for relevante), crédito caro, câmbio, reforma tributária (CBS/IBS, transição 2026 a 2033, split payment, fim de benefícios do Simples em alguns casos), envelhecimento da população, IA.

## Rubrica de notas (Fase 1), 1 a 5, onde 5 = MAIS FAVORÁVEL para um empreendedor novo e com pouco capital
1. Crescimento esperado 5 anos: 5 = crescimento real forte (>8% a.a.), 1 = estagnado ou encolhendo.
2. Margem típica: 5 = margens altas (EBITDA >25% ou margem líquida >15%), 1 = margens muito apertadas.
3. Concorrência e concentração: 5 = mercado fragmentado e sem líder digital dominante, 1 = oligopólio consolidado ou guerra de preço.
4. Capital necessário para entrar: 5 = dá para entrar com menos de R$ 100 mil vendendo serviço ou software ao setor, 1 = exige centenas de milhões ou ativos pesados.
5. Sensibilidade a juros altos e consumo interno: 5 = pouco sensível (demanda essencial ou recorrente), 1 = muito sensível (crédito, bens duráveis).
6. Grau de digitalização: 5 = pouco digitalizado (muito espaço para inovação), 1 = já muito digitalizado.
7. Barreiras regulatórias: 5 = baixas para quem entra como prestador de serviço ou software, 1 = licenças complexas e longas.
8. Impacto de tendências (IA, reforma tributária, envelhecimento): 5 = forte vento a favor que cria novas dores pagáveis, 1 = vento contra.

Nota final = média simples das 8 notas (duas casas). Justifique cada nota em uma linha.

## Modelo de arquivo por subsetor (salvar em /home/user/Geral/mapa_oportunidades/setores/NN_nome_do_subsetor.md, nome em minúsculas sem acentos, com underscores)

```
# [Subsetor]
Última atualização: 31/10/2026 | Pesquisador: agente X

## Resumo em 5 linhas (ANÁLISE)
## Tamanho de mercado (DADO, com fonte e data)
## Crescimento histórico e projetado (DADO, com fonte e data; projeções marcadas como projeção e de quem)
## Distribuição regional (onde a oportunidade está concentrada, com dado)
## Principais empresas e grau de concentração (DADO)
## Margens típicas (DADO quando houver: balanços de listadas, relatórios setoriais; senão ANÁLISE explicitamente marcada)
## Regulação (órgãos, licenças, mudanças recentes, impacto da reforma tributária)
## Tendências (IA, digitalização, demografia, ESG etc.)
## Riscos e motivos para NÃO entrar (ANÁLISE)
## Hipóteses de dores (pelo menos 5; para cada: quem sofre, por que dói, como é resolvido hoje, quem já ataca no Brasil e fora)
## Startups e capital no subsetor (rodadas e aquisições recentes, com fonte)
## Notas Fase 1 (tabela com as 8 notas, justificativa de 1 linha cada, e média)
## Encaixe com o perfil do Felipe (ANÁLISE: capital inicial, dá para começar em paralelo?, exige formação técnica?, tempo até 1ª receita)
## Fontes (lista numerada com título, organização, data e link; mínimo 5 fontes distintas)
```

## O que devolver ao coordenador (na sua resposta final, curta, no máximo ~600 palavras)
- Lista dos arquivos criados.
- Tabela-resumo: subsetor | 8 notas | média.
- As 3 dores mais promissoras que você encontrou no seu bloco, em 1 linha cada, já pensando em negócio leve, defensável e vendável por um fundador sem capital pesado.
- Qualquer dado importante que você NÃO conseguiu confirmar.
Não repita o conteúdo dos arquivos na resposta.

## Regras da RODADA 2 (complementação)
- A rede da sessão BLOQUEIA WebFetch para quase todos os sites. NÃO tente WebFetch nem curl. Use apenas WebSearch e extraia os números do conteúdo dos resultados, citando o link do resultado que traz o número.
- ORÇAMENTO RÍGIDO: no máximo 22 chamadas de WebSearch no total para todo o seu bloco. Planeje buscas compostas e específicas (ex.: "CFC número de escritórios contábeis 2025 Fenacon"). Ao chegar a 22, pare de buscar e escreva com o que tem.
- Você está COMPLETANDO arquivos já existentes. Leia o arquivo atual, preserve a análise boa, preencha os dados que faltam com fonte, corrija notas se os dados mudarem a avaliação, remova avisos de "incompleto/provisório" se resolvidos (ou mantenha, indicando o que ainda falta). Mantenha o aviso de método: "números confirmados no conteúdo dos resultados de busca; páginas não abertas por restrição de rede".
- Selic atual confirmada: 13,75% a.a. (decisão de 16/09/2026; Poder360). Focus 26/10/2026: Selic 13,25% fim de 2026, 11,75% em 2027. Lula reeleito no 2º turno de 25/10/2026. Use isso sem gastar busca.
