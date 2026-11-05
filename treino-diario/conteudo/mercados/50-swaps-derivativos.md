---
id: mer-swaps-derivativos
trilha: mercados
tipo: licao
titulo: Swaps e derivativos básicos
resumo: Swap DI x pré, hedge cambial com NDF, notional, ajuste e o básico de stock options.
nivel: 2
minutos: 9
ordem: 50
tags: [derivativos, swap, hedge, câmbio, stock options]
desafio: true
verificado: 2026-11-05
---

## Lição

Um **derivativo** é um contrato cujo valor depende de outra variável: uma taxa de juros, o câmbio, o preço de uma ação ou de uma commodity. No Brasil, contratos derivativos são valores mobiliários ([Lei 6.385/1976, art. 2º, VIII](https://www.planalto.gov.br/ccivil_03/leis/l6385compilada.htm)). Em M&A e financiamentos, eles aparecem como hedge da dívida do alvo, como cláusula de vencimento antecipado cruzado e, às vezes, como contingência relevante.

### Swap

No **swap**, duas partes trocam a variação de dois indexadores sobre um mesmo valor de referência, o **notional** (valor nocional). O notional não troca de mãos; ele só serve de base de cálculo. Na data de liquidação, calcula-se quanto cada ponta rendeu e paga-se apenas a **diferença**, o **ajuste**.

O caso mais comum no Brasil é o **swap DI x pré**: uma empresa com dívida em CDI (taxa do Certificado de Depósito Interbancário, que acompanha a Selic) tem medo de alta de juros. Ela contrata um swap em que **recebe CDI** e **paga taxa pré-fixada**. Se o CDI subir, o que ela recebe no swap compensa o aumento da dívida. Se cair, ela paga no swap o que economizou na dívida. O resultado combinado é um custo próximo do pré-fixado: ela troca incerteza por previsibilidade.

### Hedge cambial

Uma empresa que deve dólares (importação, dívida externa) perde se o real se desvalorizar. Instrumentos usuais:

- **NDF** (non-deliverable forward, termo de moeda sem entrega física): fixa hoje uma taxa de câmbio futura; no vencimento, liquida-se só a diferença em reais.
- **Swap cambial** (dólar mais cupom x CDI) para dívidas mais longas.
- **Opções de câmbio**, que protegem contra a alta pagando um prêmio, sem abrir mão do ganho se o dólar cair.

### Riscos e documentação

O derivativo de balcão costuma ser contratado sob um **contrato global de derivativos** com o banco, com limites de crédito, chamadas de margem ou garantias e cláusulas de vencimento antecipado. O hedge reduz o risco de mercado, mas cria risco de contraparte e de liquidez (o ajuste negativo precisa ser pago em caixa).

### Stock options em uma linha

A **opção de compra** dá o direito, não a obrigação, de comprar uma ação por um preço fixado (o **strike**). Em companhias, planos de opção para administradores e empregados dependem de previsão no estatuto e de plano aprovado pela assembleia, dentro do capital autorizado ([Lei 6.404/76, art. 168, § 3º](https://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm)). O **valor intrínseco** é a diferença entre o preço da ação e o strike, quando positiva. Sobre a tributação, o STJ decidiu em 2024, em recurso repetitivo, que os planos de stock option têm natureza mercantil, com imposto de renda apenas sobre o ganho de capital na venda das ações (verificar o número do tema e o alcance).

## Exemplo

Uma importadora deve US$ 10 milhões a pagar em 6 meses. Contrata uma NDF comprada a R$ 5,50 por dólar. No vencimento, o dólar está a R$ 5,80. O fornecedor custa R$ 58 milhões em vez de R$ 55 milhões, mas a NDF paga à empresa (5,80 − 5,50) × 10 milhões = R$ 3 milhões. O custo efetivo fica travado em R$ 55 milhões. Se o dólar caísse a R$ 5,30, a empresa pagaria R$ 2 milhões na NDF e economizaria os mesmos R$ 2 milhões no fornecedor.

Stock options: um executivo tem 100.000 opções com strike de R$ 10,00, e a ação vale R$ 16,00. O valor intrínseco é (16 − 10) × 100.000 = R$ 600 mil.

## No seu trabalho

Na due diligence, peça os contratos globais de derivativos e as posições em aberto com o valor de mercado (marcação a mercado) na data-base. Derivativos com ajuste negativo relevante podem entrar como dívida na definição de dívida líquida do SPA, e a mudança de controle pode ser evento de vencimento antecipado.

## Quiz

### No swap, o notional:
- [ ] É pago pelas duas partes no início
- [x] Serve só como base de cálculo e não troca de mãos
- [ ] É o valor do ajuste final
- [ ] É sempre em dólares
> Liquida-se apenas a diferença entre as pontas, calculada sobre o notional.

### Uma empresa com dívida em CDI que teme alta de juros deve contratar um swap em que:
- [x] Recebe CDI e paga pré
- [ ] Recebe pré e paga CDI
- [ ] Recebe dólar e paga CDI
- [ ] Paga CDI nas duas pontas
> A ponta recebida em CDI compensa a dívida em CDI, e o custo final fica próximo do pré.

### Em uma NDF comprada a R$ 5,50, com dólar a R$ 5,30 no vencimento sobre US$ 1 milhão, a empresa:
- [ ] Recebe R$ 200 mil
- [x] Paga R$ 200 mil
- [ ] Não paga nada
- [ ] Recebe US$ 200 mil
> (5,30 − 5,50) × 1 milhão = −R$ 200 mil, liquidados em reais.

### Qual o valor intrínseco de uma opção com strike de R$ 20 se a ação vale R$ 18?
- [ ] R$ 2 negativos
- [x] Zero
- [ ] R$ 2
- [ ] R$ 18
> Ninguém exerce para comprar por R$ 20 o que vale R$ 18; o valor intrínseco não fica negativo.

## Flashcards
- Notional :: Valor de referência do derivativo, que não é trocado; serve de base de cálculo.
- Ajuste do swap :: Diferença líquida entre o que cada ponta rendeu, paga por quem ficou devendo.
- Swap DI x pré (recebe DI, paga pré) :: Transforma dívida em CDI em custo próximo do pré-fixado.
- NDF :: Termo de moeda sem entrega física; liquida a diferença em reais entre a taxa contratada e a de mercado.
- Valor intrínseco da opção de compra :: Maior entre zero e (preço da ação menos strike).

## Caso
### Enunciado
Uma empresa tem dívida de R$ 50 milhões em 100% do CDI e contrata um swap com notional de R$ 50 milhões: recebe 100% do CDI e paga 12,00% pré-fixado. Simplificação declarada: o swap tem um único período de 1 ano (252 dias úteis), com liquidação só no vencimento; a taxa pré já está expressa como fator do período (1,1200); o CDI acumulado no período foi de 13,00% (fator 1,1300); sem custos, tributos ou garantias. Qual o ajuste do swap e quem paga? E se o CDI acumulado tivesse sido de 11,00%?
### Resposta
Com CDI de 13,00%, a empresa recebe R$ 500 mil; com CDI de 11,00%, a empresa paga R$ 500 mil.
### Resolução
1. Ponta recebida (CDI): 50.000.000 × 1,1300 = R$ 56.500.000.
2. Ponta paga (pré): 50.000.000 × 1,1200 = R$ 56.000.000.
3. Ajuste: 56.500.000 − 56.000.000 = R$ 500.000 a favor da empresa. O banco paga.
4. Efeito combinado: a dívida custou R$ 6.500.000 de juros (13% de R$ 50 milhões); menos R$ 500.000 recebidos no swap, o custo líquido é R$ 6.000.000, exatamente 12%.
5. Com CDI de 11,00%: ponta CDI = 50.000.000 × 1,1100 = R$ 55.500.000; ponta pré = R$ 56.000.000; ajuste = −R$ 500.000, pago pela empresa. A dívida custou R$ 5.500.000; somando os R$ 500.000 pagos no swap, o custo é de novo R$ 6.000.000, ou 12%.

Na prática, o CDI é acumulado dia a dia e a taxa pré é capitalizada por dias úteis sobre base 252; a lógica do ajuste é a mesma.

## Explique
Explique para um cliente do setor de varejo por que ele pode "perder dinheiro" no swap e ainda assim o hedge ter funcionado.
### Pontos-chave
- O objetivo é travar custo, não ganhar
- Perda no swap coincide com ganho na dívida
- Resultado combinado igual à taxa pré contratada
- Riscos remanescentes: contraparte e caixa para pagar o ajuste
### Resposta modelo
O swap foi contratado para que sua dívida em CDI custasse, no fim, uma taxa fixa conhecida. Se os juros caem, sua dívida fica mais barata, mas você paga a diferença no swap. Se os juros sobem, a dívida encarece, mas o banco paga a diferença. Nos dois casos, somando dívida e swap, o custo fica igual à taxa fixa combinada. Então o ajuste negativo não é prejuízo do hedge: é o preço da previsibilidade. O cuidado é ter caixa para pagar esse ajuste quando ele vier.

## Verificar
- Número do tema repetitivo e alcance da decisão do STJ de 2024 sobre a natureza mercantil dos planos de stock option para fins de imposto de renda.

## Fontes
- [Lei 6.385/1976, art. 2º, VIII](https://www.planalto.gov.br/ccivil_03/leis/l6385compilada.htm) — contratos derivativos como valores mobiliários
- [Lei 6.404/76, art. 168, § 3º](https://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm) — opção de compra de ações para administradores, empregados e prestadores de serviço
