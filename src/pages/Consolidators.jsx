import React, { useEffect } from 'react';
import styles from './Consolidators.module.scss';
import { FeatureAccordion, consolidatorsFeatures } from '../components/Benefits';
// Tạm dùng stone-right vì không thấy file consolidators-stone rõ ràng trong thư mục. Có thể đổi tên sau.
import topStoneImg from '../assests/images/independent-firms-stone-top.CzfPSXxC_Z2pUtOw.avif';

export default function Consolidators() {
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
            <span className={styles.heroWord}>Consolidators</span>
          </h1>

          <p className={styles.subtitle}>
            Unify firms, data, and controls to scale faster – without operational drag.
          </p>
        </div>
      </section>

      {/* Main Content using FeatureAccordion */}
      <main className={styles.mainContent}>
        <FeatureAccordion 
          mainTitle={null}
          categoryTitle="Unlock rapid growth"
          categorySubtitle={<>Unify firms, data, and controls to scale faster – <br/>\
           without operational drag.</>}
          features={consolidatorsFeatures}
          isReversed={true}
        />
      </main>
    </div>
  );
}
