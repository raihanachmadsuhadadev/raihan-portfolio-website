export type ProjectCategory =
  | "Decision Support System"
  | "Inventory System"
  | "Workshop Management"
  | "POS System"
  | "Machine Learning"
  | "Delivery Application"
  | "Company Profile";

export type ProjectType = "featured" | "additional";

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email?: string;
  github: string;
  linkedin: string;
  summary: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  repositoryUrl: string;
  category: ProjectCategory;
  type: ProjectType;
  role: string;
  status: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string[];
};