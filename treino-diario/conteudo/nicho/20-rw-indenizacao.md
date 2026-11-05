---
id: nic-rw-indenizacao
trilha: nicho
tipo: licao
titulo: R&W, indenização e mecanismos de garantia
resumo: De minimis, basket, cap, survival, sandbagging, escrow e seguro de R&W em um só mapa.
nivel: 2
minutos: 9
ordem: 20
tags: [m&a, spa, indenização, escrow, w&i]
desafio: true
verificado: 2026-11-05
---

## Lição

As **declarações e garantias** (R&W, representations and warranties) descrevem a empresa no momento do signing e, em geral, também no closing. Se uma delas for falsa e isso causar perda ao comprador, entra a cláusula de **indenização**. O SPA então define quanto, por quanto tempo e de onde vem o dinheiro.

### Limites de valor

- **De minimis:** valor mínimo por reclamação. Perdas individuais abaixo dele são simplesmente ignoradas e, na redação mais comum, nem contam para o basket.
- **Basket:** franquia agregada. As perdas elegíveis só passam a ser indenizáveis quando sua soma supera o basket. Existem dois modelos:
  - **Deductible (franquia dedutível):** o vendedor paga apenas o que excede o basket.
  - **Tipping (first dollar):** ultrapassado o basket, o vendedor paga tudo desde o primeiro real.
- **Cap:** teto total da indenização, frequentemente expresso como percentual do preço. Costuma haver exceções: declarações fundamentais (titularidade das ações, capacidade, poderes) e, muitas vezes, tributos e fraude ficam fora do cap ou têm cap próprio.

### Prazo (survival)

O survival define até quando o comprador pode notificar uma reclamação. É comum ter um prazo geral curto (18 a 24 meses) e prazos mais longos para tributário, trabalhista e previdenciário, ligados aos prazos prescricionais e decadenciais dessas matérias. Esses números são prática de mercado, não regra legal.

### Sandbagging

É a pergunta: o comprador que já sabia da inexatidão antes do signing pode pedir indenização? Uma cláusula **pro-sandbagging** diz que sim; uma **anti-sandbagging** diz que não. No Brasil não há regra legal específica, e a discussão costuma passar pela boa-fé objetiva ([Código Civil, art. 422](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm)). Por isso muitos SPAs tratam o tema expressamente e, com frequência, excluem da indenização o que foi revelado nos disclosure schedules.

### De onde vem o dinheiro

- **Escrow:** parte do preço fica depositada em conta vinculada (escrow account) em um banco, liberada ao vendedor em parcelas, conforme o survival.
- **Holdback:** o comprador simplesmente retém parte do preço e a compensa com eventuais perdas. É mais barato, mas o vendedor fica com risco de crédito do comprador.
- **Garantias pessoais e reais:** fiança dos vendedores, alienação fiduciária de ações.
- **W&I insurance** (warranty and indemnity insurance, também chamado R&W insurance): uma seguradora cobre perdas por violação de declarações, em troca de prêmio. Permite ao vendedor sair com pouca ou nenhuma retenção. Em regra, a apólice exclui o que o comprador já sabia e contingências identificadas na due diligence.

## Exemplo

Preço de R$ 25 milhões. De minimis de R$ 50 mil por reclamação, basket de 1% do preço (R$ 250 mil) e cap de 10% do preço (R$ 2,5 milhões). Surge uma única perda elegível de R$ 400 mil. No modelo deductible, o vendedor paga R$ 150 mil (R$ 400 mil menos R$ 250 mil). No modelo tipping, paga os R$ 400 mil inteiros, porque o basket foi ultrapassado. Uma diferença de R$ 250 mil decorrente de uma palavra no contrato.

## No seu trabalho

Ao preencher a tabela de comparação de minutas (issues list), separe sempre: de minimis, basket (e se é deductible ou tipping), cap geral, caps especiais, survival por matéria e mecanismo de garantia. É o bloco que o sócio negocia ponto a ponto.

## Quiz

### No modelo tipping, uma vez ultrapassado o basket, o vendedor paga:
- [ ] Apenas o excesso sobre o basket
- [x] Todas as perdas elegíveis desde o primeiro real, até o cap
- [ ] Somente perdas acima do de minimis individual
- [ ] Metade das perdas
> No tipping o basket funciona como gatilho; no deductible, como franquia dedutível.

### O que é sandbagging?
- [ ] Reter parte do preço sem conta vinculada
- [ ] Ocultar contingências do data room
- [x] O direito de o comprador pedir indenização por inexatidão que já conhecia antes do signing
- [ ] O prazo de sobrevivência das declarações
> Cláusulas pro ou anti-sandbagging tratam exatamente desse conhecimento prévio.

### Qual a diferença essencial entre escrow e holdback?
- [ ] Não há diferença
- [x] No escrow o dinheiro fica com um terceiro (banco); no holdback o comprador retém o valor
- [ ] O holdback só é usado em operações de companhia aberta
- [ ] O escrow não pode ser liberado em parcelas
> No holdback, o vendedor assume o risco de crédito do comprador.

### Por que declarações fundamentais costumam ficar fora do cap geral?
- [ ] Porque a lei proíbe cap para elas
- [x] Porque tratam do núcleo do negócio, como titularidade das ações, e a perda pode ser o próprio preço
- [ ] Porque são cobertas automaticamente pelo W&I
- [ ] Porque nunca são violadas
> Se o vendedor não era dono das ações, a perda do comprador é o preço inteiro. Daí cap igual ao preço ou sem cap.

## Flashcards
- De minimis :: Valor mínimo por reclamação; perdas menores são ignoradas e, em geral, não contam para o basket.
- Basket deductible :: O vendedor paga só o que excede a franquia agregada.
- Basket tipping :: Ultrapassada a franquia, o vendedor paga tudo desde o primeiro real.
- Survival :: Prazo para o comprador notificar reclamações; costuma ser maior para tributário e trabalhista.
- W&I insurance :: Seguro que cobre perdas por violação de declarações; em regra exclui o que o comprador já sabia.

## Caso
### Enunciado
Em um SPA com preço de R$ 25 milhões, as partes negociaram: de minimis de R$ 50 mil por reclamação (perdas abaixo dele não contam para o basket), basket de 1% do preço e cap de 10% do preço. No prazo de survival, o comprador notifica cinco perdas: A, de R$ 30 mil; B, de R$ 1.200 mil; C, de R$ 800 mil; D, de R$ 45 mil; e E, de R$ 600 mil. Todas decorrem de violações de declarações gerais (sujeitas ao cap). Calcule a indenização devida (1) se o basket for deductible e (2) se for tipping.
### Resposta
Deductible: R$ 2.350 mil. Tipping: R$ 2.500 mil (limitado pelo cap).
### Resolução
1. Basket: 1% de R$ 25 milhões = R$ 250 mil. Cap: 10% de R$ 25 milhões = R$ 2.500 mil.
2. De minimis de R$ 50 mil: A (R$ 30 mil) e D (R$ 45 mil) ficam de fora. Total notificado: 30 + 1.200 + 800 + 45 + 600 = R$ 2.675 mil; elegível: 1.200 + 800 + 600 = R$ 2.600 mil.
3. As perdas elegíveis (R$ 2.600 mil) superam o basket (R$ 250 mil).
4. Deductible: R$ 2.600 mil − R$ 250 mil = R$ 2.350 mil. Está abaixo do cap de R$ 2.500 mil, então a indenização é de R$ 2.350 mil.
5. Tipping: paga-se tudo desde o primeiro real, R$ 2.600 mil. Mas o cap é R$ 2.500 mil, então a indenização é de R$ 2.500 mil; os R$ 100 mil restantes ficam com o comprador.

## Explique
Explique para um cliente vendedor, sem formação jurídica, por que ele deve brigar por basket deductible e por um de minimis alto.
### Pontos-chave
- De minimis elimina reclamações pequenas e não as soma ao basket
- Deductible funciona como franquia de seguro: só o excesso é pago
- Tipping faz a franquia desaparecer depois de atingida
- O cap limita a exposição total, salvo exceções
### Resposta modelo
Depois da venda, o comprador pode cobrar de você perdas causadas por informações incorretas sobre a empresa. O de minimis faz com que perdas pequenas, abaixo de certo valor cada uma, sejam ignoradas, o que evita uma enxurrada de cobranças miúdas. O basket é uma franquia somada: só depois que as perdas relevantes passam desse valor é que você paga algo. No modelo deductible, você paga apenas o que excede a franquia, como em um seguro de carro. No modelo tipping, assim que a franquia é atingida, você paga tudo desde o começo. Por isso, para o vendedor, deductible e de minimis alto reduzem bastante a conta.

## Fontes
- [Código Civil, art. 422](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm) — boa-fé objetiva na conclusão e execução do contrato
