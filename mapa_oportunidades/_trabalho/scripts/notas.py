import re, glob, os, sys
rows=[]
for f in sorted(glob.glob('/home/user/Geral/mapa_oportunidades/setores/*.md')):
    txt=open(f,encoding='utf-8').read()
    m=re.search(r'^## Notas.*?$(.*?)(?=^## |\Z)',txt,re.S|re.M)
    title=txt.splitlines()[0].lstrip('# ').strip()
    if not m: rows.append((os.path.basename(f),title,None,None)); continue
    notas=[]
    for line in m.group(1).splitlines():
        c=[x.strip() for x in line.strip().strip('|').split('|')]
        if len(c)>=2 and re.fullmatch(r'[1-5]',c[1]) and 'média' not in c[0].lower():
            notas.append(int(c[1]))
    notas=notas[:8]
    rows.append((os.path.basename(f),title,notas,round(sum(notas)/len(notas),2) if len(notas)==8 else None))
for r in sorted(rows,key=lambda r:-(r[3] or 0)):
    print(f"{r[3]}\t{r[0]}\t{r[2]}")
