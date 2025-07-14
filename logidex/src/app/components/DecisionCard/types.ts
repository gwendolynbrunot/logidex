export type DecisionStatus = 'In Progress' | 'Draft' | 'In Review' | 'Approved' | 'Completed';

export type DecisionCardVariant = 'full' | 'compact' | 'tile';

export type ThemeVariant = 'light' | 'dark';

export interface DecisionCardProps {
  title: string;
  status: DecisionStatus;
  owner?: string;
  createdDate?: string;
  lastUpdatedDate?: string;
  summary?: string;
  businessRationale?: string[];
  currentStatus?: string;
  tags?: { label: string; href: string }[];
  related?: { label: string; href: string }[];
  variant?: DecisionCardVariant;
  themeVariant?: ThemeVariant;
}