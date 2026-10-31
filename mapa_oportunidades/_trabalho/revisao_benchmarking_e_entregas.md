# Revisão crítica: benchmarking/ e arquivos de entrega
Data: 31/10/2026 | Revisor: agente de revisão (bloco benchmarking e entregas) | WebSearch usadas: 0

## (a) Correções feitas (benchmarking/, 1 linha cada)
- 00_panorama_eua.md: "TechCrunch listou 55 startups" contradizia o endereço do artigo ("49"); reescrito como "dezenas" com a divergência explícita.
- 00_panorama_eua.md: "valuations de 10x a 40x a receita" não batia com a própria Tabela A (Harvey passa de 50x); trocado por conta explícita (Deel cerca de 17x, EliseAI 20x, Harvey mais de 50x).
- 00_panorama_eua.md: "Ramp captou a US$ 60 bilhões" citava o artigo de jun/2026 (US$ 44 bi); separado em jun/2026 (US$ 750 mi a US$ 44 bi) e out/2026 (US$ 60 bi).
- 00_panorama_eua.md: aviso desatualizado "liberar domínios e rodar nova sessão" trocado por pendência objetiva; Blip marcada "data não confirmada"; valuation da Vanta marcado como agregador.
- 00_licoes_emergentes_e_fracassos.md: [DADO ANTIGO] em Loft/Walmart, Uber Eats/CADE e Grow/Lime; Selic padronizada "13,75% desde 16/09/2026".
- RANKING_TROPICALIZACAO.md: "Selic na casa de 14%" trocado por "13,75% (desde 16/09/2026)". Médias das 15 linhas conferidas: todas corretas.
- eua_01, eua_02, eua_18: "número a confirmar com CNJ/OAB" substituído por 1,4 milhão de advogados e 40,9 milhões de casos novos (CNJ 2025), com link para ../setores/23_prof_juridico.md.
- eua_02: [DADO ANTIGO] na Série D e nos 1.000 escritórios (out/2024).
- eua_04: rodada de abr/2024 (US$ 13,4 a 13,5 bi) marcada [DADO ANTIGO; sem fonte própria].
- eua_09, eua_10: "dezenas de milhares de escritórios (a confirmar com CFC)" substituído por "70 mil a 98 mil" com link para ../setores/22.
- eua_10: "Ninguém copia em semanas uma base de 2.000 PMEs" suavizado (era número hipotético apresentado como fato).
- eua_15: removido "cerca de 10x de alta de valuation em seis meses" (o valuation do seed não está em nenhuma fonte).
- eua_19: Série E de 2022 (US$ 9,5 bi) marcada [DADO ANTIGO; sem fonte própria].
- eua_20: "dezenas de milhões de inadimplentes (a confirmar)" substituído por 82,8 milhões de pessoas e 9,3 milhões de CNPJs (Serasa), com link para ../setores/21.
- em_01: divergência Rs 71 crore x Rs 78 crore (título da fonte [2]) explicitada; FY24 marcado [DADO ANTIGO].
- em_02: avaliação US$ 1,8 bi incompatível com "queda de 59%" explicitada.
- em_03, em_04, em_11: [DADO ANTIGO] em Facily 2021/2022, JOKR fev/2023, cortes da Kavak 2022.
- em_08: prejuízo FY24 Rs 1.133 crore x "1331" no endereço da fonte, marcado para confirmar.
- em_12: "O Brasil já é seu segundo mercado" rotulado como afirmação não verificada.
- em_13: [DADO ANTIGO] em out/2024 (transações e Série C) e na receita de 2023.
- em_14: explicitado que US$ 416 mi é o exercício anterior ao FY2025 (416 x 1,45 = cerca de 600).
- fracasso_01: [DADO ANTIGO] em fev/2024.
- fracasso_05 a 09: nota de cabeçalho [DADO ANTIGO] (casos históricos mantidos de propósito).
- Links relativos de benchmarking/: todos conferidos, nenhum quebrado; nenhum caminho /home/user; nenhum travessão.

## (b) Problemas encontrados e NÃO corrigidos

### Nos arquivos de entrega (não editáveis por este revisor; correções sugeridas ao coordenador)

**RELATORIO_FINAL.md**
1. Link quebrado (linha 365): `[REVISAO_CRITICA.md](REVISAO_CRITICA.md): o que foi revisado...`. O arquivo não existe. Correção: criar o arquivo na raiz ou apontar para `_trabalho/` (ex.: `[revisões](_trabalho/)`), ou remover a linha.
2. Tamanho de mercado com magnitude errada (3.7, linha 169): "de 300 mil a 500 mil empresas na faixa (estimativa sem fonte), o que dá centenas de milhões por mês em honorários potenciais." A Fase 2 calcula R$ 750 mi a R$ 1,25 bi por mês, e é teto teórico com 100% de adoção. Correção: "300 mil a 500 mil empresas (estimativa sem fonte) x R$ 2.500 por mês = R$ 750 mi a R$ 1,25 bi por mês se todas contratassem; é teto teórico, não mercado endereçável."
3. Premissa apresentada como dado (3.1, linha 103): "cerca de 65 mil condomínios com síndico profissional a R$ 250 por mês dá cerca de R$ 195 mi por ano." Os 65 mil vêm de 327 mil (uCondo) x 20% (proporção da ABRASSP, fonte diferente), e a receita supõe 100% de adoção. Correção: "Estimativa: 327 mil condomínios (uCondo) x 20% com síndico profissional (proporção da ABRASSP aplicada a outra base) = cerca de 65 mil; se todos pagassem R$ 250 por mês, R$ 195 mi por ano (teto teórico). Na capital paulista, 31,1 mil x 20% = 6,2 mil, ou R$ 18,6 mi por ano."
4. Teto com 100% de adoção sem aviso (3.4, linha 136): "300 mil PMEs de 10 a 99 empregados a R$ 3 mil por ano dariam cerca de R$ 900 mi por ano." Correção: acrescentar "se todas contratassem (teto teórico); com 5% de adoção, cerca de R$ 45 mi por ano."
5. Idem (3.6, linha 158): "cerca de R$ 360 mi por ano com premissas não verificadas." Correção: "R$ 360 mi por ano se 2 mil empresas com mais de 500 funcionários (premissa não verificada) contratassem para 1.500 funcionários cada a R$ 10 (teto teórico)."
6. Premissa incompleta (3.10, linha 202): "cerca de R$ 50 mi por mês, com premissa de 1 milhão de PMEs." Faltam os outros termos. Correção: "1 milhão de PMEs (premissa sem fonte) x 5% de adoção x R$ 1.000 por mês = cerca de R$ 50 mi por mês (R$ 600 mi por ano)."
7. Contradição interna de capital (linha 21): "As três podem ser testadas em 4 semanas com menos de R$ 15 mil cada", mas 3.1 e 3.3 dizem "R$ 10 mil a R$ 20 mil para testar" e a linha 258 usa "capital abaixo de R$ 20 mil". Correção: "com R$ 5 mil a R$ 20 mil cada (custos de teste da Fase 3: R$ 3 mil a R$ 8 mil por frente)".
8. Conclusão contraditória com a própria tabela (linha 284): "A cobrança protege no cenário de juros altos e o caixa, no de juros baixos." A tabela de cenários dá "Médio" ao caixa na queda e "Não" à cobrança. Correção: "A cobrança protege no cenário de juros altos; na queda de juros, o caixa perde força (nota 'médio') e a cobrança perde demanda, então a R2 é a mais exposta a uma queda forte da Selic."
9. Afirmação absoluta contradita na mesma ficha (3.2, linha 112): "Ninguém audita contratos de portaria, energia, limpeza e elevador." Três linhas abaixo cita auditorias contábeis pontuais e consultores. Correção: "Raramente há auditoria sistemática de contratos de portaria, energia, limpeza e elevador."
10. Afirmação forte sem dado (3.1, linha 104): "Quase ninguém vende serviço com responsável técnico." Correção: "Não encontramos quem venda o serviço com responsável técnico (ANÁLISE)."
11. Ausência apresentada como fato (3.6, linha 159): "nenhuma identificada no Brasil." Correção: "nenhuma encontrada nas buscas desta pesquisa (pode haver iniciativas não divulgadas)."
12. PE sem a ressalva da origem (linha 51): "R$ 50,1 bi em 89 negócios em 2025, contra R$ 13,3 bi em 2024 ([ABVCAP/TTR]...)". capital/vc_pe_brasil.md diz que a matéria de origem não foi identificada com certeza e que o salto de quase 4x "merece reconferência". Correção: acrescentar "(número atribuído à ABVCAP; origem não identificada com certeza; salto de quase 4x a reconferir)".
13. Dado antigo sem marca (3.6, linha 156): "Em 2022, 34,9% das mulheres e 23,3% dos homens cuidavam de pessoas no domicílio". Correção: acrescentar "[DADO ANTIGO]". Idem tabela macro, linha 43 (Contas Regionais 2023): acrescentar "[DADO ANTIGO quanto ao ano-base]".
14. Saída sem ressalva (linha 62): "A saída mais provável é a venda para um consolidador..." capital/compradores_e_saidas.md avisa que o desfecho mais comum é venda por poucos milhões, com múltiplos modestos e exigência de lucro. Correção: acrescentar "em geral por poucos milhões de reais e múltiplos modestos, com exigência de lucro".
15. Base legal com divergência omitida (3.5, linha 146): "(Lei 15.269/2025 e Decreto 13.097/2026)". setores/32 registra divergência entre fontes sobre a lei (15.235 ou 15.269). Correção: acrescentar "(as fontes divergem sobre o número da lei; checar no Planalto)".
16. Critério de decisão diferente da Fase 3 (linha 345): "Descartar se menos de 3 de 10 entrevistados relatarem um episódio recente e custoso." A Fase 3 (linha 14) exige pelo menos 6 de 10 para seguir. Entre 3 e 5 não há regra. Correção: alinhar: "Seguir se pelo menos 6 de 10 relatarem episódio custoso e pelo menos 2 pagarem; ajustar o nicho entre 3 e 5; descartar abaixo de 3."
17. Inconsistência menor: linha 15 diz que o síndico traz "de 10 a 20 prédios"; a 3.1 (linha 101) diz que ele "cuida de 5 a 30 prédios". Correção: usar "5 a 30 (em geral 10 a 20)" nos dois lugares.
18. Inconsistência menor (3.5, linha 146): cobra "20% a 40% do recuperado"; a Fase 3 (D5) testa "20% a 30%". Correção: harmonizar em "20% a 30%" ou explicar a faixa.
19. Menor (linha 3): "44 arquivos de benchmarking"; a pasta tem 47 (44 casos + 2 sínteses + ranking). Correção: "44 casos de benchmarking e 3 sínteses".
20. Menor (seção 4, linha 243): a linha 5 da tabela é o item 6 do RANKING_TROPICALIZACAO.md (SDR para imobiliárias); o item 5 é "peças e cálculos (EvenUp)", empatado em 3,8. Correção: escrever "5 (empate em 3,8 com peças jurídicas para contencioso de massa)".

**fase1_triagem.md**
21. Filtro aplicado errado (seção 5, linhas 115 a 140): o filtro é "capital maior ou igual a 4, juros maior ou igual a 3 e média maior ou igual a 3,5", mas a tabela inclui Reciclagem (capital 3) e Govtech (capital 3) e omite Agro: rastreabilidade, EUDR e carbono (capital 4, juros 3, média 3,63), que passa. Correção: remover as linhas "Reciclagem e resíduos | 3,63" e "Govtech | 3,50" (ou mudar o filtro para capital maior ou igual a 3) e incluir "Agro: rastreabilidade e EUDR | 3,63 | Conformidade EUDR e identificação de bovinos com data marcada".
22. Conferido por script: as 52 médias, os desempates e as médias por grande setor estão corretos (Logística 3,125 aparece como 3,12; pelo arredondamento usual seria 3,13, irrelevante).

**fase2_aprofundamento.md**
23. Caminho absoluto de raiz (linha 642): "benchmarking interno /benchmarking/eua_19_gusto_pilot_pme.md". Correção: "benchmarking/eua_19_gusto_pilot_pme.md" (relativo).
24. URLs externas com sufixo suspeito (linhas 624 e 1338): "https://www.omie.com.br/blog/inadimplencia-empresarial-recorde/index.md" e ".../sondagem-reforma-tributaria-custos-contabilidade/index.md". Provável artefato; correção: remover "/index.md" após conferir.
25. Ranking e seleção conferidos: as 10 notas batem com o relatório (4,22; 4,22; 4,00; 4,00; 3,90; 3,89; 3,89; 3,89; 3,78; 3,78) e os cálculos de tamanho reproduzidos no relatório (195 mi, 18,6 mi, 6,7 mi, 540 mi, 430 mi, 3,75 mi, 6 mi, 180 mi) conferem com as fichas. Menor: linha 135 diz que D9 usa "o contador como canal", mas em D9 o contador é o cliente.

**fase3_validacao.md**
26. Sem links quebrados nem caminhos absolutos. Ver item 16 (critério de continuidade divergente do relatório) e item 18 (faixa de êxito em energia). Menor: preço de teste do caixa (R$ 400 a R$ 600 por mês, D3) é metade do preço da solução no relatório (R$ 800 a R$ 1.500); vale dizer no relatório que o piloto tem preço reduzido.

### No benchmarking (não corrigido, com motivo)
- Lei 15.352/2026 (ANPD agência) em eua_15: não verificada; mantida por vir de fonte citada.
- Datas das rodadas de Blip, DPOnet, Quero Quitar e Monest (valor R$ 3,2 mi ou R$ 32 mi): sem orçamento de busca para confirmar; já marcadas como não confirmadas.
- eua_14 e o panorama apoiam Sierra (US$ 15,8 bi) só em agregadores: mantido com o rótulo existente.

## (c) Números importantes que seguem sem confirmação
- Sierra: US$ 950 mi a US$ 15,8 bi (agregadores). Gusto: receita acima de US$ 1 bi (fonte secundária). Long Lake: US$ 600 mi (Dealroom).
- Udaan: avaliação pós-money de US$ 1,8 bi x queda de 59% (incompatíveis). DeHaat: prejuízo FY24 (1.133 ou 1.331 crore). Kavak: Série F de US$ 300 mi em fev/2026 (LinkedIn e agregadores).
- Monest: aporte de R$ 3,2 mi ou R$ 32 mi.
- Premissas de mercado do relatório sem fonte: 1 milhão de PMEs-alvo, 300 mil PMEs de 10 a 99 empregados (RAIS), 300 a 500 mil empresas de R$ 3 a 50 mi, 20 mil empresas com frota em SP, 20 mil UCs Grupo A em SP, 2 mil empresas com mais de 500 funcionários, 20% de condomínios com síndico profissional.
- PE 2025 de R$ 50,1 bi (origem não identificada com certeza).
- Suspensão de multas da NR-1 pelo STF (fonte única).

## (d) Sugestões de mudança de nota
- Nenhuma nota de setor alterada (fora do escopo deste bloco). Na Fase 1, o problema é o filtro da seção 5 (item 21), não as notas.
- RANKING_TROPICALIZACAO.md: notas conferidas; sem sugestão de mudança.
