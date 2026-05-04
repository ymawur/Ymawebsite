import { Output } from "@/types";

export const outputs: Output[] = [
  {
    id: "predicting-food-protein-hydrolysis-kinetics",
    title: "Predicting Food Protein Hydrolysis Kinetics",
    headline:
      "Combining high-resolution peptide analytics and AI modeling to predict peptide release kinetics during food protein digestion.",
    intro:
      "Protein hydrolysis plays a key role in determining the nutritional properties of foods. However, digestion-driven peptide release remains difficult to predict, limiting our ability to fully utilize dietary proteins. This project combines advanced analytical chemistry with data-driven modeling to better understand and predict protein digestion behavior.",
    description:
      "We integrate peptide identification and quantification workflows based on LC-MS with kinetic modeling to track how peptides form and evolve during digestion. A comprehensive experimental dataset supports estimation of kinetic parameters from peptide concentration profiles measured across digestion timepoints using untargeted quantitative UHPLC-PDA-ESI-MS.\n\nThe modeling framework accounts for protease specificity, co-action between digestive enzymes, and structural changes in proteins that influence cleavage accessibility. By combining substrate amino acid sequence information with physico-chemical residue descriptors around cleavage regions, the project aims to uncover sequence-level patterns that govern hydrolysis kinetics and peptide release.",
    outlook:
      "Project outlook demo: We are developing an interactive predictive workflow that starts from amino acid sequence and simulates progressive cleavage events, peptide accumulation, and hydrolysis progression. The demo below illustrates a simplified hydrolysis timeline for β-lactoglobulin under tryptic digestion.",
    image: {
      src: "/images/project-placeholder.svg",
      alt: "Predicting food protein hydrolysis kinetics project cover",
    },
    links: [],
    selected: true,
    demoHtml: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
body{margin:0;background:#f5f8fc;font-family:Inter,system-ui,sans-serif;color:#1f2937}
.app{height:100vh;display:grid;grid-template-rows:auto 1fr auto;gap:6px;padding:8px}
.top h3{margin:0 0 2px;font-size:18px}.top p{margin:0;color:#475569;font-size:12px}
.stage{border:1px solid #d7e1ec;border-radius:14px;background:white;overflow:hidden}
svg{width:100%;height:100%}.bond{stroke:#94a3b8;stroke-width:2.8;stroke-linecap:round}.bond.target{stroke:#ef4444;stroke-width:4.5}.bond.broken{opacity:.08}
.node{fill:#2563eb;stroke:white;stroke-width:1.2}.node.cut{fill:#ef4444}
.water,.enzyme,.label{opacity:0;transition:opacity .15s ease}.water circle{fill:#38bdf8;stroke:white}.water text{font-size:10px;fill:#075985;font-weight:700}
.enzyme path{fill:rgba(245,158,11,.18);stroke:#f59e0b;stroke-width:2.4}.enzyme text{font-size:11px;fill:#92400e;font-weight:800}
.label{font-size:10px;fill:#14532d;paint-order:stroke;stroke:white;stroke-width:3px}
.controls{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center}.read{font-weight:700}
</style></head><body><div class="app"><div class="top"><h3>β-Lactoglobulin hydrolysis by trypsin</h3><p>Trypsin and water attack selected peptide bonds over time. Final peptides are labeled with length and sequence.</p></div>
<div class="stage"><svg id="scene" viewBox="0 0 1100 620"><g id="b"></g><g id="w"></g><g id="e"></g><g id="n"></g><g id="t"></g></svg></div>
<div class="controls"><input id="s" type="range" min="0" max="100" value="0"/><div id="r" class="read">t = 0 min</div></div></div>
<script>
const seq='LIVTQTMKGLDIQKVAGTWYSLAMAASDISLLDAQSAPLRVYVEELKPTPEGDLEILLQKWENGECAQKKIIAEKTKIPAVFKIDALNENKVLVLDTDYKKYLLFCMENSAEPEQSLACQCLVRTPEVDDEALEKFDKALKALPMHIRLSFNPTQLEEQCHI';
const ev=[{p:8,t:18},{p:69,t:22},{p:75,t:26},{p:148,t:30},{p:40,t:38},{p:141,t:44},{p:14,t:50},{p:70,t:56},{p:124,t:63},{p:138,t:68},{p:77,t:74},{p:83,t:79},{p:91,t:84},{p:101,t:89},{p:135,t:94}];
const NS='http://www.w3.org/2000/svg',b=document.getElementById('b'),w=document.getElementById('w'),e=document.getElementById('e'),n=document.getElementById('n'),t=document.getElementById('t'),s=document.getElementById('s'),r=document.getElementById('r');
const pts=[...seq].map((_,i)=>{const a=i*0.34,rad=220-i*0.55+22*Math.sin(i*0.2);return{x:540+Math.cos(a)*rad+10*Math.sin(i*1.5),y:310+Math.sin(a)*rad*0.72+12*Math.cos(i*0.45)}});
const bonds=[],nodes=[],waters=[],enz=[],labels=[];
for(let i=0;i<seq.length-1;i++){const ln=document.createElementNS(NS,'line');ln.setAttribute('class','bond');b.appendChild(ln);bonds.push(ln)}
for(let i=0;i<seq.length;i++){const c=document.createElementNS(NS,'circle');c.setAttribute('class',ev.some(x=>x.p===i+1)?'node cut':'node');c.setAttribute('r','6.3');n.appendChild(c);nodes.push(c)}
ev.forEach(()=>{const g=document.createElementNS(NS,'g');g.setAttribute('class','water');const c=document.createElementNS(NS,'circle');c.setAttribute('r','9');const tx=document.createElementNS(NS,'text');tx.setAttribute('y','-13');tx.textContent='H2O';g.appendChild(c);g.appendChild(tx);w.appendChild(g);waters.push(g);const eg=document.createElementNS(NS,'g');eg.setAttribute('class','enzyme');const p=document.createElementNS(NS,'path');p.setAttribute('d','M -34 -14 C -20 -42 24 -40 38 -12 C 48 14 27 36 -2 34 C -24 32 -42 8 -34 -14 Z');const et=document.createElementNS(NS,'text');et.setAttribute('y','4');et.setAttribute('x','0');et.textContent='trypsin';eg.appendChild(p);eg.appendChild(et);e.appendChild(eg);enz.push(eg);});
function fragIdx(res,v){let f=0;for(let i=0;i<ev.length;i++){if(v>=ev[i].t&&res>ev[i].p)f++}return f}
function pos(i,v){const p=pts[i],f=fragIdx(i+1,v),sp=Math.max(0,Math.min(1,(v-34)/66));const ox=(f%8-3.5)*44*sp,oy=(Math.floor(f/8)-0.5)*96*sp;return{x:p.x+ox,y:p.y+oy}}
function frags(v){const cuts=ev.filter(x=>v>=x.t).map(x=>x.p).sort((a,b)=>a-b);let st=1,out=[];for(const c of cuts){out.push({s:st,e:c,q:seq.slice(st-1,c)});st=c+1}out.push({s:st,e:seq.length,q:seq.slice(st-1)});return out}
function mkLabel(txt,x,y){const lb=document.createElementNS(NS,'text');lb.setAttribute('class','label');lb.textContent=txt;lb.setAttribute('x',x);lb.setAttribute('y',y);t.appendChild(lb);labels.push(lb)}
function update(v){t.innerHTML=''; labels.length=0; const done=ev.filter(x=>v>=x.t),active=ev.find(x=>v>=x.t-12&&v<x.t);
for(let i=0;i<bonds.length;i++){const p1=pos(i,v),p2=pos(i+1,v),ln=bonds[i];ln.setAttribute('x1',p1.x);ln.setAttribute('y1',p1.y);ln.setAttribute('x2',p2.x);ln.setAttribute('y2',p2.y);ln.setAttribute('class','bond'+(done.some(x=>x.p===i+1)?' broken':'')+(active&&active.p===i+1?' target':''));}
for(let i=0;i<nodes.length;i++){const p=pos(i,v);nodes[i].setAttribute('cx',p.x);nodes[i].setAttribute('cy',p.y)}
ev.forEach((x,i)=>{const a=Math.max(0,x.t-12),f=Math.max(0,Math.min(1,(v-a)/12));const p1=pos(x.p-1,v),p2=pos(x.p,v),mx=(p1.x+p2.x)/2,my=(p1.y+p2.y)/2;const sx=mx-80+(i%3)*24,sy=my-75-(i%2)*16;waters[i].setAttribute('transform','translate('+(sx+(mx-sx)*f).toFixed(1)+' '+(sy+(my-sy)*f).toFixed(1)+')');waters[i].style.opacity=(v>=a&&v<x.t+5)?1:0;enz[i].setAttribute('transform','translate('+(mx+32).toFixed(1)+' '+(my+16).toFixed(1)+')');enz[i].style.opacity=(v>=a&&v<x.t+5&&i%2===0)?1:0;});
if(v>=92){const f=frags(v);for(let i=0;i<f.length;i++){const g=f[i],m=Math.floor((g.s+g.e)/2)-1,p=pos(m,v),txt='F'+(i+1)+' | '+(g.e-g.s+1)+' aa | '+g.q;mkLabel(txt,p.x-40,p.y-12+((i%3)-1)*14);labels[i].style.opacity=1;}}
r.textContent='t = '+Math.round(v*2.4)+' min';}
s.addEventListener('input',()=>update(Number(s.value)));update(0);
</script></body></html>`,
  },
  {
    id: "food-in-the-hood-podcast",
    title: "Podcast: Food in the Hood",
    headline:
      "A place where food meets science, culture, innovation, and society. A podcast exploring food through scientific, technological, cultural, and social lenses with hosts Amanda Sia and Yizhou (Ben) Ma.",
    description:
      "Food in the Hood is a podcast hosted by Amanda Sia and Yizhou (Ben) Ma that explores food beyond recipes and trends. Each episode brings together perspectives from food science, industry, research, and lived experience to discuss complex topics in an accessible, conversational format.\n\nAcross episodes, we examine food as science, technology, culture, and personal experience. Topics include food chemistry, processing, nutrition, ingredient innovation, sustainability, and the social and historical context behind everyday food choices. We also reflect on education, careers, and current events in the food world to connect technical ideas with real-life practice.\n\nThe podcast is designed for listeners who are curious about how food systems work in practice and how scientific knowledge translates into products, policies, and daily decisions.",
    image: {
      src: "/images/FIH podcast.jpg",
      alt: "Food in the Hood podcast cover art",
    },
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/show/04rulokx6auswo5gnhOqu9",
      },
    ],
    selected: true,
  },
  {
    id: "ai-food-science-landscape-2025",
    title: "AI for Food Science: The Landscape in 2025",
    headline:
      "A perspective on how modern AI models address food at molecular, product, and material scales, and where major gaps remain.",
    description:
      "This project provides a structured perspective on how artificial intelligence is currently transforming food science and where major conceptual gaps remain. It examines three major abstraction levels: molecules, products, and materials.\n\nAt the molecular level, large AI models such as protein language models and graph neural networks enable prediction of structure, stability, and functionality directly from chemical or sequence representations. These approaches support rational exploration of peptide functions, flavor compounds, and molecular taste mechanisms. At the product level, vision and vision-language models analyze food images and videos to estimate nutrients, portion size, and calories, while also enabling preference modeling, personalization, and quality assessment.\n\nIn contrast, food as materials (pastes, gels, emulsions, and complex multiphase systems) remains underrepresented in modern AI pipelines. These systems are governed by multiscale physics, are highly process-dependent, and lack standardized representations and datasets. This work highlights the need for new representations and hybrid modeling strategies that connect molecules to products through structure and processing.",
    image: {
      src: "/images/AI4FoodScience.jpg",
      alt: "Infographic preview for AI for Food Science: The Landscape in 2025",
    },
    links: [
      {
        label: "Infographic",
        href: "https://www.linkedin.com/posts/ybenma_the-state-of-ai-for-food-science-at-the-end-share-7411380944626073600--1Qd?utm_source=share&utm_medium=member_desktop&rcm=ACoAABQhmBgBhEQv7oIx39w7ICTQDbBS4ogHrpk",
      },
    ],
    selected: true,
  },
  {
    id: "fiberlyzer",
    title: "Fiberlyzer",
    headline:
      "Automated, open-source image analysis for standardized quantification of visual fibrousness in plant-based meat analogues.",
    description:
      "Fiberlyzer is an open-source, image-based method for automated, quantitative, and standardized assessment of visual fibrousness in plant-based meat analogues. While mechanical texture analysis provides important insights into material properties, visual fibrous structures are often evaluated subjectively and rely heavily on expert judgment. Fiberlyzer addresses this gap by providing an objective computer vision pipeline for characterizing fibrous appearance directly from 2D images.\n\nThe method segments fibrous regions from images and extracts fiber shape features that describe structural organization, including fiber length, width, area, and branching behavior. A key metric, the fiber score (length-to-width ratio), shows strong correlation with expert panel evaluations, particularly when comparing formulations. In addition to supporting formulation optimization, Fiberlyzer enables structural similarity analysis between different samples and reference materials, such as cooked chicken breast.\n\nWith a simple imaging setup and user-friendly interface, Fiberlyzer is designed for integration into formulation development, quality control, and production workflows. By reducing dependence on expert visual inspection, the method offers a rapid, low-cost, and reproducible approach to evaluating visual fibrousness in meat analogues.",
    image: {
      src: "/images/Fiberlyzer_demo.jpg",
      alt: "Fiberlyzer visual fibrousness analysis demo",
    },
    links: [
      {
        label: "Paper",
        href: "https://onlinelibrary.wiley.com/doi/full/10.1111/jtxs.12806",
      },
      {
        label: "Code repository",
        href: "https://git.wur.nl/yizhou.ma/fiberlyzer3",
      },
    ],
    selected: true,
  },
  {
    id: "pinn-food-kinetics",
    title: "Physics-Informed Neural Networks for Food Kinetic Modeling",
    headline:
      "Integrating physical laws with neural networks to improve prediction, generalization, and data efficiency in food kinetics.",
    description:
      "This project explores the use of physics-informed neural networks (PINNs) for modeling food quality kinetics during processing and storage. Traditional kinetic modeling relies on predefined equations, while purely data-driven models often struggle with extrapolation. PINNs combine both approaches by embedding known physical and kinetic relationships directly into neural network training.\n\nUsing case studies in seed drying, bread baking, and kiwi softening, the study demonstrates that PINN models outperform empirical models in both interpolation and extrapolation tasks and achieve comparable performance to physics-based models when sufficient data are available. PINNs also support transfer learning, enabling efficient adaptation to new datasets with minimal retraining.\n\nThe work highlights both strengths and limitations. PINNs show strong generalization and data efficiency, but challenges remain when handling discontinuities associated with multistage processing or abrupt transitions. Overall, the results position PINNs as a promising modeling framework for modern food kinetics, especially when data are limited but physical knowledge is available.",
    image: {
      src: "/images/PINN4FS.png",
      alt: "Physics-informed neural networks for food kinetics project graphic",
    },
    links: [
      {
        label: "Paper",
        href: "https://chemrxiv.org/doi/full/10.26434/chemrxiv-2025-t2r5k",
      },
      {
        label: "Code",
        href: "https://git.wur.nl/yizhou.ma/pinn4fs",
      },
    ],
    selected: true,
  },
  {
    id: "ml-automated-food-processing",
    title: "Machine Learning in Automated Food Processing",
    headline:
      "A review and vision for using machine learning to enable adaptive, sustainable, and intelligent food processing systems.",
    description:
      "This project reviews recent advances in machine learning for enabling automated and intelligent food processing systems. Automated processing aims to adapt operations to variability in raw materials, changing product specifications, and sustainability targets, while maintaining consistent quality.\n\nThe review summarizes applications of machine learning across formulation development, process monitoring and control, and product quality assessment. Examples include vision-based inspection, predictive process models, and data-driven optimization of processing conditions. Beyond summarizing current technologies, the work outlines future opportunities for adaptive processing, mass customization, personalized nutrition, and human–machine interaction.\n\nA key message is that successful automated food processing requires multidisciplinary integration of food science, control engineering, data science, and materials science. The project identifies open research questions and provides a conceptual roadmap toward more resilient and flexible processing systems.",
    image: {
      src: "/images/ML4FoodProcessing.png",
      alt: "Machine learning in automated food processing project graphic",
    },
    links: [
      {
        label: "Review article",
        href: "https://www.annualreviews.org/content/journals/10.1146/annurev-food-111523-122039",
      },
    ],
  },
];
