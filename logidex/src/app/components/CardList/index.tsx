// components/RecentlyLoggedDecisions/index.tsx
import React from 'react';
import DecisionCard from '../DecisionCard';
import { DecisionCardProps } from '../DecisionCard/types';
import { DecisionCardVariant, ThemeVariant } from '../../components/DecisionCard/types';
import styles from './styles.module.scss';

interface CardListProps {
  maxItems?: number;
  variant?: DecisionCardVariant;
  themeVariant?: ThemeVariant;
}

const mockDecisions: DecisionCardProps[] = [
  {
    title: 'Standardize Quarterly Reporting',
    status: 'Draft',
    owner: 'Jordan Lee',
    createdDate: 'March 12, 2025',
    lastUpdatedDate: 'June 20th, 2025',
    summary: 'Establish a consistent reporting format and cadence across all departments to streamline review cycles.',
    businessRationale: [
      'Improve cross-functional alignment',
      'Reduce manual reporting overhead',
      'Enable faster decision-making',
    ],
    currentStatus: 'Draft templates created; gathering feedback from finance, ops, and marketing leads.',
    tags: [
      { label: '#reporting', href: '#' },
      { label: '#operations', href: '#' },
      { label: '#alignment', href: '#' },
    ],
    related: [
      { label: '[Adopt New BI Tool]', href: '#' },
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Consolidate Vendor Contracts',
    status: 'In Review',
    owner: 'Riley Bennett',
    createdDate: 'April 2, 2025',
    lastUpdatedDate: 'June 28th, 2025',
    summary: 'Evaluate current vendor relationships and reduce redundancies to cut costs and streamline procurement.',
    businessRationale: [
      'Cut operational costs',
      'Improve procurement efficiency',
      'Reduce contract risk',
    ],
    currentStatus: 'Initial list compiled; legal and finance teams reviewing terms.',
    tags: [
      { label: '#procurement', href: '#' },
      { label: '#costsavings', href: '#' },
    ],
    related: [
      { label: '[Annual Budget Planning]', href: '#' },
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Launch Customer Feedback Loop',
    status: 'In Progress',
    owner: 'Skylar James',
    createdDate: 'February 18, 2025',
    lastUpdatedDate: 'July 1st, 2025',
    summary: 'Implement a structured method for collecting and applying customer feedback in product development.',
    businessRationale: [
      'Improve customer satisfaction',
      'Guide product roadmap with data',
      'Boost feature adoption',
    ],
    currentStatus: 'Surveys drafted and being tested with pilot group.',
    tags: [
      { label: '#customerfeedback', href: '#' },
      { label: '#product', href: '#' },
    ],
    related: [
      { label: '[Revamp NPS Strategy]', href: '#' },
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Migrate Internal Tools to Cloud',
    status: 'Completed',
    owner: 'Cameron Steele',
    createdDate: 'January 10, 2025',
    lastUpdatedDate: 'June 15th, 2025',
    summary: 'Transition legacy internal tools to a cloud-native environment to improve accessibility and scalability.',
    businessRationale: [
      'Enhance system reliability',
      'Support remote work',
      'Improve scalability',
    ],
    currentStatus: 'Infrastructure team provisioning cloud environments; some apps already migrated.',
    tags: [
      { label: '#cloudmigration', href: '#' },
      { label: '#infrastructure', href: '#' },
    ],
    related: [
      { label: '[Retire Legacy Tools]', href: '#' },
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Introduce DEI Training Program',
    status: 'Completed',
    owner: 'Harper Nolan',
    createdDate: 'May 5, 2025',
    lastUpdatedDate: 'June 5th, 2025',
    summary: 'Roll out a company-wide DEI training program with quarterly touchpoints and anonymous feedback surveys.',
    businessRationale: [
      'Foster inclusive workplace culture',
      'Meet compliance standards',
      'Strengthen employee engagement',
    ],
    currentStatus: 'Program completed; feedback surveys collected and reviewed.',
    tags: [
      { label: '#DEI', href: '#' },
      { label: '#training', href: '#' },
    ],
    related: [
      { label: '[Update Onboarding Content]', href: '#' },
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Adopt AI-Powered Chat Support',
    status: 'In Progress',
    owner: 'Avery Carter',
    createdDate: 'June 1, 2025',
    lastUpdatedDate: 'July 10th, 2025',
    summary: 'Evaluate and implement AI-driven chat systems to improve customer support efficiency.',
    businessRationale: [
      'Reduce support ticket volume',
      'Improve first-response times',
      'Scale customer support operations',
    ],
    currentStatus: 'Vendor shortlist created; pilot planned with internal support team.',
    tags: [
      { label: '#AI', href: '#' },
      { label: '#customersupport', href: '#' },
    ],
    related: [
      { label: '[Modernize Help Center]', href: '#' },
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
];

export default function CardList({
  maxItems,
  variant = 'full',
  themeVariant = 'light',
}: CardListProps) {
  const visibleItems = mockDecisions.slice(0, maxItems ?? mockDecisions.length);

  return (
    <section className={styles.cardListSection}>
      <div className={styles.cardsList}>
        {visibleItems.map((decision, index) => (
          <DecisionCard
            key={index}
            {...decision}
            variant={variant}
            themeVariant={themeVariant}
          />
        ))}
      </div>
    </section>
  );
}