import re,glob,os
names={'06':'Hortifruti','15':'Cuidado de idosos','22':'Contabilidade','25':'BPO financeiro PME','31':'Condomínios','32':'Energia','43':'Automotivo pós-venda','46':'Educação corporativa'}
rows=[]
for f in sorted(glob.glob('/home/user/Geral/mapa_oportunidades/_trabalho/fase2/*.md')):
    t=open(f,encoding='utf-8').read()
    m=re.search(r'^## \d*\.? ?Ranking.*?$(.*?)(?=^\*\*AN|^AN|^## |^---)',t,re.S|re.M)
    for line in m.group(1).splitlines():
        c=[x.strip() for x in line.strip().strip('|').split('|')]
        idx=[i for i,x in enumerate(c) if re.fullmatch(r'\d,\d+',x)]
        if not idx: continue
        i=idx[0]; dor=' '.join(c[:i]); dor=re.sub(r'^\d+ ','',dor)
        rows.append((float(c[i].replace(',','.')),names[os.path.basename(f)[:2]],dor,c[i+1] if len(c)>i+1 else '', os.path.basename(f)))
rows.sort(key=lambda r:-r[0])
out=['| # | Dor | Subsetor | Média | Justificativa |','|---|---|---|---|---|']
for k,r in enumerate(rows,1):
    out.append(f'| {k} | {r[2]} | [{r[1]}](#{r[4][:2]}) | {str(r[0]).replace(".",",")} | {r[3]} |')
open('/home/user/Geral/mapa_oportunidades/_trabalho/fase2_rank.md','w').write('\n'.join(out)+'\n')
print(len(rows)); print('\n'.join(out[:20]))
