# EUA 03: Abridge (scribe ambiental de IA para médicos)
Última atualização: 31/10/2026 | Pesquisador: agente benchmarking EUA

> Nota de método: WebFetch bloqueado nesta sessão; números confirmados no conteúdo dos resultados de busca das páginas citadas. Dados do Brasil não verificados (limite de buscas atingido).

## Problema que resolve
Médicos gastam horas documentando consultas no prontuário eletrônico, uma das principais causas de burnout. Abridge escuta a consulta (com consentimento), gera a nota clínica estruturada e a insere no prontuário (integração com Epic e outros), além de apoiar codificação para faturamento.

## Modelo de negócio e como ganha dinheiro
Contratos enterprise com sistemas de saúde (hospitais e redes), cobrados por clínico/licença ao ano. ANÁLISE: preço por médico não é público; não encontrei fonte confiável.

## Velocidade de crescimento (DADO)
- Parceria com mais de 150 sistemas de saúde nos EUA (Abridge, jun/2025 [2]; Fierce Healthcare [1]). Em fev/2025 eram mais de 100 sistemas (Fierce Healthcare [4]).
- Receita: não divulgada pela empresa. Sacra estima ARR de US$ 100 milhões em mai/2025 (estimativa de terceiro, Sacra, não confirmada por mim em fonte primária).

## Investimento, investidores e valuation (DADO)
- Série D: US$ 250 milhões, valuation de US$ 2,75 bilhões (fev/2025, Fierce Healthcare [4]).
- Série E: US$ 300 milhões, liderada por Andreessen Horowitz com Khosla Ventures, valuation de US$ 5,3 bilhões (jun/2025, Fierce Healthcare [1], Abridge [2], Crunchbase News [5]).
- Total captado de cerca de US$ 830 milhões e valuation de US$ 5,3 bilhões citados na lista CNBC Disruptor 50 (19/05/2026 [3]).

## Já existe no Brasil?
- Não verificado nesta rodada. Há startups brasileiras de transcrição clínica com IA (exemplo conhecido: Voa Health) e prontuários eletrônicos locais (iClinic, Feegow, Amplimed, MV, Tasy/Philips) que adicionaram recursos de IA. Não confirmei rodadas nem número de clientes.
- ANÁLISE: a dor existe, mas a monetização é diferente. Nos EUA, a nota bem feita aumenta faturamento (codificação para seguradora) e há sistemas de saúde enormes que compram centralmente. No Brasil, a maior parte dos médicos atende em consultório ou clínica pequena, recebe valores baixos de operadoras por consulta e paga pouco por software. Hospitais compram via fornecedor de prontuário (MV, Tasy), que tende a embutir a funcionalidade.
- Por que não escalou ainda: preço baixo por médico, a função vira "feature" dos prontuários, e risco de comoditização pelos próprios modelos fundacionais com transcrição.

## Viabilidade de tropicalizar (ANÁLISE)
| Fator | Nota | Justificativa |
|---|---|---|
| Renda | 3 | Médicos têm renda alta, mas consulta por convênio paga pouco. |
| Crédito | 4 | Não depende. |
| Tributação | 3 | Neutro. |
| Regulação | 2 | LGPD com dado sensível de saúde, CFM (telemedicina, prontuário), possível enquadramento Anvisa de software como dispositivo se fizer sugestão clínica. |
| Logística | 5 | Digital. |
| Comportamento | 3 | Médico adota se for simples e no WhatsApp/celular; hospitais demoram. |
| Tamanho de mercado | 4 | Grande número de médicos, mas ticket baixo. |
| **Geral** | **3** | Mercado real, porém tende a virar recurso embutido em prontuários. |

## Defensabilidade na era da IA
Transcrição e resumo são commodity. O fosso da Abridge é integração profunda com Epic, validação clínica, contratos com grandes redes e dados para codificação. No Brasil, o fosso seria distribuição (parceria com prontuário ou operadora) e especialização (ex.: odontologia, psicologia, veterinária, fisioterapia), onde notas e faturamento seguem padrões próprios.

## Encaixe para o Felipe
Baixo a médio. Exige produto confiável, LGPD de dado sensível e venda para médicos, que é cara. Melhor como nicho vertical pequeno (ex.: scribe para psicólogos ou veterinários) usando APIs prontas, mas a barreira de entrada é baixa para todos, inclusive para os prontuários.

## Fontes
1. Fierce Healthcare, "Abridge scores $300M series E, boosting valuation to $5.3B", jun/2025. https://www.fiercehealthcare.com/ai-and-machine-learning/ambient-ai-startup-abridge-scores-300m-series-e-backed-a16z-and-khosla
2. Abridge, "Abridge Secures $300M Series E Led by a16z...", jun/2025. https://www.abridge.com/blog/series-e
3. CNBC, "30. Abridge" (Disruptor 50), 19/05/2026. https://www.cnbc.com/2026/05/19/abridge-cnbc-disruptor-50-ranking.html
4. Fierce Healthcare, "ViVE 2025: Abridge scores $250M at $2.75B valuation", fev/2025. https://www.fiercehealthcare.com/ai-and-machine-learning/abridge-scores-250m-series-d-ambient-ai-tech-now-use-100-health-systems
5. Crunchbase News, "AI Note-Taking Startup Abridge Raises $300M...", 2025. https://news.crunchbase.com/health-wellness-biotech/ai-doctor-note-taking-startup-abridge/
6. Sacra, perfil Abridge (estimativa de ARR, terceiro). https://sacra.com/research/abridge
