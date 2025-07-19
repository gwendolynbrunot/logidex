import React from 'react';
import styles from './styles.module.scss';
import { DecisionCardProps } from './types';

export default function DecisionCard({
  title,
  status,
  owner,
  createdDate,
  lastUpdatedDate,
  summary,
  variant = 'full',
  themeVariant = 'light',
  businessRationale,
  currentStatus,
  related,
  tags,
}: DecisionCardProps) {
    const normalizedStatus = status.toLowerCase().replace(/\s+/g, '');
    const statusClass = `${styles.status} ${styles[`status--${normalizedStatus}`]}`;
    const cardClass = [
        styles.decisionCard,
        variant === 'tile' && styles.tileCardSpacing, // section gap is 16px for tile cards
        styles[`card--${themeVariant}`],
        styles[`card--${variant}`],
    ].join(' ');

    return (
        <div className={cardClass}>
        {variant === 'full' && (
            <>
                <div className={styles.cardHeader}>
                    <h4 className={styles.cardTitle}>{title}</h4>
                </div>

                <hr></hr>

                <div className={styles.cardMetadata}>
                    <div className={styles.statusWrapper}>Status <div className={statusClass}></div> {status}</div>
                    <div>Owner {owner}</div>
                    <div>Created {createdDate}</div>
                    <div>Last Updated {lastUpdatedDate}</div>
                </div>

                <hr></hr>

                <div className={styles.cardSummarySection}>
                    {summary && <p className={styles.cardSummary}>{summary}</p>}
                </div>

                <hr></hr>

                <div className={styles.rationaleSection}>
                    {businessRationale?.length && (
                        <ul className={styles.rationaleList}>
                        {businessRationale.slice(0, 4).map((item, index) => (
                            <li key={index} className={styles.rationaleItem}>
                            {item}
                            </li>
                        ))}
                        </ul>
                    )}
                </div>

                <hr></hr>

                <div className={styles.currentStatusSection}>
                    {currentStatus && <p className={styles.cardCurrentStatus}>{currentStatus}</p>}
                </div>

                <hr></hr>

                <div className={styles.tagsSection}>
                    {tags?.length && (
                        <div className={styles.tags}>
                        {tags.slice(0, 5).map((tag, index) => (
                            <a key={index} href={tag.href} className={styles.tag}>
                            {tag.label}
                            </a>
                        ))}
                        </div>
                    )}
                </div>

                <hr></hr>

                <div className={styles.relatedSection}>
                    {related?.length && (
                        <div className={styles.relatedDecisions}>
                        {related.slice(0, 5).map((relatedDecision, index) => (
                            <a key={index} href={relatedDecision.href} className={styles.relatedDecisions}>
                            {relatedDecision.label}
                            </a>
                        ))}
                        </div>
                    )}
                </div>
            </>
        )}

        {variant === 'compact' && (
            <>
                <div className={styles.cardHeader}>
                    <h4 className={styles.cardTitle}>{title}</h4>
                </div>

                <hr></hr>

                <div className={styles.cardMetadataWrapper}>
                    <div className={styles.cardMetadataRow}>
                        <div className={styles.labelWrapper + " " + "small-label"}>Status</div>
                        <div className={styles.dataWrapper}>
                            <div className="status-align"><div className={statusClass}></div><div className="data-text">{status}</div></div>
                        </div>
                    </div>
                    <div className={styles.cardMetadataRow}>
                        <div className={styles.labelWrapper + " " + "small-label"}>Owner</div>
                        <div className={styles.dataWrapper + " " + "data-text"}>
                            {owner}
                        </div>
                    </div>
                    <div className={styles.cardMetadataRow}>
                        <div className={styles.labelWrapper + " " + "small-label"}>Created</div>
                        <div className={styles.dataWrapper + " " + "data-text"}>
                            {createdDate}
                        </div>
                    </div>
                    <div className={styles.cardMetadataRow}>
                        <div className={styles.labelWrapper + " " + "small-label"}>Last Updated</div>
                        <div className={styles.dataWrapper + " " + "data-text"}>
                            {lastUpdatedDate}
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className={styles.cardSummarySection}>
                    <div className={styles.labelWrapper + " " + "small-label"}>Summary</div>
                    {summary && <p className={styles.cardSummary}>{summary}</p>}
                </div>

                <hr></hr>

                <div className={styles.tagsSection}>
                    {tags?.length && (
                        <div className={styles.tags}>
                        {tags.slice(0, 5).map((tag, index) => (
                            <a key={index} href={tag.href} className={styles.tag}>
                            {tag.label}
                            </a>
                        ))}
                        </div>
                    )}
                </div>
            </>
        )}

        {variant === 'tile' && (
            <>
                <div className={styles.cardHeader}>
                    <h3 className='h4-style'>{title}</h3>
                </div>
                <div className={styles.tileBottom}>
                    <div className='data-text status-align'>
                        <span className={statusClass}></span>{status} &#8212; {owner}
                    </div>
                    <div className={styles.tileLastUpdated}>
                        <div className='small-label'>Last Updated</div>
                        <div className='data-text'>{lastUpdatedDate}</div>
                    </div>
                </div>
            </>
        )}
        </div>
    );
}
