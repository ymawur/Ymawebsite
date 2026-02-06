import { ResearchInterest } from '@/types'

export const researchInterests: ResearchInterest[] = [
  {
    id: 'lab-automation',
    title: 'Lab Automation',
    description:
      'Enabling scalable, reproducible food experimentation through advanced sensing, robotic handling, and high-throughput physical characterization.',
    bullets: [
      'Advanced material sensing',
      'Contactless mixing systems',
      'High-throughput texture analysis',
    ],
    tags: ['Automation', 'Sensing', 'Characterization'],
  },
  {
    id: 'agents-for-food-design',
    title: 'Agents for Food Design',
    description:
      'Developing intelligent agentic systems that reason, design, and monitor food products across formulation, nutrition, and quality dimensions.',
    bullets: [
      'Sugar-reduction agents',
      'Meal monitoring agents',
      'Quality inspection agents',
    ],
    tags: ['Agentic Systems', 'Formulation', 'Quality'],
  },
  {
    id: 'structural-representation',
    title: 'Structural Representation of Food Materials',
    description:
      'Creating data-driven representations of food structure that connect composition, processing, and functionality.',
    bullets: [
      'Unified food structure datasets',
      'Multimodal machine learning',
      'Structure-property modeling',
    ],
    tags: ['Food Structure', 'Multimodal ML', 'Modeling'],
  },
  {
    id: 'emerging-scientific-ai-models',
    title: 'Emerging Scientific AI Models for Food',
    description:
      'Connecting the most relevant foundation models to experimental food science data across molecular, microstructural, and macroscopic scales.',
    bullets: [
      'Protein foundation models for bio-functionality',
      'Chemical language models for flavor and aroma identifications',
      'Microscopy foundation models for food microstructure',
    ],
    tags: [],
  },
]
