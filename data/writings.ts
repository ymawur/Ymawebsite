export interface WritingSection {
  eyebrow?: string;
  title: string;
  body: string[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    caption?: string;
  };
  callout?: string;
  subsections?: Array<{
    label?: string;
    title: string;
    body: string[];
  }>;
}

export interface Writing {
  slug: string;
  path?: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  kicker: string;
  summary: string;
  date: string;
  hero: string;
  byline: string;
  sourceFile: string;
  contentFile?: string;
  sections: WritingSection[];
  footer?: string[];
}

const writingImageBase = "/api/writing-images";

export const writings: Writing[] = [
  {
    slug: "alternative-protein-routes",
    title:
      "Two alternative protein routes: plants for bulk and fermentation for function",
    kicker: "Funded project review",
    summary:
      "Plant proteins provide bulk and physical structure, while precision fermentation supplies selected proteins with targeted functions.",
    date: "2026-08-20",
    hero: "Plants for bulk · Fermentation for function",
    byline: "Yizhou Ma · Wageningen University",
    sourceFile: "alternative-protein-routes.md",
    contentFile: "alternative-protein-routes.md",
    sections: [],
  },
  {
    slug: "alternative-fats",
    title: "Alternative fats: non-lipid replacers, plant fats, and biotechnology",
    kicker: "Funded project review",
    summary:
      "Funded alternative-fat research spans protein-based replacers, structured plant lipids, fermentation, and cultivated fat.",
    date: "2026-08-13",
    hero: "Non-lipid replacers · Plant fats · Biotechnology",
    byline: "Yizhou Ma · Wageningen University",
    sourceFile: "alternative-fats.md",
    contentFile: "alternative-fats.md",
    sections: [],
  },
  {
    slug: "fermentation-in-food-biomanufacturing",
    title: "A process for all: fermentation in food biomanufacturing",
    kicker: "Funded project review",
    summary:
      "Fermentation as a complex bioprocess covers many different subfields within food science.",
    date: "2026-08-05",
    hero: "Improvement · Defence · Valorization · Precision fermentation",
    byline: "Yizhou Ma · Wageningen University",
    sourceFile: "fermentation-in-food-biomanufacturing.md",
    contentFile: "fermentation-in-food-biomanufacturing.md",
    sections: [],
  },
  {
    slug: "structure-is-all-you-need",
    title: "Structure is all you need",
    kicker: "A reflection on food structure and function",
    summary:
      "Food is produced through structuring and consumed through structural breakdown, making structure the central relation between production, function, and human response.",
    date: "2026-07-14",
    hero: "Making food products → Breaking food products · Structure ↔ Function ↔ Human response",
    byline: "Yizhou Ma · Wageningen University",
    sourceFile: "Structure is all you need.html",
    sections: [
      {
        eyebrow: "Making and breaking",
        title:
          "Structure as the central relation connecting food production and consumption",
        body: [
          "Food production differs from manufacturing fields where quality is commonly defined through durability and sustained functional performance. Making food is for breaking food.",
          "Food is ultimately designed to be broken into nutrients and sometimes anti-nutrients during human consumption. Biomass derived from plants and animals provides the foundation for most food ingredients and formulated products.",
          "Processing transforms these ingredients into structures, while each structure carries techno-functional properties that can guide subsequent processing decisions. Human perception measures the resulting functionality differently because sensorial properties ultimately define the identity of a food product.",
          "The second cycle begins when consumption decomposes food products into new structures within the mouth, stomach, and intestine. These structures determine nutritional and sensorial properties, which influence human well-being and may induce further structural changes during digestion.",
        ],
        image: {
          src: `${writingImageBase}/fsdogma-restyled.png`,
          width: 1800,
          height: 1334,
          alt: "Diagram connecting ingredients, processes, structures, properties, products, humans, and nutri-sensorial properties through making and breaking food products.",
          caption: "Diagram 1 · Structure-function cycles in food",
        },
        callout:
          "Making and breaking are connected cycles in which structure mediates both product performance and physiological consequence.",
      },
      {
        eyebrow: "The combinatorial challenge",
        title: "Structure-function pairs form an expanding space",
        body: [
          "Food science research has focused strongly on experimentally characterizing structure-function pairs because foods contain many structural scales and many corresponding functions.",
          "Processing can readily create additional pairs within each system, while diverse cooking methods expand the experimental space toward an n × n problem.",
          "Food engineers examine how processing changes structure-function pairs, whereas food biochemists examine how consumption and digestive behaviour reshapes these pairs.",
          "This expanding space remains challenging to characterize because each ingredient, process, structure, and behaviour can generate additional combinations.",
        ],
        callout:
          "Structure-function pairs bring system-specific understanding but are cursed by a vast food design space.",
      },
    ],
    footer: [
      "This reflection was inspired by the S-PRO2 model outlined by Erich Windhab for food processing and structure.",
    ],
  },
  {
    slug: "ddos-cycle-and-microbial-cell-factory",
    path: "/ddos-cycle",
    title: "Discover develop optimize & scale cycle",
    seoTitle: "Discover, Develop, Optimize & Scale",
    seoDescription:
      "How discovery, development, optimization, and scaling turn microbial cell factory knowledge into biomanufacturing capacity and societal value.",
    kicker: "A cycle connecting science and society",
    summary:
      "A reinforcing cycle where discovery, development, optimization, and scaling convert knowledge into capacity and new societal value.",
    date: "2026-07-14",
    hero: "Discovery → Development → Optimization and scaling → New capacity",
    byline: "Yizhou Ma · Wageningen University",
    sourceFile: "DDOs cycle and microbial cell factory.html",
    sections: [
      {
        eyebrow: "01 · The DDOs cycle",
        title: "A reinforcing cycle of knowledge and capacity",
        body: [
          "Scientific discovery provides fundamental principles, while engineering and optimization translate those principles into capabilities that function under practical conditions.",
          "The cycle becomes reinforcing when engineered capabilities support new experiments, which reveal principles that guide subsequent development and optimization.",
        ],
        image: {
          src: `${writingImageBase}/ddos-cycle.png`,
          width: 1362,
          height: 1122,
          alt: "Discovery, development, optimization, and scaling cycle connecting knowledge, capacity, and value.",
          caption:
            "Diagram 1 · The discovery, development, optimization, and scaling cycle",
        },
        subsections: [
          {
            label: "01",
            title: "Discover",
            body: [
              "Fundamental principles explain how a system behaves and identify mechanisms that could support new functions. This is science.",
            ],
          },
          {
            label: "02",
            title: "Develop",
            body: [
              "Engineering converts scientific theories and understanding into instruments, processes, models, or materials that operate and interact.",
            ],
          },
          {
            label: "03",
            title: "Optimize and scale",
            body: [
              "Optimization improves efficiency, while scaling makes volume effects visible across conditions, sources, and application contexts.",
            ],
          },
          {
            label: "04",
            title: "Enable",
            body: [
              "The resulting capacity supports new science, while optimized and scaled development creates routes toward industrial, economic, and broader societal value.",
            ],
          },
        ],
      },
      {
        eyebrow: "02 · A microbial cell factory",
        title: "One cycle, viewed through microbial biomanufacturing",
        body: [
          "A microbial cell factory illustrates how molecular understanding can progress through strain engineering and bioprocess optimization toward scalable manufacturing.",
          "Microbial biomanufacturing emerges through repeated exchanges between biological discovery, strain development, fermentation optimization, and the biosynthesis capabilities produced.",
        ],
        image: {
          src: `${writingImageBase}/ddos-cycle-mcf-example.png`,
          width: 1362,
          height: 1122,
          alt: "Microbial cell factory example connecting regulation, strain, process, and molecule through repeated development cycles.",
          caption:
            "Diagram 2 · The cycle illustrated through a microbial cell factory",
        },
        subsections: [
          {
            title: "For science",
            body: [
              "Knowledge of gene expression and metabolic regulation guides strain development toward the biosynthesis of selected molecules.",
              "Engineered strains then become experimental platforms for probing pathway constraints, regulatory responses, and previously inaccessible biological functions.",
            ],
          },
          {
            title: "For society",
            body: [
              "Fermentation optimization and bioprocess scale-up determine whether biosynthesis can become reliable, efficient, and accessible beyond laboratory demonstrations.",
              "Scalable microbial biomanufacturing can subsequently support new ingredients, materials, medicines, and production routes with industrial and economic relevance.",
            ],
          },
        ],
      },
      {
        eyebrow: "03 · Capacity gaps in food science",
        title: "Capacity gaps in food science",
        body: [
          "These gaps concern the relationship between what instruments measure, what experiments reveal, and what predictive models retain across changing sources.",
        ],
        subsections: [
          {
            label: "Development",
            title: "The instrument–perception gap",
            body: [
              "Measurements should represent food properties in ways that agree with human sensory perception and remain useful for engineering decisions.",
            ],
          },
          {
            label: "Optimization",
            title: "Scaling out messy experiments",
            body: [
              "Food experiments involve variable materials and complex responses, requiring higher throughput without removing scientifically meaningful sources of variation.",
            ],
          },
          {
            label: "Scaling",
            title: "Extending the search space",
            body: [
              "Improved throughput expands the formulations and processing conditions that can be explored, creating opportunities for unexpected and transferable insights.",
            ],
          },
          {
            label: "Optimization",
            title: "Making predictive models generalize",
            body: [
              "Cross-source generalization determines whether predictive food models retain useful performance across ingredients, instruments, laboratories, and datasets.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "double-diamond-for-a-phd-thesis",
    title: "The Double Diamond for a PhD thesis",
    kicker: "A research-design perspective",
    summary:
      "A design-process lens for transforming a broad research gap into a focused question and a meaningful doctoral thesis.",
    date: "2026-07-14",
    hero: "Discover → Define → Develop → Deliver",
    byline: "Written by Yizhou Ma · Assistant Professor, Wageningen University",
    sourceFile: "Scrolling Double Diamond For PhD — separated.html",
    sections: [
      {
        eyebrow: "01 · The framework",
        title: "Research as a design process",
        body: [
          "The Double Diamond represents a design process with four phases that alternate between divergent exploration and convergent synthesis.",
          "A PhD repeatedly moves between broad exploration and focused synthesis to transform emerging possibilities into defensible research decisions.",
        ],
        image: {
          src: `${writingImageBase}/phd-double-diamond.png`,
          width: 2000,
          height: 1519,
          alt: "Original draw.io diagram showing the complete PhD Double Diamond from research topic to research question and thesis.",
          caption: "Diagram 1 · The complete PhD Double Diamond",
        },
        subsections: [
          {
            title: "Discover",
            body: [
              "The discover phase seeks to understand the problem through engagement with people and processes that are directly affected by the issue.",
            ],
          },
          {
            title: "Define",
            body: [
              "Insights gathered during discovery support the definition of a specific research challenge that can be examined from a new perspective.",
            ],
          },
          {
            title: "Develop",
            body: [
              "A clearly defined challenge may support several solutions, which can be developed collaboratively by engaging experts with complementary perspectives.",
            ],
          },
          {
            title: "Deliver",
            body: [
              "Potential solutions are validated before the best-performing approach is packaged and delivered to the users who need it most.",
            ],
          },
        ],
      },
      {
        eyebrow: "02 · A narrow perception",
        title: "Beyond the “lab rat” and “paper mill” perception",
        body: [
          "The visible phases of research, including data collection and paper writing, can overshadow the question-forming work that gives both activities meaning.",
        ],
        image: {
          src: `${writingImageBase}/phd-perceived-research-process.png`,
          width: 2000,
          height: 1756,
          alt: "Original draw.io diagram showing the perceived research process from a research question through data collection and thesis writing to a research paper.",
          caption: "Diagram 2 · The compressed view of research",
        },
        subsections: [
          {
            title: "The perceived research process",
            body: [
              "Oftentimes, we associate research with collecting data in laboratories and the field, and writing papers as preparation for future scientists.",
              "These activities can reinforce a narrow stereotype of doctoral research that emphasizes long working hours and extensive data collection.",
            ],
          },
          {
            title: "What the system rewards",
            body: [
              "Many training resources are organised around these objectives, including laboratory training, programming workshops, and scientific-writing support provided by universities.",
              "The academic environment rewards development through data collection and delivery through research papers, which can encourage incoming PhD students to prioritize laboratory work and publication.",
            ],
          },
        ],
        callout:
          "This shortened diamond hides the upstream work of discovering a worthwhile topic and defining the right research question.",
      },
      {
        eyebrow: "03 · Loss in divergence",
        title: "Activity without meaningful progress",
        body: [],
        image: {
          src: `${writingImageBase}/phd-divergence-to-perfection.png`,
          width: 2000,
          height: 1833,
          alt: "Original draw.io diagram showing literature review and data collection diverging all the way toward perfection without convergence.",
          caption: "Diagram 3 · Divergence without return",
        },
        subsections: [
          {
            title: "The fear of not doing enough",
            body: [
              "PhD progression contains two divergent phases, covering discovery through literature review and development through experimental data collection.",
              "During these phases, PhD students broaden their knowledge across topics and conduct experiments to generate relevant data.",
              "Quantifiable results support project management, but they can also intensify concerns about insufficient progress that are associated with impostor syndrome.",
            ],
          },
          {
            title: "The garden maze",
            body: [
              "Reading literature and conducting experiments can become “addictive” during divergent phases because many research directions and scientific methods appear worth pursuing.",
              "PhD students can become lost in this garden maze of divergent activity and lose focus on the research questions or gaps they initially identified.",
            ],
          },
        ],
        callout:
          "Without explicit convergence, a project can continue expanding while the central research question and resulting thesis remain insufficiently resolved.",
      },
      {
        eyebrow: "04 · Failure to converge",
        title: "Protected time for synthesis",
        body: [
          "A prolonged focus on divergent activity can reduce the time available for proposing research questions and writing papers, which both require synthesis.",
        ],
        image: {
          src: `${writingImageBase}/phd-fail-to-converge.png`,
          width: 2000,
          height: 1119,
          alt: "Original draw.io diagram showing failure to converge from literature review to a well-defined research question and from data collection to a research paper.",
          caption: "Diagram 4 · Broken convergence",
        },
        callout:
          "“Far better an approximate answer to the right question, which is often vague, than an exact answer to the wrong question, which can always be made precise.” — John Tukey",
        subsections: [
          {
            title: "Defining the right question",
            body: [
              "During the define phase, literature sources must be organised into themes to reveal patterns and opportunities for new research.",
              "This iterative process requires repeated thinking and rethinking before a coherent and defensible research question can be established.",
              "Defining the right research question is often the most challenging part of a PhD thesis because divergent activities create numerous distractions.",
            ],
          },
          {
            title: "Writing more than a data report",
            body: [
              "Convergence returns during delivery because manuscript writing requires researchers to analyse and synthesise study data into a coherent narrative with scientific significance.",
              "In many applied fields, there is a fine line between a research article and a report of data.",
              "A strong research article therefore requires deeper discussion and more critical analysis of the reported experimental data.",
            ],
          },
        ],
      },
    ],
    footer: [
      "This page draws substantial inspiration from the Design Council’s Framework for Innovation and its Double Diamond model.",
    ],
  },
];

export function getAllWritings() {
  return writings;
}

export function getWritingBySlug(slug: string) {
  return writings.find((writing) => writing.slug === slug);
}
