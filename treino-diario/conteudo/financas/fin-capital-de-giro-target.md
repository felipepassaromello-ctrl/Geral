---
id: fin-capital-de-giro-target
trilha: financas
tipo: licao
titulo: Capital de giro e target normalizado
resumo: O preço supõe um nível normal de capital de giro; o que vier acima ou abaixo ajusta o preço.
nivel: 2
minutos: 9
ordem: 50
tags: [capital de giro, ajuste de preço, completion accounts, SPA]
desafio: true
verificado: 2026-11-05
---

## Lição

### O que é capital de giro operacional

**Capital de giro líquido operacional** (net working capital, NWC) é o dinheiro preso na operação: contas a receber mais estoques mais outros ativos operacionais, menos fornecedores e outros passivos operacionais (salários a pagar, adiantamentos de clientes). Em deals, ele exclui caixa, dívida e itens já tratados como debt-like, para não haver contagem dupla.

### Por que entra no preço

O EV é calculado supondo que a empresa será entregue com um nível **normal** de capital de giro, suficiente para gerar o EBITDA que foi valorizado. Se o vendedor segurar pagamentos a fornecedores e acelerar cobranças antes do fechamento, ele gera caixa (que fica com ele num deal cash-free) e entrega uma empresa que vai precisar de dinheiro do comprador para voltar ao normal. O ajuste de capital de giro neutraliza isso.

### O target

O **target** (ou peg) é o nível normal combinado. A prática mais comum é a **média dos últimos 12 meses** (média mensal), porque suaviza a sazonalidade e é difícil de manipular. Ajustes possíveis:

- excluir meses atípicos (greve, pandemia, um grande pedido único);
- normalizar itens fora do padrão, como recebíveis vencidos há muito tempo;
- usar target por mês do fechamento, quando a sazonalidade é forte.

### Sazonalidade

Se o capital de giro oscila durante o ano e o target é a média anual, a data de fechamento passa a importar. Fechar no pico favorece o vendedor (entrega acima da média e recebe ajuste positivo); fechar no vale favorece o comprador. A solução depende de cada caso: target específico para o mês esperado de fechamento, ou aceitar a média e negociar a data.

### Mecânica

O ajuste mais comum é **peso a peso** (dollar-for-dollar): preço final = preço base + (capital de giro no fechamento − target). Pode haver:

- **de minimis / threshold**: diferenças pequenas são ignoradas; acima disso, ajusta-se tudo desde o primeiro real (tipping) ou só o excesso (deductible);
- **collar**: faixa em torno do target sem ajuste;
- **cap**: limite do ajuste.

Tudo isso só funciona se os **princípios contábeis** da apuração forem os mesmos usados para calcular o target. O contrato costuma prever uma hierarquia: (i) políticas específicas listadas, (ii) práticas consistentes com o passado, (iii) práticas contábeis adotadas no Brasil.

## Exemplo

O capital de giro mensal dos últimos 12 meses, de janeiro a dezembro, em milhões de reais, foi: 42, 44, 46, 48, 50, 52, 56, 60, 56, 52, 48 e 46. Soma de 600; **média de R$ 50 milhões**, que vira o target.

Se o fechamento ocorrer em agosto, quando o capital de giro está tipicamente em R$ 60 milhões, o ajuste peso a peso será de +R$ 10 milhões a favor do vendedor. Se ocorrer em janeiro, com R$ 42 milhões, será de −R$ 8 milhões contra o vendedor. Em nenhum dos dois casos alguém manipulou nada: é sazonalidade pura. Por isso o comprador, prevendo fechar em agosto, pode propor target de agosto (R$ 60 milhões), e o vendedor, a média anual.

## No seu trabalho

- **Definição de Capital de Giro.** Liste as contas contábeis incluídas, por número do plano de contas se possível, e anexe um demonstrativo ilustrativo com o cálculo do target. Isso reduz muito as disputas.
- **Princípios contábeis.** A hierarquia de políticas é uma cláusula jurídica com efeito financeiro. "Consistente com o passado" protege contra mudanças de critério de provisão no fechamento.
- **Covenants de condução do negócio** entre assinatura e fechamento ("operar no curso normal, sem alterar prazos de pagamento e cobrança") complementam o ajuste.
- **Collar e de minimis**: entenda se o valor abaixo do limite é ignorado inteiro ou só até o limite; a redação muda o resultado.

## Quiz

### Por que o target costuma ser a média de 12 meses?
- [ ] porque a lei exige
- [x] porque suaviza a sazonalidade e dificulta manipulação
- [ ] porque é sempre favorável ao comprador
- [ ] porque é igual ao capital de giro do último balanço
> A média anual capta o nível normal ao longo do ciclo do negócio.

### O vendedor atrasou pagamentos a fornecedores antes do fechamento. O efeito no capital de giro e no ajuste é:
- [ ] capital de giro maior; ajuste positivo para o vendedor
- [x] capital de giro menor; ajuste negativo para o vendedor
- [ ] nenhum efeito, porque fornecedores não entram no capital de giro
- [ ] o valor vira cash-like
> Fornecedores maiores reduzem o capital de giro. O caixa gerado ficaria com o vendedor, mas o ajuste devolve o valor ao comprador.

### Capital de giro de fechamento de R$ 47 milhões, target de R$ 50 milhões, ajuste peso a peso sem limites. O preço:
- [ ] sobe R$ 3 milhões
- [x] cai R$ 3 milhões
- [ ] não muda
- [ ] cai R$ 47 milhões
> 47 − 50 = −3.

### Um item de tributos correntes foi incluído na dívida líquida. No capital de giro, ele deve:
- [ ] ser incluído também, por segurança
- [x] ser excluído, para evitar contagem dupla
- [ ] ser incluído com sinal invertido
- [ ] ser incluído só se o valor for positivo
> Cada item vive em um só lugar da ponte.

## Flashcards
- Capital de giro operacional :: Recebíveis + estoques + outros ativos operacionais − fornecedores − outros passivos operacionais; sem caixa e dívida.
- Target (peg) :: Nível normal de capital de giro embutido no preço; geralmente média mensal de 12 meses.
- Ajuste peso a peso :: Preço muda real por real pela diferença entre capital de giro do fechamento e target.
- De minimis tipping x deductible :: Tipping: passou do limite, ajusta tudo. Deductible: ajusta só o excesso.
- Risco da sazonalidade :: Com target pela média anual, fechar no pico favorece o vendedor e no vale favorece o comprador.

## Caso
### Enunciado
Preço base das ações de R$ 400 milhões, target de capital de giro de R$ 50 milhões e ajuste peso a peso com de minimis de R$ 1 milhão do tipo tipping (se a diferença passar de R$ 1 milhão, ajusta-se integralmente). No fechamento: contas a receber de R$ 70 milhões, estoques de R$ 35 milhões, fornecedores de R$ 48 milhões. Pelos princípios contábeis do contrato, recebíveis vencidos há mais de 180 dias devem ser provisionados integralmente, e há R$ 4 milhões nessa situação sem provisão. Qual o preço final? E qual seria se o de minimis fosse do tipo deductible?
### Resposta
R$ 403 milhões (tipping); R$ 402 milhões (deductible).
### Resolução
1. Recebíveis ajustados = 70 − 4 = R$ 66 milhões.
2. Capital de giro de fechamento = 66 + 35 − 48 = R$ 53 milhões.
3. Diferença = 53 − 50 = +R$ 3 milhões, acima do de minimis de R$ 1 milhão.
4. Tipping: ajuste integral de +3. Preço = 400 + 3 = R$ 403 milhões.
5. Deductible: ajuste apenas do excesso, 3 − 1 = +2. Preço = R$ 402 milhões.

## Explique
Explique para o cliente vendedor por que o comprador quer um target específico para o mês de fechamento, em vez da média anual.
### Pontos-chave
- o negócio é sazonal e o capital de giro oscila durante o ano
- o ajuste peso a peso compara fechamento com target
- fechar no pico com target médio gera ajuste positivo só por sazonalidade
- o target mensal elimina o efeito da data de fechamento
### Resposta modelo
O capital de giro da empresa sobe muito no segundo semestre, porque ela estoca e vende a prazo para a temporada. Se o target for a média do ano e o fechamento cair em agosto, o capital de giro estará naturalmente acima da média e o contrato mandaria o comprador pagar a diferença, sem que você tenha feito nada de especial. O comprador vê isso como pagar duas vezes por um ciclo que vai se desfazer. Propondo o target de agosto, ele neutraliza a sazonalidade. A contraproposta usual é aceitar o target mensal desde que a data de fechamento fique travada ou que o EV reflita esse ponto.

## Fontes
- [CPC 26 (R1) — Apresentação das Demonstrações Contábeis (ativo e passivo circulantes)](https://conteudo.cvm.gov.br/cvm_institucional/export/sites/cvm/menu/regulados/normascontabeis/cpc/CPC_26_R1_rev_14.pdf)
- Target de capital de giro, de minimis, collar e hierarquia de princípios contábeis: prática de mercado em SPAs com ajuste de preço.
