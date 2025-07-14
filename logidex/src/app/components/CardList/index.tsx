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
    businessRationale:
    [
        'Improve cross-functional alignment',
        'Reduce manual reporting overhead',
        'Enable faster decision-making'
    ],
    currentStatus: 'Draft templates created; gathering feedback from finance, ops, and marketing leads.',
    tags:
    [
        { label: '#reporting', href: '#' },
        { label: '#operations', href: '#' },
        { label: '#alignment', href: '#' }
    ],
    related:
    [
        { label: '[Adopt New BI Tool]', href: '#' }
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Standardize Quarterly Reporting',
    status: 'Draft',
    owner: 'Jordan Lee',
    createdDate: 'March 12, 2025',
    lastUpdatedDate: 'June 20th, 2025',
    summary: 'Establish a consistent reporting format and cadence across all departments to streamline review cycles.',
    businessRationale:
    [
        'Improve cross-functional alignment',
        'Reduce manual reporting overhead',
        'Enable faster decision-making'
    ],
    currentStatus: 'Draft templates created; gathering feedback from finance, ops, and marketing leads.',
    tags:
    [
        { label: '#reporting', href: '#' },
        { label: '#operations', href: '#' },
        { label: '#alignment', href: '#' }
    ],
    related:
    [
        { label: '[Adopt New BI Tool]', href: '#' }
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Evaluate Support Tools',
    status: 'In Progress',
    owner: 'Jordan Lee',
    createdDate: 'November 12, 2025',
    lastUpdatedDate: 'December 20th, 2025',
    summary: 'Establish a consistent reporting format and cadence across all departments to streamline review cycles.',
    businessRationale:
    [
        'Improve cross-functional alignment',
        'Reduce manual reporting overhead',
        'Enable faster decision-making'
    ],
    currentStatus: 'Draft templates created; gathering feedback from finance, ops, and marketing leads.',
    tags:
    [
        { label: '#reporting', href: '#' },
        { label: '#operations', href: '#' },
        { label: '#alignment', href: '#' }
    ],
    related:
    [
        { label: '[Adopt New BI Tool]', href: '#' }
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Standardize Quarterly Reporting',
    status: 'Draft',
    owner: 'Jordan Lee',
    createdDate: 'March 12, 2025',
    lastUpdatedDate: 'June 20th, 2025',
    summary: 'Establish a consistent reporting format and cadence across all departments to streamline review cycles.',
    businessRationale:
    [
        'Improve cross-functional alignment',
        'Reduce manual reporting overhead',
        'Enable faster decision-making'
    ],
    currentStatus: 'Draft templates created; gathering feedback from finance, ops, and marketing leads.',
    tags:
    [
        { label: '#reporting', href: '#' },
        { label: '#operations', href: '#' },
        { label: '#alignment', href: '#' }
    ],
    related:
    [
        { label: '[Adopt New BI Tool]', href: '#' }
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Standardize Quarterly Reporting',
    status: 'Draft',
    owner: 'Jordan Lee',
    createdDate: 'March 12, 2025',
    lastUpdatedDate: 'June 20th, 2025',
    summary: 'Establish a consistent reporting format and cadence across all departments to streamline review cycles.',
    businessRationale:
    [
        'Improve cross-functional alignment',
        'Reduce manual reporting overhead',
        'Enable faster decision-making'
    ],
    currentStatus: 'Draft templates created; gathering feedback from finance, ops, and marketing leads.',
    tags:
    [
        { label: '#reporting', href: '#' },
        { label: '#operations', href: '#' },
        { label: '#alignment', href: '#' }
    ],
    related:
    [
        { label: '[Adopt New BI Tool]', href: '#' }
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Standardize Quarterly Reporting',
    status: 'Draft',
    owner: 'Jordan Lee',
    createdDate: 'March 12, 2025',
    lastUpdatedDate: 'June 20th, 2025',
    summary: 'Establish a consistent reporting format and cadence across all departments to streamline review cycles.',
    businessRationale:
    [
        'Improve cross-functional alignment',
        'Reduce manual reporting overhead',
        'Enable faster decision-making'
    ],
    currentStatus: 'Draft templates created; gathering feedback from finance, ops, and marketing leads.',
    tags:
    [
        { label: '#reporting', href: '#' },
        { label: '#operations', href: '#' },
        { label: '#alignment', href: '#' }
    ],
    related:
    [
        { label: '[Adopt New BI Tool]', href: '#' }
    ],
    variant: 'tile',
    themeVariant: 'light',
  },
  {
    title: 'Standardize Quarterly Reporting',
    status: 'Draft',
    owner: 'Jordan Lee',
    createdDate: 'March 12, 2025',
    lastUpdatedDate: 'June 20th, 2025',
    summary: 'Establish a consistent reporting format and cadence across all departments to streamline review cycles.',
    businessRationale:
    [
        'Improve cross-functional alignment',
        'Reduce manual reporting overhead',
        'Enable faster decision-making'
    ],
    currentStatus: 'Draft templates created; gathering feedback from finance, ops, and marketing leads.',
    tags:
    [
        { label: '#reporting', href: '#' },
        { label: '#operations', href: '#' },
        { label: '#alignment', href: '#' }
    ],
    related:
    [
        { label: '[Adopt New BI Tool]', href: '#' }
    ],
    variant: 'tile',
    themeVariant: 'light',
  }
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