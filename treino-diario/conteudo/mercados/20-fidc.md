---
id: mer-fidc
trilha: mercados
tipo: licao
titulo: FIDC - cotas, subordinação e perdas
resumo: Como o FIDC organiza sênior, mezanino e subordinada, e quem absorve a inadimplência primeiro.
nivel: 2
minutos: 9
ordem: 20
tags: [fidc, securitização, cvm 175, subordinação, crédito estruturado]
desafio: true
verificado: 2026-11-05
---

## Lição

O **FIDC** (Fundo de Investimento em Direitos Creditórios) compra recebíveis (duplicatas, parcelas de cartão, contratos de crédito, precatórios) com desconto e paga seus cotistas com o que esses recebíveis renderem. Para quem origina os créditos (o **cedente**), é uma forma de antecipar caixa sem tomar empréstimo bancário. Para quem investe, é crédito estruturado com camadas de risco.

### Regulação

Desde 2023, o FIDC segue a parte geral da [Resolução CVM 175/2022](https://conteudo.cvm.gov.br/legislacao/resolucoes/resol175.html) e as regras específicas do seu **Anexo Normativo II**, que substituiu a Instrução CVM 356. Na lógica da Resolução 175, o fundo pode ter **classes** de cotas com patrimônios segregados e, dentro de cada classe, **subclasses**. No FIDC, as subclasses típicas são **sênior**, **subordinada mezanino** e **subordinada** (também chamada júnior). A limitação de responsabilidade do cotista ao valor das cotas e a segregação patrimonial entre classes têm base no [Código Civil, art. 1.368-D](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm).

### Subordinação

As cotas formam uma fila invertida:

- **Pagamentos** (amortização e rendimento): sênior primeiro, depois mezanino, depois subordinada.
- **Perdas** (inadimplência não recuperada): subordinada absorve primeiro; só depois que ela é zerada a perda passa à mezanino e, por último, à sênior.

O **índice de subordinação** mede o colchão de proteção de uma camada: o valor das cotas abaixo dela dividido pelo patrimônio líquido da classe. O regulamento fixa um índice mínimo. Se ele for desenquadrado, o regulamento prevê consequências como evento de avaliação, obrigação de o cedente aportar mais cotas subordinadas ou recomprar créditos, e até liquidação antecipada. É comum o próprio cedente subscrever as cotas subordinadas, o que alinha interesses: ele perde primeiro se originar créditos ruins.

### Outros reforços de crédito

- **Sobrecolateralização:** comprar recebíveis com valor de face maior que o preço pago, criando excesso de lastro.
- **Coobrigação do cedente:** o cedente responde pela solvência dos devedores (venda com coobrigação, que muda a análise contábil e de risco).
- **Reserva de liquidez** e **critérios de elegibilidade** dos créditos (prazo, concentração por devedor, rating mínimo).

### Agentes

Administrador e gestor são os prestadores de serviços essenciais; há ainda o **custodiante**, que verifica o lastro e a documentação dos créditos, e o **agente de cobrança**. Na prática, o mercado também fala em consultoria especializada, que analisa e seleciona os créditos (verificar o tratamento atual dessa figura no Anexo II).

## Exemplo

Um FIDC tem patrimônio de R$ 100 milhões: R$ 70 milhões em cotas sênior, R$ 15 milhões em mezanino e R$ 15 milhões em subordinada. O índice de subordinação da sênior é (15 + 15) / 100 = 30%. Se o regulamento exige no mínimo 25% para a sênior, há uma folga de 5 pontos.

Se o fundo sofrer perda de R$ 10 milhões, a subordinada cai para R$ 5 milhões. Patrimônio: R$ 90 milhões. O índice da sênior passa a (15 + 5) / 90, cerca de 22,2%, abaixo do mínimo de 25%. Ninguém da sênior perdeu um real, mas o regulamento é acionado, e o cedente pode ter de recompor a subordinação.

## No seu trabalho

Empresas-alvo com operações de FIDC têm parte relevante do contas a receber cedido. Na due diligence, confirme se a cessão é com ou sem coobrigação, se há cotas subordinadas detidas pelo alvo e se a mudança de controle é evento de avaliação no regulamento. Isso afeta dívida líquida e capital de giro no SPA.

## Quiz

### Em um FIDC, quem absorve as primeiras perdas?
- [ ] Cotas sênior
- [ ] Cotas mezanino
- [x] Cotas subordinadas
- [ ] O custodiante
> A subordinação faz a camada mais júnior perder primeiro, protegendo as superiores.

### Onde está a regulação específica do FIDC hoje?
- [ ] Instrução CVM 356
- [x] Anexo Normativo II da Resolução CVM 175
- [ ] Resolução CVM 60
- [ ] Lei 14.430/2022
> A Instrução CVM 356 foi substituída pela Resolução CVM 175 e seu Anexo II.

### Como se calcula o índice de subordinação da sênior?
- [ ] Cotas sênior divididas pelo patrimônio
- [x] Soma das cotas mezanino e subordinadas dividida pelo patrimônio líquido
- [ ] Cotas subordinadas divididas pelas cotas sênior
- [ ] Inadimplência dividida pelo patrimônio
> Mede o colchão abaixo da sênior em relação ao total.

### Por que o cedente costuma ficar com as cotas subordinadas?
- [ ] Porque a lei obriga
- [x] Para alinhar interesses: se os créditos forem ruins, ele perde primeiro
- [ ] Porque elas não têm risco
- [ ] Para ter preferência nos pagamentos
> É um mecanismo de skin in the game que dá conforto ao investidor sênior.

## Flashcards
- FIDC :: Fundo que compra direitos creditórios e paga cotistas com o fluxo desses créditos; Anexo Normativo II da Resolução CVM 175.
- Subordinação :: Ordem em que as cotas mais júniores absorvem perdas antes das mais seniores.
- Índice de subordinação :: Valor das cotas abaixo de uma camada dividido pelo patrimônio líquido.
- Sobrecolateralização :: Lastro com valor de face maior que o preço pago, criando colchão de perdas.
- Custodiante :: Verifica lastro e documentação dos direitos creditórios do FIDC.

## Caso
### Enunciado
Um FIDC tem R$ 100 milhões de patrimônio: sênior R$ 70 milhões, mezanino R$ 15 milhões e subordinada R$ 15 milhões. O regulamento exige índice de subordinação mínimo de 25% para a sênior (mezanino mais subordinada sobre o patrimônio). A carteira sofre perda definitiva de R$ 18 milhões. Ignore rendimentos e amortizações do período. Calcule o valor de cada subclasse depois da perda e o novo índice de subordinação da sênior.
### Resposta
Sênior R$ 70 milhões, mezanino R$ 12 milhões, subordinada zero; índice da sênior de cerca de 14,6%, abaixo do mínimo de 25%.
### Resolução
1. A subordinada absorve primeiro: perde seus R$ 15 milhões inteiros e vai a zero. Faltam 18 − 15 = R$ 3 milhões de perda.
2. A mezanino absorve os R$ 3 milhões restantes: 15 − 3 = R$ 12 milhões.
3. A sênior não é atingida: R$ 70 milhões.
4. Patrimônio após a perda: 70 + 12 + 0 = R$ 82 milhões (ou 100 − 18).
5. Índice da sênior: (12 + 0) / 82 = 0,1463, ou cerca de 14,6%.
6. Antes, o índice era (15 + 15) / 100 = 30%. Agora está mais de 10 pontos abaixo do mínimo de 25%, o que aciona as consequências do regulamento (recomposição pelo cedente, evento de avaliação ou liquidação, conforme o caso).

## Explique
Explique para um colega de tributário por que a cota sênior de um FIDC é mais segura que a subordinada, mesmo tendo os mesmos créditos por trás.
### Pontos-chave
- Mesma carteira, ordens diferentes de pagamento e de perda
- Subordinada perde primeiro e recebe por último
- Índice de subordinação mede o colchão da sênior
- Em troca, a subordinada tem retorno esperado maior
### Resposta modelo
Todas as cotas dependem dos mesmos recebíveis, mas o regulamento cria uma fila. Quando o dinheiro entra, a sênior recebe primeiro; quando há calote, a subordinada perde primeiro. Assim, a sênior só sofre perda se a inadimplência for maior que todo o colchão formado pelas cotas abaixo dela. Esse colchão, em porcentagem do patrimônio, é o índice de subordinação. Em troca de correr o risco maior, a subordinada fica com o excesso de retorno da carteira, e por isso costuma ser detida pelo próprio cedente.

## Verificar
- Tratamento atual da consultoria especializada no Anexo Normativo II da Resolução CVM 175.

## Fontes
- [Resolução CVM 175/2022 e Anexo Normativo II](https://conteudo.cvm.gov.br/legislacao/resolucoes/resol175.html) — fundos de investimento e regras específicas do FIDC
- [Código Civil, art. 1.368-D](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm) — limitação de responsabilidade e classes de cotas
