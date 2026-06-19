import React, { useEffect } from 'react';
import styles from './IndependentFirms.module.scss';
import { FeatureAccordion, independentFirmsFeatures } from '../components/Benefits';
import topStoneImg from '../assests/images/independent-firms-stone-top.CzfPSXxC_Z2pUtOw.avif';

export default function IndependentFirms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <img src={topStoneImg} alt="" className={styles.stoneImage} />
        <div className={styles.heroGradientBottom}></div>

        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.heroWord}>Independent</span>
            <span className={styles.heroWord}>firms</span>
          </h1>

          <p className={styles.subtitle}>
            Spend less time on admin and more time delivering advice that matters.
          </p>
        </div>
      </section>

      {/* Main Content using FeatureAccordion */}
      <main className={styles.mainContent}>
        <FeatureAccordion 
          categoryTitle={<>The platform that scales <br /> with your firm</>}
          categorySubtitle={<>Spend less time on admin and more time delivering <br/> advice that matters.</>}
          features={independentFirmsFeatures}
          isReversed={false}
        />
      </main>
    </div>
  );
}
