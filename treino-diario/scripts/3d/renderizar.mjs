// Renderiza os objetos 3D do Lastro e salva em ../../assets/3d/*.webp
// Uso (uma vez): npm install   ·   depois: node renderizar.mjs [nome ...]
// Requer o Chromium do Playwright (já instalado nas sessões do Claude Code na nuvem).
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const aqui = dirname(fileURLToPath(import.meta.url));
const destino = join(aqui, '..', '..', 'assets', '3d');
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = await import('playwright')); }

// objetos e quais ganham versão desfocada (profundidade de campo)
const TODOS = ['moeda-secao', 'moeda-real', 'moeda-pct', 'moeda-lastro', 'gema', 'blocos', 'aneis', 'esfera', 'esfera-escura',
  'estrela', 'estrela-clara', 'toro', 'cruz', 'anel-laranja', 'bola-roxa', 'fita'];
const DESFOCAR = new Set(['moeda-secao', 'moeda-real', 'moeda-pct']);
const pedidos = process.argv.slice(2).length ? process.argv.slice(2) : TODOS;

const tipos = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json' };
const servidor = createServer(async (req, res) => {
  try {
    const caminho = join(aqui, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (!caminho.startsWith(aqui)) throw new Error('fora da pasta');
    res.writeHead(200, { 'content-type': tipos[extname(caminho)] || 'application/octet-stream' });
    res.end(await readFile(caminho));
  } catch { res.writeHead(404); res.end(); }
}).listen(0);
const porta = servidor.address().port;

await mkdir(destino, { recursive: true });
const nav = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
for (const nome of pedidos) {
  const t0 = Date.now();
  const p = await nav.newPage();
  p.on('pageerror', (e) => console.error(nome, 'erro na página:', e.message));
  await p.goto(`http://localhost:${porta}/cena.html#obj=${nome}`);
  await p.waitForFunction(() => window.resultado || window.erro, null, { timeout: 180000 });
  const erro = await p.evaluate(() => window.erro);
  if (erro) { console.error(nome, erro); await p.close(); continue; }
  const salvar = async (dataUrl, arquivo) => {
    const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
    await writeFile(join(destino, arquivo), buf);
    return buf.length;
  };
  const kb = await salvar(await p.evaluate(() => window.resultado), `${nome}.webp`);
  let extra = '';
  if (DESFOCAR.has(nome)) extra = ` + desfocada ${((await salvar(await p.evaluate(() => window.desfocado), `${nome}-desfocada.webp`)) / 1024).toFixed(0)} KB`;
  console.log(`${nome}.webp  ${(kb / 1024).toFixed(0)} KB${extra}  (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
  await p.close();
}
await nav.close();
servidor.close();
