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
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>β-Lactoglobulin Hydrolysis by Trypsin</title>
  <style>
    :root { --bg:#f6f8fb;--card:#ffffff;--ink:#172033;--muted:#607089;--blue:#2563eb;--cyan:#38bdf8;--red:#ef4444;--green:#16a34a;--orange:#f59e0b;--bond:#8a97aa;--purple:#7c3aed; }
    * { box-sizing:border-box; } body { margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--bg);color:var(--ink);overflow:hidden; }
    .app { height:100vh;display:grid;grid-template-rows:auto 1fr auto; } header { padding:16px 22px 12px;background:var(--card);border-bottom:1px solid #e7ecf3;display:grid;gap:4px; }
    h1 { margin:0;font-size:22px;letter-spacing:-0.02em; } header p { margin:0;color:var(--muted);font-size:13.5px; } main { position:relative;min-height:0;display:grid;grid-template-columns:1fr 360px; }
    .stage{position:relative;min-width:0;background:radial-gradient(circle at 45% 42%,rgba(255,255,255,0.9),rgba(239,246,255,0.86) 42%,rgba(230,240,255,0.92) 100%);} svg{width:100%;height:100%;display:block;}
    .panel{background:rgba(255,255,255,0.94);border-left:1px solid #e7ecf3;padding:18px;overflow:auto;} .panel h2{margin:0 0 8px;font-size:18px;} .panel h3{margin:18px 0 8px;font-size:14px;text-transform:uppercase;letter-spacing:0.05em;color:#334155;}
    .panel p{margin:0;color:var(--muted);font-size:13.5px;line-height:1.45;} .metric-grid{display:grid;gap:8px;margin-top:14px;padding:12px;border-radius:16px;background:#f8fafc;border:1px solid #e7ecf3;}
    .metric{display:flex;justify-content:space-between;gap:12px;font-size:13px;} .metric span:last-child{font-weight:800;color:var(--ink);text-align:right;} .bar{height:9px;background:#e3e8f0;border-radius:999px;overflow:hidden;}
    .bar-fill{height:100%;width:0%;background:linear-gradient(90deg,var(--blue),var(--green));border-radius:inherit;} .legend{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;font-size:12px;color:var(--muted);}
    .legend-item{display:flex;align-items:center;gap:7px;} .dot{width:11px;height:11px;border-radius:50%;background:var(--blue);display:inline-block;} .dot.red{background:var(--red);} .dot.green{background:var(--green);} .dot.cyan{background:var(--cyan);} .dot.purple{background:var(--purple);}
    .fragment-list{display:grid;gap:8px;margin-top:8px;} .frag-card{padding:9px 10px;border:1px solid #e7ecf3;border-radius:12px;background:#fff;font-size:12.5px;} .frag-card strong{color:var(--ink);}
    .seq{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;display:block;color:#334155;margin-top:3px;overflow-wrap:anywhere;} .note{margin-top:12px;font-size:12px !important;color:#64748b !important;}
    .bond{stroke:var(--bond);stroke-width:3;stroke-linecap:round;opacity:0.9;} .bond.target{stroke:var(--red);stroke-width:5;filter:drop-shadow(0 0 5px rgba(239,68,68,0.7));} .bond.broken{opacity:0;}
    .aa{fill:var(--blue);stroke:#fff;stroke-width:1.2;transition:fill 0.2s ease;} .aa.cleavage{fill:var(--red);} .aa.reported{fill:var(--purple);} .aa.fragmented{fill:var(--green);}
    .aa-label{font-size:8px;fill:white;font-weight:800;text-anchor:middle;dominant-baseline:middle;pointer-events:none;} .water{opacity:0;transition:opacity 0.15s ease;}
    .water circle{fill:var(--cyan);stroke:white;stroke-width:1;} .water text{font-size:12px;font-weight:800;fill:#0369a1;text-anchor:middle;} .enzyme{opacity:0;transition:opacity 0.2s ease;}
    .enzyme path{fill:rgba(245,158,11,0.2);stroke:var(--orange);stroke-width:3;} .enzyme text{font-size:14px;font-weight:850;fill:#92400e;text-anchor:middle;}
    .fragment-tag{font-size:12px;font-weight:800;fill:#166534;paint-order:stroke;stroke:white;stroke-width:4px;} .fragment-tag.final{font-size:13px;fill:#0f5132;stroke-width:5px;}
    footer{background:var(--card);border-top:1px solid #e7ecf3;padding:14px 20px 16px;box-shadow:0 -10px 28px rgba(15,23,42,0.08);} .controls{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;}
    button{border:0;border-radius:999px;padding:10px 16px;font-weight:800;cursor:pointer;color:white;background:var(--blue);} input[type="range"]{--slider-progress:0%;width:100%;min-width:220px;height:32px;margin:0;appearance:none;-webkit-appearance:none;background:transparent;}
    input[type="range"]::-webkit-slider-runnable-track{height:12px;border-radius:999px;background:linear-gradient(90deg,var(--blue) 0%,var(--blue) var(--slider-progress),#d7dee9 var(--slider-progress),#d7dee9 100%);border:1px solid #c7d2e0;}
    input[type="range"]::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;width:26px;height:26px;margin-top:-8px;border-radius:50%;background:var(--blue);border:3px solid #ffffff;box-shadow:0 4px 14px rgba(37,99,235,0.35);}
    .readout{font-size:13.5px;font-weight:850;min-width:126px;text-align:right;} .stage-labels{display:grid;grid-template-columns:repeat(6, 1fr);gap:8px;margin-top:8px;color:var(--muted);font-size:11px;text-align:center;}
    @media (max-width:900px){ body{overflow:auto;} .app{height:auto;min-height:100vh;} main{grid-template-columns:1fr;} .stage{height:560px;} .panel{border-left:0;border-top:1px solid #e7ecf3;max-height:none;} .controls{grid-template-columns:1fr;} .readout{text-align:left;} }
  </style></head><body><div class="app"><header><h1>β-Lactoglobulin hydrolysis by trypsin</h1><p>Mature bovine β-lactoglobulin variant B, 162 residues. Slider advances a simplified kinetic animation based on trypsin-accessible Lys/Arg cleavage sites.</p></header><main><section class="stage"><svg id="scene" viewBox="0 0 1040 610"><g id="bonds"></g><g id="waters"></g><g id="enzymeLayer"></g><g id="nodes"></g><g id="tags"></g></svg></section><aside class="panel"><h2 id="stageTitle">Native β-lactoglobulin</h2><p id="stageText">β-Lactoglobulin is shown as a compact folded chain. Trypsin cleaves mainly after exposed lysine or arginine residues.</p><div class="metric-grid"><div class="metric"><span>Reaction progress</span><span id="progressText">0%</span></div><div class="bar"><div class="bar-fill" id="progressBar"></div></div><div class="metric"><span>Model cleavage sites opened</span><span id="cleavedText">0 / 15</span></div><div class="metric"><span>Peptide groups visible</span><span id="fragmentText">1</span></div><div class="metric"><span>Estimated degree of hydrolysis</span><span id="dhText">0.0%</span></div></div><div class="fragment-list" id="modelList"></div></aside></main><footer><div class="controls"><input id="timeSlider" type="range" min="0" max="100" value="0" step="1" /><div class="readout" id="timeReadout">t = 0 min</div></div><div class="stage-labels"><span>0 min</span><span>10 min</span><span>25 min</span><span>60 min</span><span>120 min</span><span>240 min</span></div></footer></div>
  <script>
    const sequence="LIVTQTMKGLDIQKVAGTWYSLAMAASDISLLDAQSAPLRVYVEELKPTPEGDLEILLQKWENGECAQKKIIAEKTKIPAVFKIDALNENKVLVLDTDYKKYLLFCMENSAEPEQSLACQCLVRTPEVDDEALEKFDKALKALPMHIRLSFNPTQLEEQCHI";
    const cleavageEvents=[{pos:8,t:18},{pos:69,t:22},{pos:75,t:26},{pos:148,t:30},{pos:40,t:38},{pos:141,t:44},{pos:14,t:50},{pos:70,t:56},{pos:124,t:63},{pos:138,t:68},{pos:77,t:74},{pos:83,t:79},{pos:91,t:84},{pos:101,t:89},{pos:135,t:94}];
    const scene=document.getElementById('scene'), slider=document.getElementById('timeSlider'); const progressText=document.getElementById('progressText'); const cleavedText=document.getElementById('cleavedText'); const fragmentText=document.getElementById('fragmentText'); const dhText=document.getElementById('dhText'); const timeReadout=document.getElementById('timeReadout'); const modelList=document.getElementById('modelList'); const NS='http://www.w3.org/2000/svg';
    const points=[...sequence].map((_,idx)=>{const theta=idx*0.36; const radius=176-idx*0.23+28*Math.sin(idx*0.19); return {x:510+Math.cos(theta)*radius,y:300+Math.sin(theta)*radius*0.72};});
    const bonds=[],nodes=[]; for(let i=0;i<sequence.length-1;i++){const line=document.createElementNS(NS,'line'); line.setAttribute('class','bond'); scene.querySelector('#bonds').appendChild(line); bonds.push(line);}
    for(let i=0;i<sequence.length;i++){const c=document.createElementNS(NS,'circle'); c.setAttribute('r','6.5'); c.setAttribute('class', cleavageEvents.some(e=>e.pos===i+1)?'aa cleavage':'aa'); scene.querySelector('#nodes').appendChild(c); nodes.push(c);}
    function fragments(){const cuts=cleavageEvents.map(e=>e.pos).sort((a,b)=>a-b); let s=1; return cuts.map(c=>{const f={start:s,end:c,seq:sequence.slice(s-1,c)}; s=c+1; return f;}).concat([{start:s,end:sequence.length,seq:sequence.slice(s-1)}]);}
    modelList.innerHTML=fragments().map((f,i)=>'<div class="frag-card"><strong>F'+(i+1)+': '+f.start+'-'+f.end+'</strong><span class="seq">'+f.seq+'</span></div>').join('');
    function update(v){const cleaved=cleavageEvents.filter(e=>v>=e.t); for(let i=0;i<bonds.length;i++){const p1=points[i],p2=points[i+1]; bonds[i].setAttribute('x1',p1.x); bonds[i].setAttribute('y1',p1.y); bonds[i].setAttribute('x2',p2.x); bonds[i].setAttribute('y2',p2.y); bonds[i].classList.toggle('broken',cleaved.some(e=>e.pos===i+1));}
      nodes.forEach((n,i)=>{n.setAttribute('cx',points[i].x); n.setAttribute('cy',points[i].y);});
      progressText.textContent=v+'%'; cleavedText.textContent=cleaved.length+' / '+cleavageEvents.length; fragmentText.textContent=String(cleaved.length+1); dhText.textContent=(cleaved.length/161*100).toFixed(1)+'%'; timeReadout.textContent='t = '+Math.round(v/100*240)+' min';
      slider.style.setProperty('--slider-progress',v+'%');
    } slider.addEventListener('input',()=>update(Number(slider.value))); update(0);
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
