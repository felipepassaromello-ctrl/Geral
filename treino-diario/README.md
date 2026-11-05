# Lastro

Treino intelectual diário de 15 a 40 minutos: finanças de deals, M&A, mercados, IA, livros e empreendedorismo. Funciona no celular, pode ser instalado como app e tem modo só áudio para o carro.

As decisões de produto, design e tecnologia estão em [DECISOES.md](DECISOES.md).

## Como as peças se encaixam

```
treino-diario/
├── index.html              a página (só a "casca")
├── app.css                 todo o visual: cores, fontes, layout
├── app.js                  toda a lógica: sessões, quiz, progresso, voz
├── sw.js                   service worker: faz o app abrir sem internet
├── manifest.webmanifest    nome, ícone e cor do app instalado no celular
├── icons/                  ícones do app
├── assets/3d/              objetos 3D (imagens WebP com fundo transparente)
├── conteudo/               AS LIÇÕES, em Markdown, uma pasta por trilha
│   └── COMO-ESCREVER.md    o formato de cada arquivo
├── scripts/
│   ├── build-conteudo.mjs  transforma conteudo/*.md em data/conteudo.json
│   └── 3d/                 gera os objetos 3D com Three.js (opcional; veja o LEIA-ME de lá)
└── data/conteudo.json      gerado automaticamente; não edite à mão
```

O fluxo é: você (ou o Claude) escreve um `.md` → o script valida e gera o `conteudo.json` → o app lê esse arquivo.

## Publicação e instalação

Estão no [README principal do repositório](../README.md):

- endereço do app;
- ativação do GitHub Pages, que é feita uma vez só;
- instalação no iPhone e no Android;
- fluxo de mudanças (branch → pull request → merge → publicação automática).

Resumo técnico: o workflow `.github/workflows/lastro.yml` roda `scripts/build-conteudo.mjs` e checa o JavaScript a cada push. Quando a mudança chega à branch padrão, ele publica esta pasta (`treino-diario/`) no GitHub Pages. Se uma execução ficar vermelha na aba **Actions**, ela mostra o erro, por exemplo uma pergunta sem resposta marcada.

## Adicionar ou corrigir conteúdo

**Pelo Claude Code (recomendado):** peça, por exemplo:

> Gere mais 10 unidades da trilha financas seguindo treino-diario/conteudo/COMO-ESCREVER.md, confira as contas, rode o build e faça commit.

> Atualize o Radar de IA de dezembro.

**À mão, pelo site do GitHub:** abra um arquivo em `treino-diario/conteudo/`, clique no lápis, edite e faça *commit*. O GitHub Actions gera o `conteudo.json` e publica. Se algo estiver fora do formato, a execução fica vermelha e diz o arquivo e o problema.

## Rodar no seu computador (opcional)

Precisa do [Node.js](https://nodejs.org) instalado.

```bash
cd treino-diario
node scripts/build-conteudo.mjs   # gera data/conteudo.json
npx serve .                        # abre um servidor local; acesse o endereço mostrado
```

Abrir o `index.html` com dois cliques não funciona, porque o navegador bloqueia a leitura do `conteudo.json` fora de um servidor.

## Seu progresso

Fica salvo só no navegador em que você usa o app. Em **Progresso › Backup do progresso** dá para copiar ou baixar um backup e restaurar em outro aparelho.
