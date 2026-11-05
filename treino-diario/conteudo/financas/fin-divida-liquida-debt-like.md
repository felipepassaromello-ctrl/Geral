---
id: fin-divida-liquida-debt-like
trilha: financas
tipo: licao
titulo: Dívida líquida, debt-like e cash-like items
resumo: A definição de dívida líquida no SPA é uma lista negociada, e cada linha mexe no preço real por real.
nivel: 2
minutos: 9
ordem: 40
tags: [dívida líquida, preço, SPA, due diligence]
desafio: false
verificado: 2026-11-05
---

## Lição

Em um deal cash-free, debt-free, tudo que o contrato chamar de dívida sai do preço real por real, e tudo que chamar de caixa entra. Por isso a definição de **dívida líquida** é uma das mais negociadas do contrato de compra e venda (SPA, share purchase agreement). Não existe uma definição contábil única: é uma lista que as partes constroem.

### O núcleo

- **Dívida financeira**: empréstimos, financiamentos, debêntures, notas comerciais, juros acruados, multas de pré-pagamento, derivativos em posição passiva.
- **Caixa e equivalentes**: saldos bancários e aplicações de liquidez imediata.

### Debt-like items (itens tipo dívida)

Obrigações que não são empréstimos, mas que o comprador vai pagar com caixa que o preço pressupôs livre. Exemplos frequentes:

- **Dividendos declarados e não pagos**: o lucro já pertence ao vendedor; se o caixa sair depois do fechamento, sai do bolso do comprador.
- **Imposto de renda a pagar de períodos pré-fechamento**, parcelamentos fiscais e tributos em atraso.
- **Provisões contingenciais** (trabalhistas, fiscais, cíveis) classificadas como perda provável. Atenção ao risco de dupla recuperação: se o comprador também tem indenização específica para a mesma contingência, o contrato precisa evitar que ele receba duas vezes.
- **Passivo de arrendamento (IFRS 16 / CPC 06)**: se o múltiplo foi aplicado sobre EBITDA pós-IFRS 16 (que exclui o aluguel), o passivo de arrendamento deve entrar como dívida. Se o EBITDA é pré-IFRS 16, o aluguel já reduziu o EBITDA e incluir o passivo seria cobrar duas vezes.
- **Bônus de transação e verbas rescisórias** devidos por causa do deal, despesas do processo de venda não pagas, capex atrasado que a empresa deixou de fazer.

### Cash-like items e limites ao caixa

Do lado do caixa, o comprador costuma excluir:

- **Trapped cash**: caixa que existe, mas não pode ser usado ou distribuído livremente (subsidiária em país com controle de câmbio, depósitos judiciais, contas vinculadas em garantia).
- **Caixa mínimo operacional**: o valor que a empresa precisa ter para girar. O comprador argumenta que esse caixa faz parte do negócio comprado pelo EV e não deveria ser pago à parte.
- Cheques emitidos e não compensados (que reduzem o caixa).

O vendedor, por sua vez, tenta incluir como cash-like itens como créditos tributários recuperáveis em dinheiro ou seguro a receber.

### Regra de ouro: sem contagem dupla

Um item não pode estar ao mesmo tempo no capital de giro e na dívida líquida. Impostos correntes, por exemplo, precisam estar em um lugar só. Também deve haver coerência com o EBITDA: se um custo foi ajustado para fora do EBITDA, a obrigação correspondente tende a ser debt-like.

## Exemplo

A alvo tem dívida bancária de R$ 200 milhões e caixa de R$ 80 milhões. Do caixa, R$ 10 milhões estão presos em depósito judicial e R$ 15 milhões são considerados caixa mínimo operacional. Caixa que conta: 80 − 10 − 15 = **R$ 55 milhões**.

Debt-like: dividendos declarados de R$ 12 milhões, IR de exercícios anteriores de R$ 6 milhões, provisão trabalhista provável de R$ 9 milhões e passivo de arrendamento de R$ 30 milhões (o EBITDA usado no múltiplo é pós-IFRS 16).

Dívida líquida ajustada = 200 + 12 + 6 + 9 + 30 − 55 = **R$ 202 milhões**. A dívida líquida "contábil" seria só 200 − 80 = R$ 120 milhões. A diferença, R$ 82 milhões, é preço.

## No seu trabalho

- **Redação das definições.** "Dívida Financeira", "Caixa", "Itens Equivalentes a Dívida" e "Dívida Líquida" costumam ser definições em lista, às vezes com um anexo de demonstrativo ilustrativo. Itens genéricos ("e quaisquer outras obrigações de natureza financeira") geram disputa; prefira listas fechadas e um exemplo numérico anexo.
- **Interação com indenização.** Se uma contingência foi descontada como debt-like, a cláusula de indenização deve excluir a recuperação do mesmo valor.
- **Caixa mínimo e trapped cash.** Quando o comprador pede limitação ao caixa, o vendedor pode pedir contrapartida: excluir o mesmo caixa mínimo do target de capital de giro ou subir o EV.
- **Data de medição.** Defina se os itens são medidos às 23h59 da véspera ou na abertura do dia do fechamento, para evitar contar duas vezes pagamentos feitos com recursos do próprio deal.

## Quiz

### Dividendos declarados e não pagos na data do fechamento são normalmente tratados como:
- [ ] capital de giro
- [x] debt-like item
- [ ] cash-like item
- [ ] irrelevantes para o preço
> O valor já é devido ao vendedor; se for pago depois do fechamento, o comprador arca com ele.

### O EBITDA usado no múltiplo é pré-IFRS 16 (o aluguel já foi deduzido). O passivo de arrendamento:
- [ ] deve entrar na dívida líquida, sempre
- [x] em regra não deve entrar, para não cobrar o aluguel duas vezes
- [ ] deve ser somado ao EV
- [ ] deve ir para o capital de giro
> Coerência entre EBITDA e dívida: se o aluguel já reduziu o EBITDA, o passivo não é dívida adicional na ponte.

### Trapped cash é:
- [ ] caixa que a empresa esconde do comprador
- [ ] caixa aplicado em CDB de liquidez diária
- [x] caixa que existe, mas não pode ser livremente usado ou distribuído
- [ ] o caixa mínimo exigido por lei
> Exemplos: depósito judicial, conta vinculada, caixa em país com controle de câmbio.

### Uma provisão trabalhista provável foi descontada como debt-like e também está coberta por indenização específica. O risco é:
- [ ] o vendedor pagar menos do que deve
- [x] o comprador ser compensado duas vezes pela mesma perda
- [ ] o EBITDA ficar inflado
- [ ] a provisão virar capital de giro
> O contrato deve prever que o valor já descontado do preço reduz a indenização.

## Flashcards
- Debt-like item :: Obrigação que não é empréstimo, mas consome caixa que o preço supôs livre; sai do preço real por real.
- Exemplos de debt-like :: Dividendos declarados não pagos, IR de períodos anteriores, contingências prováveis, bônus de transação, arrendamento (se EBITDA pós-IFRS 16).
- Trapped cash :: Caixa indisponível (depósito judicial, conta vinculada, controle de câmbio); excluído do caixa.
- Caixa mínimo operacional :: Caixa necessário para operar; o comprador argumenta que já está pago no EV.
- Regra da contagem dupla :: Nenhum item pode estar ao mesmo tempo no capital de giro e na dívida líquida.

## Caso
### Enunciado
EV acordado de R$ 600 milhões, calculado sobre EBITDA pós-IFRS 16. No fechamento: empréstimos de R$ 150 milhões, debêntures de R$ 100 milhões, passivo de arrendamento de R$ 40 milhões, dividendos declarados não pagos de R$ 15 milhões, provisão para contingência provável de R$ 12 milhões (sem indenização específica), bônus de transação devidos a executivos de R$ 5 milhões. Caixa de R$ 90 milhões, dos quais R$ 20 milhões estão retidos numa subsidiária no exterior sem possibilidade de remessa e R$ 10 milhões são caixa mínimo operacional acordado. Calcule o equity value.
### Resposta
R$ 338 milhões.
### Resolução
1. Dívida e debt-like = 150 + 100 + 40 + 15 + 12 + 5 = R$ 322 milhões. O arrendamento entra porque o EBITDA é pós-IFRS 16.
2. Caixa que conta = 90 − 20 − 10 = R$ 60 milhões.
3. Dívida líquida ajustada = 322 − 60 = R$ 262 milhões.
4. Equity = 600 − 262 = R$ 338 milhões.

## Explique
Explique a um colega de tributário por que o comprador quer tratar o IR a pagar de anos anteriores como "dívida", e não como capital de giro.
### Pontos-chave
- o preço foi cotado sem dívida; tudo que é dívida reduz o preço real por real
- o imposto se refere a lucros do período do vendedor
- no capital de giro, o efeito depende do target e pode ser diluído
- não pode estar nos dois lugares ao mesmo tempo
### Resposta modelo
O preço foi fechado como se a empresa não tivesse dívida. Imposto de anos anteriores é uma obrigação certa, ligada a lucros que pertenceram ao vendedor, e vai consumir caixa depois do fechamento. Se for tratado como dívida, sai do preço integralmente. Se ficar no capital de giro, só pesa na medida em que o saldo supere o target, que pode já ter embutido esse passivo. Por isso o comprador prefere a dívida. O cuidado é tirá-lo do capital de giro para não contar duas vezes.

## Fontes
- [CPC 06 (R2) — Arrendamentos (texto no site da CVM)](https://conteudo.cvm.gov.br/cvm_institucional/export/sites/cvm/menu/regulados/normascontabeis/cpc/CPC_06_R2_rev_18.pdf)
- [IFRS 16 — Leases (IFRS Foundation)](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/)
- [IAS 37 — Provisions, Contingent Liabilities and Contingent Assets (IFRS Foundation; correspondente ao CPC 25)](https://www.ifrs.org/issued-standards/list-of-standards/ias-37-provisions-contingent-liabilities-and-contingent-assets/)
- Composição de debt-like e cash-like items: prática de mercado, negociada caso a caso.
