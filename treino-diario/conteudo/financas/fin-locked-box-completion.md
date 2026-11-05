---
id: fin-locked-box-completion
trilha: financas
tipo: licao
titulo: Locked box x completion accounts
resumo: Preço travado num balanço passado ou apurado no fechamento; cada mecanismo desloca risco e trabalho.
nivel: 2
minutos: 10
ordem: 60
tags: [locked box, completion accounts, leakage, ajuste de preço, SPA]
desafio: true
verificado: 2026-11-05
---

## Lição

Há dois grandes mecanismos para chegar ao preço das ações. Ambos partem do EV; a diferença é **quando** a dívida líquida e o capital de giro são medidos.

### Completion accounts (ajuste pós-fechamento)

1. Na assinatura, as partes fixam EV, definições e target de capital de giro.
2. Pouco antes do fechamento, o vendedor entrega **estimativas** de dívida líquida e capital de giro, e o comprador paga um preço estimado.
3. Depois do fechamento, uma das partes (frequentemente o comprador, que agora controla a contabilidade) prepara as **demonstrações de fechamento** (closing accounts) num prazo contratual.
4. A outra parte revisa e pode contestar. Divergências não resolvidas vão a um **perito contábil independente** (expert determination), que decide só os itens contestados, dentro de limites.
5. A diferença entre preço final e estimado é paga por quem deve, muitas vezes com garantia de uma conta escrow.

Vantagem: o comprador paga pelo que recebe na data do fechamento. Desvantagem: mais custo, mais tempo e espaço para disputa.

### Locked box

1. As partes escolhem um balanço já fechado (de preferência auditado ou revisado), na **locked box date**.
2. O preço das ações é fixado com base nesse balanço e não é ajustado depois.
3. Desde a locked box date até o fechamento, o vendedor se compromete a não extrair valor da empresa: é a proibição de **leakage** (vazamento).
4. **Leakage** típico: dividendos, redução de capital, pagamentos a partes relacionadas ao vendedor, bônus de venda, renúncia de créditos contra o vendedor, assunção de despesas do vendedor.
5. **Permitted leakage**: lista fechada de pagamentos previamente conhecidos e já considerados no preço (por exemplo, salário de mercado do sócio-diretor ou um aluguel contratado).
6. Leakage não permitido é devolvido real por real, geralmente sem as franquias e limites das indenizações comuns, com prazo curto para reclamar.

Como o risco e o resultado econômico do negócio passam ao comprador na locked box date, o vendedor costuma pedir compensação pelo caixa gerado no intervalo: o **ticking fee** (ou equity ticker), em geral uma taxa anual sobre o preço das ações, *pro rata* por dia, ou um valor diário baseado na geração de caixa projetada.

Vantagem: certeza de preço e simplicidade. Desvantagem: o comprador precisa confiar no balanço de referência e fazer due diligence mais profunda sobre ele.

### Quem prefere o quê

Vendedores, em especial fundos de private equity em processos competitivos, tendem a preferir locked box: preço certo e distribuição rápida. Compradores estratégicos com integração complexa ou alvos com balanço pouco confiável tendem a preferir completion accounts. É prática de mercado, não regra.

## Exemplo

Locked box em 31 de dezembro, com equity value de R$ 500 milhões. Ticking fee de 10% ao ano, juros simples, base de 365 dias. O fechamento ocorre 146 dias depois.

- Ticking fee = 500 × 10% × 146 / 365 = **R$ 20 milhões**.
- Antes do fechamento, a alvo pagou dividendo de R$ 15 milhões (leakage não permitido, conhecido): deduzido no fechamento.
- Pagou também R$ 3 milhões de taxa de gestão à holding do vendedor, listada como permitted leakage: não deduz.

Preço pago no fechamento = 500 + 20 − 15 = **R$ 505 milhões**. Se, depois, o comprador descobrir um bônus de R$ 2 milhões pago a um diretor indicado pelo vendedor, sem previsão como permitted leakage, cobra os R$ 2 milhões do vendedor.

## No seu trabalho

- **Locked box**: as definições de Leakage e Permitted Leakage são o coração do contrato. A lista de leakage deve ser ampla ("incluindo, sem limitação"), a de permitted leakage, fechada e com valores. Defina prazo para reclamar e se a responsabilidade é solidária entre vendedores.
- **Ticking fee**: negocie a base (equity ou EV), a taxa, a contagem (dias corridos) e se cessa num prazo máximo.
- **Completion accounts**: prazos de preparo e revisão, acesso a livros e pessoas após o fechamento, escopo do perito (decide só itens contestados, como especialista e não como árbitro), e quem paga os honorários. Uma conta escrow ou retenção dá garantia ao ajuste.
- Em ambos: a escolha do mecanismo deve ser coerente com as declarações sobre o balanço e com a regra de condução do negócio no período interino.

## Quiz

### No locked box, o preço:
- [ ] é ajustado depois do fechamento por dívida líquida e capital de giro
- [x] é fixado com base num balanço de referência passado, sem ajuste posterior, protegido pela proibição de leakage
- [ ] depende das demonstrações de fechamento preparadas pelo comprador
- [ ] é sempre igual ao EV
> O preço trava na locked box date; a proteção do comprador é a vedação a vazamentos de valor.

### Qual destes é exemplo típico de leakage?
- [ ] pagamento de fornecedor em condições normais
- [x] pagamento de bônus de venda a executivo ligado ao vendedor
- [ ] recebimento de cliente
- [ ] contratação de empregado a salário de mercado
> Leakage é valor que sai da empresa em benefício do vendedor ou de partes ligadas, fora do curso normal.

### O ticking fee existe porque:
- [ ] o comprador precisa pagar juros sobre a dívida da alvo
- [x] o resultado econômico desde a locked box date é do comprador, e o vendedor quer compensação pelo caixa gerado até receber
- [ ] a lei exige correção do preço
- [ ] compensa o comprador pela demora no fechamento
> O caixa gerado após a locked box date fica na empresa e beneficia o comprador; o ticker remunera o vendedor por isso.

### Em completion accounts, o perito independente normalmente:
- [ ] refaz toda a contabilidade da alvo
- [ ] decide qualquer disputa do contrato
- [x] decide apenas os itens contestados das demonstrações de fechamento
- [ ] fixa o EV
> O escopo restrito é intencional: decisão técnica, rápida, sobre números contestados.

## Flashcards
- Locked box date :: Data do balanço de referência sobre o qual o preço é travado.
- Leakage :: Saída de valor da alvo para o vendedor ou partes ligadas após a locked box date; devolvida real por real.
- Permitted leakage :: Lista fechada de pagamentos conhecidos e já considerados no preço.
- Ticking fee :: Remuneração ao vendedor pelo período entre a locked box date e o fechamento, em geral taxa anual pro rata por dia.
- Completion accounts :: Preço estimado no fechamento e ajustado depois por demonstrações de fechamento.

## Caso
### Enunciado
Deal com completion accounts. EV de R$ 800 milhões; preço das ações = EV − dívida líquida + (capital de giro − target), com target de R$ 100 milhões. Na véspera do fechamento, o vendedor estimou dívida líquida de R$ 200 milhões e capital de giro de R$ 95 milhões, e o comprador pagou com base nisso. As demonstrações de fechamento, já sem contestação, apontaram dívida líquida de R$ 210 milhões e capital de giro de R$ 98 milhões. Quem paga quanto a quem?
### Resposta
O vendedor devolve R$ 7 milhões ao comprador (preço estimado de R$ 595 milhões; final de R$ 588 milhões).
### Resolução
1. Preço estimado = 800 − 200 + (95 − 100) = 800 − 200 − 5 = R$ 595 milhões.
2. Preço final = 800 − 210 + (98 − 100) = 800 − 210 − 2 = R$ 588 milhões.
3. Diferença = 595 − 588 = R$ 7 milhões a favor do comprador: a dívida líquida subiu 10 (ruim para o vendedor) e o capital de giro subiu 3 (bom para o vendedor); efeito líquido de −7.

## Explique
Explique para um cliente que nunca vendeu empresa a diferença prática entre locked box e completion accounts.
### Pontos-chave
- ambos partem do mesmo EV; muda a data de medição de dívida e capital de giro
- locked box: preço certo, travado num balanço passado; proteção por vedação a leakage
- ticking fee compensa o vendedor pelo período interino
- completion accounts: preço estimado e ajustado depois, com possibilidade de disputa e perito
### Resposta modelo
Nos dois casos se parte do mesmo valor do negócio e se desconta a dívida. A diferença é a data da foto. No locked box, usa-se um balanço já fechado: o preço fica certo desde a assinatura, e você se compromete a não tirar dinheiro da empresa até o fechamento; se tirar, devolve. Em troca, costuma receber uma remuneração diária pelo caixa que a empresa gera nesse intervalo. No completion accounts, paga-se um preço estimado no fechamento e, meses depois, a contabilidade do fechamento acerta a diferença para mais ou para menos, o que traz precisão, mas também custo e espaço para discussão.

## Fontes
- Mecânica de locked box, leakage, ticking fee e completion accounts: prática de mercado em M&A, sem norma legal específica no Brasil.
- [Código Civil (Lei 10.406/2002)](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm) — base geral dos contratos em que essas cláusulas são inseridas
