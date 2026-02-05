
export interface Offer {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  benefits: string[];
  format: string;
  target: string;
  icon: string;
  cta?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface ToolkitStep {
  title: string;
  description: string;
}

export interface ToolkitItem {
  id: string;
  title: string;
  category: string;
  objective: string;
  whenToUse: string[];
  whatItAllows: string[];
  materials: string[];
  estimatedTime: string;
  steps: ToolkitStep[];
  expectedResult: string[];
  tips: string[];
  useCases: string[];
  icon: string;
  tags: string[];
}
