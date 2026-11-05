---
id: fin-ev-equity-bridge
trilha: financas
tipo: licao
titulo: Enterprise value, equity value e a ponte entre eles
resumo: O múltiplo dá o valor da empresa; o que o vendedor recebe é o valor das ações, depois da ponte.
nivel: 1
minutos: 8
ordem: 30
tags: [valuation, preço, cash-free debt-free]
desafio: false
verificado: 2026-11-05
---

## Lição

### Dois valores diferentes

- **Enterprise value (EV)**, ou valor da firma, é o valor do negócio operacional, independente de como é financiado. É o que pertence a todos os financiadores: acionistas e credores. Múltiplos como EV/EBITDA e o fluxo de caixa descontado para a firma chegam a EV.
- **Equity value**, ou valor do patrimônio, é o que pertence aos acionistas. É o que efetivamente se paga pelas ações ou quotas.

A analogia clássica é a casa financiada: a casa vale R$ 1 milhão (EV), mas se há R$ 600 mil de financiamento, o dono só tem R$ 400 mil (equity). Quem compra a casa e quita o financiamento paga, no total, R$ 1 milhão.

### A ponte

A ponte (bridge) parte do EV e chega ao equity:

Equity = EV − dívida líquida − itens equivalentes a dívida (debt-like) + itens equivalentes a caixa (cash-like) ± ajuste de capital de giro − participação de não controladores + investimentos não consolidados.

- **Dívida líquida**: empréstimos, debêntures e outras dívidas financeiras, menos caixa e aplicações.
- **Debt-like**: obrigações que não são dívida bancária, mas funcionam como tal para quem compra (dividendos declarados e não pagos, impostos atrasados, certas provisões).
- **Ajuste de capital de giro**: diferença entre o capital de giro entregue e o nível normal (target).
- **Não controladores**: se a alvo consolida uma subsidiária que não é 100% dela, o EBITDA consolidado inclui a parte dos minoritários; essa parte sai na ponte.
- **Investimentos não consolidados**: participação em coligada não entra no EBITDA, então é somada à parte.

### Cash-free, debt-free

A forma mais comum de cotar preço em ofertas é "cash-free, debt-free, com nível normal de capital de giro". O comprador oferece um EV e o contrato define a mecânica que transforma esse EV no preço das ações no fechamento. A briga da negociação migra, então, para as definições: o que é dívida, o que é caixa, qual é o capital de giro normal.

## Exemplo

A alvo tem EBITDA de R$ 40 milhões e as partes acordam múltiplo de 8 vezes: EV = **R$ 320 milhões**.

Ponte:
- dívida bruta de R$ 120 milhões menos caixa de R$ 30 milhões: dívida líquida de R$ 90 milhões
- dividendos declarados e não pagos: R$ 10 milhões
- contingências prováveis provisionadas, tratadas como dívida: R$ 5 milhões
- participação de não controladores numa subsidiária consolidada: R$ 15 milhões
- participação de 30% numa coligada, avaliada em R$ 12 milhões

Equity = 320 − 90 − 10 − 5 − 15 + 12 = **R$ 212 milhões**. Se o comprador adquire 60% das ações, paga 60% × 212 = R$ 127,2 milhões.

Note que o comprador pagou "8 vezes EBITDA", mas o cheque aos vendedores corresponde a menos de dois terços do EV. A diferença está na ponte.

## No seu trabalho

- **Cláusula de preço.** Em SPAs com ajuste, o preço costuma ser escrito como "Valor da Empresa menos Dívida Líquida mais/menos Ajuste de Capital de Giro", com cada termo definido no contrato. Sua revisão das definições afeta o preço diretamente.
- **Consistência com o múltiplo.** Se o EBITDA usado no múltiplo é consolidado, a ponte precisa tirar não controladores. Se um item ficou fora do EBITDA (coligada), pode entrar como ativo na ponte.
- **Compra de participação parcial.** Ao calcular o preço por ação, aplique o percentual sobre o equity, não sobre o EV.
- **Carta de oferta.** Uma proposta não vinculante "de R$ 300 milhões" pode ser EV ou equity. Pergunte qual.

## Quiz

### O múltiplo EV/EBITDA aplicado ao EBITDA da alvo resulta em:
- [x] enterprise value, que ainda precisa da ponte para chegar ao preço das ações
- [ ] equity value, que é o preço das ações
- [ ] dívida líquida
- [ ] valor patrimonial contábil
> O EBITDA é anterior a juros, então remunera todos os financiadores. O múltiplo gera EV.

### Por que a participação de não controladores é subtraída na ponte?
- [ ] porque é uma dívida bancária
- [x] porque o EBITDA consolidado inclui 100% da subsidiária, mas parte dela pertence a terceiros
- [ ] porque é exigência da Lei das S.A.
- [ ] porque reduz o capital de giro
> O múltiplo valorizou o EBITDA inteiro da subsidiária; a fatia dos minoritários não é do vendedor.

### "Cash-free, debt-free" significa que:
- [ ] a alvo precisa ser entregue sem caixa algum
- [ ] o comprador assume as dívidas sem desconto no preço
- [x] o preço ofertado é um EV, e caixa e dívida existentes no fechamento ajustam o valor pago pelas ações
- [ ] o vendedor não pode distribuir dividendos
> Na prática, o vendedor pode quitar dívidas e retirar caixa, ou deixá-los, e o preço se ajusta.

### EV de R$ 200 milhões, dívida líquida de R$ 50 milhões e coligada não consolidada de R$ 10 milhões. Qual o equity?
- [ ] R$ 140 milhões
- [x] R$ 160 milhões
- [ ] R$ 240 milhões
- [ ] R$ 260 milhões
> 200 − 50 + 10 = 160. A coligada não está no EBITDA, então é somada.

## Flashcards
- Enterprise value :: Valor do negócio operacional, para todos os financiadores (acionistas e credores).
- Equity value :: Valor que pertence aos acionistas; é o preço das ações.
- Ponte EV → equity :: EV − dívida líquida − debt-like + cash-like ± ajuste de capital de giro − não controladores + investimentos não consolidados.
- Cash-free, debt-free :: Preço cotado em EV; caixa e dívida do fechamento ajustam o pagamento.
- Coligada na ponte :: Somada, porque o resultado dela não está no EBITDA usado no múltiplo.

## Caso
### Enunciado
O comprador acordou EV de R$ 500 milhões. No fechamento, a alvo tem empréstimos bancários de R$ 180 milhões, debêntures de R$ 70 milhões, caixa de R$ 60 milhões e IR atrasado de R$ 8 milhões, tratado como debt-like. O capital de giro entregue foi de R$ 45 milhões contra target de R$ 50 milhões, com ajuste peso a peso. Calcule o equity value e o preço de uma participação de 80%.
### Resposta
Equity de R$ 297 milhões; 80% valem R$ 237,6 milhões.
### Resolução
1. Dívida líquida = 180 + 70 − 60 = R$ 190 milhões.
2. Ajuste de capital de giro = 45 − 50 = −R$ 5 milhões.
3. Equity = 500 − 190 − 8 − 5 = R$ 297 milhões.
4. Participação de 80% = 0,8 × 297 = R$ 237,6 milhões.

## Explique
Explique para um cliente empresário por que ele vendeu "por R$ 500 milhões" e vai receber bem menos.
### Pontos-chave
- R$ 500 milhões é o valor do negócio inteiro (EV)
- quem compra herda as dívidas, então elas saem do preço
- caixa deixado na empresa volta ao vendedor
- ajustes de capital de giro e itens tipo dívida também entram
### Resposta modelo
Os R$ 500 milhões são o valor da empresa como negócio, como se ela não tivesse dívida nem caixa. Mas a empresa tem R$ 250 milhões de dívidas e R$ 60 milhões em caixa. O comprador vai assumir essas dívidas, então desconta o saldo líquido do que paga pelas ações; o caixa, ao contrário, é somado. Também se desconta imposto atrasado e a diferença de capital de giro abaixo do normal. O que sobra, R$ 297 milhões, é o valor das suas quotas, e você recebe pelos 80% que está vendendo.

## Fontes
- [CPC 26 (R1) — Apresentação das Demonstrações Contábeis (participação de não controladores no balanço consolidado)](https://conteudo.cvm.gov.br/cvm_institucional/export/sites/cvm/menu/regulados/normascontabeis/cpc/CPC_26_R1_rev_14.pdf)
- [Aswath Damodaran — material didático de valuation (NYU Stern)](https://pages.stern.nyu.edu/~adamodar/)
- Mecânica cash-free, debt-free e estrutura da cláusula de preço: prática de mercado.
