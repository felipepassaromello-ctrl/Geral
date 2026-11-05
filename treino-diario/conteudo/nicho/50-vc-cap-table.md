---
id: nic-vc-cap-table
trilha: nicho
tipo: licao
titulo: VC - rodadas, cap table e liquidation preference
resumo: Pre-money, diluição, preferência de liquidação, anti-diluição e vesting com números.
nivel: 2
minutos: 10
ordem: 50
tags: [venture capital, cap table, liquidation preference, anti-diluição, vesting]
desafio: true
verificado: 2026-11-05
---

## Lição

### Rodadas e diluição

Em cada rodada, a startup emite novas ações para o investidor. **Pre-money** é o valor da empresa antes do aporte; **post-money** é o pre-money mais o aporte. O preço por ação é o pre-money dividido pelo número de ações existentes antes da rodada (em base totalmente diluída, se assim negociado). Como novas ações são emitidas, todos os antigos acionistas são **diluídos** na mesma proporção. Na S.A., o preço de emissão deve ser fixado sem diluição injustificada dos antigos acionistas ([LSA, art. 170, § 1º](https://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm)).

No Brasil, rodadas iniciais frequentemente usam mútuo conversível ou outros instrumentos previstos no [Marco Legal das Startups, LC 182/2021, art. 5º, § 1º](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm), que não tornam o investidor sócio até a conversão (art. 5º, § 2º).

### Liquidation preference

Na venda ou liquidação da empresa, o investidor com ações preferenciais recebe primeiro.

- **1x non-participating:** o investidor escolhe o maior entre (a) receber 1 vez o valor investido ou (b) converter e receber sua fatia pro rata. Não leva os dois.
- **1x participating:** recebe 1 vez o investido **e ainda** participa pro rata do que sobra. É mais caro para os fundadores.
- **Senioridade:** define quem recebe primeiro entre as séries (por exemplo, Série A antes do seed) ou se dividem em pé de igualdade (pari passu).

### Anti-diluição

Protege o investidor em uma **down round**, rodada a preço menor que o dele, ajustando o preço de conversão das suas preferenciais.

- **Full ratchet:** o preço de conversão cai para o preço da nova rodada. Muito agressivo.
- **Weighted average broad-based:** novo preço = preço antigo × (A + B) / (A + C), em que A são as ações em base totalmente diluída antes da rodada, B as ações que o novo dinheiro compraria ao preço antigo e C as ações efetivamente emitidas. É o padrão de mercado.

### Vesting

Os fundadores (e empregados com opções) só adquirem definitivamente suas ações com o tempo. Padrão: 4 anos, com cliff de 1 ano (nada vesta antes de 12 meses) e liberação mensal depois. Se o fundador sai antes, a empresa ou os demais podem recomprar a parcela não vestida. Em S.A., planos de opção de compra para administradores e empregados dependem de previsão no estatuto, de plano aprovado pela assembleia e de capital autorizado ([LSA, art. 168, § 3º](https://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm)).

## Exemplo

Dois fundadores têm 4.000.000 de ações cada (8.000.000 no total). Um investidor seed compra 2.000.000 de ações a R$ 1,00, aportando R$ 2 milhões; a empresa passa a ter 10.000.000 de ações.

Na Série A, o pre-money é de R$ 30 milhões, ou seja, R$ 3,00 por ação (R$ 30 milhões divididos por 10.000.000). O fundo aporta R$ 7,5 milhões e recebe 2.500.000 ações. Post-money: R$ 37,5 milhões e 12.500.000 ações. Cap table: fundadores 64%, seed 16%, Série A 20%.

Anti-diluição: se depois houver uma down round a R$ 2,00, com emissão de 3.000.000 de ações (R$ 6 milhões), o full ratchet leva o preço de conversão da Série A a R$ 2,00, e suas preferenciais passam a converter em 3.750.000 ações ordinárias. Pelo weighted average broad-based: R$ 3,00 × (12.500.000 + 2.000.000) / (12.500.000 + 3.000.000) = cerca de R$ 2,81 (R$ 2,8065), o que dá cerca de 2.672.414 ações. A diferença para os fundadores é grande.

Vesting: um fundador com 4.000.000 de ações, 4 anos de vesting e cliff de 1 ano, que sai no mês 18, tem 4.000.000 × 18/48 = 1.500.000 ações vestidas.

## No seu trabalho

Em term sheets e acordos de investimento, os números que o sócio vai perguntar primeiro são: pre-money, tamanho do pool de opções (e se entra no pre-money), múltiplo e tipo da preferência, anti-diluição e vesting dos fundadores. Monte sempre um cap table pro forma em planilha antes de revisar a minuta.

## Quiz

### Com 1x non-participating, o investidor recebe na saída:
- [ ] O valor investido mais a fatia pro rata
- [x] O maior entre o valor investido e a fatia pro rata após conversão
- [ ] Sempre a fatia pro rata
- [ ] Sempre o valor investido
> Non-participating obriga a escolher: preferência ou conversão.

### Qual mecanismo de anti-diluição é mais favorável ao investidor?
- [x] Full ratchet
- [ ] Weighted average broad-based
- [ ] Weighted average narrow-based
- [ ] Nenhum, são equivalentes
> O full ratchet reduz o preço de conversão ao preço da down round, sem ponderar pelo tamanho da rodada.

### Um fundador com 4 anos de vesting e cliff de 1 ano sai no mês 10. Quantas ações vestiu?
- [x] Nenhuma
- [ ] 10/48 das ações
- [ ] 25% das ações
- [ ] Todas
> Antes do cliff nada é adquirido. Só no mês 12 vestem 12/48 de uma vez.

### Pre-money de R$ 20 milhões e aporte de R$ 5 milhões. Qual a participação do investidor?
- [ ] 25%
- [x] 20%
- [ ] 15%
- [ ] 33,3%
> Post-money = R$ 25 milhões; R$ 5 milhões / R$ 25 milhões = 20%.

## Flashcards
- Post-money :: Pre-money mais o valor aportado na rodada.
- 1x participating :: Recebe 1 vez o investido e ainda participa pro rata do saldo.
- Full ratchet :: Preço de conversão do investidor cai para o preço da down round.
- Weighted average broad-based :: Novo preço = preço antigo × (A + B) / (A + C).
- Cliff :: Período inicial sem vesting; ao final dele, a parcela acumulada vesta de uma vez.

## Caso
### Enunciado
Use o cap table do Exemplo após a Série A: fundadores com 8.000.000 de ações (4.000.000 cada), seed com 2.000.000 (aportou R$ 2 milhões, preferência 1x non-participating) e Série A com 2.500.000 (aportou R$ 7,5 milhões). A Série A é sênior ao seed. Não houve down round. A empresa é vendida por R$ 25 milhões, livres de dívida e custos. Quanto recebe cada grupo (1) se a Série A tiver 1x non-participating e (2) se tiver 1x participating?
### Resposta
(1) Série A R$ 7,5 milhões; seed R$ 3,5 milhões; fundadores R$ 14 milhões. (2) Série A R$ 11 milhões; seed R$ 2,8 milhões; fundadores R$ 11,2 milhões.
### Resolução
Cenário 1, Série A non-participating:
1. Se convertesse, a Série A teria 20% de R$ 25 milhões = R$ 5 milhões, menos que a preferência de R$ 7,5 milhões. Ela fica com a preferência: R$ 7,5 milhões.
2. Sobram R$ 17,5 milhões. Se o seed exercesse a preferência, levaria R$ 2 milhões. Se convertesse, dividiria os R$ 17,5 milhões com os fundadores na proporção de 2.000.000 para 8.000.000 de ações: 20% de R$ 17,5 milhões = R$ 3,5 milhões. Converte.
3. Fundadores: 80% de R$ 17,5 milhões = R$ 14 milhões (R$ 7 milhões cada).
4. Conferência: 7,5 + 3,5 + 14 = R$ 25 milhões.

Cenário 2, Série A participating:
1. Série A recebe primeiro R$ 7,5 milhões. Sobram R$ 17,5 milhões, divididos entre todas as 12.500.000 ações.
2. Série A: 20% de R$ 17,5 milhões = R$ 3,5 milhões; total R$ 11 milhões.
3. Seed: convertendo, 16% de R$ 17,5 milhões = R$ 2,8 milhões, mais que a preferência de R$ 2 milhões. Converte. (Se ficasse com a preferência, os R$ 15,5 milhões restantes iriam só para Série A e fundadores, e ele levaria apenas R$ 2 milhões.)
4. Fundadores: 64% de R$ 17,5 milhões = R$ 11,2 milhões (R$ 5,6 milhões cada).
5. Conferência: 11 + 2,8 + 11,2 = R$ 25 milhões.

A participação da Série A custa R$ 2,8 milhões aos fundadores (14 − 11,2) e R$ 0,7 milhão ao seed (3,5 − 2,8).

## Explique
Explique para um fundador que vai receber o primeiro term sheet a diferença entre preferência participating e non-participating.
### Pontos-chave
- Ambas garantem ao investidor o dinheiro de volta primeiro
- Non-participating: escolhe entre devolução e fatia
- Participating: leva devolução e fatia
- Em saídas médias, a diferença para o fundador é grande
### Resposta modelo
Nos dois casos, se a empresa for vendida, o investidor recebe antes de você. Com non-participating, ele escolhe: ou pega de volta o que investiu, ou abre mão disso e fica com a porcentagem dele no preço de venda. Com participating, ele pega de volta o que investiu e ainda leva a porcentagem dele no que sobrar. Em uma venda grande, a diferença dilui; em uma venda média, pode tirar milhões do seu bolso. Por isso, o padrão favorável ao fundador é 1x non-participating.

## Fontes
- [Lei 6.404/76, art. 170, § 1º](https://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm) — preço de emissão sem diluição injustificada
- [Lei 6.404/76, art. 168, § 3º](https://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm) — opção de compra de ações dentro do capital autorizado
- [Lei Complementar 182/2021, art. 5º](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm) — instrumentos de investimento em startups
