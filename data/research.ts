import { ResearchInterest } from '@/types'

export const researchInterests: ResearchInterest[] = [
  {
    id: 'machine-learning',
    title: 'Machine Learning & Deep Learning',
    description:
      'Developing robust and interpretable machine learning models with applications in real-world problem solving. Focus on neural network architectures and their theoretical foundations.',
    bullets: [
      'Neural network optimization and regularization techniques',
      'Representation learning and feature extraction methods',
      'Model interpretability and explainable AI',
      'Transfer learning and domain adaptation',
    ],
    tags: ['Neural Networks', 'Optimization', 'XAI', 'Transfer Learning'],
  },
  {
    id: 'natural-language',
    title: 'Natural Language Processing',
    description:
      'Exploring computational approaches to understanding and generating human language. Research spans from foundational linguistic analysis to large-scale language model applications.',
    bullets: [
      'Transformer architectures and attention mechanisms',
      'Low-resource language modeling',
      'Multilingual and cross-lingual NLP',
      'Text summarization and information extraction',
    ],
    tags: ['NLP', 'Transformers', 'LLMs', 'Computational Linguistics'],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision & Perception',
    description:
      'Investigating visual understanding systems that can perceive and interpret the world through images and video. Emphasis on efficiency and practical deployment.',
    bullets: [
      'Object detection and semantic segmentation',
      'Visual representation learning',
      'Multi-modal learning combining vision and language',
      'Efficient model design for edge devices',
    ],
    tags: ['Computer Vision', 'Segmentation', 'Multi-modal', 'Edge AI'],
  },
  {
    id: 'responsible-ai',
    title: 'Responsible AI & Ethics',
    description:
      'Studying the societal implications of AI systems and developing frameworks for fair, transparent, and accountable machine learning deployment.',
    bullets: [
      'Algorithmic fairness and bias mitigation',
      'Privacy-preserving machine learning',
      'AI governance and policy frameworks',
      'Human-AI collaboration and interaction',
    ],
    tags: ['AI Ethics', 'Fairness', 'Privacy', 'Governance'],
  },
]
