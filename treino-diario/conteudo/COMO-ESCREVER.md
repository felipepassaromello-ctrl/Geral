# Como escrever (ou pedir) conteúdo para o Lastro

Cada arquivo `.md` dentro de `conteudo/<trilha>/` vira uma **unidade** no app. Não precisa mexer em código: crie ou edite o arquivo, rode `node scripts/build-conteudo.mjs` (ou peça ao Claude Code para rodar) e publique.

Para pedir mais conteúdo ao Claude Code, basta escrever algo como:

> Gere mais 10 unidades da trilha `financas` seguindo `treino-diario/conteudo/COMO-ESCREVER.md`, confira todas as contas, rode o build e faça o commit.

## Trilhas (nome da pasta = campo `trilha`)

| Pasta | Trilha |
|---|---|
| `nicho` | M&A, PE, VC e societário |
| `financas` | Finanças aplicadas a deals |
| `mercados` | Mercados e estruturas |
| `ia` | IA e tecnologia (inclui o Radar) |
| `livros` | Livros |
| `empreendedorismo` | Empreendedorismo e oportunidades |

## Cabeçalho (obrigatório)

```yaml
---
id: fin-ebitda-ajustado        # único, sem espaços; prefixo da trilha
trilha: financas
tipo: licao                    # licao | livro | radar | desafio
titulo: EBITDA e EBITDA ajustado
resumo: Uma frase curta que aparece no card da sessão.
nivel: 1                       # 1 básico · 2 intermediário · 3 avançado
minutos: 8                     # tempo de leitura da Lição + Exemplo
ordem: 10                      # ordem sugerida dentro da trilha (menor primeiro)
tags: [valuation, due diligence]
desafio: false                 # true = o Caso pode ser sorteado como desafio da semana
verificado: 2026-11-05         # data em que o conteúdo foi conferido
---
```

## Seções (títulos `##` exatamente como abaixo; só `## Lição` é obrigatória)

```markdown
## Lição
Texto em markdown. Pode ter ### subtítulos, listas, **negrito**, tabelas e links.

## Exemplo
Exemplo prático, de preferência com números.

## No seu trabalho
Só quando houver ligação real com a rotina de M&A/societário. Se não houver, omita a seção.

## Quiz

### Enunciado da pergunta?
- [ ] alternativa errada
- [x] alternativa correta (exatamente uma)
- [ ] alternativa errada
- [ ] alternativa errada
> Explicação curta de por que a correta está certa (e, se útil, por que a pegadinha está errada).

### Outra pergunta?
...

## Flashcards
- Frente do cartão :: Verso do cartão
- Outra frente :: Outro verso

## Caso
### Enunciado
Situação com números. Termine pedindo algo calculável.
### Resposta
Uma linha com o resultado final (ex.: "R$ 412 milhões").
### Resolução
Passo a passo. As contas precisam fechar.

## Explique
Pedido no estilo Feynman: "Explique para um colega de outra área...".
### Pontos-chave
- ponto que uma boa resposta precisa ter
- outro ponto
### Resposta modelo
Uma resposta de referência em 4 a 8 linhas.

## Verificar
- Algo que não foi possível confirmar e deve ser conferido (opcional).

## Fontes
- [Lei 6.404/76, art. 254-A](https://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm) — oferta pública por alienação de controle
```

## Padrão de qualidade

- **Não inventar.** Na dúvida, escreva "(verificar)" no texto e liste na seção `## Verificar`.
- Dispositivo legal sempre com número do artigo e link para a fonte oficial (planalto.gov.br, cvm.gov.br, bcb.gov.br, aneel.gov.br etc.).
- Atualidades (Radar, setores) sempre com data e link verificável.
- Contas conferidas. Use formato brasileiro: `R$ 1.250,0 mil`, `12,5%`.
- Português do Brasil, com termos de mercado em inglês quando é assim que se fala (locked box, earn-out, net debt).
- Resumos de livros em paráfrase, sem citar trechos longos.
- Tom: direto, adulto, sem emoji e sem frases de marketing.
- Tamanho: Lição + Exemplo entre 350 e 700 palavras. Quiz de 3 a 5 perguntas. Flashcards de 3 a 6.
- Escreva pensando que o texto também será **lido em voz alta** no modo direção: frases completas, siglas explicadas na primeira vez. Tabelas não são lidas em voz alta, então repita o número principal no texto.
