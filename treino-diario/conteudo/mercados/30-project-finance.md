---
id: mer-project-finance
trilha: mercados
tipo: licao
titulo: Project finance em energia e infraestrutura
resumo: SPE, recurso limitado, ICSD, contas reserva, step-in e as debêntures incentivadas e de infraestrutura.
nivel: 2
minutos: 10
ordem: 30
tags: [project finance, infraestrutura, energia, icsd, debêntures incentivadas]
desafio: true
verificado: 2026-11-05
---

## Lição

**Project finance** é financiar um projeto (um parque eólico, uma linha de transmissão, uma rodovia) olhando para o caixa que **o próprio projeto** vai gerar, e não para o balanço do patrocinador.

### A estrutura

- **SPE (sociedade de propósito específico):** empresa criada só para o projeto. Ela contrata a construção (EPC, engineering, procurement and construction), vende a energia ou cobra a tarifa e toma a dívida.
- **Non-recourse vs. limited recourse:** em tese, o credor só tem acesso aos ativos e ao caixa da SPE (sem recurso aos acionistas). No Brasil, o mais comum é **recurso limitado**: os acionistas garantem a dívida durante a construção (fiança ou carta de fiança bancária até o completion financeiro) e a garantia cai quando o projeto atinge certos marcos operacionais.
- **Pacote de garantias:** alienação fiduciária das ações da SPE, cessão fiduciária dos recebíveis (contratos de venda de energia, tarifas) e dos direitos emergentes da concessão ou autorização, e penhor ou alienação fiduciária de equipamentos.
- **Contas do projeto:** contas centralizadoras, com cascata de pagamentos definida em contrato, e **conta reserva do serviço da dívida**, tipicamente de 3 a 6 meses de serviço (prática de mercado).
- **Step-in:** o direito de os financiadores assumirem o controle ou a administração temporária da SPE para reestruturá-la. Em concessões, está previsto no [art. 27-A da Lei 8.987/1995](https://www.planalto.gov.br/ccivil_03/leis/l8987cons.htm).

### ICSD (DSCR)

O covenant central é o **ICSD** (índice de cobertura do serviço da dívida; em inglês, DSCR, debt service coverage ratio):

ICSD = geração de caixa disponível para o serviço da dívida ÷ serviço da dívida (juros + amortização de principal) do período.

A geração de caixa costuma ser o EBITDA menos tributos pagos, menos capex de manutenção, ajustado pela variação do capital de giro. A definição exata está no contrato, e é ali que se negocia. Mínimos de 1,2 a 1,3 vez são comuns em financiamentos de infraestrutura no Brasil (prática de mercado; cada contrato fixa o seu). Abaixo de um patamar, o contrato costuma bloquear a distribuição de dividendos (lock-up); abaixo de outro, é inadimplemento.

### Debêntures incentivadas e de infraestrutura

- **Debêntures incentivadas** ([Lei 12.431/2011, art. 2º](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12431.htm)): emitidas por SPE ou controladora para projetos considerados prioritários. O benefício é do **investidor**: pessoa física tem alíquota zero de imposto de renda sobre os rendimentos.
- **Debêntures de infraestrutura** ([Lei 14.801/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14801.htm)): o benefício vai para o **emissor**, que, no lucro real, pode, além de deduzir os juros como despesa, excluir 30% dos juros da base do IRPJ e da CSLL (verificar o artigo exato). O investidor é tributado normalmente, o que torna o papel atraente para investidores institucionais. A lei foi regulamentada pelo Decreto 11.964/2024.

Em 2025, a Medida Provisória 1.303/2025 propôs tributar em 5% os rendimentos das debêntures incentivadas; a proposta foi retirada no Congresso e a MP perdeu a validade sem conversão em lei (verificar).

## Exemplo

Uma SPE de energia solar tem, em um ano, receita líquida de R$ 120 milhões e custos operacionais de R$ 30 milhões: EBITDA de R$ 90 milhões. Paga R$ 8 milhões de IR e CSLL, gasta R$ 4 milhões em capex de manutenção e consome R$ 3 milhões em capital de giro. A geração de caixa disponível é 90 − 8 − 4 − 3 = R$ 75 milhões. O serviço da dívida do ano é de R$ 60 milhões (R$ 32 milhões de juros e R$ 28 milhões de principal). ICSD = 75 / 60 = 1,25 vez. A conta reserva de seis meses de serviço da dívida seria de R$ 30 milhões, metade dos R$ 60 milhões anuais.

## No seu trabalho

Em M&A de ativos de energia e infraestrutura, o financiamento da SPE quase sempre exige anuência dos credores para a troca de controle, e as ações da SPE estão alienadas fiduciariamente. O checklist de CPs do SPA precisa incluir o waiver dos credores e a liberação ou substituição de fianças dos vendedores.

## Quiz

### O que significa recurso limitado em project finance?
- [ ] O credor não tem garantia nenhuma
- [x] Os acionistas garantem a dívida apenas em parte ou por um período, como a fase de construção
- [ ] O credor pode cobrar todos os ativos dos acionistas sempre
- [ ] A dívida não tem juros
> O mais comum no Brasil é fiança dos acionistas até o completion.

### Como se calcula o ICSD?
- [ ] Dívida líquida dividida pelo EBITDA
- [x] Geração de caixa disponível dividida pelo serviço da dívida (juros mais principal)
- [ ] EBITDA dividido pelos juros
- [ ] Patrimônio líquido dividido pela dívida
> Dívida líquida sobre EBITDA é alavancagem; EBITDA sobre juros é cobertura de juros.

### Quem recebe o benefício fiscal nas debêntures de infraestrutura da Lei 14.801/2024?
- [ ] O investidor pessoa física
- [x] O emissor, com exclusão adicional de 30% dos juros da base de IRPJ e CSLL
- [ ] O agente fiduciário
- [ ] O BNDES
> Nas incentivadas da Lei 12.431/2011, o benefício é do investidor.

### O step-in dos financiadores em concessões está previsto em:
- [ ] Lei 14.133/2021, art. 186
- [x] Lei 8.987/1995, art. 27-A
- [ ] Lei 6.404/76, art. 118
- [ ] Resolução CVM 175
> O art. 27-A autoriza a assunção do controle ou da administração temporária pelos financiadores e garantidores.

## Flashcards
- SPE :: Sociedade criada só para o projeto, que concentra contratos, receitas e dívida.
- ICSD (DSCR) :: Geração de caixa disponível dividida pelo serviço da dívida do período.
- Conta reserva do serviço da dívida :: Saldo retido, em geral de 3 a 6 meses de serviço, para cobrir quedas de caixa.
- Debêntures incentivadas :: Lei 12.431/2011; benefício ao investidor (alíquota zero de IR para pessoa física).
- Debêntures de infraestrutura :: Lei 14.801/2024; benefício ao emissor (exclusão de 30% dos juros da base de IRPJ e CSLL).

## Caso
### Enunciado
Use os números do Exemplo: EBITDA de R$ 90 milhões, IR e CSLL pagos de R$ 8 milhões, capex de manutenção de R$ 4 milhões, aumento de capital de giro de R$ 3 milhões, juros de R$ 32 milhões e amortização de principal de R$ 28 milhões no ano. O contrato exige ICSD mínimo de 1,30 vez para liberar dividendos. Calcule o ICSD e quanto de geração de caixa adicional seria necessário para atingir 1,30 vez.
### Resposta
ICSD de 1,25 vez; faltam R$ 3 milhões de geração de caixa para 1,30 vez.
### Resolução
1. Geração de caixa disponível: 90 − 8 − 4 − 3 = R$ 75 milhões.
2. Serviço da dívida: 32 + 28 = R$ 60 milhões.
3. ICSD: 75 / 60 = 1,25 vez.
4. Caixa necessário para 1,30 vez: 1,30 × 60 = R$ 78 milhões.
5. Diferença: 78 − 75 = R$ 3 milhões. Como 1,25 está abaixo de 1,30, a distribuição de dividendos fica bloqueada neste período.

## Explique
Explique para um colega de M&A que nunca fez financiamento por que o banco do project finance olha tanto para o ICSD.
### Pontos-chave
- Credor depende do caixa do projeto, não do balanço do acionista
- ICSD mostra quantas vezes o caixa cobre a parcela do ano
- Folga protege contra variações de geração e preço
- Covenant aciona lock-up de dividendos ou inadimplemento
### Resposta modelo
No project finance o banco empresta para uma empresa que só tem aquele projeto, e em boa parte sem garantia dos acionistas. Então a pergunta do banco é simples: o caixa que o projeto gera cobre com folga a parcela da dívida do ano? O ICSD responde isso. Um ICSD de 1,25 significa que o caixa é 25% maior que juros mais principal. O contrato fixa um mínimo: abaixo dele, a SPE não pode pagar dividendos, e o caixa fica retido para proteger o credor. Por isso, em uma aquisição, projetar o ICSD diz quando o comprador vai conseguir tirar dinheiro do ativo.

## Verificar
- Situação final da Medida Provisória 1.303/2025 quanto à tributação das debêntures incentivadas (retirada do tema e perda de validade sem conversão).
- Artigo exato da Lei 14.801/2024 que prevê a exclusão de 30% dos juros (fontes secundárias citam o art. 2º e o art. 6º).

## Fontes
- [Lei 12.431/2011, art. 2º](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12431.htm) — debêntures incentivadas
- [Lei 14.801/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14801.htm) — debêntures de infraestrutura
- [Lei 8.987/1995, arts. 27-A e 28](https://www.planalto.gov.br/ccivil_03/leis/l8987cons.htm) — step-in dos financiadores e garantia dos direitos emergentes da concessão
