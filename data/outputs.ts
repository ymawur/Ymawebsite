import { Output } from "@/types";

export const outputs: Output[] = [
  {
    id: "food-in-the-hood-podcast",
    title: "Podcast: Food in the Hood",
    headline:
      "A place where food meets science, culture, innovation, and society. A podcast exploring food through scientific, technological, cultural, and social lenses with hosts Amanda Sia and Yizhou (Ben) Ma.",
    description:
      "Food in the Hood Podcast: The Landscape of Food Conversations\n\nA perspective on how food intersects with science, culture, technology, and society, and where meaningful conversations are emerging.\n\nOverview\nFood in the Hood is a podcast where I explore food beyond recipes and trends. I host the podcast together with Amanda Sia. We bring together voices from food science, industry, research, and everyday lived experience to unpack complex topics in an accessible, conversational format.\n\nCore Concepts\n\nFood as Science\nAt the scientific level, episodes engage with topics such as food chemistry, processing, nutrition, gut health, and emerging research areas. Rather than formal lectures, these conversations translate scientific concepts into intuitive narratives, emphasizing mechanisms, trade-offs, and real-world implications.\n\nFood as Industry and Technology\nFood in the Hood frequently explores how scientific ideas become products, businesses, and technologies. Topics include food manufacturing, ingredient innovation, processing decisions, sustainability challenges, and the market dynamics shaping modern food systems.\n\nThese discussions often highlight the gap between laboratory knowledge and industrial reality, as well as the constraints that influence food design at scale.\n\nFood as Culture and Society\nBeyond science and industry, the podcast treats food as a cultural and social phenomenon. Episodes connect food to history, geography, policy, and everyday habits, showing how food choices reflect identity, access, and societal values.\n\nPersonal anecdotes and cultural observations help ground abstract ideas in lived experience.\n\nFood as Personal Experience\nA defining feature of the podcast is its reflective tone. Amanda and I often draw from our own academic and professional journey, discussing education, career paths, and the realities of working in food-related fields. This perspective adds a human layer to technical discussions and helps make the content approachable for a broad audience.\n\nTypical Themes and Topics\nFood science concepts explained through conversation rather than formal instruction\nIndustry perspectives on food processing, product development, and innovation\nCultural and historical stories behind familiar foods\nReflections on nutrition, processed foods, and consumer perception\nPersonal narratives from research, graduate school, and professional life\nCommentary on current events and trends in the food world\n\nListen\nFood in the Hood Podcast\nhttps://open.spotify.com/show/04rulokx6auswo5gnhOqu9",
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
