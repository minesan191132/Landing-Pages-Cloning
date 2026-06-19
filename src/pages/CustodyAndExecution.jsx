import React, { useEffect } from 'react';
import styles from './CustodyAndExecution.module.scss';

// Import images
import custodyStoneLeft from '../assests/images/custody-stone-left.DepH_mVM_A2KwK.avif';
import custodyStoneRight from '../assests/images/custody-stone-right.bb0PbSrX_1LMk66.avif';
import showcaseImg from '../assests/images/custody-showcase.Cil-6R0g_ZeBQ5k.avif';

// Icons
import iconExecute from '../assests/images/icon-execute-at-scale.svg';
import iconModels from '../assests/images/icon-models-wrappers.svg';
import iconSecure from '../assests/images/icon-secure-custody.svg';

import iconShuffleArrows from '../assests/images/icon-shuffle-arrows.svg';
import iconLayers from '../assests/images/icon-layers.svg';
import iconCardControls from '../assests/images/icon-card-controls.svg';
import iconFolder from '../assests/images/icon-folder.svg';
import iconShield from '../assests/images/icon-shield.svg';
import iconPersonCheck from '../assests/images/icon-person-check.svg';

export default function CustodyAndExecution() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        
        {/* Floating Stones */}
        <div className={styles.stonesContainer}>
          <img src={custodyStoneLeft} alt="" className={styles.stoneLeft} />
          <img src={custodyStoneRight} alt="" className={styles.stoneRight} />
        </div>
        <div className={styles.heroGradientBottom}></div>

        <div className={styles.heroContent}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" overflow="visible" className={styles.badgeIcon}>
                <path d="M 6.5 0 L 6.5 13 M 11.375 1.625 L 1.625 11.375 M 13 6.5 L 0 6.5 M 11.375 11.375 L 1.625 1.625" fill="transparent" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </svg>
              Coming Soon
            </span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.heroWord}>Custody</span>
            <span className={styles.heroWord}>&amp;</span>
            <span className={styles.heroWord}>Execution</span>
          </h1>

          <p className={styles.subtitle}>
            Trade, rebalance, and custody - all in one place. With instant account opening.
          </p>
        </div>

        <div className={styles.dividerContainer}>
          <div className={styles.divider}></div>
        </div>

        {/* Feature Highlights */}
        <div className={styles.highlightsContainer}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.iconWrapper}>
                <img src={iconExecute} alt="Execute at Scale" className={styles.featureIcon} />
              </div>
              <div className={styles.highlightTextWrapper}>
                <p className={styles.highlightTitle}>Execute at Scale</p>
                <p className={styles.highlightDesc}>Bulk rebalancing across unlimited client portfolios.</p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.iconWrapper}>
                <img src={iconModels} alt="Models & Wrappers" className={styles.featureIcon} />
              </div>
              <div className={styles.highlightTextWrapper}>
                <p className={styles.highlightTitle}>Models &amp; Wrappers Built In</p>
                <p className={styles.highlightDesc}>GIA, ISA, and SIPP - with firm-wide model portfolios.</p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.iconWrapper}>
                <img src={iconSecure} alt="Secure Custody" className={styles.featureIcon} />
              </div>
              <div className={styles.highlightTextWrapper}>
                <p className={styles.highlightTitle}>Simple, Secure Custody</p>
                <p className={styles.highlightDesc}>Pending FCA authorisation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className={styles.mainContent}>
        {/* Trading Section */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionHeader}>Trading</h2>
          <div className={styles.showcaseCard}>
            <div className={styles.showcaseImagePlaceholder}>
              <img src={showcaseImg} alt="Trading Showcase" className={styles.showcaseImg} />
              <div className={styles.showcaseOverlay}>
                <h3 className={styles.showcaseTitle}>Controlled Trading</h3>
                <p className={styles.showcaseDesc}>Rebalance at scale with precision controls.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Execution Section */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionHeader}>Execution</h2>
          <div className={styles.sectionRow}>
            <h3 className={styles.rowTitle}>Trading</h3>
            <div className={styles.rowGrid}>
              <div className={styles.gridItem}>
                <div className={styles.iconWrapper}><img src={iconShuffleArrows} alt="" className={styles.featureIcon} /></div>
                <div className={styles.itemTextWrapper}>
                  <p className={styles.itemDesc}>Access to institutional share classes.</p>
                </div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.iconWrapper}><img src={iconLayers} alt="" className={styles.featureIcon} /></div>
                <div className={styles.itemTextWrapper}>
                  <p className={styles.itemDesc}>Bulk rebalancing across unlimited client portfolios.</p>
                </div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.iconWrapper}><img src={iconCardControls} alt="" className={styles.featureIcon} /></div>
                <div className={styles.itemTextWrapper}>
                  <p className={styles.itemDesc}>Order controls for consistent execution.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionDivider}></div>
        </section>

        {/* Accounts and Wrappers */}
        <section className={styles.contentSection}>
          <div className={styles.sectionRow}>
            <h3 className={styles.rowTitle}>Accounts and Wrappers</h3>
            <div className={styles.rowGrid}>
              <div className={styles.gridItem}>
                <div className={styles.iconWrapper}><img src={iconFolder} alt="" className={styles.featureIcon} /></div>
                <div className={styles.itemTextWrapper}>
                  <p className={styles.itemDesc}>GIA, ISA, and SIPP – built in.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionDivider}></div>
        </section>

        {/* Safekeeping and Controls */}
        <section className={styles.contentSection}>
          <div className={styles.sectionRow}>
            <h3 className={styles.rowTitle}>Safekeeping and Controls</h3>
            <div className={styles.rowGrid}>
              <div className={styles.gridItem}>
                <div className={styles.iconWrapper}><img src={iconShield} alt="" className={styles.featureIcon} /></div>
                <div className={styles.itemTextWrapper}>
                  <p className={styles.itemDesc}>Secure custody of client assets with clear ownership records.</p>
                </div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.iconWrapper}><img src={iconPersonCheck} alt="" className={styles.featureIcon} /></div>
                <div className={styles.itemTextWrapper}>
                  <p className={styles.itemDesc}>Household &amp; account permissions for advisers and support staff.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionDivider}></div>
        </section>
      </main>
    </div>
  );
}
