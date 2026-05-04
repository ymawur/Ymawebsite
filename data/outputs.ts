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
  <style>
    body{margin:0;font-family:Inter,system-ui,sans-serif;background:#f8fbff;color:#1f2937}
    .wrap{padding:18px;height:100vh;display:flex;flex-direction:column;gap:14px}
    h3{margin:0;font-size:20px}
    p{margin:0;color:#4b5563;font-size:13px}
    .stage{flex:1;min-height:420px;border:1px solid #dbe7f3;border-radius:14px;background:white;position:relative;overflow:hidden}
    svg{width:100%;height:100%;display:block}
    .bond{stroke:#94a3b8;stroke-width:2.6;stroke-linecap:round}
    .bond.broken{opacity:0.08}
    .node{fill:#2563eb;stroke:white;stroke-width:1.2}
    .node.cut{fill:#ef4444}
    .controls{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center}
    input[type=range]{width:100%}
    .readout{font-weight:700;font-size:14px}
  </style>
</head>
<body>
  <div class="wrap">
    <h3>β-Lactoglobulin tryptic hydrolysis (demo)</h3>
    <p>Move the slider to simulate progressive cleavage and chain fragmentation.</p>
    <div class="stage"><svg id="scene" viewBox="0 0 1000 560"><g id="b"></g><g id="n"></g></svg></div>
    <div class="controls"><input id="s" type="range" min="0" max="100" value="0"/><div id="r" class="readout">t = 0 min</div></div>
  </div>
<script>
const seq='LIVTQTMKGLDIQKVAGTWYSLAMAASDISLLDAQSAPLRVYVEELKPTPEGDLEILLQKWENGECAQKKIIAEKTKIPAVFKIDALNENKVLVLDTDYKKYLLFCMENSAEPEQSLACQCLVRTPEVDDEALEKFDKALKALPMHIRLSFNPTQLEEQCHI';
const cuts=[8,14,40,69,70,75,77,83,91,101,124,135,138,141,148];
const cutStep=[18,50,38,22,56,26,74,79,84,89,63,94,68,44,30];
const NS='http://www.w3.org/2000/svg';
const b=document.getElementById('b'),n=document.getElementById('n'),s=document.getElementById('s'),r=document.getElementById('r');
const points=[...seq].map((_,i)=>{const t=i*0.33;const rad=210-i*0.55+18*Math.sin(i*0.2);return{x:500+Math.cos(t)*rad,y:275+Math.sin(t)*rad*0.72};});
const bonds=[],nodes=[];
for(let i=0;i<seq.length-1;i++){const line=document.createElementNS(NS,'line');line.setAttribute('class','bond');b.appendChild(line);bonds.push(line)}
for(let i=0;i<seq.length;i++){const c=document.createElementNS(NS,'circle');c.setAttribute('r','6.2');c.setAttribute('class',cuts.includes(i+1)?'node cut':'node');n.appendChild(c);nodes.push(c)}
function fragIndex(res,p){let f=0;for(let i=0;i<cuts.length;i++){if(p>=cutStep[i]&&res>cuts[i])f++}return f}
function point(i,p){const base=points[i];const f=fragIndex(i+1,p);const spread=Math.max(0,(p-32)/68);const ox=(f%6-2.5)*38*spread;const oy=(Math.floor(f/6)-1.2)*54*spread;return{x:base.x+ox,y:base.y+oy}}
function update(v){for(let i=0;i<bonds.length;i++){const p1=point(i,v),p2=point(i+1,v);const line=bonds[i];line.setAttribute('x1',p1.x);line.setAttribute('y1',p1.y);line.setAttribute('x2',p2.x);line.setAttribute('y2',p2.y);const k=cuts.indexOf(i+1);line.classList.toggle('broken',k>-1&&v>=cutStep[k])}
for(let i=0;i<nodes.length;i++){const p=point(i,v);nodes[i].setAttribute('cx',p.x);nodes[i].setAttribute('cy',p.y)}
r.textContent='t = '+Math.round(v*2.4)+' min';}
s.addEventListener('input',()=>update(Number(s.value)));update(0);
</script>
</body>
</html>`,
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
