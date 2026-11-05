/* Lastro — app de treino intelectual diário.
   Tudo roda no navegador: o conteúdo vem de data/conteudo.json e o progresso fica no localStorage. */
(function () {
  'use strict';

  // ------------------------------------------------------------------ utilidades
  const CHAVE = 'lastro.v1';
  const app = document.getElementById('app');
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const semTags = (s) => String(s ?? '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  const pad = (n) => String(n).padStart(2, '0');
  const iso = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const deISO = (s) => { const [a, m, d] = s.split('-').map(Number); return new Date(a, m - 1, d); };
  const somaDias = (s, n) => { const d = deISO(s); d.setDate(d.getDate() + n); return iso(d); };
  const difDias = (a, b) => Math.round((deISO(b) - deISO(a)) / 864e5);
  const LETRAS = ['A', 'B', 'C', 'D', 'E', 'F'];
  const fmtData = (s, op) => new Intl.DateTimeFormat('pt-BR', op).format(deISO(s));
  const pl = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;
  const fmtN = (n) => Math.round(n || 0).toLocaleString('pt-BR');
  const reduzMovimento = () => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (_) { return false; } };
  function semanaISO(d = new Date()) {
    const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dia = t.getUTCDay() || 7;
    t.setUTCDate(t.getUTCDate() + 4 - dia);
    const ano = t.getUTCFullYear();
    const sem = Math.ceil(((t - Date.UTC(ano, 0, 1)) / 864e5 + 1) / 7);
    return { chave: `${ano}-S${pad(sem)}`, n: ano * 53 + sem };
  }

  // ------------------------------------------------------------------ estado (localStorage)
  function estadoNovo() {
    return {
      versao: 1, criadoEm: iso(), xp: 0, xpTrilha: {}, streak: 0, melhorStreak: 0, ultimoDia: null,
      dias: {}, unidades: {}, cards: {}, erros: [], historico: [], desafios: {}, perguntas: {},
      prefs: { minutos: 20, voz: '', velocidade: 1.05, tema: '', nome: 'Felipe' },
    };
  }
  function carregar() {
    try {
      const bruto = localStorage.getItem(CHAVE);
      if (bruto) { const e = JSON.parse(bruto); const base = estadoNovo(); return { ...base, ...e, prefs: { ...base.prefs, ...(e.prefs || {}) } }; }
    } catch (_) { /* navegador sem armazenamento: segue em memória */ }
    return estadoNovo();
  }
  let E = carregar();
  function salvar() { try { localStorage.setItem(CHAVE, JSON.stringify(E)); } catch (_) { /* ignora */ } }

  let D = null; // conteúdo
  const U = {}; // unidades por id
  const trilhaDe = (id) => D.trilhas.find((t) => t.id === id) || { nome: id, curto: id };

  // ------------------------------------------------------------------ progresso e domínio
  const NIVEIS = [
    [0, 'Estagiário'], [400, 'Associado júnior'], [1200, 'Associado pleno'], [3000, 'Associado sênior'], [6000, 'Counsel'], [11000, 'Sócio'],
  ];
  function nivelGeral(xp) {
    let i = 0;
    while (i + 1 < NIVEIS.length && xp >= NIVEIS[i + 1][0]) i++;
    const prox = NIVEIS[i + 1];
    return { titulo: NIVEIS[i][1], n: i + 1, falta: prox ? prox[0] - xp : 0, prox: prox ? prox[1] : null, pct: prox ? (xp - NIVEIS[i][0]) / (prox[0] - NIVEIS[i][0]) : 1 };
  }
  const nivelTrilha = (xp) => 1 + Math.floor(Math.sqrt((xp || 0) / 60));

  function ganharXP(n, trilha) {
    n = Math.round(n);
    if (!n) return;
    E.xp += n;
    if (trilha) E.xpTrilha[trilha] = (E.xpTrilha[trilha] || 0) + n;
    if (S) S.xp += n;
  }
  const est = (id) => (E.unidades[id] ||= { vista: null, certas: 0, total: 0, caso: null, explique: null });

  function dominio(u) {
    const s = E.unidades[u.id];
    if (!s || !s.vista) return 0;
    const acc = s.total ? s.certas / s.total : 0.5;
    const cs = (u.cards || []).map((_, i) => E.cards[`${u.id}#${i}`]).filter(Boolean);
    const cards = cs.length ? cs.reduce((a, c) => a + (c.caixa - 1) / 4, 0) / cs.length : acc;
    const v = 0.25 + 0.35 * acc + 0.15 * (s.caso ?? acc) + 0.1 * (s.explique ?? acc) + 0.15 * cards;
    return Math.max(0, Math.min(1, v));
  }
  const dominioTrilha = (t) => {
    const us = D.unidades.filter((u) => u.trilha === t);
    return us.length ? us.reduce((a, u) => a + dominio(u), 0) / us.length : 0;
  };
  function streakAtual() {
    if (!E.ultimoDia) return 0;
    return difDias(E.ultimoDia, iso()) <= 1 ? E.streak : 0;
  }
  function registrarDia(min) {
    const hoje = iso();
    if (E.ultimoDia !== hoje) {
      E.streak = E.ultimoDia && difDias(E.ultimoDia, hoje) === 1 ? E.streak + 1 : 1;
      E.ultimoDia = hoje;
    }
    E.melhorStreak = Math.max(E.melhorStreak, E.streak);
    E.dias[hoje] = (E.dias[hoje] || 0) + Math.max(1, Math.round(min));
  }

  // flashcards: caixas de Leitner
  const INTERVALOS = [1, 3, 7, 16, 35];
  function liberarCards(u) {
    (u.cards || []).forEach((_, i) => { const k = `${u.id}#${i}`; if (!E.cards[k]) E.cards[k] = { caixa: 1, proxima: somaDias(iso(), 1) }; });
  }
  const cardsVencidos = (trilha) => Object.entries(E.cards)
    .filter(([k, c]) => c.proxima <= iso() && U[k.split('#')[0]] && (!trilha || U[k.split('#')[0]].trilha === trilha))
    .sort((a, b) => a[1].proxima.localeCompare(b[1].proxima) || a[1].caixa - b[1].caixa).map(([k]) => k);
  function avaliarCard(k, nota) {
    const c = E.cards[k] || { caixa: 1 };
    if (nota === 0) c.caixa = 1;
    else if (nota === 2) c.caixa = Math.min(5, c.caixa + 1);
    const dias = nota === 0 ? 1 : nota === 1 ? Math.max(1, Math.ceil(INTERVALOS[c.caixa - 1] / 2)) : INTERVALOS[c.caixa - 1];
    c.proxima = somaDias(iso(), dias);
    E.cards[k] = c;
  }
  const cardDe = (k) => { const [id, i] = k.split('#'); return { u: U[id], c: U[id]?.cards?.[+i] }; };

  function registrarResposta(uid, q, certo) {
    const s = est(uid);
    s.total++; if (certo) s.certas++;
    E.perguntas[`${uid}#${q}`] = iso();
    const i = E.erros.findIndex((x) => x.u === uid && x.q === q);
    if (certo && i >= 0) E.erros.splice(i, 1);
    if (!certo && i < 0) E.erros.push({ u: uid, q, em: iso() });
  }

  function desafioDaSemana() {
    const pool = D.unidades.filter((u) => u.desafio && u.caso);
    if (!pool.length) return null;
    const s = semanaISO();
    return { u: pool[s.n % pool.length], chave: s.chave, feito: !!E.desafios[s.chave] };
  }

  // ------------------------------------------------------------------ montagem da sessão
  function estimar(b) {
    switch (b.tipo) {
      case 'revisao': return Math.max(2, Math.round(b.cards.length * 0.5));
      case 'licao': return b.u.minutos || 8;
      case 'quiz': return Math.max(2, Math.round(b.itens.length * 0.8));
      case 'caso': return 8;
      case 'explique': return 5;
      default: return 0;
    }
  }
  const quizDe = (u, max = 99) => ({ tipo: 'quiz', u, itens: (u.quiz || []).slice(0, max).map((_, q) => ({ u: u.id, q })) });

  function proximaUnidade(trilha, evitar = new Set(), preferir) {
    const naoVistas = D.unidades.filter((u) => !E.unidades[u.id]?.vista && (!trilha || u.trilha === trilha) && !evitar.has(u.id));
    if (preferir) { const p = naoVistas.find(preferir); if (p) return p; }
    let cand = naoVistas;
    if (!cand.length) {
      return D.unidades.filter((u) => (!trilha || u.trilha === trilha) && !evitar.has(u.id))
        .sort((a, b) => dominio(a) - dominio(b))[0] || null;
    }
    if (trilha) return cand.sort((a, b) => a.ordem - b.ordem)[0];
    const ultima = E.historico[0]?.trilhas?.[0];
    let melhor = null, pontos = -1;
    for (const t of D.trilhas) {
      const ct = cand.filter((u) => u.trilha === t.id);
      if (!ct.length) continue;
      const vistas = D.unidades.filter((u) => u.trilha === t.id && E.unidades[u.id]?.vista).length;
      let p = t.peso / (1 + vistas);
      if (t.id === ultima) p *= 0.45;
      if ([...evitar].some((id) => U[id]?.trilha === t.id)) p *= 0.3;
      if (p > pontos) { pontos = p; melhor = ct.sort((a, b) => a.ordem - b.ordem)[0]; }
    }
    return melhor;
  }

  function montarSessao({ minutos, momento, trilha, unidade, desafio }) {
    const blocos = [];
    let resta = minutos;
    const add = (b) => { b.min = estimar(b); blocos.push(b); resta -= b.min; };
    const usados = new Set();
    let aviso = '';

    if (desafio) {
      add({ tipo: 'caso', u: desafio, desafio: true });
      if (desafio.explique) add({ tipo: 'explique', u: desafio });
    } else if (unidade) {
      add({ tipo: 'licao', u: unidade });
      if (unidade.quiz) add(quizDe(unidade));
      if (unidade.caso) add({ tipo: 'caso', u: unidade });
      if (unidade.explique) add({ tipo: 'explique', u: unidade });
    } else {
      const vistas = D.unidades.filter((u) => E.unidades[u.id]?.vista && (!trilha || u.trilha === trilha));
      const nCards = { 15: 6, 20: 8, 30: 10, 40: 14 }[minutos] || 8;
      if (momento === 'noite' && vistas.length) {
        // revisão e fixação
        let cards = cardsVencidos(trilha).slice(0, nCards);
        if (cards.length < nCards) {
          const extra = vistas.flatMap((u) => (u.cards || []).map((_, i) => `${u.id}#${i}`))
            .filter((k) => !cards.includes(k)).sort((a, b) => (E.cards[a]?.caixa || 1) - (E.cards[b]?.caixa || 1));
          cards = cards.concat(extra.slice(0, nCards - cards.length));
        }
        if (cards.length) add({ tipo: 'revisao', cards });
        const erros = E.erros.filter((x) => U[x.u]?.quiz?.[x.q] && (!trilha || U[x.u].trilha === trilha)).slice(0, 4).map((x) => ({ u: x.u, q: x.q }));
        const alvo = minutos >= 30 ? 6 : 4;
        const outras = vistas.flatMap((u) => (u.quiz || []).map((_, q) => ({ u: u.id, q })))
          .filter((it) => !erros.some((e) => e.u === it.u && e.q === it.q))
          .sort((a, b) => (E.perguntas[`${a.u}#${a.q}`] || '').localeCompare(E.perguntas[`${b.u}#${b.q}`] || ''));
        const itens = erros.concat(outras.slice(0, Math.max(0, alvo - erros.length)));
        if (itens.length) add({ tipo: 'quiz', itens, titulo: erros.length ? 'Fixação: inclui o que você errou' : 'Fixação' });
        const fraca = (f) => vistas.filter(f).sort((a, b) => dominio(a) - dominio(b))[0];
        if (resta >= 7) { const u = fraca((u) => u.caso); if (u) { add({ tipo: 'caso', u }); usados.add(u.id); } }
        if (resta >= 4) { const u = fraca((u) => u.explique && !usados.has(u.id)); if (u) { add({ tipo: 'explique', u }); usados.add(u.id); } }
        if (resta >= 8) { const u = fraca((u) => !usados.has(u.id)); if (u) add({ tipo: 'licao', u, releitura: true }); }
      } else {
        if (momento === 'noite') aviso = 'Ainda não há conteúdo visto para revisar, então a sessão traz algo novo.';
        const venc = cardsVencidos(trilha);
        if (venc.length) add({ tipo: 'revisao', cards: venc.slice(0, Math.min(venc.length, Math.ceil(nCards / 2) + 1)) });
        const u = proximaUnidade(trilha);
        if (u) {
          usados.add(u.id);
          add({ tipo: 'licao', u });
          if (u.quiz) add(quizDe(u));
          if (resta >= 7 && u.caso) add({ tipo: 'caso', u });
          if (resta >= 4 && u.explique) add({ tipo: 'explique', u });
          if (resta >= 8) {
            const u2 = proximaUnidade(trilha, usados, (x) => x.tipo === 'radar' || x.tipo === 'livro');
            if (u2) { usados.add(u2.id); add({ tipo: 'licao', u: u2 }); if (u2.quiz && resta >= 2) add(quizDe(u2, 3)); }
          }
          if (resta >= 7) {
            const c = vistas.filter((x) => x.caso && !usados.has(x.id)).sort((a, b) => dominio(a) - dominio(b))[0];
            if (c) add({ tipo: 'caso', u: c });
          }
          if (resta >= 3) {
            const itens = vistas.filter((x) => !usados.has(x.id)).flatMap((x) => (x.quiz || []).map((_, q) => ({ u: x.id, q })))
              .sort((a, b) => (E.perguntas[`${a.u}#${a.q}`] || '').localeCompare(E.perguntas[`${b.u}#${b.q}`] || ''))
              .slice(0, Math.min(5, Math.floor(resta / 0.8)));
            if (itens.length >= 2) add({ tipo: 'quiz', itens, titulo: 'Fixação do que você já viu' });
          }
        }
      }
    }
    blocos.push({ tipo: 'fim', min: 0 });
    return { blocos, aviso, previsto: blocos.reduce((a, b) => a + b.min, 0) };
  }

  const NOMES_BLOCO = { revisao: 'Revisão', licao: 'Lição', quiz: 'Quiz', caso: 'Caso prático', explique: 'Explique com suas palavras', fim: 'Fechamento' };
  function descreverBloco(b) {
    switch (b.tipo) {
      case 'revisao': return { t: 'Revisão espaçada', s: pl(b.cards.length, 'flashcard', 'flashcards') };
      case 'licao': return { t: b.releitura ? 'Releitura' : b.u.tipo === 'livro' ? 'Livro' : b.u.tipo === 'radar' ? 'Radar' : 'Lição', s: b.u.titulo };
      case 'quiz': return { t: b.titulo || 'Quiz', s: b.u ? `${pl(b.itens.length, 'pergunta', 'perguntas')} · ${b.u.titulo}` : pl(b.itens.length, 'pergunta', 'perguntas') };
      case 'caso': return { t: b.desafio ? 'Desafio da semana' : 'Caso prático', s: b.u.titulo };
      case 'explique': return { t: 'Explique com suas palavras', s: b.u.titulo };
      default: return { t: 'Fechamento', s: 'placar e anotação' };
    }
  }

  // ------------------------------------------------------------------ estado de interface
  const hora = new Date().getHours();
  const ui = {
    tela: 'hoje', minutos: E.prefs.minutos || 20, momento: hora < 15 ? 'manha' : 'noite', trilha: null, filtro: null, confirmar: null, toast: null,
    primeira: true, pautaSig: null, ind: {}, etapaChave: null, viaTeclado: false,
  };
  let S = null; // sessão ativa
  let relogioTimer = null;

  function toast(msg) {
    ui.toast = msg; renderToast();
    clearTimeout(toast.t); toast.t = setTimeout(() => { ui.toast = null; renderToast(); }, 2600);
  }
  function renderToast() {
    let el = document.querySelector('.toast:not(.sai)');
    if (!ui.toast) {
      if (el) { el.classList.add('sai'); setTimeout(() => el.remove(), 220); } // sai mais rápido do que entra
      return;
    }
    if (!el) { el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = ui.toast;
  }

  function aplicarTema() {
    const t = E.prefs.tema;
    if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
    corBarra();
  }
  // a barra de status do celular acompanha a cor do topo da página (e o modo direção, que é escuro)
  function corBarra() {
    try {
      let m = document.querySelector('meta[name="theme-color"]');
      if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'theme-color'); document.head.appendChild(m); }
      m.setAttribute('content', ui.tela === 'direcao' ? '#07110D' : getComputedStyle(document.body).backgroundColor);
    } catch (_) { /* opcional */ }
  }

  // indicador deslizante (seg e tempos): uma cópia "ativa" recortada por clip-path, que desliza entre as opções
  const clipSeg = (i, n) => `inset(0 calc(100% - ${i + 1} * 100% / ${n}) 0 calc(${i} * 100% / ${n}) round 999px)`;
  const clipTempo = (i) => `inset(0 calc(100% - ${i} * ((100% - 24px) / 4 + 8px) - (100% - 24px) / 4) 0 calc(${i} * ((100% - 24px) / 4 + 8px)) round 16px)`;
  function segmento(chave, opcoes, ativo, acao, rotulo) {
    const n = opcoes.length;
    const i = Math.max(0, opcoes.findIndex((o) => o.v === ativo));
    const bts = opcoes.map((o) => `<button data-acao="${acao}" data-v="${esc(o.v)}" aria-pressed="${o.v === ativo}">${esc(o.t)}</button>`).join('');
    const copia = opcoes.map((o) => `<span>${esc(o.t)}</span>`).join('');
    return `<div class="seg" role="group" aria-label="${esc(rotulo)}" data-ind="${chave}" data-i="${i}" data-n="${n}">${bts}<div class="seg-ativo ind-ativo" aria-hidden="true" style="clip-path:${clipSeg(i, n)}">${copia}</div></div>`;
  }
  function animarIndicadores() {
    document.querySelectorAll('[data-ind]').forEach((el) => {
      const chave = el.dataset.ind, i = +el.dataset.i, n = +el.dataset.n;
      const ov = el.querySelector('.ind-ativo');
      if (!ov) return;
      const clip = (k) => (chave === 'tempo' ? clipTempo(k) : clipSeg(k, n));
      const antes = ui.ind[chave];
      ui.ind[chave] = i;
      if (antes == null || antes === i || antes >= n) return;
      ov.style.transition = 'none';
      ov.style.clipPath = clip(antes);
      ov.getBoundingClientRect(); // fixa o ponto de partida antes de animar
      ov.style.transition = '';
      ov.style.clipPath = clip(i);
    });
  }

  // ------------------------------------------------------------------ ícones
  const svg = (d, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
  const IC = {
    hoje: svg('<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>'),
    trilhas: svg('<path d="m12 3.5 8.5 4.7L12 13 3.5 8.2z"/><path d="m3.5 12.4 8.5 4.8 8.5-4.8"/><path d="m3.5 16.4 8.5 4.8 8.5-4.8"/>'),
    progresso: svg('<path d="M4 20h16"/><rect x="5" y="11" width="3.2" height="6" rx="1.6"/><rect x="10.4" y="7" width="3.2" height="10" rx="1.6"/><rect x="15.8" y="4" width="3.2" height="13" rx="1.6"/>'),
    direcao: svg('<path d="M4.5 15v-3a7.5 7.5 0 0 1 15 0v3"/><rect x="3.5" y="14" width="4.5" height="6.5" rx="2"/><rect x="16" y="14" width="4.5" height="6.5" rx="2"/>'),
    fechar: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.2v13.6a1 1 0 0 0 1.5.86l11-6.8a1 1 0 0 0 0-1.72l-11-6.8A1 1 0 0 0 8 5.2z"/></svg>',
    pausa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4.5" width="4.4" height="15" rx="1.4"/><rect x="13.6" y="4.5" width="4.4" height="15" rx="1.4"/></svg>',
    repetir: svg('<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4.5v4h4"/>', 'stroke-width="2"'),
    pular: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.5 5.6v12.8a1 1 0 0 0 1.55.83l9.4-6.4a1 1 0 0 0 0-1.66l-9.4-6.4a1 1 0 0 0-1.55.83z"/><rect x="16.5" y="4.5" width="3.5" height="15" rx="1.2"/></svg>',
    ouvir: svg('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'),
    licao: svg('<path d="M3.5 5.5c2.9-1.2 5.7-1.1 8.5.6 2.8-1.7 5.6-1.8 8.5-.6v13.4c-2.9-1.2-5.7-1.1-8.5.6-2.8-1.7-5.6-1.8-8.5-.6z"/><path d="M12 6.1v13.4"/>'),
    quiz: svg('<circle cx="12" cy="12" r="8.6"/><path d="M9.6 9.4a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.7"/><path d="M12 17v.01"/>'),
    caso: svg('<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"/>'),
    explique: svg('<path d="M5 18.5V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9z"/><path d="M9 9h6M9 12h4"/>'),
    revisao: svg('<rect x="7.5" y="7.5" width="12.5" height="12.5" rx="3"/><path d="M4 15V7a3 3 0 0 1 3-3h8"/>'),
    fim: svg('<path d="M5.5 21V4"/><path d="M5.5 4.5h11l-2.2 4 2.2 4h-11"/>'),
    raio: svg('<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>'),
    alvo: svg('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/>'),
    refazer: svg('<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4.5v4h4"/>'),
    relogio: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
    calendario: svg('<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4M16 3v4M4 10h16"/>'),
    chama: svg('<path d="M12 21c-3.9 0-6.5-2.7-6.5-6.2 0-3.4 2.4-5.3 3.9-7.6.6 1.6 1.6 2.6 2.6 3.1.2-2.6 1.2-4.9 3.4-6.8.2 2.6 3.1 5.1 3.1 9.4 0 4.6-2.6 8.1-6.5 8.1z"/>'),
    lista: svg('<path d="M9 6.5h11M9 12h11M9 17.5h11"/><circle cx="4.8" cy="6.5" r="1" fill="currentColor"/><circle cx="4.8" cy="12" r="1" fill="currentColor"/><circle cx="4.8" cy="17.5" r="1" fill="currentColor"/>'),
    livros: svg('<path d="M5 4.5h4v15H5zM10 4.5h4v15h-4z"/><path d="m15.2 5.3 3.5-.9 2.8 14.2-3.5.9z"/>'),
  };
  const ICONE_BLOCO = { revisao: ['revisao', 'azul'], licao: ['licao', ''], quiz: ['quiz', 'rosa'], caso: ['caso', 'teal'], explique: ['explique', 'coral'], fim: ['fim', ''] };

  // objetos 3D (renderizados com Three.js em scripts/3d e exportados como WebP)
  const ASSETS = 'assets/3d/';
  const img3d = (nome, cls = '', extra = '') => `<img class="obj3d ${cls}" src="${ASSETS}${nome}.webp" alt="" aria-hidden="true" decoding="async" draggable="false" ${extra}>`;
  const VISUAL = {
    financas: { img: 'moeda-real', cls: 't-financas', arte: ['moeda-secao', 'moeda-pct-desfocada', 'moeda-real'] },
    nicho: { img: 'blocos', cls: 't-nicho', arte: ['blocos', 'moeda-secao-desfocada', 'gema'] },
    mercados: { img: 'aneis', cls: 't-mercados', arte: ['aneis', 'moeda-real-desfocada', 'moeda-pct'] },
    ia: { img: 'esfera', cls: 't-ia', arte: ['esfera', 'moeda-pct-desfocada', 'gema'] },
    livros: { img: 'gema', cls: 't-livros', arte: ['gema', 'moeda-secao-desfocada', 'estrela-clara'] },
    empreendedorismo: { img: 'estrela-clara', cls: 't-empreendedorismo', arte: ['estrela-clara', 'moeda-real-desfocada', 'gema'] },
  };
  const visual = (t) => VISUAL[t] || VISUAL.financas;
  const curto = (t, max = 30) => { const c = String(t).split(/ — | - |: /)[0]; return c.length > max ? c.slice(0, max - 1).trimEnd() + '…' : c; };

  // ------------------------------------------------------------------ telas
  function render() {
    if (!D) return;
    document.documentElement.classList.toggle('em-sessao', (ui.tela === 'sessao' && !!S) || ui.tela === 'direcao');
    if (ui.tela === 'sessao' && S) renderSessao();
    else if (ui.tela === 'direcao') renderDirecao();
    else {
      const corpo = ui.tela === 'biblioteca' ? telaBiblioteca() : ui.tela === 'progresso' ? telaProgresso() : telaHoje();
      app.innerHTML = `<main class="casca${ui.primeira ? ' primeira' : ''}">${corpo}</main>${nav()}`;
      ui.primeira = false;
      animarIndicadores();
    }
    corBarra();
  }

  function nav() {
    const b = (id, nome, ic) => `<button data-acao="ir" data-tela="${id}" ${ui.tela === id ? 'aria-current="page"' : ''}>${IC[ic]}<span>${nome}</span></button>`;
    return `<nav class="nav" aria-label="Navegação">${b('hoje', 'Hoje', 'hoje')}${b('biblioteca', 'Trilhas', 'trilhas')}${b('progresso', 'Progresso', 'progresso')}${b('direcao', 'Direção', 'direcao')}</nav>`;
  }

  function topo() {
    const ini = ((E.prefs.nome || '').trim().charAt(0) || 'L').toUpperCase();
    return `<header class="barra"><div class="marca">${img3d('moeda-lastro', '', 'width="30" height="30"')}<span>Lastro</span></div><button class="avatar" data-acao="ir" data-tela="progresso" aria-label="Progresso e ajustes">${esc(ini)}</button></header>`;
  }

  // semana corrente (domingo a sábado), como a faixa de calendário dos dashboards de referência
  function faixaDias(acender = false) {
    const hoje = deISO(iso()), dom = new Date(hoje);
    dom.setDate(hoje.getDate() - hoje.getDay());
    const nomes = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    let html = '';
    for (let i = 0; i < 7; i++) {
      const d = new Date(dom); d.setDate(dom.getDate() + i);
      const k = iso(d), feito = !!E.dias[k], ehHoje = k === iso();
      html += `<div class="dia${feito ? ' feito' : ''}${ehHoje ? ' hoje' : ''}${ehHoje && acender ? ' acende' : ''}"${feito ? ` title="${E.dias[k]} min"` : ''}><span class="ds">${nomes[i]}</span><span class="dn num">${d.getDate()}</span></div>`;
    }
    return `<div class="semana" aria-label="Semana atual">${html}</div>`;
  }

  function telaHoje() {
    const st = streakAtual();
    const nv = nivelGeral(E.xp);
    const pauta = montarSessao({ minutos: ui.minutos, momento: ui.momento, trilha: ui.trilha });
    ui.pauta = pauta;
    const venc = cardsVencidos().length;
    const des = desafioDaSemana();
    const minHoje = E.dias[iso()] || 0;
    const principal = (pauta.blocos.find((b) => b.tipo === 'licao') || pauta.blocos.find((b) => b.u))?.u;
    const tv = visual(principal ? principal.trilha : ui.trilha || 'financas');
    const h = new Date().getHours();
    const cumprimento = h < 5 ? 'Boa noite' : h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
    const nome = (E.prefs.nome || '').trim();
    const xpSemana = E.historico.filter((x) => x.data >= somaDias(iso(), -6)).reduce((a, x) => a + (x.xp || 0), 0);
    const domGeral = Math.round(D.unidades.reduce((a, u) => a + dominio(u), 0) / Math.max(1, D.unidades.length) * 100);

    const MIN = [15, 20, 30, 40];
    const iT = Math.max(0, MIN.indexOf(ui.minutos));
    const tempos = `<div class="tempos" data-ind="tempo" data-i="${iT}" data-n="4">
        <div class="tempos-grade">${MIN.map((m) => `<button class="tempo" data-acao="tempo" data-m="${m}" aria-pressed="${ui.minutos === m}" aria-label="${m} minutos"><b class="num">${m}</b><span>min</span></button>`).join('')}</div>
        <div class="tempos-ativo tempos-grade ind-ativo" aria-hidden="true" style="clip-path:${clipTempo(iT)}">${MIN.map((m) => `<div class="tempo"><b class="num">${m}</b><span>min</span></div>`).join('')}</div>
      </div>`;
    const sig = pauta.blocos.map((b) => `${b.tipo}${b.u ? b.u.id : ''}${b.itens ? b.itens.length : ''}${b.cards ? b.cards.length : ''}`).join('|') + pauta.previsto;
    const mudou = ui.pautaSig != null && ui.pautaSig !== sig;
    ui.pautaSig = sig;
    const chips = [`<button class="pill" data-acao="trilha" data-t="" aria-pressed="${!ui.trilha}">Pauta automática</button>`]
      .concat(D.trilhas.map((t) => `<button class="pill" data-acao="trilha" data-t="${t.id}" aria-pressed="${ui.trilha === t.id}">${esc(t.nome)}</button>`)).join('');
    const passos = pauta.blocos.map((b) => {
      const d = descreverBloco(b), [ic, cor] = ICONE_BLOCO[b.tipo] || ['lista', ''];
      return `<div class="passo"><span class="icone ${cor}">${IC[ic]}</span><div><b>${esc(d.t)}</b><span class="s">${esc(d.s)}</span></div><span class="min num">${b.min ? b.min + ' min' : ''}</span></div>`;
    }).join('');
    const tipos = [...new Set(pauta.blocos.filter((b) => b.tipo !== 'fim').map((b) => NOMES_BLOCO[b.tipo]))].join(' · ');
    const metrica = (rot, valor, extra, ic, cor) => `<div class="cartao metrica"><div class="topo-m"><span class="rot">${rot}</span><span class="icone ${cor}">${IC[ic]}</span></div><div class="valor num">${valor}</div>${extra}</div>`;
    const dominios = D.trilhas.map((t) => {
      const us = D.unidades.filter((u) => u.trilha === t.id);
      const vistas = us.filter((u) => E.unidades[u.id]?.vista).length;
      const v = Math.round(dominioTrilha(t.id) * 100);
      return `<div class="dominio-linha">${img3d(visual(t.id).img, '', 'width="42" height="42" loading="lazy"')}<div><div class="nm">${esc(t.nome)}<span class="num">${vistas}/${us.length}</span></div><div class="trilho"><i style="width:${v}%"></i></div></div><span class="pc num">${v}%</span></div>`;
    }).join('');

    return `${topo()}
    <section class="saudacao">
      <p class="olho">${esc(fmtData(iso(), { weekday: 'long', day: 'numeric', month: 'long' }))}</p>
      <h1 class="titulo-tela">${cumprimento}${nome ? `, ${esc(nome)}` : ''}</h1>
      <p class="sub">${st ? `Dia ${st} da sua sequência. ` : ''}${minHoje ? 'Hoje já conta.' : 'Uma sessão hoje mantém o ritmo.'}</p>
    </section>

    <section class="hero" aria-label="Sessão de hoje">
      <div class="hero-arte" aria-hidden="true">${img3d(tv.arte[1], 'a2 flutua d2')}${img3d(tv.arte[0], 'a1 flutua')}${img3d(tv.arte[2], 'a3 flutua d3')}</div>
      <div class="hero-texto">
        <p class="olho">${ui.momento === 'noite' ? 'Revisão de hoje' : 'Sessão de hoje'}</p>
        <h2>${esc(principal ? curto(principal.titulo, 46) : 'Sessão de hoje')}</h2>
        <p><span class="num">≈ ${pauta.previsto} min</span> · ${esc(tipos)}</p>
      </div>
      <div class="hero-acoes">
        <button class="btn btn-p" data-acao="iniciar">${IC.play} Começar</button>
        <button class="btn btn-s" data-acao="ir" data-tela="direcao">${IC.ouvir} Ouvir</button>
      </div>
    </section>

    <section class="cartao" aria-label="Montar a sessão">
      <div class="cartao-cab"><h3><span class="icone">${IC.relogio}</span>Quanto tempo você tem?</h3><span class="meta num">≈ ${pauta.previsto} min</span></div>
      ${tempos}
      ${segmento('momento', [{ v: 'manha', t: 'Manhã · algo novo' }, { v: 'noite', t: 'Noite · revisão' }], ui.momento, 'momento', 'Momento do dia')}
      <div class="chips" role="group" aria-label="Trilha">${chips}</div>
    </section>

    <section class="cartao" aria-label="Pauta do dia">
      <div class="cartao-cab"><h3><span class="icone rosa">${IC.lista}</span>Pauta do dia</h3><span class="meta">${pl(pauta.blocos.length - 1, 'bloco', 'blocos')}</span></div>
      <div class="pauta${mudou ? ' mudou' : ''}">${passos}</div>
      ${pauta.aviso ? `<p class="aviso">${esc(pauta.aviso)}</p>` : ''}
      <button class="btn btn-v btn-largo" data-acao="iniciar">Começar sessão <span class="seta">→</span></button>
    </section>

    <section class="grade-2" aria-label="Hoje">
      <div class="cartao metrica meta-dia">
        <div class="topo-m"><span class="rot">Meta de hoje</span></div>
        <div class="valor num">${minHoje}<small>/${ui.minutos} min</small></div>
        <div class="barra-prog" role="img" aria-label="${minHoje} de ${ui.minutos} minutos"><i style="width:${Math.min(100, Math.round((minHoje / ui.minutos) * 100))}%"></i></div>
      </div>
      ${metrica('Sequência', `${st}<small>${st === 1 ? 'dia' : 'dias'}</small>`, `<span class="chip neutro">melhor: ${E.melhorStreak}</span>`, 'chama', 'rosa')}
    </section>

    <section class="cartao" aria-label="Sua semana">
      <div class="cartao-cab"><h3><span class="icone azul">${IC.calendario}</span>Sua semana</h3><span class="meta">${esc(fmtData(iso(), { month: 'long', year: 'numeric' }))}</span></div>
      ${faixaDias()}
    </section>

    <section class="grade-2" aria-label="Indicadores">
      ${metrica('XP', fmtN(E.xp), `<span class="chip teal">+${fmtN(xpSemana)} na semana</span>`, 'raio', '')}
      ${metrica('Domínio', `${domGeral}<small>%</small>`, `<span class="chip">${esc(nv.titulo)}</span>`, 'alvo', 'teal')}
      ${metrica('Revisão', venc, `<span class="s aviso">${venc === 1 ? 'cartão vence hoje' : 'cartões vencem hoje'}</span>`, 'revisao', 'azul')}
      ${metrica('Para refazer', E.erros.length, `<span class="s aviso">${E.erros.length === 1 ? 'pergunta errada' : 'perguntas erradas'}</span>`, 'refazer', 'coral')}
    </section>

    ${des ? `<button class="escuro desafio" data-acao="desafio">
      <div class="arte-escura" aria-hidden="true">${img3d('toro', 'flutua d2', 'style="width:48%;right:52%;top:44%"')}${img3d('estrela', 'flutua', 'style="width:72%;right:4%;top:2%"')}${img3d('cruz', 'flutua d3', 'style="width:38%;right:-4%;top:58%"')}</div>
      <span class="olho">Desafio da semana</span>
      <h3>${esc(des.u.titulo)}</h3>
      <span class="pilulas"><span class="pilula magenta">${des.feito ? 'Concluído' : '+50 XP'}</span><span class="pilula lima">≈ 10 min</span><span class="pilula branca">${esc(trilhaDe(des.u.trilha).curto)}</span></span>
      <span class="ir">${des.feito ? 'Rever o caso' : 'Resolver agora'} <i>→</i></span>
    </button>` : ''}

    <section class="cartao" aria-label="Domínio por trilha">
      <div class="cartao-cab"><h3><span class="icone">${IC.alvo}</span>Domínio por trilha</h3><button class="btn btn-t" data-acao="ir" data-tela="biblioteca">Ver trilhas</button></div>
      <div class="dominios">${dominios}</div>
    </section>`;
  }

  function telaBiblioteca() {
    const f = ui.filtro;
    const cards = D.trilhas.map((t) => {
      const us = D.unidades.filter((u) => u.trilha === t.id);
      const vistas = us.filter((u) => E.unidades[u.id]?.vista).length;
      const v = visual(t.id);
      return `<button class="trilha ${v.cls}" data-acao="filtro" data-t="${f === t.id ? '' : t.id}" aria-pressed="${f === t.id}">${img3d(v.img, 'flutua' + (t.id.length % 3 ? ' d2' : ''), 'width="96" height="96"')}<span class="n num">${us.length}</span><span class="nome">${esc(t.nome)}</span><span class="dom num">${vistas} vistas · ${Math.round(dominioTrilha(t.id) * 100)}% domínio</span></button>`;
    }).join('');
    const itemDe = (u) => {
      const s = E.unidades[u.id];
      const tipo = u.tipo === 'livro' ? 'Livro' : u.tipo === 'radar' ? 'Radar' : u.tipo === 'desafio' ? 'Desafio' : `Nível ${u.nivel}`;
      const pc = Math.round(dominio(u) * 100);
      const st = s?.vista ? `<span class="chip ${pc >= 85 ? 'teal' : pc < 45 ? 'coral' : ''} num">${pc}%</span>` : '<span class="chip neutro">novo</span>';
      return `<button class="item" data-acao="abrir" data-id="${u.id}"><div><b>${esc(u.titulo)}</b><span class="s">${esc(tipo)} · ${u.minutos} min${u.caso ? ' · caso' : ''}</span></div>${st}</button>`;
    };
    const grupos = D.trilhas.filter((t) => !f || t.id === f).map((t) => {
      const us = D.unidades.filter((u) => u.trilha === t.id);
      return `<section class="cartao" aria-label="${esc(t.nome)}">
        <div class="cartao-cab"><h3>${img3d(visual(t.id).img, '', 'width="30" height="30" loading="lazy"')}${esc(t.nome)}</h3><span class="meta">${pl(us.length, 'unidade', 'unidades')}</span></div>
        <div class="lista">${us.map(itemDe).join('')}</div></section>`;
    }).join('');
    return `${topo()}
      <section class="saudacao"><p class="olho">Biblioteca</p><h1 class="titulo-tela">Trilhas</h1><p class="sub">Toque numa trilha para filtrar. Toque numa unidade para estudar só ela, fora da pauta automática.</p></section>
      <section class="trilhas-grade" aria-label="Trilhas">${cards}</section>
      ${grupos}
      <p class="aviso">Conteúdo gerado em ${esc(fmtData(D.geradoEm, { day: 'numeric', month: 'long', year: 'numeric' }))}. Para ampliar, peça ao Claude Code novos lotes seguindo <code>conteudo/COMO-ESCREVER.md</code>.</p>`;
  }

  function telaProgresso() {
    const nv = nivelGeral(E.xp);
    const geral = Math.round(D.unidades.reduce((a, u) => a + dominio(u), 0) / Math.max(1, D.unidades.length) * 100);
    const vistas = D.unidades.filter((u) => E.unidades[u.id]?.vista).length;
    const certas = Object.values(E.unidades).reduce((a, s) => a + s.certas, 0);
    const total = Object.values(E.unidades).reduce((a, s) => a + s.total, 0);
    const metrica = (rot, valor, extra, ic, cor) => `<div class="cartao metrica"><div class="topo-m"><span class="rot">${rot}</span><span class="icone ${cor}">${IC[ic]}</span></div><div class="valor num">${valor}</div>${extra}</div>`;

    const dias7 = [];
    for (let i = 6; i >= 0; i--) dias7.push(somaDias(iso(), -i));
    const max = Math.max(40, ...dias7.map((d) => E.dias[d] || 0));
    const semana = dias7.map((d) => {
      const m = E.dias[d] || 0;
      return `<div class="${d === iso() ? 'hoje' : ''}"><em class="num">${m || ''}</em><span class="b">${m ? `<i style="height:${Math.max(8, (m / max) * 100)}%"></i>` : ''}</span><span>${esc(fmtData(d, { weekday: 'short' }).replace('.', ''))}</span></div>`;
    }).join('');

    const mapa = D.trilhas.map((t) => {
      const us = D.unidades.filter((u) => u.trilha === t.id);
      if (!us.length) return '';
      const tiles = us.map((u) => {
        const s = E.unidades[u.id], d = dominio(u);
        const cls = !s?.vista ? '' : d < 0.45 ? 'n1 fraco' : d < 0.65 ? 'n2' : d < 0.85 ? 'n3' : 'n4';
        return `<button class="tile ${cls}" data-acao="abrir" data-id="${u.id}"><b>${esc(u.titulo)}</b><span class="pip"><i></i><i></i><i></i><i></i></span></button>`;
      }).join('');
      return `<div class="grupo-mapa"><p class="olho">${img3d(visual(t.id).img, '', 'width="22" height="22" loading="lazy"')}${esc(t.nome)}</p><div class="mapa">${tiles}</div></div>`;
    }).join('');

    const niveis = D.trilhas.map((t) => {
      const v = Math.round(dominioTrilha(t.id) * 100);
      return `<div class="dominio-linha">${img3d(visual(t.id).img, '', 'width="42" height="42" loading="lazy"')}<div><div class="nm">${esc(t.nome)}<span class="num">${fmtN(E.xpTrilha[t.id] || 0)} XP</span></div><div class="trilho"><i style="width:${v}%"></i></div></div><span class="pc num">N${nivelTrilha(E.xpTrilha[t.id])}</span></div>`;
    }).join('');

    const nHist = ui.histN || 7;
    const hist = E.historico.slice(0, nHist).map((h) => `<article>
      <div class="h-topo num"><b>${esc(fmtData(h.data, { weekday: 'short', day: 'numeric', month: 'short' }))}</b>· ${h.minutos} min · +${fmtN(h.xp)} XP${h.total ? ` · ${h.acertos}/${h.total}` : ''}${h.direcao ? ' · áudio' : ''}</div>
      <p>${esc(h.titulos.join(' · '))}</p>
      ${h.nota ? `<p class="nota">${esc(h.nota)}</p>` : ''}</article>`).join('');
    const vozes = vozesPt().map((v) => `<option value="${esc(v.name)}" ${E.prefs.voz === v.name ? 'selected' : ''}>${esc(v.name)}</option>`).join('');

    return `${topo()}
      <section class="saudacao"><p class="olho">${esc(nv.titulo)}${nv.prox ? ` · faltam ${fmtN(nv.falta)} XP para ${esc(nv.prox)}` : ''}</p><h1 class="titulo-tela">Seu progresso</h1></section>

      <section class="cartao metrica meta-dia progresso-topo">
        ${img3d('gema', 'flutua', 'width="140" height="140"')}
        <div class="topo-m"><span class="rot">Domínio geral</span></div>
        <div class="valor num">${geral}<small>%</small></div>
        <div class="barra-prog" role="img" aria-label="Domínio geral de ${geral}%"><i style="width:${geral}%"></i></div>
      </section>

      <section class="grade-2">
        ${metrica('Unidades vistas', `${vistas}<small>/${D.unidades.length}</small>`, '<span class="chip neutro">todas as trilhas</span>', 'licao', '')}
        ${metrica('Acerto no quiz', `${total ? Math.round((certas / total) * 100) : 0}<small>%</small>`, `<span class="chip ${total && certas / total >= 0.7 ? 'teal' : 'neutro'} num">${certas}/${total}</span>`, 'quiz', 'rosa')}
        ${metrica('Melhor sequência', `${E.melhorStreak}<small>${E.melhorStreak === 1 ? 'dia' : 'dias'}</small>`, `<span class="chip rosa">atual: ${streakAtual()}</span>`, 'chama', 'coral')}
        ${metrica('XP total', fmtN(E.xp), `<span class="chip">${esc(nv.titulo)}</span>`, 'raio', 'teal')}
      </section>

      <section class="cartao"><div class="cartao-cab"><h3><span class="icone">${IC.progresso}</span>Minutos nos últimos 7 dias</h3></div><div class="barras-sem">${semana}</div></section>

      <section class="cartao">
        <div class="cartao-cab"><h3><span class="icone teal">${IC.alvo}</span>Mapa de domínio</h3></div>
        <div class="legenda"><span><i style="background:var(--cartao-2);box-shadow:inset 0 0 0 1px var(--borda)"></i>não visto</span><span><i style="background:var(--coral)"></i>fraco</span><span><i style="background:var(--violeta-claro)"></i>em progresso</span><span><i style="background:var(--violeta)"></i>dominado</span></div>
        ${mapa}
      </section>

      <section class="cartao"><div class="cartao-cab"><h3><span class="icone rosa">${IC.trilhas}</span>Nível por trilha</h3></div><div class="dominios">${niveis}</div></section>

      <section class="cartao"><div class="cartao-cab"><h3><span class="icone azul">${IC.calendario}</span>Histórico e anotações</h3></div>
        <div class="historico">${hist || '<p class="aviso">As sessões concluídas aparecem aqui, com a sua anotação de cada dia.</p>'}</div>
        ${E.historico.length > nHist ? `<button class="btn btn-t" data-acao="mais-hist">Mostrar mais ${Math.min(20, E.historico.length - nHist)} de ${fmtN(E.historico.length - nHist)}</button>` : ''}
      </section>

      <section class="cartao caixa-ajuste">
        <div class="cartao-cab"><h3>Ajustes</h3></div>
        <label class="rotulo-campo" for="aj-nome">Como te chamamos</label>
        <input id="aj-nome" class="campo" data-campo="nome" value="${esc(E.prefs.nome || '')}" placeholder="Seu nome" autocomplete="given-name" enterkeyhint="done">
        <p class="rotulo-campo">Tema</p>
        ${segmento('tema', [{ v: '', t: 'Automático' }, { v: 'light', t: 'Claro' }, { v: 'dark', t: 'Escuro' }], E.prefs.tema || '', 'tema', 'Tema')}
        <label class="rotulo-campo" for="aj-voz">Voz da leitura</label>
        <select id="aj-voz" class="campo" data-campo="voz"><option value="">Automática (melhor voz pt-BR disponível)</option>${vozes}</select>
        <p>No iPhone, vozes melhores ficam em Ajustes › Acessibilidade › Conteúdo Falado › Vozes › Português (Brasil). Baixe uma voz "Aprimorada" ou "Premium".</p>
      </section>

      <section class="cartao caixa-ajuste">
        <div class="cartao-cab"><h3>Backup do progresso</h3></div>
        <p>O progresso fica salvo só neste navegador. Exporte de vez em quando para não perder, ou para levar para outro aparelho.</p>
        <div class="acoes"><button class="btn btn-s" data-acao="exportar">Copiar backup</button>${document.getElementById('dados-conteudo') ? '' : '<button class="btn btn-s" data-acao="baixar">Baixar arquivo</button>'}</div>
        <label class="rotulo-campo" for="imp-texto">Restaurar: cole o backup aqui</label>
        <textarea id="imp-texto" placeholder='{"versao":1,...}' style="min-height:80px" autocapitalize="off" autocorrect="off" spellcheck="false"></textarea>
        <div class="acoes"><button class="btn btn-s" data-acao="importar">Restaurar backup</button></div>
        <button class="btn segurar" data-segurar="apagar" aria-label="Apagar todo o progresso: mantenha pressionado por 2 segundos"><span>Segure para apagar o progresso</span><span class="enchendo" aria-hidden="true">Segure para apagar o progresso</span></button>
      </section>`;
  }

  // ------------------------------------------------------------------ sessão (modo leitura)
  function iniciarSessao(pauta, extra = {}) {
    pararFala();
    S = { ...extra, minutos: pauta.previsto || ui.minutos, momento: ui.momento, inicio: Date.now(), blocos: pauta.blocos.map((b) => ({ ...b, k: 0, st: {} })), i: 0, xp: 0, acertos: 0, total: 0, feitos: 0, registrada: false };
    ui.tela = 'sessao'; ui.confirmar = null;
    clearInterval(relogioTimer);
    relogioTimer = setInterval(atualizarRelogio, 1000);
    render(); window.scrollTo(0, 0);
  }

  const CIRC = 2 * Math.PI * 19;
  function estadoRelogio() {
    const total = Math.max(60, S.minutos * 60), pass = (Date.now() - S.inicio) / 1000, resto = total - pass;
    if (S.fimEm) return { off: 0, txt: 'fim' };
    const m = Math.floor(Math.abs(resto) / 60), s = Math.floor(Math.abs(resto) % 60);
    return { off: CIRC * Math.min(1, pass / total), txt: `${resto < 0 ? '+' : ''}${m}:${pad(s)}` };
  }
  function atualizarRelogio() {
    if (!S) return;
    const el = document.querySelector('.relogio');
    if (!el) return;
    const r = estadoRelogio();
    el.classList.toggle('fim', !!S.fimEm);
    el.querySelector('.frente').style.strokeDashoffset = String(r.off);
    el.querySelector('span').textContent = r.txt;
  }

  function renderSessao() {
    const b = S.blocos[S.i];
    const passos = S.blocos.map((x, i) => `<i class="${i < S.i ? 'ok' : i === S.i ? 'at' : ''}"></i>`).join('');
    const rel = estadoRelogio();
    const chave = `${S.i}:${b.k}`;
    const entra = chave !== ui.etapaChave && !ui.viaTeclado;
    ui.etapaChave = chave; ui.viaTeclado = false;
    const cab = `<div class="sessao-topo">
        <button class="fechar" data-acao="sair" aria-label="Encerrar sessão">${IC.fechar}</button>
        <div><div class="passos">${passos}</div><p class="olho">${pad(S.i + 1)}/${pad(S.blocos.length)} · ${esc(NOMES_BLOCO[b.tipo])}</p></div>
        <div class="relogio" role="timer" aria-label="Tempo da sessão"><svg viewBox="0 0 46 46" aria-hidden="true"><circle class="fundo" cx="23" cy="23" r="19"/><circle class="frente" cx="23" cy="23" r="19" stroke-dasharray="${CIRC}" stroke-dashoffset="${rel.off}"/></svg><span class="num">${rel.txt}</span></div>
      </div>
      ${ui.confirmar === 'sair' ? `<div class="cartao confirmar"><p class="sub">Encerrar agora? O que você já fez fica salvo${S.feitos ? ' e a sessão conta para a sequência' : ''}.</p><div class="acoes"><button class="btn btn-p" data-acao="sair-sim">Encerrar</button><button class="btn btn-s" data-acao="sair-nao">Continuar</button></div></div>` : ''}`;
    const corpo = { revisao: etapaRevisao, licao: etapaLicao, quiz: etapaQuiz, caso: etapaCaso, explique: etapaExplique, fim: etapaFim }[b.tipo](b);
    app.innerHTML = `<main class="casca">${cab}<section class="etapa${entra ? ' entra' : ''}" id="etapa">${corpo}</section></main>`;
    atualizarRelogio();
    if (S && S.contarAgora) { S.contarAgora = false; contarXP(); }
  }

  const tagsUnidade = (u) => `<div class="tags"><span class="chip">${esc(trilhaDe(u.trilha).nome)}</span>${u.tipo === 'livro' ? '<span class="chip rosa">Livro</span>' : u.tipo === 'radar' ? '<span class="chip rosa">Radar</span>' : `<span class="chip neutro">Nível ${u.nivel}</span>`}<span class="chip neutro num">${u.minutos} min</span>${u.verificado ? `<span class="chip teal num">conferido ${esc(fmtData(u.verificado, { day: '2-digit', month: '2-digit', year: '2-digit' }))}</span>` : ''}</div>`;

  function etapaLicao(b) {
    const u = b.u;
    return `<div class="etapa-cab">${tagsUnidade(u)}<h1>${esc(u.titulo)}</h1>${u.resumo ? `<p class="sub">${esc(u.resumo)}</p>` : ''}</div>
      <div class="acoes"><button class="btn btn-s" data-acao="ouvir-licao">${IC.ouvir} <span id="ouvir-rot">${falando ? 'Parar leitura' : 'Ouvir'}</span></button></div>
      <article class="texto">${u.licao}</article>
      ${u.exemplo ? `<section class="bloco-texto"><p class="olho">Exemplo</p><div class="texto">${u.exemplo}</div></section>` : ''}
      ${u.trabalho ? `<section class="bloco-texto trabalho"><p class="olho">No seu trabalho</p><div class="texto">${u.trabalho}</div></section>` : ''}
      ${u.verificar ? `<section class="bloco-texto verificar"><p class="olho">Verificar antes de usar</p><div class="texto">${u.verificar}</div></section>` : ''}
      ${u.fontes ? `<section class="bloco-texto fontes"><p class="olho">Fontes</p><div class="texto">${u.fontes}</div></section>` : ''}
      <div class="acoes"><button class="btn btn-p" data-acao="licao-ok">Concluir leitura <span class="seta">→</span></button></div>`;
  }

  function etapaRevisao(b) {
    if (b.k >= b.cards.length) return proximoAuto();
    const { u, c } = cardDe(b.cards[b.k]);
    if (!c) { b.k++; return etapaRevisao(b); }
    const virado = !!b.st.virado;
    return `<div class="etapa-cab"><span class="contador num">Cartão ${b.k + 1} de ${b.cards.length} · ${esc(u.titulo)}</span></div>
      <button class="flash" data-acao="virar" aria-label="Virar cartão">
        <span class="frente">${c.frente}</span>
        ${virado ? `<span class="verso revela">${c.verso}</span>` : '<span class="olho">Responda de cabeça e toque para ver</span>'}
      </button>
      ${virado ? '' : '<p class="atalho">Espaço vira o cartão</p>'}
      ${virado ? `<div class="notas3 revela-2">
        <button class="btn btn-s" data-acao="card" data-n="0">Errei<small>amanhã</small></button>
        <button class="btn btn-s" data-acao="card" data-n="1">Difícil<small>em breve</small></button>
        <button class="btn btn-v" data-acao="card" data-n="2">Sabia<small>mais tarde</small></button></div><p class="atalho">Teclas 1, 2 e 3</p>` : ''}`;
  }

  function etapaQuiz(b) {
    if (b.k >= b.itens.length) return proximoAuto();
    const it = b.itens[b.k];
    const u = U[it.u], q = u.quiz[it.q];
    const r = b.st[b.k];
    const ops = q.opcoes.map((o, i) => {
      let cls = '';
      if (r != null) { if (i === q.correta) cls = ' certa'; else if (i === r) cls = ' errada'; }
      return `<button class="opcao${cls}" data-acao="responder" data-i="${i}" ${r != null ? 'disabled' : ''}><span class="l">${LETRAS[i]}</span><span>${o}</span></button>`;
    }).join('');
    return `<div class="etapa-cab"><span class="contador num">Pergunta ${b.k + 1} de ${b.itens.length} · ${esc(u.titulo)}</span></div>
      <h2 class="pergunta">${q.pergunta}</h2>
      <div class="opcoes">${ops}</div>
      ${r == null ? '<p class="atalho">Teclas 1 a 4 respondem</p>' : ''}
      ${r != null ? `<div class="explica revela${r === q.correta ? '' : ' mal'}"><p class="olho">${r === q.correta ? 'Correto' : `Resposta: ${LETRAS[q.correta]}`}</p><div class="texto">${q.explicacao}</div></div>
      <div class="acoes revela-2"><button class="btn btn-p" data-acao="quiz-prox">${b.k + 1 < b.itens.length ? 'Próxima pergunta' : 'Continuar'} <span class="seta">→</span></button></div>` : ''}`;
  }

  function etapaCaso(b) {
    const u = b.u, c = u.caso;
    return `<div class="etapa-cab">${tagsUnidade(u)}<h1>${b.desafio ? 'Desafio da semana' : 'Caso prático'}</h1><p class="sub">${esc(u.titulo)}</p></div>
      <section class="bloco-texto"><div class="texto">${c.enunciado}</div></section>
      <label class="rotulo-campo" for="caso-resp">Sua conta e sua resposta</label>
      <textarea id="caso-resp" data-campo="caso" placeholder="Faça a conta aqui ou no papel. Escreva o resultado final antes de abrir a resolução.">${esc(b.st.texto || '')}</textarea>
      ${!b.st.aberto ? '<div class="acoes"><button class="btn btn-p" data-acao="caso-abrir">Ver resolução</button></div>' : `
        ${c.resposta ? `<div class="resposta-final revela" id="resposta-final"><span class="olho">Resposta</span><b>${c.resposta}</b></div>` : ''}
        <section class="bloco-texto revela-2" id="resolucao"><p class="olho">Resolução passo a passo</p><div class="texto">${c.resolucao}</div></section>
        <p class="rotulo-campo">Como foi?</p>
        <div class="notas3 revela-3"><button class="btn btn-s" data-acao="caso-nota" data-n="0">Errei</button><button class="btn btn-s" data-acao="caso-nota" data-n="0.5">Em parte</button><button class="btn btn-v" data-acao="caso-nota" data-n="1">Acertei</button></div>`}`;
  }

  function promptClaude(u, texto) {
    return `Estou treinando conceitos de ${trilhaDe(u.trilha).nome}. Avalie minha explicação como um professor exigente e direto.\n\nPedido: ${semTags(u.explique.pedido)}\n\nMinha resposta:\n${texto || '(em branco)'}\n\nPontos que uma boa resposta deve cobrir:\n${u.explique.pontos.map((p) => '- ' + semTags(p)).join('\n')}\n\nDiga: (1) o que está correto, (2) o que está errado ou impreciso, (3) o que faltou, (4) uma nota de 0 a 10 e (5) uma versão melhorada em até 6 linhas. Se algo depender de lei ou norma, cite o dispositivo.`;
  }

  function etapaExplique(b) {
    const u = b.u, x = u.explique;
    return `<div class="etapa-cab">${tagsUnidade(u)}<h1>Explique com suas palavras</h1><p class="sub">${esc(u.titulo)}</p></div>
      <section class="bloco-texto"><div class="texto">${x.pedido}</div></section>
      <label class="rotulo-campo" for="exp-resp">Sua explicação</label>
      <textarea id="exp-resp" data-campo="explique" placeholder="Escreva como se estivesse explicando para um colega. Sem consultar o texto.">${esc(b.st.texto || '')}</textarea>
      ${!b.st.aberto ? '<div class="acoes"><button class="btn btn-p" data-acao="exp-abrir">Comparar com a referência</button></div>' : `
        <p class="rotulo-campo revela" id="marque">Marque o que a sua resposta cobriu</p>
        <div class="checklist revela">${x.pontos.map((p, i) => `<label><input type="checkbox" id="pt-${i}" data-ponto="${i}" ${b.st.pts?.[i] ? 'checked' : ''}><span>${p}</span></label>`).join('')}</div>
        ${x.modelo ? `<section class="bloco-texto revela-2"><p class="olho">Resposta de referência</p><div class="texto">${x.modelo}</div></section>` : ''}
        <section class="cartao revela-3"><p class="sub">Quer uma correção detalhada? Copie o pedido e cole numa conversa com o Claude. Não tem custo além da sua assinatura.</p>
          <div class="acoes"><button class="btn btn-s" data-acao="copiar-claude">Copiar para o Claude</button></div></section>
        <div class="acoes"><button class="btn btn-p" data-acao="exp-ok">Concluir <span class="seta">→</span></button></div>`}`;
  }

  function etapaFim() {
    if (!S.registrada) {
      S.diaNovo = !E.dias[iso()];
      const min = Math.max(1, Math.round((Date.now() - S.inicio) / 60000));
      ganharXP(15, null);
      registrarDia(min);
      S.minReais = min;
      S.registrada = true;
      S.fimEm = Date.now();
      S.registro = {
        data: iso(), minutos: min, xp: 0, acertos: S.acertos, total: S.total, nota: '', momento: S.momento,
        titulos: [...new Set(S.blocos.filter((b) => b.u).map((b) => b.u.titulo))],
        trilhas: [...new Set(S.blocos.filter((b) => b.u).map((b) => b.u.trilha))],
      };
      S.registro.xp = S.xp;
      E.historico.unshift(S.registro);
      E.historico = E.historico.slice(0, 300);
      salvar();
    }
    const st = streakAtual();
    const primeiraVez = !S.mostrouFim;
    S.mostrouFim = true;
    const contar = primeiraVez && S.xp > 0 && !reduzMovimento();
    if (contar) S.contarAgora = true;
    const amanha = Object.values(E.cards).filter((c) => c.proxima <= somaDias(iso(), 1)).length;
    const temas = [...new Set(S.blocos.filter((x) => x.u).map((x) => x.u.titulo))].slice(0, 6);
    const cores = ['lima', 'magenta', 'menta', 'laranja', 'branca', 'lilas'], giros = [-6, 4, -3, 7, -5, 3];
    const pilulas = temas.map((t, i) => `<span class="pilula ${cores[i % 6]}" style="--giro:${giros[i % 6]}deg;animation-delay:${420 + i * 90}ms">${esc(curto(t))}</span>`).join('');
    return `<section class="escuro premio${primeiraVez ? ' chega' : ''}" aria-label="Sessão concluída">
        <div class="arte-escura" aria-hidden="true">${img3d('toro', 'flutua d3', 'style="width:40%;right:-10%;top:40%"')}${img3d('estrela', 'flutua', 'style="width:62%;right:-2%;top:2%"')}${img3d('bola-roxa', 'flutua d2', 'style="width:24%;right:58%;top:6%"')}</div>
        <p class="olho">Sessão concluída</p>
        <h2>Bom trabalho. <span>Dia ${st} da sequência.</span></h2>
        <div class="circulos">
          <div class="circulo"><b class="num" id="xp-conta">+${contar ? 0 : fmtN(S.xp)}</b><span>XP ganhos</span></div>
          <div class="circulo"><b class="num">${S.total ? `${S.acertos}/${S.total}` : '—'}</b><span>acertos no quiz</span></div>
          <div class="circulo"><b class="num">${S.minReais}</b><span>${S.minReais === 1 ? 'minuto' : 'minutos'}</span></div>
          <div class="circulo"><b class="num">${amanha}</b><span>cards até amanhã</span></div>
        </div>
        ${faixaDias(primeiraVez && S.diaNovo)}
        ${pilulas ? `<div class="pilulas-caem" aria-label="Temas de hoje">${pilulas}</div>` : ''}
      </section>
      <label class="rotulo-campo" for="nota-sessao">Anotação do dia</label>
      <textarea id="nota-sessao" data-campo="nota" placeholder="Uma ideia que você quer lembrar, uma dúvida para pesquisar, onde aplicar no trabalho.">${esc(S.registro.nota)}</textarea>
      <div class="acoes"><button class="btn btn-p" data-acao="finalizar">Salvar e voltar</button></div>`;
  }

  function contarXP() {
    const el = document.getElementById('xp-conta');
    if (!el) return;
    const alvo = S.xp, t0 = performance.now() + 150, dur = 900;
    const passo = (t) => {
      const p = Math.min(1, Math.max(0, (t - t0) / dur));
      el.textContent = '+' + fmtN(alvo * (1 - Math.pow(1 - p, 3)));
      if (p < 1 && document.body.contains(el)) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  }

  function proximoAuto() {
    queueMicrotask(() => avancar());
    return '<p class="aviso">Carregando…</p>';
  }
  function avancar() {
    pararFala();
    if (S.i < S.blocos.length - 1) S.i++;
    render(); window.scrollTo(0, 0);
  }

  // ------------------------------------------------------------------ voz (Web Speech API)
  const temFala = 'speechSynthesis' in window;
  let falando = false;
  let geracao = 0;
  function vozesPt() {
    if (!temFala) return [];
    return speechSynthesis.getVoices().filter((v) => /^pt(-|_|$)/i.test(v.lang)).sort((a, b) => (/BR/i.test(b.lang) - /BR/i.test(a.lang)));
  }
  function escolherVoz() {
    const vs = vozesPt();
    if (E.prefs.voz) { const v = vs.find((x) => x.name === E.prefs.voz); if (v) return v; }
    const pref = [/premium|aprimorad|enhanced|natural|neural/i, /luciana|felipe|francisca|thalita|antonio|google português/i];
    for (const r of pref) { const v = vs.find((x) => /BR/i.test(x.lang) && r.test(x.name)); if (v) return v; }
    return vs.find((x) => /BR/i.test(x.lang)) || vs[0] || null;
  }
  function pedacos(texto) {
    const frases = texto.replace(/\s+/g, ' ').match(/[^.!?;:]+[.!?;:]*\s*/g) || [texto];
    const out = []; let atual = '';
    for (const f of frases) {
      if ((atual + f).length > 160 && atual) { out.push(atual.trim()); atual = ''; }
      atual += f;
    }
    if (atual.trim()) out.push(atual.trim());
    return out;
  }
  function falar(texto, g) {
    return new Promise((resolve) => {
      if (!temFala || !texto) return resolve();
      const partes = pedacos(texto);
      const voz = escolherVoz();
      let i = 0;
      const prox = () => {
        if (g !== geracao || i >= partes.length) return resolve();
        const texto = partes[i++];
        const u = new SpeechSynthesisUtterance(texto);
        u.lang = 'pt-BR'; if (voz) u.voice = voz; u.rate = E.prefs.velocidade || 1;
        // trava de segurança: alguns navegadores não disparam onend
        let feito = false;
        const segue = () => { if (feito) return; feito = true; clearTimeout(trava); prox(); };
        const trava = setTimeout(segue, 4000 + (texto.length * 140) / (u.rate || 1));
        u.onend = segue; u.onerror = segue;
        speechSynthesis.speak(u);
      };
      prox();
    });
  }
  function pararFala() {
    geracao++; falando = false;
    if (temFala) speechSynthesis.cancel();
  }
  const esperar = (ms, g) => new Promise((r) => { const t0 = Date.now(); const f = () => (g !== geracao || Date.now() - t0 >= ms ? r() : setTimeout(f, 200)); f(); });

  async function ouvirLicao(u) {
    if (falando) { pararFala(); atualizarRotOuvir(); return; }
    if (!temFala) { toast('Este navegador não tem leitura em voz alta.'); return; }
    pararFala(); falando = true; atualizarRotOuvir();
    const g = geracao;
    for (const t of [u.titulo + '.', u.licaoFalada, u.exemploFalado && 'Exemplo. ' + u.exemploFalado, u.trabalhoFalado && 'No seu trabalho. ' + u.trabalhoFalado].filter(Boolean)) {
      await falar(t, g); if (g !== geracao) return;
    }
    falando = false; atualizarRotOuvir();
  }
  function atualizarRotOuvir() { const el = document.getElementById('ouvir-rot'); if (el) el.textContent = falando ? 'Parar leitura' : 'Ouvir'; }

  // ------------------------------------------------------------------ modo direção
  const DIR = { seg: [], i: 0, rodando: false, modo: 'interativo', esperando: null, inicio: 0, xp0: 0, acertos: 0, total: 0, concluido: false, ouvindo: false, rotulo: '', titulo: '', sub: '', unidades: new Set() };
  let wakeLock = null;

  function roteiro(pauta) {
    const seg = [];
    const F = (texto, titulo, sub) => texto && seg.push({ tipo: 'fala', texto, titulo, sub });
    const paragrafos = (t, titulo, sub) => (t || '').split('\n').filter((x) => x.trim()).forEach((p) => F(p, titulo, sub));
    F(`Sessão de hoje, cerca de ${pauta.previsto} minutos. ${pl(pauta.blocos.filter((b) => b.tipo !== 'fim').length, 'bloco', 'blocos')}. Para pausar, toque no botão grande do meio.`, 'Começando', '');
    for (const b of pauta.blocos) {
      if (b.tipo === 'revisao') {
        F(`Revisão rápida. ${pl(b.cards.length, 'cartão', 'cartões')}. Responda de cabeça antes de ouvir a resposta.`, 'Revisão', pl(b.cards.length, 'cartão', 'cartões'));
        b.cards.forEach((k, n) => { const { c } = cardDe(k); if (!c) return; F(c.frenteFalada, 'Revisão', `Cartão ${n + 1} de ${b.cards.length}`); seg.push({ tipo: 'pausa', ms: 3500, titulo: 'Pense…', sub: '' }); F('Resposta: ' + c.versoFalado, 'Revisão', `Cartão ${n + 1}`); });
      } else if (b.tipo === 'licao') {
        const u = b.u, nome = u.tipo === 'livro' ? 'Livro' : u.tipo === 'radar' ? 'Radar' : 'Lição';
        F(`${nome}: ${u.titulo}.`, nome, u.titulo);
        paragrafos(u.licaoFalada, nome, u.titulo);
        if (u.exemploFalado) { F('Exemplo.', 'Exemplo', u.titulo); paragrafos(u.exemploFalado, 'Exemplo', u.titulo); }
        if (u.trabalhoFalado) { F('No seu trabalho.', 'No seu trabalho', u.titulo); paragrafos(u.trabalhoFalado, 'No seu trabalho', u.titulo); }
        seg.push({ tipo: 'marcar', u });
      } else if (b.tipo === 'quiz') {
        F(`Quiz. ${pl(b.itens.length, 'pergunta', 'perguntas')}.`, 'Quiz', '');
        b.itens.forEach((it, n) => seg.push({ tipo: 'pergunta', u: U[it.u], q: it.q, titulo: 'Quiz', sub: `Pergunta ${n + 1} de ${b.itens.length}` }));
      } else if (b.tipo === 'caso') {
        const c = b.u.caso;
        F('Caso prático. ' + b.u.titulo + '.', 'Caso prático', b.u.titulo);
        paragrafos(c.enunciadoFalado, 'Caso prático', b.u.titulo);
        F('Faça a conta de cabeça. Você tem vinte segundos.', 'Caso prático', 'Pense');
        seg.push({ tipo: 'pausa', ms: 20000, titulo: 'Pense…', sub: '20 segundos' });
        if (c.respostaFalada) F('Resposta: ' + c.respostaFalada, 'Resposta', b.u.titulo);
        paragrafos(c.resolucaoFalada, 'Resolução', b.u.titulo);
      } else if (b.tipo === 'explique') {
        const x = b.u.explique;
        F('Explique com suas palavras. ' + x.pedidoFalado + ' Fale em voz alta. Você tem quarenta e cinco segundos.', 'Explique', b.u.titulo);
        seg.push({ tipo: 'pausa', ms: 45000, titulo: 'Sua vez', sub: 'Explique em voz alta' });
        F('Uma boa resposta cobre: ' + x.pontos.map(semTags).join('. ') + '.', 'Pontos-chave', b.u.titulo);
      }
    }
    F('Fim da sessão. Bom trabalho. Seu progresso foi salvo.', 'Fim', '');
    seg.push({ tipo: 'fim' });
    return seg;
  }

  function abrirDirecao() {
    pararFala();
    if (!DIR.seg.length || DIR.concluido) {
      const pauta = montarSessao({ minutos: ui.minutos, momento: ui.momento, trilha: ui.trilha });
      Object.assign(DIR, { seg: roteiro(pauta), i: 0, rodando: false, concluido: false, acertos: 0, total: 0, unidades: new Set(), titulo: 'Pronto para começar', sub: `${pauta.previsto} min · toque em Ouvir`, previsto: pauta.previsto });
    }
    ui.tela = 'direcao';
    render();
    try { navigator.wakeLock?.request('screen').then((w) => { wakeLock = w; }).catch(() => {}); } catch (_) { /* opcional */ }
  }
  function sairDirecao() {
    pararFala(); pararEscuta(); DIR.rodando = false;
    if (DIR.esperando) { DIR.esperando(-2); DIR.esperando = null; }
    try { wakeLock?.release(); } catch (_) { /* ignora */ }
    wakeLock = null;
    ui.tela = 'hoje'; render();
  }

  function renderDirecao() {
    const resp = DIR.esperando ? `<div class="dir-respostas">${(DIR.opcoes || []).map((_, i) => `<button data-acao="dir-resp" data-i="${i}" aria-label="Alternativa ${LETRAS[i]}">${LETRAS[i]}</button>`).join('')}</div>` : '';
    app.innerHTML = `<div class="direcao" role="application" aria-label="Modo direção">
      <div class="dir-topo"><span class="olho">Modo direção · ${DIR.modo === 'podcast' ? 'episódio' : 'interativo'}</span><button data-acao="dir-sair">Sair</button></div>
      <div class="dir-estado">
        <div class="orbe${DIR.rodando ? ' ativa' : ''}" aria-hidden="true">${img3d('esfera-escura', '', 'width="220" height="220"')}</div>
        <span class="olho num" id="dir-prog">${DIR.seg.length ? `${Math.min(DIR.i + 1, DIR.seg.length)} / ${DIR.seg.length}` : ''}</span>
        <h2 id="dir-tit">${esc(DIR.titulo)}</h2>
        <p id="dir-sub">${esc(DIR.sub)}</p>
        ${DIR.ouvindo ? '<p class="ouvindo">Ouvindo: diga a letra</p>' : ''}
      </div>
      ${resp}
      ${!temFala ? '<p class="aviso">Este navegador não tem leitura em voz alta. No iPhone use o Safari; no Android, o Chrome.</p>' : ''}
      <div class="dir-controles">
        <button data-acao="dir-repetir" aria-label="Repetir trecho">${IC.repetir}<span>Repetir</span></button>
        <button class="play" data-acao="dir-play" aria-label="${DIR.rodando ? 'Pausar' : 'Ouvir'}">${DIR.rodando ? IC.pausa : IC.play}<span>${DIR.rodando ? 'Pausar' : DIR.i ? 'Continuar' : 'Ouvir'}</span></button>
        <button data-acao="dir-pular" aria-label="Pular trecho">${IC.pular}<span>Pular</span></button>
      </div>
      ${DIR.esperando ? '' : `<div class="dir-ajustes">
        ${segmento('dir-modo', [{ v: 'interativo', t: 'Responder perguntas' }, { v: 'podcast', t: 'Só ouvir' }], DIR.modo, 'dir-modo', 'Formato')}
        ${segmento('dir-vel', [0.95, 1.05, 1.2].map((v) => ({ v: String(v), t: `${String(v).replace('.', ',')}×` })), String([0.95, 1.05, 1.2].reduce((a, v) => (Math.abs(v - (E.prefs.velocidade || 1)) < Math.abs(a - (E.prefs.velocidade || 1)) ? v : a), 1.05)), 'dir-vel', 'Velocidade')}
      </div>`}
    </div>`;
    animarIndicadores();
    corBarra();
  }

  function atualizarDirecao(titulo, sub) {
    if (titulo != null) DIR.titulo = titulo;
    if (sub != null) DIR.sub = sub;
    if (ui.tela !== 'direcao') return;
    const t = document.getElementById('dir-tit'); if (!t) return;
    t.textContent = DIR.titulo;
    document.getElementById('dir-sub').textContent = DIR.sub;
    document.getElementById('dir-prog').textContent = `${Math.min(DIR.i + 1, DIR.seg.length)} / ${DIR.seg.length}`;
  }

  async function tocar() {
    DIR.rodando = true;
    if (!DIR.inicio) { DIR.inicio = Date.now(); DIR.xp0 = E.xp; }
    if (ui.tela === 'direcao') renderDirecao();
    const g = geracao;
    while (DIR.rodando && g === geracao && DIR.i < DIR.seg.length) {
      const s = DIR.seg[DIR.i];
      if (s.tipo === 'fala') { atualizarDirecao(s.titulo, s.sub); await falar(s.texto, g); }
      else if (s.tipo === 'pausa') { atualizarDirecao(s.titulo, s.sub); await esperar(s.ms, g); }
      else if (s.tipo === 'pergunta') { await perguntar(s, g); }
      else if (s.tipo === 'marcar') {
        const st = est(s.u.id);
        if (!st.vista) { st.vista = iso(); liberarCards(s.u); ganharXP(15, s.u.trilha); }
        DIR.unidades.add(s.u.titulo); salvar();
      } else if (s.tipo === 'fim') { concluirDirecao(); }
      if (g !== geracao) return;
      DIR.i++;
    }
    DIR.rodando = false;
    if (ui.tela === 'direcao') renderDirecao();
  }

  function concluirDirecao() {
    if (DIR.concluido) return;
    DIR.concluido = true;
    const min = Math.max(1, Math.round((Date.now() - DIR.inicio) / 60000));
    ganharXP(15, null);
    registrarDia(min);
    E.historico.unshift({ data: iso(), minutos: min, xp: E.xp - DIR.xp0, acertos: DIR.acertos, total: DIR.total, nota: '', momento: ui.momento, direcao: true, titulos: [...DIR.unidades], trilhas: [] });
    salvar();
  }

  function perguntar(s, g) {
    return new Promise(async (resolve) => {
      const q = s.u.quiz[s.q];
      atualizarDirecao(s.titulo, s.sub);
      const texto = `${q.perguntaFalada} ${q.opcoesFaladas.map((o, i) => `Letra ${LETRAS[i]}: ${o}.`).join(' ')}`;
      await falar(texto, g);
      if (g !== geracao) return resolve();
      let escolha = -1;
      if (DIR.modo === 'interativo') {
        DIR.opcoes = q.opcoes;
        const resp = new Promise((r) => { DIR.esperando = r; });
        if (ui.tela === 'direcao') renderDirecao();
        ouvirResposta(q.opcoes.length);
        const limite = esperar(15000, g).then(() => -1);
        escolha = await Promise.race([resp, limite]);
        DIR.esperando = null; pararEscuta();
        if (ui.tela === 'direcao') renderDirecao(); // quem saiu no meio da pergunta não pode ser puxado de volta
        if (g !== geracao || escolha === -2) return resolve();
      } else {
        await esperar(3000, g);
        if (g !== geracao) return resolve();
      }
      const certa = q.correta;
      let fb;
      if (escolha === -1) fb = `A resposta é a letra ${LETRAS[certa]}.`;
      else if (escolha === certa) fb = 'Certo.';
      else fb = `Não. A correta é a letra ${LETRAS[certa]}.`;
      if (escolha >= 0) {
        DIR.total++; if (escolha === certa) DIR.acertos++;
        registrarResposta(s.u.id, s.q, escolha === certa);
        if (escolha === certa) ganharXP(10, s.u.trilha);
        salvar();
      }
      atualizarDirecao(escolha === -1 ? `Resposta: ${LETRAS[certa]}` : escolha === certa ? 'Certo' : `Correta: ${LETRAS[certa]}`, s.sub);
      await falar(`${fb} ${q.explicacaoFalada}`, g);
      resolve();
    });
  }

  // reconhecimento de voz (opcional; funciona melhor no Chrome)
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null;
  function letraDe(txt, n) {
    const t = ' ' + txt.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, ' ') + ' ';
    const mapas = [
      /\b(letra a|alternativa a|a|primeira|um|1)\b/, /\b(letra b|alternativa b|b|be|segunda|dois|2)\b/,
      /\b(letra c|alternativa c|c|ce|se|terceira|tres|3)\b/, /\b(letra d|alternativa d|d|de|quarta|quatro|4)\b/,
      /\b(letra e|alternativa e|quinta|cinco|5)\b/,
    ];
    const forte = t.match(/(?:letra|alternativa|opcao)\s+([a-e])\b/);
    if (forte) { const i = 'abcde'.indexOf(forte[1]); return i < n ? i : -1; }
    const palavras = t.trim().split(/\s+/);
    if (palavras.length <= 2) { for (let i = 0; i < n; i++) if (mapas[i].test(' ' + palavras.join(' ') + ' ')) return i; }
    return -1;
  }
  function ouvirResposta(n) {
    if (!Rec || DIR.modo !== 'interativo') return;
    try {
      rec = new Rec();
      rec.lang = 'pt-BR'; rec.interimResults = false; rec.maxAlternatives = 4;
      rec.onresult = (ev) => {
        const alts = [...ev.results[0]].map((a) => a.transcript);
        for (const a of alts) { const i = letraDe(a, n); if (i >= 0 && DIR.esperando) { DIR.esperando(i); return; } }
      };
      rec.onend = () => { DIR.ouvindo = false; if (DIR.esperando && ui.tela === 'direcao') renderDirecao(); };
      rec.onerror = () => { DIR.ouvindo = false; };
      rec.start(); DIR.ouvindo = true; if (ui.tela === 'direcao') renderDirecao();
    } catch (_) { DIR.ouvindo = false; }
  }
  function pararEscuta() { try { rec?.abort(); } catch (_) { /* ignora */ } rec = null; DIR.ouvindo = false; }

  // ------------------------------------------------------------------ ações
  async function copiar(texto) {
    try { await navigator.clipboard.writeText(texto); toast('Copiado'); return true; }
    catch (_) {
      const ta = document.getElementById('imp-texto') || document.querySelector('textarea');
      if (ta) { ta.value = texto; ta.focus(); ta.select(); }
      toast('Não consegui copiar sozinho. O texto ficou selecionado: copie manualmente.');
      return false;
    }
  }

  function rolarAte(...ids) {
    const el = ids.map((id) => document.getElementById(id)).find(Boolean);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start', behavior: reduzMovimento() ? 'auto' : 'smooth' }));
  }

  const acoes = {
    ir: (el) => { if (el.dataset.tela === 'direcao') return abrirDirecao(); ui.tela = el.dataset.tela; ui.confirmar = null; render(); window.scrollTo(0, 0); },
    tempo: (el) => { ui.minutos = +el.dataset.m; E.prefs.minutos = ui.minutos; salvar(); DIR.seg = []; render(); },
    momento: (el) => { ui.momento = el.dataset.v; DIR.seg = []; render(); },
    trilha: (el) => { ui.trilha = el.dataset.t || null; DIR.seg = []; render(); },
    filtro: (el) => { ui.filtro = el.dataset.t || null; render(); },
    iniciar: () => iniciarSessao(ui.pauta || montarSessao({ minutos: ui.minutos, momento: ui.momento, trilha: ui.trilha })),
    desafio: () => {
      const d = desafioDaSemana(); if (!d) return;
      iniciarSessao(montarSessao({ minutos: 10, desafio: d.u }), { desafioChave: d.chave });
    },
    abrir: (el) => { const u = U[el.dataset.id]; if (u) iniciarSessao(montarSessao({ minutos: 0, unidade: u })); },
    sair: () => { ui.confirmar = 'sair'; render(); },
    'sair-nao': () => { ui.confirmar = null; render(); },
    'sair-sim': () => {
      ui.confirmar = null; pararFala();
      if (S.feitos) { S.i = S.blocos.length - 1; render(); }
      else { S = null; clearInterval(relogioTimer); ui.tela = 'hoje'; render(); }
    },
    'ouvir-licao': () => ouvirLicao(S.blocos[S.i].u),
    'licao-ok': () => {
      const b = S.blocos[S.i], s = est(b.u.id);
      if (!s.vista) { s.vista = iso(); liberarCards(b.u); ganharXP(20, b.u.trilha); } else ganharXP(5, b.u.trilha);
      s.ultima = iso(); S.feitos++; salvar(); avancar();
    },
    virar: () => { const b = S.blocos[S.i]; b.st.virado = !b.st.virado; render(); },
    card: (el) => {
      const b = S.blocos[S.i]; const k = b.cards[b.k];
      avaliarCard(k, +el.dataset.n); ganharXP(2, U[k.split('#')[0]]?.trilha);
      b.k++; b.st.virado = false; if (b.k >= b.cards.length) S.feitos++;
      salvar(); render();
    },
    responder: (el) => {
      const b = S.blocos[S.i]; if (b.st[b.k] != null) return;
      const it = b.itens[b.k], q = U[it.u].quiz[it.q], i = +el.dataset.i;
      b.st[b.k] = i; S.total++;
      const certo = i === q.correta;
      if (certo) { S.acertos++; ganharXP(10, U[it.u].trilha); }
      registrarResposta(it.u, it.q, certo); salvar(); render();
    },
    'quiz-prox': () => { const b = S.blocos[S.i]; b.k++; if (b.k >= b.itens.length) { S.feitos++; avancar(); } else { render(); window.scrollTo(0, 0); } },
    'caso-abrir': () => { const b = S.blocos[S.i]; b.st.texto = document.getElementById('caso-resp')?.value || ''; b.st.aberto = true; render(); rolarAte('resposta-final', 'resolucao'); },
    'caso-nota': (el) => {
      const b = S.blocos[S.i], n = +el.dataset.n, s = est(b.u.id);
      s.caso = s.caso == null ? n : (s.caso + n) / 2;
      ganharXP(10 + 25 * n, b.u.trilha);
      if (b.desafio && S.desafioChave && !E.desafios[S.desafioChave]) { E.desafios[S.desafioChave] = iso(); ganharXP(50, b.u.trilha); }
      S.feitos++; salvar(); avancar();
    },
    'exp-abrir': () => { const b = S.blocos[S.i]; b.st.texto = document.getElementById('exp-resp')?.value || ''; b.st.aberto = true; b.st.pts = b.st.pts || {}; render(); rolarAte('marque'); },
    'copiar-claude': () => { const b = S.blocos[S.i]; copiar(promptClaude(b.u, document.getElementById('exp-resp')?.value || b.st.texto)); },
    'exp-ok': () => {
      const b = S.blocos[S.i], n = b.u.explique.pontos.length || 1;
      const f = Object.values(b.st.pts || {}).filter(Boolean).length / n, s = est(b.u.id);
      s.explique = s.explique == null ? f : (s.explique + f) / 2;
      ganharXP(5 + 20 * f, b.u.trilha); S.feitos++; salvar(); avancar();
    },
    finalizar: () => {
      const nota = document.getElementById('nota-sessao')?.value.trim() || '';
      if (S.registro) S.registro.nota = nota;
      S.registro.xp = S.xp;
      salvar(); S = null; clearInterval(relogioTimer); ui.tela = 'hoje'; render(); window.scrollTo(0, 0);
      toast('Sessão salva');
    },
    'mais-hist': () => { ui.histN = (ui.histN || 7) + 20; render(); },
    tema: (el) => { E.prefs.tema = el.dataset.v; salvar(); aplicarTema(); render(); },
    exportar: () => copiar(JSON.stringify(E)),
    baixar: () => {
      try {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([JSON.stringify(E, null, 1)], { type: 'application/json' }));
        a.download = `lastro-backup-${iso()}.json`; document.body.appendChild(a); a.click(); a.remove();
      } catch (_) { toast('Download bloqueado aqui. Use "Copiar backup".'); }
    },
    importar: () => {
      const t = document.getElementById('imp-texto')?.value.trim();
      try {
        const e = JSON.parse(t);
        if (!e || e.versao !== 1 || typeof e.xp !== 'number') throw new Error();
        const base = estadoNovo(); E = { ...base, ...e, prefs: { ...base.prefs, ...(e.prefs || {}) } };
        salvar(); aplicarTema(); render(); toast('Backup restaurado');
      } catch (_) { toast('Esse texto não é um backup válido do Lastro.'); }
    },
    'dir-sair': () => sairDirecao(),
    'dir-play': () => {
      if (DIR.rodando) { DIR.rodando = false; pararFala(); pararEscuta(); if (DIR.esperando) { DIR.esperando(-2); DIR.esperando = null; } renderDirecao(); return; }
      if (DIR.concluido || DIR.i >= DIR.seg.length) { DIR.seg = []; DIR.inicio = 0; abrirDirecao(); }
      pararFala(); tocar();
    },
    'dir-repetir': () => {
      const voltar = DIR.seg[DIR.i]?.tipo === 'pausa' ? 1 : 0;
      DIR.i = Math.max(0, DIR.i - voltar);
      pararFala(); pararEscuta(); if (DIR.esperando) { DIR.esperando(-2); DIR.esperando = null; } tocar();
    },
    'dir-pular': () => {
      pararFala(); pararEscuta(); if (DIR.esperando) { DIR.esperando(-2); DIR.esperando = null; }
      DIR.i = Math.min(DIR.seg.length - 1, DIR.i + 1); tocar();
    },
    'dir-resp': (el) => { if (DIR.esperando) DIR.esperando(+el.dataset.i); },
    'dir-modo': (el) => { DIR.modo = el.dataset.v; renderDirecao(); },
    'dir-vel': (el) => { E.prefs.velocidade = +el.dataset.v; salvar(); renderDirecao(); },
  };

  app.addEventListener('click', (ev) => {
    const el = ev.target.closest('[data-acao]');
    if (!el || !app.contains(el)) return;
    const f = acoes[el.dataset.acao];
    if (f) { ev.preventDefault(); f(el); salvarSessao(); }
  });
  // segurar para confirmar (ação destrutiva): 2 s pressionado executa; soltar antes cancela
  const acoesSegurar = {
    apagar: () => { E = estadoNovo(); salvar(); aplicarTema(); render(); toast('Progresso apagado'); },
  };
  let segurarT = null;
  function cancelarSegurar() {
    clearTimeout(segurarT); segurarT = null;
    document.querySelectorAll('.segurando').forEach((e) => e.classList.remove('segurando'));
  }
  function iniciarSegurar(el) {
    if (segurarT) return;
    el.classList.add('segurando');
    segurarT = setTimeout(() => { segurarT = null; el.classList.remove('segurando'); acoesSegurar[el.dataset.segurar]?.(); }, 2000);
  }
  app.addEventListener('pointerdown', (ev) => {
    const el = ev.target.closest('[data-segurar]');
    if (!el || ev.button > 0) return;
    iniciarSegurar(el);
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((t) => el.addEventListener(t, cancelarSegurar, { once: true }));
  });
  app.addEventListener('contextmenu', (ev) => { if (ev.target.closest('[data-segurar]')) ev.preventDefault(); });
  app.addEventListener('keydown', (ev) => { const el = ev.target.closest?.('[data-segurar]'); if (el && (ev.key === 'Enter' || ev.key === ' ') && !ev.repeat) { ev.preventDefault(); iniciarSegurar(el); } });
  app.addEventListener('keyup', (ev) => { if (ev.target.closest?.('[data-segurar]')) cancelarSegurar(); });
  // no iOS, :active só pinta com algum listener de toque registrado
  document.addEventListener('touchstart', () => {}, { passive: true });

  app.addEventListener('change', (ev) => {
    const el = ev.target;
    if (el.dataset.ponto != null && S) { const b = S.blocos[S.i]; b.st.pts = b.st.pts || {}; b.st.pts[el.dataset.ponto] = el.checked; }
    if (el.dataset.campo === 'voz') { E.prefs.voz = el.value; salvar(); if (temFala) falar('Esta é a voz escolhida.', ++geracao); }
    if (el.dataset.campo === 'nome') { E.prefs.nome = el.value.trim().slice(0, 40); salvar(); toast('Nome salvo'); }
  });
  app.addEventListener('input', (ev) => {
    const el = ev.target;
    if (!S) return;
    const b = S.blocos[S.i];
    if (el.dataset.campo === 'caso' || el.dataset.campo === 'explique') { b.st.texto = el.value; salvarSessaoDepois(); }
  });
  if (temFala) speechSynthesis.addEventListener?.('voiceschanged', () => { if (ui.tela === 'progresso') render(); });

  // ------------------------------------------------------------------ sessão salva (sobrevive a recarregar)
  const CHAVE_SESSAO = 'lastro.sessao';
  function salvarSessao() {
    try {
      if (!S || S.registrada) { localStorage.removeItem(CHAVE_SESSAO); return; }
      const { registro, ...resto } = S;
      localStorage.setItem(CHAVE_SESSAO, JSON.stringify({ ...resto, blocos: S.blocos.map((b) => ({ ...b, u: b.u ? b.u.id : null })) }));
    } catch (_) { /* sem armazenamento: segue em memória */ }
  }
  function restaurarSessao() {
    try {
      const p = JSON.parse(localStorage.getItem(CHAVE_SESSAO) || 'null');
      if (!p || p.registrada || !Array.isArray(p.blocos) || Date.now() - p.inicio > 6 * 3600e3) return null;
      const blocos = p.blocos.map((b) => ({ ...b, u: b.u ? U[b.u] : undefined }));
      const quebrada = blocos.some((b) => ['licao', 'caso', 'explique'].includes(b.tipo) && !b.u)
        || blocos.some((b) => b.itens && b.itens.some((it) => !U[it.u]?.quiz?.[it.q]));
      if (quebrada || p.i >= blocos.length) return null;
      return { ...p, blocos };
    } catch (_) { return null; }
  }
  let salvarSessaoT = null;
  const salvarSessaoDepois = () => { clearTimeout(salvarSessaoT); salvarSessaoT = setTimeout(salvarSessao, 400); };
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') salvarSessao(); });

  // ------------------------------------------------------------------ teclado (desktop): sem animação em ação de teclado
  document.addEventListener('keydown', (ev) => {
    if (ev.defaultPrevented || ev.metaKey || ev.ctrlKey || ev.altKey || ui.tela !== 'sessao' || !S) return;
    if (ev.target.closest?.('textarea, input, select, button, a')) return;
    const b = S.blocos[S.i];
    const k = ev.key.toLowerCase();
    let sel = null;
    if (b.tipo === 'quiz') {
      const mapa = { 1: 0, 2: 1, 3: 2, 4: 3, a: 0, b: 1, c: 2, d: 3 };
      if (k in mapa && b.st[b.k] == null) sel = `[data-acao="responder"][data-i="${mapa[k]}"]`;
      else if (k === 'enter' || k === 'arrowright') sel = '[data-acao="quiz-prox"]';
    } else if (b.tipo === 'revisao') {
      if (!b.st.virado && (k === ' ' || k === 'enter')) sel = '[data-acao="virar"]';
      else if (b.st.virado && ['1', '2', '3'].includes(k)) sel = `[data-acao="card"][data-n="${+k - 1}"]`;
    } else if (k === 'enter') {
      sel = '.etapa .btn-p';
    }
    const el = sel && document.querySelector(sel);
    if (el && !el.disabled) { ev.preventDefault(); ui.viaTeclado = true; el.click(); }
  });

  // ------------------------------------------------------------------ início
  async function carregarConteudo() {
    const inline = document.getElementById('dados-conteudo');
    if (inline) return JSON.parse(inline.textContent);
    const r = await fetch('data/conteudo.json', { cache: 'no-cache' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }
  aplicarTema();
  try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => corBarra()); } catch (_) { /* navegador antigo */ }
  carregarConteudo().then((d) => {
    D = d;
    D.unidades.forEach((u) => { U[u.id] = u; });
    const r = restaurarSessao();
    if (r) {
      S = r; ui.tela = 'sessao';
      relogioTimer = setInterval(atualizarRelogio, 1000);
      setTimeout(() => toast('Sessão retomada de onde você parou'), 300);
    }
    render();
  }).catch((err) => {
    app.innerHTML = `<main class="casca"><h1 class="titulo-pag">Lastro</h1><p class="sub">Não consegui carregar o conteúdo (${esc(err.message)}). Se abriu o arquivo direto do computador, rode um servidor local: <code>npx serve treino-diario</code>.</p></main>`;
  });
  if ('serviceWorker' in navigator && location.protocol === 'https:' && !document.getElementById('dados-conteudo')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
