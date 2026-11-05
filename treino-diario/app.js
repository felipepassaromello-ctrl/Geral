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
      prefs: { minutos: 20, voz: '', velocidade: 1.05, tema: '' },
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
      case 'revisao': return { t: 'Revisão espaçada', s: `${b.cards.length} flashcards` };
      case 'licao': return { t: b.releitura ? 'Releitura' : b.u.tipo === 'livro' ? 'Livro' : b.u.tipo === 'radar' ? 'Radar' : 'Lição', s: b.u.titulo };
      case 'quiz': return { t: b.titulo || 'Quiz', s: b.u ? `${b.itens.length} perguntas · ${b.u.titulo}` : `${b.itens.length} perguntas` };
      case 'caso': return { t: b.desafio ? 'Desafio da semana' : 'Caso prático', s: b.u.titulo };
      case 'explique': return { t: 'Explique com suas palavras', s: b.u.titulo };
      default: return { t: 'Fechamento', s: 'placar e anotação' };
    }
  }

  // ------------------------------------------------------------------ estado de interface
  const hora = new Date().getHours();
  const ui = { tela: 'hoje', minutos: E.prefs.minutos || 20, momento: hora < 15 ? 'manha' : 'noite', trilha: null, filtro: null, confirmar: null, toast: null };
  let S = null; // sessão ativa
  let relogioTimer = null;

  function toast(msg) {
    ui.toast = msg; renderToast();
    clearTimeout(toast.t); toast.t = setTimeout(() => { ui.toast = null; renderToast(); }, 2600);
  }
  function renderToast() {
    let el = document.querySelector('.toast');
    if (!ui.toast) { el?.remove(); return; }
    if (!el) { el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = ui.toast;
  }

  function aplicarTema() {
    const t = E.prefs.tema;
    if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
  }

  // ------------------------------------------------------------------ ícones
  const IC = {
    hoje: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    biblioteca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 4.5h4v15H5zM10 4.5h4v15h-4z"/><path d="m15.5 5.5 3.6-1 3 14.5-3.6.8z" transform="translate(-2 0)"/></svg>',
    progresso: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 19.5h16"/><path d="M6.5 16v-4M11 16V8M15.5 16v-6M20 16V5"/></svg>',
    direcao: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M3.8 10.5c5 1.5 11.4 1.5 16.4 0M10.5 13.8 8 20M13.5 13.8 16 20"/></svg>',
    fechar: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
    pausa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4.5h4.5v15H6zM13.5 4.5H18v15h-4.5z"/></svg>',
    repetir: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v4.5h4.5"/></svg>',
    pular: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4.5v15l11-7.5zM16.5 4.5H20v15h-3.5z"/></svg>',
    ouvir: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
  };

  // ------------------------------------------------------------------ telas
  function render() {
    if (!D) return;
    if (ui.tela === 'sessao' && S) return renderSessao();
    if (ui.tela === 'direcao') return renderDirecao();
    const corpo = ui.tela === 'biblioteca' ? telaBiblioteca() : ui.tela === 'progresso' ? telaProgresso() : telaHoje();
    app.innerHTML = `<main class="casca">${corpo}</main>${nav()}`;
  }

  function nav() {
    const b = (id, nome) => `<button data-acao="ir" data-tela="${id}" ${ui.tela === id ? 'aria-current="page"' : ''}>${IC[id]}<span>${nome}</span></button>`;
    return `<nav class="nav" aria-label="Navegação"><div class="nav-in">${b('hoje', 'Hoje')}${b('biblioteca', 'Biblioteca')}${b('progresso', 'Progresso')}${b('direcao', 'Direção')}</div></nav>`;
  }

  function topo() {
    const hoje = fmtData(iso(), { weekday: 'long', day: 'numeric', month: 'long' });
    return `<header class="topo"><h1 class="marca">Lastro<i>.</i></h1><div class="data">${esc(hoje)}</div></header>`;
  }

  function faixaDias() {
    let html = '';
    for (let i = 13; i >= 0; i--) {
      const d = somaDias(iso(), -i);
      html += `<i class="dia${E.dias[d] ? ' feito' : ''}${i === 0 ? ' hoje' : ''}" title="${esc(fmtData(d, { day: 'numeric', month: 'short' }))}${E.dias[d] ? ` · ${E.dias[d]} min` : ''}"></i>`;
    }
    return html;
  }

  function telaHoje() {
    const st = streakAtual();
    const nv = nivelGeral(E.xp);
    const pauta = montarSessao({ minutos: ui.minutos, momento: ui.momento, trilha: ui.trilha });
    ui.pauta = pauta;
    const venc = cardsVencidos().length;
    const des = desafioDaSemana();
    const feitoHoje = !!E.dias[iso()];

    const tempos = [15, 20, 30, 40].map((m) => `<button class="tempo" data-acao="tempo" data-m="${m}" aria-pressed="${ui.minutos === m}"><b class="num">${m}</b><span>min</span></button>`).join('');
    const chips = [`<button class="chip" data-acao="trilha" data-t="" aria-pressed="${!ui.trilha}">Pauta automática</button>`]
      .concat(D.trilhas.map((t) => `<button class="chip" data-acao="trilha" data-t="${t.id}" aria-pressed="${ui.trilha === t.id}">${esc(t.nome)}</button>`)).join('');
    const linhas = pauta.blocos.map((b, i) => {
      const d = descreverBloco(b);
      return `<div class="linha-bloco"><span class="n num">${pad(i + 1)}</span><div class="t"><b>${esc(d.t)}</b><span>${esc(d.s)}</span></div><span class="m num">${b.min ? b.min + ' min' : ''}</span></div>`;
    }).join('');

    const barras = D.trilhas.map((t) => {
      const v = Math.round(dominioTrilha(t.id) * 100);
      return `<div class="barra"><span>${esc(t.curto)}</span><span class="trilho"><i style="width:${v}%"></i></span><span class="v num">${v}%</span></div>`;
    }).join('');

    return `${topo()}
    <section class="mata" aria-label="Sequência">
      <div class="streak">
        <p class="streak-num num"><small>dia</small>${st}</p>
        <div class="streak-lado"><span class="rotulo">${feitoHoje ? 'Hoje já conta' : st ? 'Mantenha a sequência' : 'Comece a sequência hoje'}</span><strong class="num">${E.xp.toLocaleString('pt-BR')} XP</strong><span class="rotulo">${esc(nv.titulo)}</span></div>
      </div>
      <div class="dias">${faixaDias()}</div>
      <div class="dias-leg"><span>14 dias</span><span>melhor sequência: ${E.melhorStreak}</span></div>
    </section>

    <section class="bloco" aria-label="Quanto tempo você tem">
      <p class="rotulo">Quanto tempo você tem</p>
      <div class="tempos">${tempos}</div>
      <div class="seg" role="group" aria-label="Momento do dia">
        <button data-acao="momento" data-v="manha" aria-pressed="${ui.momento === 'manha'}">Manhã · algo novo</button>
        <button data-acao="momento" data-v="noite" aria-pressed="${ui.momento === 'noite'}">Noite · revisão</button>
      </div>
      <div class="chips" role="group" aria-label="Trilha">${chips}</div>
    </section>

    <section class="boleta" aria-label="Pauta do dia">
      <div class="boleta-topo"><h2>Pauta do dia</h2><span class="rotulo num">≈ ${pauta.previsto} min</span></div>
      ${linhas}
    </section>
    ${pauta.aviso ? `<p class="aviso">${esc(pauta.aviso)}</p>` : ''}
    <div class="acoes">
      <button class="btn btn-p" data-acao="iniciar">Começar sessão <span class="seta">→</span></button>
      <button class="btn btn-s" data-acao="ir" data-tela="direcao">${IC.ouvir} Ouvir no carro</button>
    </div>

    <section class="grade" aria-label="Painel">
      <div class="widget"><span class="rotulo">Revisão pendente</span><span class="grande num">${venc}</span><p>${venc === 1 ? 'flashcard vence hoje' : 'flashcards vencem hoje'}</p></div>
      <div class="widget"><span class="rotulo">Para refazer</span><span class="grande num">${E.erros.length}</span><p>${E.erros.length === 1 ? 'pergunta que você errou' : 'perguntas que você errou'}</p></div>
      ${des ? `<button class="widget desafio largo" data-acao="desafio"><span class="rotulo">Desafio da semana · ${des.feito ? 'concluído' : '+50 XP'}</span><h3>${esc(des.u.titulo)}</h3><p>${des.feito ? 'Feito. Um novo caso abre na segunda-feira.' : 'Um caso com números para resolver no papel. Cerca de 10 minutos.'}</p></button>` : ''}
      <div class="widget largo"><span class="rotulo">Domínio por trilha</span><div class="barras">${barras}</div></div>
    </section>`;
  }

  function telaBiblioteca() {
    const f = ui.filtro;
    const chips = [`<button class="chip" data-acao="filtro" data-t="" aria-pressed="${!f}">Todas</button>`]
      .concat(D.trilhas.map((t) => `<button class="chip" data-acao="filtro" data-t="${t.id}" aria-pressed="${f === t.id}">${esc(t.nome)}</button>`)).join('');
    const grupos = D.trilhas.filter((t) => !f || t.id === f).map((t) => {
      const us = D.unidades.filter((u) => u.trilha === t.id);
      if (!us.length) return '';
      const itens = us.map((u) => {
        const s = E.unidades[u.id];
        const tipo = u.tipo === 'livro' ? 'Livro' : u.tipo === 'radar' ? 'Radar' : u.tipo === 'desafio' ? 'Desafio' : `Nível ${u.nivel}`;
        return `<button class="item" data-acao="abrir" data-id="${u.id}"><div><b>${esc(u.titulo)}</b><span>${esc(tipo)} · ${u.minutos} min${u.caso ? ' · caso' : ''}</span></div><span class="st${s?.vista ? ' feito' : ''}">${s?.vista ? Math.round(dominio(u) * 100) + '%' : 'novo'}</span></button>`;
      }).join('');
      return `<section class="bloco"><p class="rotulo">${esc(t.nome)} · ${us.length}</p><div class="lista">${itens}</div></section>`;
    }).join('');
    return `${topo()}
      <div><h2 class="titulo-pag">Biblioteca</h2><p class="sub">Todo o conteúdo disponível. Toque numa unidade para estudar só ela, fora da pauta automática.</p></div>
      <div class="chips" role="group" aria-label="Filtrar trilha">${chips}</div>
      ${grupos}
      <p class="aviso">Conteúdo gerado em ${esc(fmtData(D.geradoEm, { day: 'numeric', month: 'long', year: 'numeric' }))}. Para ampliar, peça ao Claude Code novos lotes seguindo <code>conteudo/COMO-ESCREVER.md</code>.</p>`;
  }

  function telaProgresso() {
    const nv = nivelGeral(E.xp);
    const geral = Math.round(D.unidades.reduce((a, u) => a + dominio(u), 0) / Math.max(1, D.unidades.length) * 100);
    const vistas = D.unidades.filter((u) => E.unidades[u.id]?.vista).length;
    const certas = Object.values(E.unidades).reduce((a, s) => a + s.certas, 0);
    const total = Object.values(E.unidades).reduce((a, s) => a + s.total, 0);

    const barras = D.trilhas.map((t) => {
      const v = Math.round(dominioTrilha(t.id) * 100);
      return `<div class="barra"><span>${esc(t.curto)}</span><span class="trilho"><i style="width:${v}%"></i></span><span class="v num">N${nivelTrilha(E.xpTrilha[t.id])}</span></div>`;
    }).join('');

    const mapa = D.trilhas.map((t) => {
      const us = D.unidades.filter((u) => u.trilha === t.id);
      if (!us.length) return '';
      const tiles = us.map((u) => {
        const s = E.unidades[u.id];
        const d = dominio(u);
        const cls = !s?.vista ? '' : d < 0.45 ? 'n1 fraco' : d < 0.65 ? 'n2' : d < 0.85 ? 'n3' : 'n4';
        return `<button class="tile ${cls}" data-acao="abrir" data-id="${u.id}"><b>${esc(u.titulo)}</b><span class="pip"><i></i><i></i><i></i><i></i></span></button>`;
      }).join('');
      return `<p class="rotulo">${esc(t.nome)}</p><div class="mapa">${tiles}</div>`;
    }).join('');

    const dias7 = [];
    for (let i = 6; i >= 0; i--) dias7.push(somaDias(iso(), -i));
    const max = Math.max(40, ...dias7.map((d) => E.dias[d] || 0));
    const semana = dias7.map((d) => {
      const m = E.dias[d] || 0;
      return `<div><em class="num">${m || ''}</em><i class="${m ? '' : 'vazio'}" style="height:${m ? Math.max(6, (m / max) * 100) : 3}%"></i><span>${esc(fmtData(d, { weekday: 'short' }).replace('.', ''))}</span></div>`;
    }).join('');

    const hist = E.historico.slice(0, 20).map((h) => `<article>
      <span class="rotulo num">${esc(fmtData(h.data, { weekday: 'short', day: 'numeric', month: 'short' }))} · ${h.minutos} min · +${h.xp} XP${h.total ? ` · ${h.acertos}/${h.total}` : ''}${h.direcao ? ' · áudio' : ''}</span>
      <p>${esc(h.titulos.join(' · '))}</p>
      ${h.nota ? `<p class="nota">${esc(h.nota)}</p>` : ''}</article>`).join('');

    const vozes = vozesPt().map((v) => `<option value="${esc(v.name)}" ${E.prefs.voz === v.name ? 'selected' : ''}>${esc(v.name)}</option>`).join('');

    return `${topo()}
      <section class="mata">
        <span class="rotulo">Domínio geral</span>
        <p class="score num">${geral}<sup>%</sup></p>
        <div class="placar">
          <div><b class="num">${vistas}/${D.unidades.length}</b><span>unidades vistas</span></div>
          <div><b class="num">${total ? Math.round((certas / total) * 100) : 0}%</b><span>acerto no quiz</span></div>
          <div><b class="num">${E.melhorStreak}</b><span>melhor sequência</span></div>
        </div>
        <span class="rotulo">${esc(nv.titulo)}${nv.prox ? ` · faltam ${nv.falta} XP para ${esc(nv.prox)}` : ''}</span>
      </section>

      <section class="bloco"><p class="rotulo">Domínio e nível por trilha</p><div class="barras">${barras}</div></section>

      <section class="bloco">
        <p class="rotulo">Mapa de domínio</p>
        <div class="legenda"><span><i style="background:var(--linha)"></i>não visto</span><span><i style="background:var(--erro)"></i>fraco</span><span><i style="background:var(--mata)"></i>em progresso</span><span><i style="background:var(--lima)"></i>dominado</span></div>
        ${mapa}
      </section>

      <section class="bloco"><p class="rotulo">Minutos nos últimos 7 dias</p><div class="semana">${semana}</div></section>

      <section class="bloco"><p class="rotulo">Histórico e anotações</p>
        <div class="historico">${hist || '<p class="aviso">As sessões concluídas aparecem aqui, com a sua anotação de cada dia.</p>'}</div>
      </section>

      <section class="caixa">
        <h3>Ajustes</h3>
        <label class="rotulo" for="aj-tema">Tema</label>
        <div class="seg" role="group" id="aj-tema">
          <button data-acao="tema" data-v="" aria-pressed="${!E.prefs.tema}">Automático</button>
          <button data-acao="tema" data-v="light" aria-pressed="${E.prefs.tema === 'light'}">Claro</button>
          <button data-acao="tema" data-v="dark" aria-pressed="${E.prefs.tema === 'dark'}">Escuro</button>
        </div>
        <label class="rotulo" for="aj-voz">Voz da leitura</label>
        <select id="aj-voz" data-campo="voz" style="padding:10px;border-radius:9px;border:1px solid var(--linha);background:var(--superficie)"><option value="">Automática (melhor voz pt-BR disponível)</option>${vozes}</select>
        <p>No iPhone, vozes melhores ficam em Ajustes › Acessibilidade › Conteúdo Falado › Vozes › Português (Brasil). Baixe uma voz "Aprimorada" ou "Premium".</p>
      </section>

      <section class="caixa">
        <h3>Backup do progresso</h3>
        <p>O progresso fica salvo só neste navegador. Exporte de vez em quando para não perder, ou para levar para outro aparelho.</p>
        <div class="acoes"><button class="btn btn-s" data-acao="exportar">Copiar backup</button>${document.getElementById('dados-conteudo') ? '' : '<button class="btn btn-s" data-acao="baixar">Baixar arquivo</button>'}</div>
        <label class="rotulo" for="imp-texto">Restaurar: cole o backup aqui</label>
        <textarea id="imp-texto" placeholder='{"versao":1,...}' style="min-height:80px"></textarea>
        <div class="acoes"><button class="btn btn-s" data-acao="importar">Restaurar backup</button>
          ${ui.confirmar === 'apagar' ? '<button class="btn btn-m" data-acao="apagar-sim">Confirmar: apagar tudo</button><button class="btn-t btn" data-acao="apagar-nao">Cancelar</button>' : '<button class="btn btn-t" data-acao="apagar">Apagar progresso</button>'}
        </div>
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

  function atualizarRelogio() {
    if (!S) return;
    const el = document.querySelector('.relogio');
    if (!el) return;
    const total = S.minutos * 60, pass = (Date.now() - S.inicio) / 1000;
    const resto = total - pass;
    const c = 2 * Math.PI * 25;
    if (S.fimEm) { el.querySelector('.frente').style.strokeDashoffset = String(c); el.querySelector('span').textContent = 'fim'; return; }
    el.querySelector('.frente').style.strokeDashoffset = String(c * Math.min(1, pass / total));
    const m = Math.floor(Math.abs(resto) / 60), s = Math.floor(Math.abs(resto) % 60);
    el.querySelector('span').textContent = `${resto < 0 ? '+' : ''}${m}:${pad(s)}`;
  }

  function renderSessao() {
    const b = S.blocos[S.i];
    const passos = S.blocos.map((x, i) => `<i class="${i < S.i ? 'ok' : i === S.i ? 'at' : ''}"></i>`).join('');
    const c = 2 * Math.PI * 25;
    const cab = `<div class="sessao-topo">
        <div class="relogio" aria-label="Tempo da sessão"><svg viewBox="0 0 60 60"><circle class="fundo" cx="30" cy="30" r="25"/><circle class="frente" cx="30" cy="30" r="25" stroke-dasharray="${c}" stroke-dashoffset="0"/></svg><span class="num"></span></div>
        <div><div class="passos">${passos}</div><p class="rotulo">${pad(S.i + 1)}/${pad(S.blocos.length)} · ${esc(NOMES_BLOCO[b.tipo])}</p></div>
        <button class="fechar" data-acao="sair" aria-label="Encerrar sessão">${IC.fechar}</button>
      </div>
      ${ui.confirmar === 'sair' ? `<div class="caixa"><p>Encerrar agora? O que você já fez fica salvo${S.feitos ? ' e a sessão conta para a sequência' : ''}.</p><div class="acoes"><button class="btn btn-m" data-acao="sair-sim">Encerrar</button><button class="btn btn-s" data-acao="sair-nao">Continuar</button></div></div>` : ''}`;
    const corpo = { revisao: etapaRevisao, licao: etapaLicao, quiz: etapaQuiz, caso: etapaCaso, explique: etapaExplique, fim: etapaFim }[b.tipo](b);
    app.innerHTML = `<main class="casca">${cab}<section class="etapa" id="etapa">${corpo}</section></main>`;
    atualizarRelogio();
  }

  const tagsUnidade = (u) => `<div class="meta"><span class="tag t-ambar">${esc(trilhaDe(u.trilha).nome)}</span>${u.tipo === 'livro' ? '<span class="tag">Livro</span>' : u.tipo === 'radar' ? '<span class="tag">Radar</span>' : `<span class="tag">Nível ${u.nivel}</span>`}<span class="tag num">${u.minutos} min</span>${u.verificado ? `<span class="tag num">conferido ${esc(fmtData(u.verificado, { day: '2-digit', month: '2-digit', year: '2-digit' }))}</span>` : ''}</div>`;

  function etapaLicao(b) {
    const u = b.u;
    return `<div class="etapa-cab">${tagsUnidade(u)}<h1>${esc(u.titulo)}</h1>${u.resumo ? `<p class="sub">${esc(u.resumo)}</p>` : ''}</div>
      <div class="acoes"><button class="btn btn-s" data-acao="ouvir-licao">${IC.ouvir} <span id="ouvir-rot">${falando ? 'Parar leitura' : 'Ouvir'}</span></button></div>
      <article class="texto">${u.licao}</article>
      ${u.exemplo ? `<section class="secao texto"><p class="rotulo">Exemplo</p>${u.exemplo}</section>` : ''}
      ${u.trabalho ? `<section class="secao trabalho texto"><p class="rotulo">No seu trabalho</p>${u.trabalho}</section>` : ''}
      ${u.verificar ? `<section class="secao verificar texto"><p class="rotulo">Verificar antes de usar</p>${u.verificar}</section>` : ''}
      ${u.fontes ? `<section class="secao fontes texto"><p class="rotulo">Fontes</p>${u.fontes}</section>` : ''}
      <div class="acoes"><button class="btn btn-p" data-acao="licao-ok">Concluir leitura <span class="seta">→</span></button></div>`;
  }

  function etapaRevisao(b) {
    if (b.k >= b.cards.length) return proximoAuto();
    const { u, c } = cardDe(b.cards[b.k]);
    if (!c) { b.k++; return etapaRevisao(b); }
    const virado = !!b.st.virado;
    return `<div class="etapa-cab"><span class="contador num">Cartão ${b.k + 1} de ${b.cards.length} · ${esc(u.titulo)}</span></div>
      <button class="cartao${virado ? ' virado' : ''}" data-acao="virar" aria-label="Virar cartão">
        <span class="frente">${c.frente}</span>
        ${virado ? `<span class="verso">${c.verso}</span>` : '<span class="rotulo">Responda de cabeça, depois toque para ver</span>'}
      </button>
      ${virado ? `<div class="notas3">
        <button class="btn btn-s" data-acao="card" data-n="0">Errei<small>amanhã</small></button>
        <button class="btn btn-s" data-acao="card" data-n="1">Difícil<small>em breve</small></button>
        <button class="btn btn-m" data-acao="card" data-n="2">Sabia<small>mais tarde</small></button></div>` : ''}`;
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
      ${r != null ? `<div class="explica${r === q.correta ? '' : ' mal'}"><p class="rotulo">${r === q.correta ? 'Correto' : `Resposta: ${LETRAS[q.correta]}`}</p><div class="texto">${q.explicacao}</div></div>
      <div class="acoes"><button class="btn btn-p" data-acao="quiz-prox">${b.k + 1 < b.itens.length ? 'Próxima pergunta' : 'Continuar'} <span class="seta">→</span></button></div>` : ''}`;
  }

  function etapaCaso(b) {
    const u = b.u, c = u.caso;
    return `<div class="etapa-cab">${tagsUnidade(u)}<h1>${b.desafio ? 'Desafio da semana' : 'Caso prático'}</h1><p class="sub">${esc(u.titulo)}</p></div>
      <article class="texto">${c.enunciado}</article>
      <label class="rotulo" for="caso-resp">Sua conta e sua resposta</label>
      <textarea id="caso-resp" data-campo="caso" placeholder="Faça a conta aqui ou no papel. Escreva o resultado final antes de abrir a resolução.">${esc(b.st.texto || '')}</textarea>
      ${!b.st.aberto ? '<div class="acoes"><button class="btn btn-p" data-acao="caso-abrir">Ver resolução</button></div>' : `
        ${c.resposta ? `<div class="resposta-final"><span class="rotulo">Resposta</span><b>${c.resposta}</b></div>` : ''}
        <section class="secao texto"><p class="rotulo">Resolução passo a passo</p>${c.resolucao}</section>
        <p class="rotulo">Como foi?</p>
        <div class="notas3"><button class="btn btn-s" data-acao="caso-nota" data-n="0">Errei</button><button class="btn btn-s" data-acao="caso-nota" data-n="0.5">Em parte</button><button class="btn btn-m" data-acao="caso-nota" data-n="1">Acertei</button></div>`}`;
  }

  function promptClaude(u, texto) {
    return `Estou treinando conceitos de ${trilhaDe(u.trilha).nome}. Avalie minha explicação como um professor exigente e direto.\n\nPedido: ${semTags(u.explique.pedido)}\n\nMinha resposta:\n${texto || '(em branco)'}\n\nPontos que uma boa resposta deve cobrir:\n${u.explique.pontos.map((p) => '- ' + semTags(p)).join('\n')}\n\nDiga: (1) o que está correto, (2) o que está errado ou impreciso, (3) o que faltou, (4) uma nota de 0 a 10 e (5) uma versão melhorada em até 6 linhas. Se algo depender de lei ou norma, cite o dispositivo.`;
  }

  function etapaExplique(b) {
    const u = b.u, x = u.explique;
    return `<div class="etapa-cab">${tagsUnidade(u)}<h1>Explique com suas palavras</h1><p class="sub">${esc(u.titulo)}</p></div>
      <div class="texto">${x.pedido}</div>
      <label class="rotulo" for="exp-resp">Sua explicação</label>
      <textarea id="exp-resp" data-campo="explique" placeholder="Escreva como se estivesse explicando para um colega. Sem consultar o texto.">${esc(b.st.texto || '')}</textarea>
      ${!b.st.aberto ? '<div class="acoes"><button class="btn btn-p" data-acao="exp-abrir">Comparar com a referência</button></div>' : `
        <p class="rotulo">Marque o que a sua resposta cobriu</p>
        <div class="checklist">${x.pontos.map((p, i) => `<label><input type="checkbox" id="pt-${i}" data-ponto="${i}" ${b.st.pts?.[i] ? 'checked' : ''}><span>${p}</span></label>`).join('')}</div>
        ${x.modelo ? `<section class="secao texto"><p class="rotulo">Resposta de referência</p>${x.modelo}</section>` : ''}
        <div class="caixa"><p>Quer uma correção detalhada? Copie o pedido abaixo e cole numa conversa com o Claude. Não tem custo além da sua assinatura.</p>
          <div class="acoes"><button class="btn btn-s" data-acao="copiar-claude">Copiar para o Claude</button></div></div>
        <div class="acoes"><button class="btn btn-p" data-acao="exp-ok">Concluir <span class="seta">→</span></button></div>`}`;
  }

  function etapaFim() {
    if (!S.registrada) {
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
    return `<section class="mata">
        <span class="rotulo">Sessão concluída · dia ${st} da sequência</span>
        <p class="score num">+${S.xp}<sup>XP</sup></p>
        <div class="placar">
          <div><b class="num">${S.minReais}</b><span>minutos</span></div>
          <div><b class="num">${S.total ? `${S.acertos}/${S.total}` : '—'}</b><span>acertos</span></div>
          <div><b class="num">${cardsVencidos().length}</b><span>cards para amanhã</span></div>
        </div>
      </section>
      <label class="rotulo" for="nota-sessao">Anotação do dia</label>
      <textarea id="nota-sessao" data-campo="nota" placeholder="Uma ideia que você quer lembrar, uma dúvida para pesquisar, onde aplicar no trabalho.">${esc(S.registro.nota)}</textarea>
      <div class="acoes"><button class="btn btn-p" data-acao="finalizar">Salvar e voltar</button></div>`;
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
    F(`Sessão de hoje, cerca de ${pauta.previsto} minutos. ${pauta.blocos.filter((b) => b.tipo !== 'fim').length} blocos. Para pausar, toque no botão grande do meio.`, 'Começando', '');
    for (const b of pauta.blocos) {
      if (b.tipo === 'revisao') {
        F(`Revisão rápida. ${b.cards.length} cartões. Responda de cabeça antes de ouvir a resposta.`, 'Revisão', `${b.cards.length} cartões`);
        b.cards.forEach((k, n) => { const { c } = cardDe(k); if (!c) return; F(c.frenteFalada, 'Revisão', `Cartão ${n + 1} de ${b.cards.length}`); seg.push({ tipo: 'pausa', ms: 3500, titulo: 'Pense…', sub: '' }); F('Resposta: ' + c.versoFalado, 'Revisão', `Cartão ${n + 1}`); });
      } else if (b.tipo === 'licao') {
        const u = b.u, nome = u.tipo === 'livro' ? 'Livro' : u.tipo === 'radar' ? 'Radar' : 'Lição';
        F(`${nome}: ${u.titulo}.`, nome, u.titulo);
        paragrafos(u.licaoFalada, nome, u.titulo);
        if (u.exemploFalado) { F('Exemplo.', 'Exemplo', u.titulo); paragrafos(u.exemploFalado, 'Exemplo', u.titulo); }
        if (u.trabalhoFalado) { F('No seu trabalho.', 'No seu trabalho', u.titulo); paragrafos(u.trabalhoFalado, 'No seu trabalho', u.titulo); }
        seg.push({ tipo: 'marcar', u });
      } else if (b.tipo === 'quiz') {
        F(`Quiz. ${b.itens.length} perguntas.`, 'Quiz', '');
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
      <div class="dir-topo"><span class="rotulo">Modo direção · ${DIR.modo === 'podcast' ? 'episódio' : 'interativo'}</span><button data-acao="dir-sair">Sair</button></div>
      <div class="dir-estado">
        <span class="rotulo" id="dir-prog">${DIR.seg.length ? `${Math.min(DIR.i + 1, DIR.seg.length)} / ${DIR.seg.length}` : ''}</span>
        <h2 id="dir-tit">${esc(DIR.titulo)}</h2>
        <p id="dir-sub">${esc(DIR.sub)}</p>
        <div class="onda${DIR.rodando ? ' ativa' : ''}" id="dir-onda" aria-hidden="true">${'<i></i>'.repeat(14)}</div>
        ${DIR.ouvindo ? '<p class="rotulo" style="color:#C9EA6E">Ouvindo: diga a letra</p>' : ''}
      </div>
      ${resp}
      ${!temFala ? '<p>Este navegador não tem leitura em voz alta. No iPhone use o Safari; no Android, o Chrome.</p>' : ''}
      <div class="dir-controles">
        <button data-acao="dir-repetir" aria-label="Repetir trecho">${IC.repetir}<span>Repetir</span></button>
        <button class="play" data-acao="dir-play" aria-label="${DIR.rodando ? 'Pausar' : 'Ouvir'}">${DIR.rodando ? IC.pausa : IC.play}<span>${DIR.rodando ? 'Pausar' : DIR.i ? 'Continuar' : 'Ouvir'}</span></button>
        <button data-acao="dir-pular" aria-label="Pular trecho">${IC.pular}<span>Pular</span></button>
      </div>
      <div class="dir-ajustes">
        <div class="seg" role="group" aria-label="Formato"><button data-acao="dir-modo" data-v="interativo" aria-pressed="${DIR.modo === 'interativo'}">Responder perguntas</button><button data-acao="dir-modo" data-v="podcast" aria-pressed="${DIR.modo === 'podcast'}">Só ouvir</button></div>
        <div class="seg" role="group" aria-label="Velocidade">${[0.95, 1.05, 1.2].map((v) => `<button data-acao="dir-vel" data-v="${v}" aria-pressed="${Math.abs((E.prefs.velocidade || 1) - v) < 0.01}">${String(v).replace('.', ',')}×</button>`).join('')}</div>
      </div>
    </div>`;
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
    renderDirecao();
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
        renderDirecao();
        ouvirResposta(q.opcoes.length);
        const limite = esperar(15000, g).then(() => -1);
        escolha = await Promise.race([resp, limite]);
        DIR.esperando = null; pararEscuta(); renderDirecao();
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
      rec.start(); DIR.ouvindo = true; renderDirecao();
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
    'caso-abrir': () => { const b = S.blocos[S.i]; b.st.texto = document.getElementById('caso-resp')?.value || ''; b.st.aberto = true; render(); },
    'caso-nota': (el) => {
      const b = S.blocos[S.i], n = +el.dataset.n, s = est(b.u.id);
      s.caso = s.caso == null ? n : (s.caso + n) / 2;
      ganharXP(10 + 25 * n, b.u.trilha);
      if (b.desafio && S.desafioChave && !E.desafios[S.desafioChave]) { E.desafios[S.desafioChave] = iso(); ganharXP(50, b.u.trilha); }
      S.feitos++; salvar(); avancar();
    },
    'exp-abrir': () => { const b = S.blocos[S.i]; b.st.texto = document.getElementById('exp-resp')?.value || ''; b.st.aberto = true; b.st.pts = b.st.pts || {}; render(); },
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
    apagar: () => { ui.confirmar = 'apagar'; render(); },
    'apagar-nao': () => { ui.confirmar = null; render(); },
    'apagar-sim': () => { E = estadoNovo(); salvar(); ui.confirmar = null; aplicarTema(); render(); toast('Progresso apagado'); },
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
    if (f) { ev.preventDefault(); f(el); }
  });
  app.addEventListener('change', (ev) => {
    const el = ev.target;
    if (el.dataset.ponto != null && S) { const b = S.blocos[S.i]; b.st.pts = b.st.pts || {}; b.st.pts[el.dataset.ponto] = el.checked; }
    if (el.dataset.campo === 'voz') { E.prefs.voz = el.value; salvar(); if (temFala) falar('Esta é a voz escolhida.', ++geracao); }
  });
  app.addEventListener('input', (ev) => {
    const el = ev.target;
    if (!S) return;
    const b = S.blocos[S.i];
    if (el.dataset.campo === 'caso' || el.dataset.campo === 'explique') b.st.texto = el.value;
  });
  if (temFala) speechSynthesis.addEventListener?.('voiceschanged', () => { if (ui.tela === 'progresso') render(); });

  // ------------------------------------------------------------------ início
  async function carregarConteudo() {
    const inline = document.getElementById('dados-conteudo');
    if (inline) return JSON.parse(inline.textContent);
    const r = await fetch('data/conteudo.json', { cache: 'no-cache' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }
  aplicarTema();
  carregarConteudo().then((d) => {
    D = d;
    D.unidades.forEach((u) => { U[u.id] = u; });
    render();
  }).catch((err) => {
    app.innerHTML = `<main class="casca"><h1 class="titulo-pag">Lastro</h1><p class="sub">Não consegui carregar o conteúdo (${esc(err.message)}). Se abriu o arquivo direto do computador, rode um servidor local: <code>npx serve treino-diario</code>.</p></main>`;
  });
  if ('serviceWorker' in navigator && location.protocol === 'https:' && !document.getElementById('dados-conteudo')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
