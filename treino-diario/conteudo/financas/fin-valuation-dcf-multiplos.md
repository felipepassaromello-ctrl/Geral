---
id: fin-valuation-dcf-multiplos
trilha: financas
tipo: licao
titulo: Valuation — DCF, múltiplos e transações comparáveis
resumo: Três jeitos de chegar ao valor de uma empresa, e por que o valor terminal costuma pesar mais que tudo.
nivel: 2
minutos: 10
ordem: 80
tags: [valuation, DCF, WACC, múltiplos]
desafio: false
verificado: 2026-11-05
---

## Lição

### Fluxo de caixa descontado (DCF)

O valor de um negócio é o valor presente do caixa que ele vai gerar. No DCF para a firma, projeta-se o **fluxo de caixa livre para a firma** (FCFF, free cash flow to the firm), o caixa disponível para acionistas e credores:

FCFF = EBIT × (1 − alíquota de imposto) + depreciação e amortização − capex − aumento do capital de giro.

Os fluxos são descontados pelo **WACC** (weighted average cost of capital, custo médio ponderado de capital):

WACC = (E / (D + E)) × Ke + (D / (D + E)) × Kd × (1 − t)

em que E é o valor do equity, D o da dívida, Ke o custo do capital próprio (em geral estimado pelo CAPM: taxa livre de risco mais beta vezes prêmio de mercado), Kd o custo da dívida e t a alíquota de imposto. O fator (1 − t) existe porque juros são dedutíveis.

Como o resultado é **EV** (valor para todos os financiadores), ainda é preciso a ponte para chegar ao equity.

### Valor terminal e Gordon

Não se projeta para sempre. Após o período explícito (5 a 10 anos), usa-se o **valor terminal** pelo modelo de crescimento perpétuo de Gordon:

Valor terminal no ano n = FCFF do ano n+1 / (WACC − g)

em que g é a taxa de crescimento perpétua, que precisa ser menor que o WACC e, em regra, não superior ao crescimento de longo prazo da economia. O valor terminal costuma responder pela maior parte do EV, por isso pequenas mudanças em WACC ou g mudam muito o resultado.

### Múltiplos de mercado (comparáveis negociados)

Compara-se a alvo com empresas listadas parecidas: EV/EBITDA, EV/receita, preço/lucro. É rápido e reflete o humor do mercado, mas depende de achar comparáveis de verdade (setor, tamanho, crescimento, margem, país).

### Transações precedentes

Múltiplos pagos em aquisições de empresas semelhantes. Incluem **prêmio de controle** e sinergias, por isso tendem a ser mais altos que os de mercado. As limitações: poucas transações divulgam números, e o contexto de cada uma muda (ciclo, juros, disputa entre compradores).

Na prática, assessores apresentam as três abordagens lado a lado (o "football field") e o preço é negociado dentro ou perto dessas faixas.

## Exemplo

**FCFF.** EBIT de R$ 80 milhões, alíquota de 34%, depreciação de R$ 15 milhões, capex de R$ 20 milhões e aumento de capital de giro de R$ 5 milhões. FCFF = 80 × 0,66 + 15 − 20 − 5 = 52,8 − 10 = **R$ 42,8 milhões**. A alíquota de 34% é a combinação usual de IRPJ e CSLL para empresas não financeiras no lucro real, uma simplificação.

**WACC.** 60% de equity a 16% e 40% de dívida a 12%, com imposto de 34%: 0,6 × 16% + 0,4 × 12% × 0,66 = 9,6% + 3,168% = **12,768%**.

**Gordon.** FCFF do próximo ano de R$ 100 milhões, WACC de 12% e crescimento perpétuo de 4%: 100 / (0,12 − 0,04) = 100 / 0,08 = **R$ 1.250 milhões**. Se g subir para 5%, o valor vai para 100 / 0,07, cerca de R$ 1.428,6 milhões, 14% a mais com um ponto percentual de mudança.

**Múltiplos.** Quatro comparáveis negociam a 7, 8, 9 e 10 vezes EV/EBITDA; mediana de 8,5 vezes. Para EBITDA de R$ 40 milhões, EV de 8,5 × 40 = R$ 340 milhões.

## No seu trabalho

- **Laudos e opiniões.** A Lei 6.404/76 exige avaliação por peritos ou empresa especializada em conferência de bens ao capital (art. 8º), e a compra de controle relevante por companhia aberta pode exigir aprovação em assembleia e laudo (art. 256, verificar requisitos no caso concreto). Saber ler a metodologia ajuda a revisar esses documentos.
- **Earn-out e preço**: o DCF do comprador revela as premissas que ele usou para a oferta; metas de earn-out costumam sair dessas projeções.
- **Negociação**: quando alguém diz "pagamos 9 vezes", pergunte sobre qual EBITDA (LTM, projetado, ajustado, pré ou pós-IFRS 16) e se é EV ou equity.

## Quiz

### O DCF com FCFF descontado pelo WACC resulta em:
- [x] enterprise value
- [ ] equity value
- [ ] lucro líquido projetado
- [ ] valor patrimonial contábil
> FCFF é caixa para todos os financiadores, e o WACC é o custo de todos eles.

### No modelo de Gordon, o que acontece se g se aproximar do WACC?
- [ ] o valor terminal tende a zero
- [x] o valor terminal cresce sem limite, sinal de premissa irreal
- [ ] nada, g não afeta o valor
- [ ] o WACC cai automaticamente
> O denominador (WACC − g) tende a zero. Por isso g precisa ser conservador.

### Por que a dívida entra no WACC multiplicada por (1 − t)?
- [ ] porque a dívida é mais arriscada
- [x] porque juros são dedutíveis do imposto sobre o lucro
- [ ] porque a lei limita juros
- [ ] porque o equity não paga imposto
> O benefício fiscal reduz o custo efetivo da dívida.

### Múltiplos de transações precedentes tendem a ser mais altos que os de empresas listadas porque:
- [ ] as empresas fechadas são maiores
- [x] incorporam prêmio de controle e sinergias pagas pelos compradores
- [ ] usam lucro líquido em vez de EBITDA
- [ ] são calculados sobre equity
> Quem compra controle paga pelo poder de decidir e pelas sinergias que espera.

## Flashcards
- FCFF :: EBIT × (1 − t) + depreciação e amortização − capex − aumento de capital de giro.
- WACC :: E/(D+E) × Ke + D/(D+E) × Kd × (1 − t).
- Gordon :: Valor terminal = FCFF do ano seguinte / (WACC − g), com g menor que o WACC.
- Comparáveis x transações precedentes :: Múltiplos de empresas listadas x múltiplos pagos em aquisições (com prêmio de controle).
- Football field :: Gráfico com as faixas de valor de cada metodologia lado a lado.

## Caso
### Enunciado
A alvo tem FCFF projetado de R$ 50 milhões, R$ 60 milhões e R$ 70 milhões nos anos 1 a 3. Depois do ano 3, cresce 5% ao ano para sempre. WACC de 10%. Dívida líquida de R$ 300 milhões. Calcule o EV, o equity value e o múltiplo EV/EBITDA implícito, sabendo que o EBITDA dos últimos 12 meses é de R$ 125 milhões.
### Resposta
EV de aproximadamente R$ 1.252,1 milhões; equity de R$ 952,1 milhões; múltiplo implícito de cerca de 10,0 vezes.
### Resolução
1. Valor terminal no ano 3 = 70 × 1,05 / (0,10 − 0,05) = 73,5 / 0,05 = R$ 1.470 milhões.
2. Fatores de desconto: 1,1; 1,21; 1,331.
3. Valor presente do ano 1 = 50 / 1,1 = 45,5.
4. Valor presente do ano 2 = 60 / 1,21 = 49,6.
5. Valor presente do ano 3 com terminal = (70 + 1.470) / 1,331 = 1.540 / 1,331 = 1.157,0.
6. EV = 45,5 + 49,6 + 1.157,0 = R$ 1.252,1 milhões (valor exato de 1.252,066…).
7. Equity = 1.252,1 − 300 = R$ 952,1 milhões.
8. Múltiplo implícito = 1.252,1 / 125 = 10,0 vezes. Observação: só o valor terminal trazido a valor presente (1.470 / 1,331 = 1.104,4) responde por cerca de 88% do EV.

## Explique
Explique para um colega de societário por que dois bancos podem chegar a valores muito diferentes para a mesma empresa usando o mesmo método de DCF.
### Pontos-chave
- o DCF depende de projeções, WACC e crescimento perpétuo
- o valor terminal concentra a maior parte do valor
- pequenas mudanças em WACC − g mudam muito o resultado
- por isso se cruza o DCF com múltiplos e transações
### Resposta modelo
O DCF é uma conta simples sobre premissas que não são. Cada banco projeta receitas, margens e investimentos de um jeito, escolhe um custo de capital e uma taxa de crescimento perpétuo. Como a maior parte do valor costuma estar na perpetuidade, que divide o fluxo por WACC menos crescimento, um ponto percentual a mais ou a menos nessa diferença pode mudar o valor em dezenas de por cento. Por isso o DCF raramente é usado sozinho: compara-se com múltiplos de empresas listadas e de transações para ver se o número faz sentido.

## Verificar
- Requisitos atuais do art. 256 da Lei 6.404/76 (aprovação em assembleia e laudo na compra de controle por companhia aberta) antes de aplicar a um caso concreto.

## Fontes
- [Lei 6.404/76, arts. 8º e 256](https://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm) — avaliação de bens e aquisição de controle por companhia aberta
- [Aswath Damodaran — dados e material de valuation (NYU Stern)](https://pages.stern.nyu.edu/~adamodar/) — referência acadêmica para DCF, custo de capital e múltiplos
- Football field e uso combinado de metodologias: prática de mercado.
