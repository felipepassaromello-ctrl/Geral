import re, glob, os
from decimal import Decimal, ROUND_HALF_UP
def grp(n):
    n=int(n)
    for a,b,g in [(1,8,'Agro'),(9,17,'Saúde'),(18,21,'Serviços financeiros'),(22,25,'Serviços profissionais'),(26,27,'Logística'),(28,31,'Construção e imobiliário'),(32,34,'Energia, saneamento e telecom'),(35,43,'Varejo e consumo'),(44,46,'Educação'),(47,52,'Setor público, indústria e outros')]:
        if a<=n<=b: return g
crit=['Cresc.','Margem','Concorr.','Capital','Juros','Digit.','Regul.','Tend.']
rows=[]
for f in sorted(glob.glob('/home/user/Geral/mapa_oportunidades/setores/*.md')):
    txt=open(f,encoding='utf-8').read()
    title=txt.splitlines()[0].lstrip('# ').strip()
    m=re.search(r'^## Notas.*?$(.*?)(?=^## |\Z)',txt,re.S|re.M)
    notas=[];just=[]
    for line in m.group(1).splitlines():
        c=[x.strip() for x in line.strip().strip('|').split('|')]
        if len(c)>=2 and re.fullmatch(r'[1-5]',c[1]) and 'média' not in c[0].lower():
            notas.append(int(c[1])); just.append((c[0],c[1],c[2] if len(c)>2 else ''))
    notas=notas[:8]; just=just[:8]
    media=(Decimal(sum(notas))/8).quantize(Decimal('0.01'),ROUND_HALF_UP)
    b=os.path.basename(f); num=b[:2]
    rows.append(dict(f=b,num=num,title=title,notas=notas,media=media,just=just,g=grp(num)))
# tie-break: perfil = media de capital, juros, digit, tend
for r in rows:
    n=r['notas']; r['perfil']=Decimal(n[3]+n[4]+n[5]+n[7])/4
rows.sort(key=lambda r:(-r['media'],-r['perfil'],r['num']))
out=[]
out.append('| # | Subsetor | Grupo | '+' | '.join(crit)+' | Média | Desempate* |')
out.append('|'+'---|'*(len(crit)+5))
for i,r in enumerate(rows,1):
    out.append(f"| {i} | [{r['title']}](setores/{r['f']}) | {r['g']} | "+' | '.join(map(str,r['notas']))+f" | **{str(r['media']).replace('.',',')}** | {str(r['perfil'].quantize(Decimal('0.01'))).replace('.',',')} |")
open('/home/user/Geral/mapa_oportunidades/_trabalho/fase1_tabela.md','w').write('\n'.join(out)+'\n')
ap=[]
for i,r in enumerate(rows,1):
    ap.append(f"### {i}. {r['title']} (média {str(r['media']).replace('.',',')})\nArquivo: [setores/{r['f']}](setores/{r['f']})\n")
    ap.append('| Critério | Nota | Justificativa |\n|---|---|---|')
    for c,n,j in r['just']:
        ap.append(f'| {c} | {n} | {j} |')
    ap.append('')
open('/home/user/Geral/mapa_oportunidades/_trabalho/fase1_apendice.md','w').write('\n'.join(ap)+'\n')
# group averages
from collections import defaultdict
g=defaultdict(list)
for r in rows: g[r['g']].append(float(r['media']))
for k,v in sorted(g.items(),key=lambda x:-sum(x[1])/len(x[1])): print(k,round(sum(v)/len(v),2),len(v))
