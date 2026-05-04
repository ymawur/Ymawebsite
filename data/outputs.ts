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
    demoHtml: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><style>
body{margin:0;background:#f4f8ff;font-family:Inter,system-ui,sans-serif;color:#0f172a}.wrap{height:100vh;display:flex;flex-direction:column;padding:14px;gap:10px}.top{display:flex;justify-content:space-between;align-items:center}.top h3{margin:0;font-size:20px}.top p{margin:0;font-size:13px;color:#475569}.stage{flex:1;min-height:430px;background:#fff;border:1px solid #d9e3f2;border-radius:14px;position:relative;overflow:hidden}svg{width:100%;height:100%}.bond{stroke:#94a3b8;stroke-width:2.8;stroke-linecap:round}.bond.target{stroke:#ef4444;stroke-width:4.5}.bond.broken{opacity:.08}.aa{fill:#2563eb;stroke:#fff;stroke-width:1.1}.aa.cut{fill:#ef4444}.water{opacity:0}.water circle{fill:#38bdf8}.water text{font-size:10px;fill:#0c4a6e;font-weight:700}.enzyme{opacity:0}.enzyme ellipse{fill:rgba(245,158,11,.2);stroke:#f59e0b;stroke-width:2}.enzyme text{font-size:11px;fill:#92400e;font-weight:700}.frag{font-size:11px;fill:#065f46;font-weight:700;paint-order:stroke;stroke:#fff;stroke-width:3}.ctrl{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center}input[type=range]{width:100%}.r{font-weight:700}
</style></head><body><div class="wrap"><div class="top"><h3>β-Lactoglobulin hydrolysis by trypsin</h3><p id="m">0 / 15 cuts</p></div><div class="stage"><svg id="s" viewBox="0 0 1080 620"><g id="b"></g><g id="w"></g><g id="e"></g><g id="n"></g><g id="t"></g></svg></div><div class="ctrl"><input id="slider" type="range" min="0" max="100" value="0"/><div id="r" class="r">t = 0 min</div></div></div><script>
const seq='LIVTQTMKGLDIQKVAGTWYSLAMAASDISLLDAQSAPLRVYVEELKPTPEGDLEILLQKWENGECAQKKIIAEKTKIPAVFKIDALNENKVLVLDTDYKKYLLFCMENSAEPEQSLACQCLVRTPEVDDEALEKFDKALKALPMHIRLSFNPTQLEEQCHI';
const events=[{p:8,t:18},{p:14,t:50},{p:40,t:38},{p:69,t:22},{p:70,t:56},{p:75,t:26},{p:77,t:74},{p:83,t:79},{p:91,t:84},{p:101,t:89},{p:124,t:63},{p:135,t:94},{p:138,t:68},{p:141,t:44},{p:148,t:30}];
const NS='http://www.w3.org/2000/svg',svg=document.getElementById('s'),B=document.getElementById('b'),W=document.getElementById('w'),E=document.getElementById('e'),N=document.getElementById('n'),T=document.getElementById('t');
const slider=document.getElementById('slider'),read=document.getElementById('r'),metric=document.getElementById('m');
const pts=[...seq].map((_,i)=>{const a=i*0.35;const r=210-i*0.5+20*Math.sin(i*0.18);return{x:530+Math.cos(a)*r+12*Math.sin(i*1.3),y:305+Math.sin(a)*r*0.72};});
const cutPos=events.map(v=>v.p).sort((a,b)=>a-b);const bonds=[],nodes=[],waters=[],enz=[],labels=[];
for(let i=0;i<seq.length-1;i++){const l=document.createElementNS(NS,'line');l.setAttribute('class','bond');B.appendChild(l);bonds.push(l)}
for(let i=0;i<seq.length;i++){const c=document.createElementNS(NS,'circle');c.setAttribute('r','6.7');c.setAttribute('class',cutPos.includes(i+1)?'aa cut':'aa');N.appendChild(c);nodes.push(c)}
events.forEach(()=>{const wg=document.createElementNS(NS,'g');wg.setAttribute('class','water');const wc=document.createElementNS(NS,'circle');wc.setAttribute('r','8');const wt=document.createElementNS(NS,'text');wt.textContent='H2O';wt.setAttribute('y','-11');wg.appendChild(wc);wg.appendChild(wt);W.appendChild(wg);waters.push(wg);const eg=document.createElementNS(NS,'g');eg.setAttribute('class','enzyme');const el=document.createElementNS(NS,'ellipse');el.setAttribute('rx','34');el.setAttribute('ry','16');const et=document.createElementNS(NS,'text');et.textContent='trypsin';et.setAttribute('y','4');et.setAttribute('x','-18');eg.appendChild(el);eg.appendChild(et);E.appendChild(eg);enz.push(eg);});
function fragIndex(res,v){let f=0;for(const ev of events){if(v>=ev.t&&res>ev.p)f++;}return f}
function pnt(i,v){const p=pts[i],f=fragIndex(i+1,v),sp=Math.max(0,(v-34)/66),ox=(f%6-2.5)*44*sp,oy=(Math.floor(f/6)-1)*56*sp;return{x:p.x+ox,y:p.y+oy}}
function frags(){let s=1;const out=[];for(const c of cutPos){out.push({s:s,e:c,seq:seq.slice(s-1,c)});s=c+1;}out.push({s:s,e:seq.length,seq:seq.slice(s-1)});return out;}
const finalFrags=frags();finalFrags.forEach(()=>{const tx=document.createElementNS(NS,'text');tx.setAttribute('class','frag');tx.style.opacity='0';T.appendChild(tx);labels.push(tx);});
function tr(el,x,y){el.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')')}
function update(v){const active=events.filter(ev=>v>=ev.t);for(let i=0;i<bonds.length;i++){const p1=pnt(i,v),p2=pnt(i+1,v),l=bonds[i];l.setAttribute('x1',p1.x);l.setAttribute('y1',p1.y);l.setAttribute('x2',p2.x);l.setAttribute('y2',p2.y);const hit=events.find(ev=>v>=ev.t-10&&v<ev.t&&ev.p===i+1);l.classList.toggle('target',!!hit);l.classList.toggle('broken',active.some(ev=>ev.p===i+1));}
for(let i=0;i<nodes.length;i++){const p=pnt(i,v);nodes[i].setAttribute('cx',p.x);nodes[i].setAttribute('cy',p.y)}
events.forEach((ev,i)=>{const a=Math.max(0,ev.t-10),f=Math.max(0,Math.min(1,(v-a)/10));const p1=pnt(ev.p-1,v),p2=pnt(ev.p,v),cx=(p1.x+p2.x)/2,cy=(p1.y+p2.y)/2;const sx=cx-70+(i%3)*20,sy=cy-80-(i%2)*16;tr(waters[i],sx+(cx-sx)*f,sy+(cy-sy)*f);waters[i].style.opacity=(v>=a&&v<ev.t+4)?'1':'0';tr(enz[i],cx+32,cy+14);enz[i].style.opacity=(v>=a&&v<ev.t+4&&i%2===0)?'1':'0';});
finalFrags.forEach((fg,i)=>{const mid=Math.floor((fg.s+fg.e)/2)-1,p=pnt(mid,v);labels[i].setAttribute('x',p.x+((i%2)?10:-18));labels[i].setAttribute('y',p.y-12+((i%3)-1)*12);labels[i].textContent='F'+(i+1)+' len '+(fg.e-fg.s+1)+' aa: '+fg.seq;labels[i].style.opacity=v>=92?'1':'0';});
read.textContent='t = '+Math.round(v*2.4)+' min';metric.textContent=active.length+' / '+events.length+' cuts';}
slider.addEventListener('input',()=>update(Number(slider.value)));update(0);
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
