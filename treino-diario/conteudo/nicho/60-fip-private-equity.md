---
id: nic-fip-private-equity
trilha: nicho
tipo: licao
titulo: Fundos de PE - FIP e distribution waterfall
resumo: Estrutura do FIP na Resolução CVM 175, taxa de gestão e a cascata de distribuição com carried interest.
nivel: 3
minutos: 10
ordem: 60
tags: [private equity, fip, carried interest, waterfall, cvm 175]
desafio: true
verificado: 2026-11-05
---

## Lição

### O veículo: FIP

No Brasil, o fundo de private equity típico é o **FIP** (Fundo de Investimento em Participações). Desde 2023, os fundos são regulados pela [Resolução CVM 175/2022](https://conteudo.cvm.gov.br/legislacao/resolucoes/resol175.html), com uma parte geral e anexos normativos por tipo de fundo; o FIP está no **Anexo Normativo IV**, que substituiu a antiga Instrução CVM 578. Pontos centrais:

- O FIP deve aplicar ao menos **90% do patrimônio** nos ativos-alvo: ações, bônus de subscrição, debêntures (conversíveis ou não) e outros títulos de emissão das sociedades investidas (Anexo IV, art. 11, que remete aos ativos listados no art. 5º).
- O fundo deve **participar do processo decisório** da investida, com influência efetiva na definição de sua política estratégica e na gestão, por exemplo indicando membros do conselho de administração ou via acordo de acionistas (Anexo IV, art. 5º, verificar parágrafo e eventual alteração posterior).
- Desde a reforma do Código Civil pela Lei da Liberdade Econômica, o regulamento pode limitar a responsabilidade de cada cotista ao valor de suas cotas e criar classes com patrimônios segregados ([Código Civil, art. 1.368-D](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm)).

### GP e LP no vocabulário brasileiro

Em fundos estrangeiros, o **GP** (general partner) administra e o **LP** (limited partner) investe. No FIP, o papel do GP é desempenhado pelo **gestor** (que escolhe os investimentos), ao lado do **administrador fiduciário**; ambos são prestadores de serviços essenciais na Resolução CVM 175. Os LPs são os **cotistas**. Eles assinam um **compromisso de investimento** e integralizam conforme as **chamadas de capital** (capital calls) feitas ao longo do período de investimento.

### Remuneração do gestor

- **Taxa de gestão (management fee):** tipicamente cerca de 2% ao ano sobre o capital comprometido no período de investimento e sobre o capital investido depois. É prática de mercado, não regra.
- **Carried interest:** participação do gestor no lucro, tipicamente 20%, paga só depois que os cotistas recebem o capital de volta e um retorno mínimo. No FIP, aparece como taxa de performance ou como classe de cotas específica, conforme o regulamento.

### Distribution waterfall

A cascata define a ordem dos pagamentos. No modelo **europeu** (whole fund), ela roda sobre o fundo inteiro:

1. **Return of capital:** 100% para os cotistas até devolver todo o capital integralizado.
2. **Preferred return (hurdle):** 100% para os cotistas até receberem o retorno preferencial, comumente 8% ao ano.
3. **Catch-up:** 100% (ou outro percentual alto) para o gestor até ele ter recebido 20% de todo o lucro distribuído até ali.
4. **Split 80/20:** o restante é dividido 80% cotistas e 20% gestor.

No modelo **americano** (deal by deal), o carry é calculado a cada investimento vendido, o que antecipa o pagamento ao gestor e exige cláusula de **clawback** caso o fundo, no conjunto, não alcance o hurdle.

## Exemplo

Um FIP capta R$ 500 milhões em compromissos, com taxa de gestão de 2% ao ano sobre o comprometido durante 5 anos de período de investimento: R$ 10 milhões por ano, R$ 50 milhões no período. Esse custo sai do capital chamado dos cotistas, e por isso o retorno líquido do cotista é sempre menor que o retorno bruto dos investimentos.

Para o catch-up de 100%, a conta é simples: se os cotistas já receberam R$ 120 milhões de retorno preferencial, o gestor precisa receber C tal que C = 20% × (120 + C). Resolvendo, C = R$ 30 milhões. Depois disso, gestor e cotistas estão exatamente em 20/80 sobre o lucro.

## No seu trabalho

Em M&A com fundo comprador, o regulamento do FIP e a governança do gestor definem quem assina, quais aprovações são necessárias (comitê de investimentos, assembleia de cotistas em conflito de interesses) e o horizonte de saída, que molda drag along, lock-up e put/call no acordo de acionistas.

## Quiz

### No waterfall europeu, o carried interest começa a ser pago:
- [ ] Na primeira venda de uma investida com lucro
- [x] Depois que os cotistas recebem todo o capital integralizado e o retorno preferencial
- [ ] Desde a primeira chamada de capital
- [ ] Apenas na liquidação do fundo, independentemente do hurdle
> O modelo europeu roda sobre o fundo inteiro; o americano é que paga deal by deal.

### Qual a função do catch-up?
- [ ] Devolver a taxa de gestão aos cotistas
- [x] Fazer o gestor alcançar sua fatia de 20% do lucro total depois do hurdle
- [ ] Remunerar o administrador fiduciário
- [ ] Pagar o retorno preferencial
> Sem catch-up, o gestor ficaria com 20% apenas do lucro acima do hurdle.

### Onde está hoje a regulação específica do FIP na CVM?
- [ ] Instrução CVM 578
- [ ] Instrução CVM 555
- [x] Anexo Normativo IV da Resolução CVM 175
- [ ] Resolução CVM 60
> A Resolução CVM 175 substituiu as instruções 555 e 578, entre outras.

### Por que fundos americanos (deal by deal) têm cláusula de clawback?
- [x] Para devolver carry pago a mais se o fundo como um todo não atingir o hurdle
- [ ] Para recuperar a taxa de gestão
- [ ] Para permitir drag along nas investidas
- [ ] Porque a CVM exige
> Como o carry é antecipado por investimento, perdas posteriores podem deixar o gestor com carry indevido.

## Flashcards
- FIP :: Fundo de Investimento em Participações; regulado pelo Anexo Normativo IV da Resolução CVM 175.
- Hurdle (preferred return) :: Retorno mínimo dos cotistas antes do carry; comumente 8% ao ano.
- Catch-up :: Faixa em que o gestor recebe 100% (ou percentual alto) até atingir 20% do lucro distribuído.
- Waterfall europeu :: Carry calculado sobre o fundo inteiro, após devolver todo o capital e o hurdle.
- Clawback :: Devolução de carry recebido a mais pelo gestor.

## Caso
### Enunciado
Um FIP com waterfall europeu teve R$ 400 milhões de capital integralizado pelos cotistas (incluindo taxas). Ao final, o fundo distribui R$ 800 milhões. O retorno preferencial acumulado devido aos cotistas, calculado pelo administrador até a data das distribuições, é de R$ 120 milhões. Há catch-up de 100% para o gestor e split 80/20 depois. Ignore o capital próprio do gestor no fundo. Quanto recebem os cotistas e o gestor?
### Resposta
Cotistas R$ 720 milhões; gestor R$ 80 milhões de carried interest.
### Resolução
1. Return of capital: R$ 400 milhões aos cotistas. Saldo: 800 − 400 = R$ 400 milhões.
2. Preferred return: R$ 120 milhões aos cotistas. Saldo: 400 − 120 = R$ 280 milhões.
3. Catch-up de 100%: o gestor recebe C tal que C = 20% × (120 + C), ou seja, 0,8C = 24 e C = R$ 30 milhões. Saldo: 280 − 30 = R$ 250 milhões.
4. Split 80/20 sobre R$ 250 milhões: cotistas R$ 200 milhões; gestor R$ 50 milhões.
5. Totais: cotistas 400 + 120 + 200 = R$ 720 milhões; gestor 30 + 50 = R$ 80 milhões.
6. Conferência: 720 + 80 = R$ 800 milhões. Lucro total = 800 − 400 = R$ 400 milhões, e o carry de R$ 80 milhões é exatamente 20% dele.

## Explique
Explique para um colega de tributário como o gestor de um fundo de private equity é remunerado e por que o carry vem depois dos cotistas.
### Pontos-chave
- Taxa de gestão cobre a operação do gestor
- Carry é participação no lucro, tipicamente 20%
- Cotistas recebem antes o capital e o hurdle
- Catch-up acerta a fatia do gestor; modelo europeu vs americano
### Resposta modelo
O gestor ganha de duas formas. A taxa de gestão, em torno de 2% ao ano, paga a estrutura da equipe, haja lucro ou não. O carried interest, normalmente 20% do lucro, é o que alinha interesses: ele só aparece depois que os cotistas recebem todo o dinheiro que colocaram e mais um retorno mínimo, como 8% ao ano. Em seguida, o gestor tem uma faixa de recuperação, o catch-up, até chegar aos 20% do lucro total, e daí em diante tudo se divide 80/20. No modelo europeu essa conta é feita sobre o fundo inteiro; no americano, investimento a investimento, com obrigação de devolver o excesso no final.

## Verificar
- Redação vigente do art. 5º do Anexo Normativo IV sobre influência efetiva na gestão, considerando a consulta pública CVM SDM 03/2024 e eventual alteração posterior.

## Fontes
- [Resolução CVM 175/2022 e Anexo Normativo IV](https://conteudo.cvm.gov.br/legislacao/resolucoes/resol175.html) — fundos de investimento e regras específicas do FIP
- [Código Civil, arts. 1.368-C a 1.368-F](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm) — fundos de investimento, responsabilidade limitada e classes
