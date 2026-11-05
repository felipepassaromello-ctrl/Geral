// Converte os arquivos de conteudo/**/*.md em data/conteudo.json.
// Uso: node scripts/build-conteudo.mjs   (sem dependências externas)
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const pastaConteudo = join(raiz, 'conteudo');

const TRILHAS = [
  { id: 'financas', nome: 'Finanças de deals', curto: 'Finanças', peso: 3 },
  { id: 'nicho', nome: 'M&A, PE e VC', curto: 'M&A', peso: 2 },
  { id: 'mercados', nome: 'Mercados e estruturas', curto: 'Mercados', peso: 2 },
  { id: 'ia', nome: 'IA e tecnologia', curto: 'IA', peso: 1.5 },
  { id: 'livros', nome: 'Livros', curto: 'Livros', peso: 1 },
  { id: 'empreendedorismo', nome: 'Empreender', curto: 'Empreender', peso: 1 },
];

// ---------- markdown mínimo -> HTML ----------
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(s) {
  let t = esc(s);
  const codes = [];
  t = t.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; });
  t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  t = t.replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g, '$1<em>$2</em>');
  t = t.replace(/(^|[^_\w])_([^_\n]+)_(?!\w)/g, '$1<em>$2</em>');
  t = t.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[+i]}</code>`);
  return t;
}

function md(texto) {
  const linhas = texto.replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0;
  const isTable = (l) => /^\s*\|.*\|\s*$/.test(l);
  while (i < linhas.length) {
    const l = linhas[i];
    if (!l.trim()) { i++; continue; }
    let m;
    if ((m = l.match(/^(#{3,5})\s+(.*)$/))) {
      const n = Math.min(m[1].length + 0, 5);
      out.push(`<h${n}>${inline(m[2])}</h${n}>`); i++; continue;
    }
    if (isTable(l) && i + 1 < linhas.length && /^\s*\|?\s*:?-{2,}/.test(linhas[i + 1])) {
      const cells = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = cells(l);
      const aligns = cells(linhas[i + 1]).map((c) => (/:$/.test(c) ? 'right' : ''));
      i += 2;
      const rows = [];
      while (i < linhas.length && isTable(linhas[i])) { rows.push(cells(linhas[i])); i++; }
      const td = (c, j, tag) => `<${tag}${aligns[j] ? ` class="r"` : ''}>${inline(c)}</${tag}>`;
      out.push(`<div class="tabela"><table><thead><tr>${head.map((c, j) => td(c, j, 'th')).join('')}</tr></thead><tbody>${rows
        .map((r) => `<tr>${r.map((c, j) => td(c, j, 'td')).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^>\s?/.test(l)) {
      const buf = [];
      while (i < linhas.length && /^>\s?/.test(linhas[i])) { buf.push(linhas[i].replace(/^>\s?/, '')); i++; }
      out.push(`<blockquote>${md(buf.join('\n'))}</blockquote>`); continue;
    }
    if (/^\s*([-*]|\d+[.)])\s+/.test(l)) {
      const ordered = /^\s*\d+[.)]/.test(l);
      const items = [];
      while (i < linhas.length && (/^\s*([-*]|\d+[.)])\s+/.test(linhas[i]) || (/^\s{2,}\S/.test(linhas[i]) && items.length))) {
        if (/^\s*([-*]|\d+[.)])\s+/.test(linhas[i]) && !/^\s{2,}/.test(linhas[i])) items.push(linhas[i].replace(/^\s*([-*]|\d+[.)])\s+/, ''));
        else items[items.length - 1] += ' ' + linhas[i].trim().replace(/^([-*]|\d+[.)])\s+/, '· ');
        i++;
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${items.map((it) => `<li>${inline(it)}</li>`).join('')}</${tag}>`); continue;
    }
    const buf = [];
    while (i < linhas.length && linhas[i].trim() && !/^(#{3,5}\s|>|\s*([-*]|\d+[.)])\s+)/.test(linhas[i]) && !isTable(linhas[i])) { buf.push(linhas[i].trim()); i++; }
    if (buf.length) out.push(`<p>${inline(buf.join(' '))}</p>`);
    else i++;
  }
  return out.join('\n');
}

// Texto corrido para leitura em voz alta
function falado(texto) {
  return texto
    .replace(/\r/g, '')
    .split('\n')
    .filter((l) => !/^\s*\|/.test(l))
    .map((l) => l.replace(/^#{3,5}\s+(.*)$/, '$1.').replace(/^>\s?/, '').replace(/^\s*([-*]|\d+[.)])\s+/, ''))
    .join('\n')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/R\$\s?/g, 'R$ ')
    .replace(/\bx\b/g, 'vezes')
    .replace(/\n{2,}/g, '\n')
    .replace(/([^.:;!?])\n/g, '$1.\n')
    .trim();
}

// ---------- parsing de unidade ----------
function frontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) throw new Error('sem cabeçalho ---');
  const meta = {};
  for (const linha of m[1].split('\n')) {
    const mm = linha.match(/^(\w+):\s*(.*?)\s*(#.*)?$/);
    if (!mm) continue;
    let v = mm[2];
    if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean);
    else if (/^(true|false)$/.test(v)) v = v === 'true';
    else if (/^-?\d+(\.\d+)?$/.test(v)) v = Number(v);
    else v = v.replace(/^["']|["']$/g, '');
    meta[mm[1]] = v;
  }
  return { meta, corpo: src.slice(m[0].length) };
}

function secoes(corpo, nivel) {
  const marca = '#'.repeat(nivel) + ' ';
  const res = {};
  let atual = null;
  for (const linha of corpo.split('\n')) {
    if (linha.startsWith(marca)) { atual = linha.slice(marca.length).trim(); res[atual] = []; continue; }
    if (atual) res[atual].push(linha);
  }
  for (const k in res) res[k] = res[k].join('\n').trim();
  return res;
}

function parseQuiz(txt, erros) {
  const blocos = txt.split(/^### /m).map((b) => b.trim()).filter(Boolean);
  return blocos.map((b) => {
    const linhas = b.split('\n');
    const pergunta = linhas.shift().trim();
    const opcoes = [];
    let correta = -1;
    const exp = [];
    for (const l of linhas) {
      const m = l.match(/^\s*-\s*\[( |x|X)\]\s*(.*)$/);
      if (m) { if (m[1].toLowerCase() === 'x') correta = opcoes.length; opcoes.push(m[2].trim()); }
      else if (/^>\s?/.test(l)) exp.push(l.replace(/^>\s?/, ''));
    }
    const nCertas = linhas.filter((l) => /^\s*-\s*\[(x|X)\]/.test(l)).length;
    if (nCertas !== 1) erros.push(`quiz "${pergunta.slice(0, 40)}" tem ${nCertas} alternativas corretas`);
    return { pergunta: inline(pergunta), perguntaFalada: falado(pergunta), opcoes: opcoes.map(inline), opcoesFaladas: opcoes.map(falado), correta, explicacao: md(exp.join('\n')), explicacaoFalada: falado(exp.join('\n')) };
  });
}

function parseCards(txt) {
  return txt.split('\n').map((l) => l.match(/^\s*-\s*(.+?)\s*::\s*(.+)$/)).filter(Boolean)
    .map((m) => ({ frente: inline(m[1]), verso: inline(m[2]), frenteFalada: falado(m[1]), versoFalado: falado(m[2]) }));
}

function listar(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? listar(p) : n.endsWith('.md') && n === n.toLowerCase() && !/^como-/.test(n) ? [p] : [];
  });
}

const erros = [];
const unidades = [];
const ids = new Set();
for (const arq of listar(pastaConteudo).sort()) {
  const rel = relative(raiz, arq);
  try {
    const { meta, corpo } = frontmatter(readFileSync(arq, 'utf8'));
    const s = secoes(corpo, 2);
    const e = [];
    if (!meta.id) e.push('sem id');
    if (ids.has(meta.id)) e.push(`id repetido ${meta.id}`);
    ids.add(meta.id);
    if (!TRILHAS.find((t) => t.id === meta.trilha)) e.push(`trilha inválida "${meta.trilha}"`);
    if (!s['Lição']) e.push('sem ## Lição');
    const u = {
      id: meta.id, trilha: meta.trilha, tipo: meta.tipo || 'licao', titulo: meta.titulo, resumo: meta.resumo || '',
      nivel: meta.nivel || 1, minutos: meta.minutos || 8, ordem: meta.ordem ?? 100, tags: meta.tags || [],
      desafio: !!meta.desafio, verificado: meta.verificado || '', arquivo: rel,
      licao: md(s['Lição'] || ''), licaoFalada: falado(s['Lição'] || ''),
    };
    if (s['Exemplo']) { u.exemplo = md(s['Exemplo']); u.exemploFalado = falado(s['Exemplo']); }
    if (s['No seu trabalho']) { u.trabalho = md(s['No seu trabalho']); u.trabalhoFalado = falado(s['No seu trabalho']); }
    if (s['Quiz']) u.quiz = parseQuiz(s['Quiz'], e);
    if (s['Flashcards']) u.cards = parseCards(s['Flashcards']);
    if (s['Caso']) {
      const c = secoes(s['Caso'], 3);
      if (!c['Enunciado'] || !c['Resolução']) e.push('Caso precisa de ### Enunciado e ### Resolução');
      u.caso = { enunciado: md(c['Enunciado'] || ''), enunciadoFalado: falado(c['Enunciado'] || ''), resposta: inline(c['Resposta'] || ''), respostaFalada: falado(c['Resposta'] || ''), resolucao: md(c['Resolução'] || ''), resolucaoFalada: falado(c['Resolução'] || '') };
    }
    if (s['Explique']) {
      const partes = s['Explique'].split(/^### /m);
      const c = secoes(s['Explique'], 3);
      u.explique = {
        pedido: md(partes[0].trim()), pedidoFalado: falado(partes[0].trim()),
        pontos: (c['Pontos-chave'] || '').split('\n').filter((l) => /^\s*-\s+/.test(l)).map((l) => inline(l.replace(/^\s*-\s+/, ''))),
        modelo: md(c['Resposta modelo'] || ''),
      };
    }
    if (s['Verificar']) u.verificar = md(s['Verificar']);
    if (s['Fontes']) u.fontes = md(s['Fontes']);
    if (e.length) erros.push(...e.map((x) => `${rel}: ${x}`));
    unidades.push(u);
  } catch (err) {
    erros.push(`${rel}: ${err.message}`);
  }
}

unidades.sort((a, b) => a.trilha.localeCompare(b.trilha) || a.ordem - b.ordem);
const saida = { geradoEm: new Date().toISOString().slice(0, 10), trilhas: TRILHAS, unidades };
writeFileSync(join(raiz, 'data', 'conteudo.json'), JSON.stringify(saida));

const n = (k) => unidades.reduce((s, u) => s + (u[k]?.length || 0), 0);
console.log(`${unidades.length} unidades · ${n('quiz')} perguntas · ${n('cards')} flashcards · ${unidades.filter((u) => u.caso).length} casos`);
for (const t of TRILHAS) console.log(`  ${t.id.padEnd(17)} ${unidades.filter((u) => u.trilha === t.id).length}`);
if (erros.length) { console.error('\nProblemas encontrados:\n- ' + erros.join('\n- ')); process.exitCode = 1; }
