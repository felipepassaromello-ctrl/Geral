import re, glob, os
base='/home/user/Geral/mapa_oportunidades'
files=sorted(glob.glob(base+'/*.md'))+sorted(glob.glob(base+'/setores/*.md'))+sorted(glob.glob(base+'/benchmarking/*.md'))+sorted(glob.glob(base+'/capital/*.md'))
files=[f for f in files if not f.endswith('fontes.md')]
url_re=re.compile(r'https?://[^\s\)\]>"\'`|]+')
seen={}
out=['# Fontes','','Lista gerada automaticamente a partir de todos os arquivos do projeto em 31/10/2026. Cada link aparece agrupado pelo arquivo em que foi citado; links repetidos aparecem só na primeira ocorrência e o total de arquivos que o citam fica entre parênteses no índice geral.','','**Aviso de método:** a rede desta sessão bloqueou a abertura de páginas (WebFetch) para quase todos os domínios. Os links abaixo foram coletados de resultados de busca cujo conteúdo trazia o número citado; as páginas não foram abertas na íntegra. Reconfira na fonte primária antes de usar em decisão de investimento.','']
total=0; per=[]
for f in files:
    txt=open(f,encoding='utf-8').read()
    urls=[u.rstrip('.,;:') for u in url_re.findall(txt)]
    new=[]
    for u in urls:
        seen.setdefault(u,set()).add(os.path.relpath(f,base))
        if u not in [x for x in new] and len(seen[u])==1 and u not in sum([p[1] for p in per],[]):
            new.append(u)
    if new: per.append((os.path.relpath(f,base),new))
for rel,urls in per:
    out.append(f'## {rel}'); out.append('')
    for u in urls: out.append(f'- {u}')
    out.append('')
domains={}
for u in seen:
    d=re.sub(r'^https?://(www\.)?','',u).split('/')[0]
    domains[d]=domains.get(d,0)+1
out.insert(6,f'Total de links únicos: {len(seen)}. Domínios distintos: {len(domains)}.\n')
out.append('## Domínios mais citados'); out.append('')
out.append('| Domínio | Links únicos |'); out.append('|---|---|')
for d,c in sorted(domains.items(),key=lambda x:-x[1])[:60]: out.append(f'| {d} | {c} |')
open(base+'/fontes.md','w',encoding='utf-8').write('\n'.join(out)+'\n')
print(len(seen),len(domains))
