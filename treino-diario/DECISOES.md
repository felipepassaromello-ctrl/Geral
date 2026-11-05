# Lastro: decisões do MVP

Data: 05/11/2026. Documento curto com o que decidi, por quê e o que ficou para depois. Linguagem simples de propósito.

## 1. Conceito

**Nome: Lastro.** No mercado de capitais, lastro é o que dá sustentação a um título (o CRI tem lastro em créditos imobiliários). Aqui é o repertório que sustenta o profissional: finanças, estruturas, tecnologia, leitura. O nome vem do seu mundo e funciona fora dele.

**Mecânica: academia com uma camada leve de jogo.** O centro é aprender de verdade (trilhas e unidades). O jogo serve para criar hábito, sem infantilizar:

- **Sequência de dias** em número grande e a semana atual num calendário, com os dias cumpridos preenchidos.
- **XP e título de carreira** no geral: Estagiário, Associado júnior, pleno, sênior, Counsel, Sócio. Nas trilhas, nível simples (N1, N2...).
- **Mapa de domínio:** cada unidade vira um bloco colorido (não visto, fraco, em progresso, dominado). O cálculo usa acerto no quiz, nota no caso, cobertura no "explique" e a caixa dos flashcards.
- **Revisão automática:** pergunta errada volta na sessão da noite até você acertar. Flashcards seguem repetição espaçada (caixas de Leitner: 1, 3, 7, 16 e 35 dias).
- **Desafio da semana:** um caso com números, que troca toda segunda-feira e vale +50 XP.
- Sem notificações, confete ou mascote.

**Quem decide o tema: o app, mas você pode trocar.** A "pauta automática" escolhe a próxima unidade com pesos: Finanças pesa 3 (é a sua maior lacuna), M&A e Mercados pesam 2, IA 1,5, Livros e Empreender 1. A trilha da sessão anterior perde peso, para variar. Se quiser, você escolhe a trilha num toque.

**Como funciona uma sessão.** Você escolhe 15, 20, 30 ou 40 minutos e o momento do dia:

- **Manhã (algo novo):** revisão rápida dos flashcards vencidos, lição nova, quiz, caso prático e "explique com suas palavras". Nas sessões de 30 e 40 minutos entra uma segunda unidade (livro ou Radar), e o tempo que sobra vira um quiz de fixação.
- **Noite (revisão):** mais flashcards, as perguntas que você errou, um caso e um "explique" das unidades em que você está mais fraco.

O relógio da sessão conta o tempo, mas não corta nada no meio.

## 2. Escopo do MVP

**Entrou:**
- seis trilhas com 29 unidades;
- formatos: lição, quiz, flashcards com repetição espaçada, caso prático com resolução, explique (Feynman), resumo de livro, Radar de IA e desafio de setor;
- mix do dia, modos manhã e noite, desafio semanal e mapa de domínio;
- histórico com anotação por sessão;
- modo direção (só áudio) e modo episódio (podcast);
- instalação no celular (PWA), tema claro e escuro, backup do progresso.

**Ficou para as próximas iterações** (detalhes na seção 9): episódio em MP3 com voz neural, sincronização entre aparelhos, correção automática de respostas abertas, capas de livros e mais conteúdo.

## 3. Identidade visual e referências

### Nova base visual (05/11/2026)

A primeira direção (verde-mata, serifa editorial, cara de "boleta") não ficou boa. A pasta `nova-base-visual` substituiu as referências anteriores, inclusive a regra de evitar roxo e gradientes. Estudei as 26 imagens e os 4 vídeos, quadro a quadro, e refiz o design do zero. A divisão ficou assim:

- **Exito AI** (Alex Bender/FANCY) é a identidade.
- **Healthcare** (Phenomenon) é a estrutura das telas.
- **Eduwerks** (Phenomenon) é a energia dos momentos de recompensa.

**Paleta e tipografia:**

- **Cores:** lavanda, lilás e rosa sobre muito branco. Violeta é a cor de ação, teal marca acerto e tendência positiva, coral marca erro. Os botões principais são pílulas azul-marinho.
- **Fonte:** uma só, Plus Jakarta Sans, com títulos em peso médio e pouco texto por tela.
- **Tema escuro:** segue o Eduwerks, com preto, grade de pontos e o mesmo violeta.

| Referência | Onde entrou | O que levei |
|---|---|---|
| Exito: hero com moedas de vidro (03, 05) | Cartão "Sessão de hoje" na home | Gradiente azul-lavanda → rosa, moeda de vidro grande com símbolo e moedas menores para dar profundidade. O título fica à esquerda, com botão escuro em pílula ("Começar") e botão branco ("Ouvir") |
| Exito: telas mobile (09 a 12) | Barra superior e da sessão, botões, títulos | Barra branca translúcida em pílula com a marca à esquerda, títulos médios, muito respiro |
| Exito: moedas metálicas (01, 02) | Marca e ícone do app | Moeda lavanda metálica com "L" sobre o gradiente |
| Exito: esfera pontilhada "AI Technology" (11, 12) | Trilha de IA e modo direção | Esfera com núcleo pêssego → azul e casca de pontos; no modo direção ela gira devagar e "respira" enquanto o app fala |
| Exito: blocos e anéis empilhados (02) | Trilhas M&A e Mercados | Blocos magenta, violeta e dourado (estruturas, cap table); anéis violeta empilhados (fluxos) |
| FANCY: caminho curvo com objeto dourado (08) | Objeto renderizado e disponível para estados vazios e conquistas | Tubo de vidro lilás com cápsula dourada |
| Healthcare: saudação e cartões (19, 22, 23) | Home | "Bom dia, Felipe", cartões brancos de métrica com ícone num quadradinho colorido e chip de tendência ("+45 na semana") |
| Healthcare: "2/5 doses" (19) | "Meta de hoje" e "Domínio geral" | Cartão em gradiente violeta, número grande e barra com o restante hachurado |
| Healthcare: faixa de calendário e barras de aderência (19, 24) | "Sua semana" e "Minutos nos últimos 7 dias" | Dias com o de hoje circulado e os cumpridos preenchidos; barras em pílula com hachura nos dias vazios |
| Healthcare: dashboards (20, 25, 26) | Progresso | Linha de métricas, mapa de domínio e nível por trilha em cartões limpos |
| Eduwerks: formas gelatinosas e pílulas (13, 16, 18) | Desafio da semana e fechamento da sessão | Cartão escuro com grade de pontos, estrela, toro e cruz de gelatina flutuando, pílulas coloridas (lima, magenta, menta) |
| Eduwerks: números grandes em círculos (14) | Fechamento da sessão | XP, acertos, minutos e cards em círculos grandes. Os temas do dia caem como pílulas |
| Eduwerks: energia sem infantilizar (14 a 17) | Trilhas | Cartão por trilha com objeto 3D próprio e número grande de unidades |

**Como o 3D foi feito (custo zero):**

- Os 16 objetos (moedas de vidro com §, R$ e %, moeda metálica, gema, blocos, anéis, esfera, gelatinas e fita) foram modelados e iluminados com **Three.js** e renderizados aqui, no Chromium sem tela. Os materiais têm transmissão, iridescência e verniz, num estúdio de luz lavanda.
- O vidro precisa de algo atrás para refratar. Por isso cada objeto é renderizado duas vezes: uma com fundo lavanda, para a cor, e outra só com a silhueta, que vira a transparência.
- As gelatinas têm um núcleo luminoso por dentro, como no Eduwerks.
- O resultado são imagens WebP com transparência, cerca de **220 KB no total**. No celular não roda nada em 3D: são só imagens, o que garante desempenho e bateria.
- O movimento é lento e suave, como pedido: os objetos flutuam em ciclos de 7 a 10 segundos. Se o celular estiver com "reduzir movimento", tudo fica parado.
- Para criar ou ajustar objetos, veja `scripts/3d/LEIA-ME.md`.

**Primeira direção (substituída):** as 16 referências da pasta `inspiracoes` (verde profundo, serifa e números grandes) guiaram o primeiro MVP. Dele ficaram a estrutura de dados, a lógica de sessão e o acabamento de interação descrito abaixo.

**Dribbble:** a rede desta sessão bloqueia dribbble.com, então trabalhei só com os prints e vídeos que você mandou. Para pesquisa própria no Dribbble, libere o domínio nas configurações de rede do ambiente.

### Acabamento (skills de design do Emil Kowalski)

As skills de `emilkowalski/skills` estão instaladas em `.claude/skills/` e guiaram uma passada de acabamento. O que mudou e por quê:

- **Toque que parece de app.**
  - Sem o flash cinza ao tocar.
  - Botões respondem na pressão, encolhendo de leve, e não na soltura.
  - O texto dos botões não é selecionado num toque longo.
  - Hover só existe para quem usa mouse; no celular ele "grudava".
  - No iPhone, o efeito de pressão só aparece com um ajuste específico, que já está feito.
- **Movimento só onde tem função.**
  - Seletor de tempo e de manhã/noite: a opção ativa desliza como uma pílula. A cor do texto troca exatamente na borda, pela técnica de recortar uma cópia.
  - Resposta do quiz e verso do flashcard aparecem com um fade curto.
  - A pauta faz um crossfade quando muda.
  - Etapas novas entram em 180 ms. Re-desenhar a mesma etapa não anima de novo, e ações feitas pelo teclado nunca animam.
- **Um único momento de comemoração:** o fechamento da sessão, que acontece uma vez por dia. O XP é contado, o dia de hoje acende na faixa da sequência e o anel do relógio se completa.
- **Menos movimento:** se o celular estiver com "reduzir movimento", os deslocamentos somem e ficam só os fades.
- **Ação destrutiva:** "Apagar progresso" agora exige segurar o botão por 2 segundos. A barra enche devagar enquanto você decide e volta rápido se você soltar.
- **Robustez:**
  - Se o iPhone recarregar o app no meio de uma sessão (por exemplo, quando você vai ao Claude e volta), a sessão é retomada de onde parou.
  - Puxar a tela para baixo durante a sessão não recarrega a página.
  - A barra de status acompanha o tema.
- **Teclado (no computador):**
  - 1 a 4 respondem o quiz;
  - Espaço vira o flashcard;
  - 1, 2 e 3 dão a nota do cartão;
  - Enter avança.
- **Teste com dados extremos:** simulei um ano de uso, com sequência de 365 dias, 123.456 XP, 300 sessões, notas com URL longa e tela de 320 px. Nada estourou. Corrigi:
  - plural ("1 pergunta");
  - separador de milhar no XP;
  - o histórico, que agora mostra 7 sessões e um botão "mostrar mais";
  - o mapa de domínio, que passa a ter 2 colunas no celular.
- **O que só dá para confirmar no seu iPhone:** sensação do toque, cor da barra de status com o app instalado e vozes. Emulação no computador não reproduz essas coisas.

## 4. Stack (tecnologia)

- **HTML, CSS e JavaScript puros**, sem framework e sem dependências. São três arquivos (`index.html`, `app.css`, `app.js`) que você consegue abrir e entender. Não há `npm install` nem pasta `node_modules`, e nada quebra quando uma biblioteca atualiza.
- **Objetos 3D:** imagens WebP em `assets/3d/`, geradas pelo script opcional `scripts/3d/` (Three.js). O app não depende do Three.js para funcionar.
- **Conteúdo em Markdown** em `conteudo/<trilha>/*.md`. Um script curto (`scripts/build-conteudo.mjs`) converte tudo num único arquivo, `data/conteudo.json`, e acusa erros de formato (pergunta sem resposta certa, trilha errada etc.).
- **Hospedagem: GitHub Pages**, grátis para repositório público. O GitHub Actions (`.github/workflows/lastro.yml`) roda o script a cada mudança e publica o site sozinho. Por isso dá para editar um `.md` direto no site do GitHub e o app se atualiza sem você rodar nada. Escolhi o Pages em vez de Vercel ou Netlify porque não exige criar outra conta e ensina o fluxo do GitHub, que você quer aprender.

## 5. Como o conteúdo é gerado (sem custo)

- **Quem escreve:** eu, aqui no Claude Code, dentro da sua assinatura. Nada chama API paga. Para ampliar, peça por exemplo: "gere mais 10 unidades da trilha financas seguindo `conteudo/COMO-ESCREVER.md`". O formato está documentado nesse arquivo.
- **Padrão de qualidade:**
  - dispositivo legal citado com artigo e link oficial;
  - contas refeitas em Python;
  - atualidades com data e link;
  - livros em paráfrase;
  - toda unidade traz a data em que foi conferida.
  - O que não deu para confirmar aparece dentro do app num quadro "Verificar antes de usar". Não escondi incerteza.
- **Revisão independente:** depois de escrito, todo o conteúdo passou por uma segunda leitura feita só para caçar erro factual, jurídico e de conta. Ela refez todas as contas (nenhuma estava errada) e corrigiu dois erros:
  - artigos da Lei 9.514 e da Lei 11.076 citados como vigentes, embora a Lei 14.430/2022 os tenha revogado;
  - uma regra da OAB sobre IA descrita de forma imprecisa.

  Ela também resolveu dez pontos que estavam marcados para verificar. Por fim, atualizei a lição de fluxo de caixa: a partir de 2027, com o CPC 51 (IFRS 18), juros pagos deixam de ter escolha de classificação na maioria das empresas.
- **Limite real desta rodada:** a rede da sessão bloqueia a abertura de vários sites oficiais (Planalto, CVM, IFRS, OAB). Os dispositivos foram confirmados pelos resultados de busca, sem abrir a página inteira, e os links seguem o endereço oficial. Antes de usar um ponto crítico com cliente, clique na fonte.
- **Radar de IA:** um arquivo por mês (`conteudo/ia/ia-radar-AAAA-MM.md`), feito sob pedido com busca na web. Basta pedir: "atualize o Radar de IA". Conferi duas notícias diretamente na fonte: o pedido de IPO da Anthropic (S-1, 26/10/2026) e a doação do Agent Skills à Agentic AI Foundation (22/10/2026).
- **Correção de respostas abertas sem API:** no "explique" e no caso prático, você escreve, abre a referência e marca os pontos-chave que cobriu (autoavaliação com gabarito). Para uma correção detalhada, o botão **Copiar para o Claude** monta o pedido completo (enunciado, sua resposta e os pontos esperados) para você colar numa conversa com o Claude. O custo é zero, porque usa a assinatura que você já tem.

## 6. Progresso e login

- O progresso fica salvo **no próprio navegador** (localStorage). Não tem login, servidor nem banco de dados: é só para você, não custa nada e não guarda dados seus em lugar nenhum.
- **Risco:** limpar os dados do navegador apaga o progresso. Por isso existe **Progresso › Backup** (copiar ou baixar um arquivo, e restaurar).
- **Celular e computador:** no MVP, cada aparelho tem o seu progresso. A sincronização gratuita fica para depois (seção 9).
- **Compartilhar com colegas:** já funciona. O link é público e o progresso de cada pessoa fica no aparelho dela.
- **Atenção:** o repositório `Geral` é **público** (já era antes). O código e o conteúdo do Lastro ficam visíveis, e o seu progresso não, porque fica só no seu navegador. Não coloque nada confidencial em `conteudo/`.

## 7. Celular (PWA)

O app pode ser instalado como aplicativo. No iPhone: abra o link no Safari › Compartilhar › Adicionar à Tela de Início. Depois da primeira abertura ele funciona sem internet, porque o service worker guarda os arquivos.

## 8. Modo direção e voz

**Como funciona:** o app lê a sessão inteira em voz alta, com flashcards, lição, perguntas, caso e "explique". Ele usa a **Web Speech API**, a voz que já vem no navegador, de graça. Os botões são enormes (Ouvir/Pausar, Repetir, Pular) e não há nada para ler durante a sessão. Há dois formatos:

- **Responder perguntas:** depois de ler as alternativas, o app espera até 15 segundos. Você responde dizendo "letra B" ou tocando num botão gigante. Se não responder, ele diz a resposta certa e segue.
- **Só ouvir (episódio):** vira um podcast da sessão. As respostas são reveladas depois de uma pausa curta.

**Limitações, principalmente no iPhone:**

- **Leitura em voz alta:** funciona no Safari. A qualidade depende da voz instalada. Em Ajustes › Acessibilidade › Conteúdo Falado › Vozes › Português (Brasil), baixe uma voz "Aprimorada" ou "Premium" e escolha em Progresso › Ajustes. A diferença é grande.
- **Tela bloqueada:** se a tela bloquear, o iPhone pausa a leitura. O app pede para a tela ficar acesa (wake lock), mas deixe o celular no suporte com a tela ligada.
- **Não há controle pelo volante nem CarPlay**, porque a voz do navegador não é um "áudio" para o sistema.
- **Responder por voz** (reconhecimento de fala) é instável no iPhone e costuma falhar quando o app está instalado na tela de início. Por isso ele é um extra. O modo direção funciona inteiro sem ele (botões gigantes ou modo episódio). No Chrome do Android e do computador ele funciona melhor.
- **Opções com voz melhor:** ElevenLabs, OpenAI TTS e Google Cloud TTS têm vozes muito melhores, mas exigem conta e chave de API, com cobrança acima da cota grátis. Ficaram fora.
- **Caminho gratuito para a próxima iteração:** gerar aqui no Claude Code o **episódio do dia em MP3** com uma voz neural de código aberto (por exemplo, Piper). Um MP3 toca com a tela bloqueada, aparece na tela de bloqueio e funciona no CarPlay. O custo é espaço no repositório, algo como 10 a 20 MB por episódio de 20 minutos (verificar com um teste).

## 9. O que ficou para depois (e por quê)

| Ideia | Por que não agora | Caminho sem custo |
|---|---|---|
| Lembrete diário | Notificação web no iPhone exige app instalado e servidor de push | App Atalhos do iPhone › Automação › Hora do dia › Abrir URL do Lastro |
| Sincronizar celular e computador | Exige onde guardar os dados | GitHub Gist privado com token pessoal, que é grátis (você criaria o token) |
| Anotações no Google Drive | Acrescenta login e permissões | Anotações ficam no app; o backup exporta tudo |
| Correção automática de respostas abertas | Exige API paga | Botão "Copiar para o Claude" |
| Episódio em MP3 com voz neural | Precisa testar tamanho e qualidade | Piper (código aberto) gerado aqui |
| Capas e biblioteca de livros (ref. 02) | Prioridade menor | Ilustrações geradas em SVG |

## 10. Custo

**R$ 0 além da assinatura do Claude.** Os serviços usados:

- GitHub: repositório público, grátis;
- GitHub Pages: grátis para repositório público;
- GitHub Actions: grátis para repositório público;
- Google Fonts (Plus Jakarta Sans, licença aberta): grátis;
- Three.js (código aberto, licença MIT), usado só para gerar as imagens 3D: grátis;
- Web Speech API: vem no navegador;
- conteúdo: gerado no Claude Code, dentro da sua assinatura.

Nenhuma chave de API e nenhum cartão de crédito.

## 11. Premissas que assumi sem perguntar

1. O repositório `Geral` passou a conter só o Lastro (o app fica em `treino-diario/`). Os materiais anteriores (mapa de oportunidades e arquivos da aula G4) saíram da pasta atual e continuam no histórico do git.
2. O Pages publica a partir da branch padrão do repositório (hoje `claude/new-session-4el77x`), depois do merge.
3. "Manhã" vale até as 15h e "noite" a partir daí. É só o padrão inicial; você troca num toque.
4. Os números dos casos de empreendedorismo que não vieram da sua pesquisa (custo de engenheiro, de analista, de ferramentas) são **premissas do exercício** e estão marcados assim no texto.
5. Os pesos entre as trilhas (Finanças 3 e assim por diante) refletem o que você disse sobre suas lacunas. Dá para mudar em `scripts/build-conteudo.mjs`.
