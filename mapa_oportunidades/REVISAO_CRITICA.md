# Segunda passada crítica: o que foi revisado, corrigido e o que segue sem confirmação

Data: 31/10/2026

## 1. Como foi feita
Três revisores independentes leram todo o material com um roteiro fixo:
- números sem fonte;
- referências quebradas;
- dados antigos sem marca;
- contradições internas e entre arquivos;
- travessões;
- afirmações fortes sem base;
- caminhos de arquivo;
- coerência entre notas e dados.

Os dois primeiros revisores corrigiram direto os arquivos de `setores/` e `capital/`, e o terceiro corrigiu `benchmarking/`. O terceiro também conferiu os quatro documentos de entrega (relatório final e Fases 1 a 3), e eu apliquei as correções sugeridas. Os relatórios completos estão em [`_trabalho/revisao_setores_a.md`](_trabalho/revisao_setores_a.md), [`_trabalho/revisao_setores_b.md`](_trabalho/revisao_setores_b.md) e [`_trabalho/revisao_benchmarking_e_entregas.md`](_trabalho/revisao_benchmarking_e_entregas.md).

Checagens automáticas (por script) depois das correções:
- Nenhum travessão fora de URLs.
- Nenhum caminho absoluto em links.
- Nenhum link relativo quebrado nos documentos de entrega.
- As 52 médias da Fase 1, as médias por grande setor e as 10 notas da Fase 2 conferem com as tabelas.

## 2. Principais correções feitas

**Datas e macro**
- O 2º turno foi em **25/10/2026**, não em 26/10. Corrigido nos arquivos de capital, no setor 28 e nos briefings. A queda da bolsa foi em 26/10.
- A Selic aparecia desatualizada (14% ou "não confirmada") nos setores 05, 09, 12, 18 e 21. Foi padronizada em **13,75% desde 16/09/2026**.
- O Focus de 26/10/2026 citava um link de uma edição de 2024. O link foi removido e os números foram reconfirmados em outra fonte, de confiabilidade média. Ainda convém conferir no PDF do BCB.

**Números que não eram o que pareciam**
- **Farmácias (setor 14):** os R$ 240,97 bi (+10,88%) são o acumulado de 12 meses até out/2025 (IQVIA via Febrafar), não o ano de 2025. Corrigido em quatro trechos.
- **Compradores e saídas:** o status dizia "10 operações confirmadas", mas Rede D'Or/Fleury é negociação e Nubank/Porto Real só aparece em agregador. Corrigido.
- **Benchmarking EUA:**
  - Ramp: US$ 44 bi em jun/2026 e US$ 60 bi em out/2026. Antes estava tudo como US$ 60 bi.
  - Listas do TechCrunch: 49, não 55.
  - Múltiplos de receita: trocados pela conta explícita (Harvey passa de 50 vezes).
- **Delve:** retirada a frase "10x em seis meses", sem base em nenhuma fonte.

**Dados antigos sem marca:** cerca de 40 trechos receberam a marca [DADO ANTIGO] (Censo Escolar 2024, valuation do QuintoAndar, rodadas da Superlógica, dados do Semesp, casos históricos de fracasso e outros).

**Afirmações fortes suavizadas** (por exemplo "domina", "líder", "sem líder", "ninguém faz", "maior número de dentistas do mundo"): reescritas como ANÁLISE ou trocadas por "não encontramos nas buscas".

**Relatório final:**
- Os tamanhos de mercado que supunham 100% de adoção agora aparecem como **teto teórico**, com a conta inteira.
- O tamanho do escritório contábil AI-native foi corrigido de "centenas de milhões" para R$ 750 mi a R$ 1,25 bi por mês, como teto.
- O critério de decisão das 4 semanas foi alinhado com a Fase 3: seguir com pelo menos 6 de 10, ajustar com 3 a 5 e descartar com menos de 3.
- Foi corrigida a contradição sobre qual recomendação resiste à queda de juros. A Recomendação 2 é a mais exposta a esse cenário.
- Foi incluída a ressalva sobre o número de private equity (R$ 50,1 bi em 2025, origem não identificada com certeza).

**Fase 1:** o filtro "capital limitado" incluía reciclagem e govtech, que têm nota 3 em capital, e deixava de fora agro rastreabilidade, que passa no filtro. Corrigido.

**Fase 2:**
- Caminhos absolutos trocados por relativos.
- URLs com sufixo "/index.md" corrigidas.
- Corrigida a frase que dizia que o contador é canal em D9, quando ali ele é o cliente.

## 3. Sugestões de mudança de nota que NÃO foram aplicadas, e o efeito se fossem

Os revisores sugeriram ajustes em algumas notas. Não apliquei porque são julgamentos defensáveis dos dois lados e as notas originais estão justificadas nos arquivos. O efeito de aplicar todas está abaixo, para você decidir.

| Subsetor | Sugestão | Média atual | Média se aplicada |
|---|---|---|---|
| 18 Crédito PME | Capital 2 para 4; regulação 2 para 3 (a rubrica avalia quem vende serviço ao setor) | 2,38 | 2,75 |
| 19 Pagamentos | Capital 2 para 4; regulação 2 para 3 | 2,13 | 2,50 |
| 17 Pet | Crescimento 3 para 2 (crescimento real perto de zero em 2025) | 3,38 | 3,25 |
| 06 Hortifruti | Crescimento 3 para 2 (volume e valor caíram em 2025) | 3,88 | 3,75 |
| 10 Clínicas | Crescimento 4 para 3 (limítrofe) | 3,75 | 3,63 |
| 46 Educação corporativa | Crescimento 4 para 3 (projeção de 2024 e fonte secundária) | 4,00 | 3,88 |
| 43 Automotivo pós-venda | Digitalização 5 para 4 (dado de empresa que vende software) | 3,88 | 3,75 |
| 51 Reciclagem | Concorrência 4 para 3 | 3,63 | 3,50 |

**Teste de sensibilidade (ANÁLISE).** Com todas as sugestões aplicadas:
- O top 8 da Fase 1 perderia **automotivo pós-venda** e ganharia **fitness e bem-estar**, por desempate entre subsetores empatados em 3,75. Os outros sete continuam.
- A principal dor de fitness é a NR-1 psicossocial, que já está no top 10 (D4) e na Recomendação 3.
- O efeito prático seria trocar D8 (frotas pequenas) por outra dor ligada à NR-1 ou à retenção de alunos.
- **As três recomendações finais não mudam.**

## 4. O que segue sem confirmação (cuidado ao usar)

**Por limitação de método:** nenhuma página foi aberta na íntegra, porque a rede da sessão bloqueou o acesso. Todos os números vêm do texto exibido nos resultados de busca, sempre com o link da página. Para decisões, confira na fonte primária.

**Números com divergência ou fonte fraca:**
- **Private equity em 2025:** R$ 50,1 bi, origem não identificada com certeza, contra R$ 13,3 bi em 2024.
- **Patrimônio dos FIDCs:** entre R$ 741 bi e mais de R$ 1 tri, conforme a série.
- **Recuperações judiciais de MPMEs no 1º semestre de 2026:** a cifra de 6.341 é incompatível com o recorde anual de 2.273 pedidos em 2024. Métrica a esclarecer.
- **Roubo de cargas em 2025:** entre 8.570 e 8.750 ocorrências e entre R$ 900 mi e mais de R$ 1 bi.
- **Odontoprev:** margem líquida de 23% contra cerca de 17% pela própria conta.
- **Darwin e 180 Seguros:** os valores individuais das rodadas não fecham com o total.
- **Lei da abertura do mercado livre de energia:** as fontes divergem entre 15.235 e 15.269.
- **Lei 15.485/2026**, que teria convertido a MP do frete: uma só fonte.
- **NR-1:** a suspensão de multas pelo STF entre jun e set/2026 tem fonte única.
- **Decreto 13.012/2026**, sobre o monitoramento eletrônico na segurança privada: o prazo e a multa ao contratante vêm de uma ou duas fontes secundárias.
- **Oficinas:** 92 mil independentes e 65% sem sistema, dados de empresa do setor.
- **Aquisições:** Bionexo/Philips (R$ 1 bi) com data divergente; Nubank/Porto Real só em agregador.

**Premissas de tamanho de mercado sem fonte**, usadas como ordem de grandeza e sempre rotuladas como ANÁLISE:
- 1 milhão de PMEs-alvo para BPO.
- 300 mil PMEs de 10 a 99 empregados.
- 300 mil a 500 mil empresas de R$ 3 a 50 mi.
- 20 mil empresas com frota em SP.
- 20 mil unidades consumidoras do Grupo A em SP.
- 2 mil empresas com mais de 500 funcionários.
- 20% de condomínios com síndico profissional.

**Lacunas de dados regionais:** Contas Regionais de 2024, PIB por estado com recorte setorial e distribuição regional da maioria dos subsetores. Onde houve dado regional, ele está no arquivo do subsetor.
