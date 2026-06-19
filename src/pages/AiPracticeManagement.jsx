import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AiPracticeManagement.module.scss';
import { FeatureAccordion, aiCrmFeatures } from '../components/Benefits';
import topBgImg from '../assests/images/ai-practice-management-bg.Cryy4Gi7_ZXXNEt.avif';

import showcase1Img from '../assests/images/ai-crm-showcase-1.BA7DqGyJ_Z18l9sY.avif';
import showcase2Img from '../assests/images/ai-crm-showcase-2.BgCme2To_2fUfuC.avif';
import dayPlanImg from '../assests/images/ai-crm-showcase-3.C4ukjG6w_JqoMO.avif';
import autoTaskImg from '../assests/images/ai-crm-showcase-4.BY-9fo8T_ZsUqLU.avif'

// Tạm dùng các icon có sẵn do không tìm thấy icon-meeting-notes, icon-crm, icon-portfolio
import iconMeetingNotes from '../assests/images/icon-folder.svg';
import iconCrm from '../assests/images/icon-person-check.svg';
import iconPortfolio from '../assests/images/icon-layers.svg';

export default function AiPracticeManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section - Static placeholder for now */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <img src={topBgImg} alt="" className={styles.stoneImage} />
        <div className={styles.heroGradientBottom}></div>

        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14.001" width="14" height="14" overflow="visible">
              <path d="M 11.024 9.636 C 10.807 9.881 10.583 10.12 10.351 10.351 C 6.958 13.745 2.707 14.995 0.856 13.144 C -0.413 11.875 -0.224 9.478 1.113 7.003 M 2.947 4.397 C 3.169 4.144 3.403 3.894 3.649 3.649 C 7.042 0.255 11.293 -0.995 13.144 0.856 C 14.414 2.126 14.224 4.526 12.884 7.002 M 10.351 3.65 C 13.745 7.043 14.995 11.294 13.144 13.145 C 11.294 14.996 7.042 13.745 3.649 10.352 C 0.255 6.959 -0.995 2.708 0.856 0.857 C 2.706 -0.994 6.958 0.257 10.351 3.65 Z M 7.773 6.985 C 7.773 7.421 7.419 7.775 6.983 7.775 C 6.547 7.775 6.193 7.421 6.193 6.985 C 6.193 6.549 6.547 6.195 6.983 6.195 C 7.419 6.195 7.773 6.549 7.773 6.985 Z" fill="transparent" strokeWidth="1.5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            </svg>
            <span>Free</span>
          </div>
          <h1 className={styles.title}>
            <span className={styles.heroWord}>AI</span>
            <span className={styles.heroWord}>Practice</span>
            <span className={styles.heroWord}>Management</span>
            <span className={styles.heroWord}>for</span>
            <span className={styles.heroWord}>Financial</span>
            <span className={styles.heroWord}>Advisors</span>
          </h1>

          <p className={styles.subtitle}>
            Client records, meeting notes, and tasks - captured automatically, searchable instantly
          </p>
          
          <button className={styles.ctaButton}>Get Started For Free</button>
        </div>
      </section>

      {/* Divider */}
      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
      </div>

      {/* 3-Column Features */}
      <section className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <div className={styles.iconContainer}>
            <img src={iconMeetingNotes} alt="AI meeting notes" className={styles.featureIcon} />
          </div>
          <div className={styles.featureItemContent}>
            <p className={styles.featureItemTitle}>AI meeting notes</p>
            <p className={styles.featureItemDesc}>Prep briefs before, summaries after. No meeting bot required.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.iconContainer}>
            <img src={iconCrm} alt="CRM" className={styles.featureIcon} />
          </div>
          <div className={styles.featureItemContent}>
            <p className={styles.featureItemTitle}>CRM</p>
            <p className={styles.featureItemDesc}>Clients, households, and entities – linked and searchable across every interaction.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.iconContainer}>
            <img src={iconPortfolio} alt="Portfolio Aggregation" className={styles.featureIcon} />
          </div>
          <div className={styles.featureItemContent}>
            <p className={styles.featureItemTitle}>Portfolio Aggregation</p>
            <p className={styles.featureItemDesc}>Every client's holdings across platforms - one dashboard.</p>
          </div>
        </div>
      </section>

      {/* Find anything, fast */}
      <section className={styles.showcaseSection}>
        <h2 className={styles.showcaseTitle}>Find anything, fast</h2>
        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseCard}>
            <img src={showcase1Img} alt="AI Search" className={styles.showcaseImage} />
            <div className={styles.showcaseContent}>
              <h3 className={styles.showcaseCardTitle}>AI Search</h3>
              <p className={styles.showcaseCardDesc}>Unified search across your tools, documents, and client records.</p>
            </div>
          </div>
          <div className={styles.showcaseCard}>
            <img src={showcase2Img} alt="AI Meeting Summaries" className={styles.showcaseImage} />
            <div className={styles.showcaseContent}>
              <h3 className={styles.showcaseCardTitle}>AI Meeting Summaries</h3>
              <p className={styles.showcaseCardDesc}>Context-aware notes without a meeting bot listening in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content using FeatureAccordion */}
      <main className={styles.mainContent}>
        <FeatureAccordion 
          mainTitle={null}
          categoryTitle="Beyond the essentials"
          categorySubtitle="Spend less time on admin and more time delivering advice that matters."
          features={aiCrmFeatures}
          isReversed={true}
        />

        {/* Plan and Prioritise */}
        <section className={styles.showcaseSection}>
          <h2 className={styles.showcaseTitle}>Plan and Prioritise</h2>
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCard}>
              <img src={dayPlanImg} alt="Day plan" className={styles.showcaseImage} />
              <div className={styles.showcaseContent}>
                <h3 className={styles.showcaseCardTitle}>Day plan</h3>
                <p className={styles.showcaseCardDesc}>Kanban view of meetings, tasks, and client communications.</p>
              </div>
            </div>
            <div className={styles.showcaseCard}>
              <img src={autoTaskImg} alt="Automated Task Generation" className={styles.showcaseImage} />
              <div className={styles.showcaseContent}>
                <h3 className={styles.showcaseCardTitle}>Automated Task Generation</h3>
                <p className={styles.showcaseCardDesc}>Every touchpoint becomes actionable next steps automatically.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What else we offer */}
        <section className={styles.nextModuleSection}>
          <p className={styles.nextModuleLabel}>What else we offer</p>
          <div className={styles.nextModuleContent}>
            <h2 className={styles.nextModuleTitle}>Custody & Execution</h2>
            <Link to="/what-we-offer/custody-and-execution" className={styles.nextModuleLink}>
              See next module
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
