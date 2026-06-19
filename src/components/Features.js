import React from 'react';
import styles from './Features.module.scss';
import blackrockLogo from '../assests/images/blackrock.CIy1ueqj_ZI20S7.svg';
import revolutLogo from '../assests/images/revolut.gYIcWU2b_2qPbhl.svg';
import jpmorganLogo from '../assests/images/jpmorgan.SVoW66ww_sAVtw.svg';
import parmenionLogo from '../assests/images/parmenion.X7K3NN1c_ZIqq2f.svg';
import wiseLogo from '../assests/images/wise.CX8Tml1r_k2EXl.svg';
import aiPracticeBg from '../assests/images/ai-practice-management-bg.Cryy4Gi7_ZXXNEt.avif';
import aiPracticeUI from '../assests/images/ai-practice-management.B-QTso8g_Z23fjdB.avif';
import executionCustodyImg from '../assests/images/custody-execution.dmFQEtaJ_Z1BGlHK.avif';

function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.divider}></div>
        <div className={styles.logosWrapper}>
          <p className={styles.logosText}>Made by the people behind</p>
          <div className={styles.logos}>
            <img src={blackrockLogo} alt="BlackRock" className={styles.logoImage} />
            <img src={revolutLogo} alt="Revolut" className={styles.logoImage} />
            <img src={jpmorganLogo} alt="JPMorgan" className={styles.logoImage} />
            <img src={parmenionLogo} alt="Parmenion" className={styles.logoImage} />
            <img src={wiseLogo} alt="Wise" className={styles.logoImage} />
          </div>
        </div>
        <div className={styles.divider}></div>

        <h2 className={styles.sectionTitle}>Save Time & Grow AUM</h2>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={`${styles.imagePlaceholder} ${styles.aiPracticePlaceholder}`}>
               <img src={aiPracticeBg} alt="Background" className={styles.backgroundImage} />
               <img src={aiPracticeUI} alt="AI Practice Management UI" className={styles.foregroundImage} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <span className={styles.badgeFree}>Free</span>
                <h3 className={styles.cardTitle}>AI Practice Management</h3>
              </div>
              <p className={styles.cardDescription}>
                AI meeting notes, CRM, and portfolio aggregation all in one free module.
              </p>
              <button className={styles.learnMoreBtn}>Learn more</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.imagePlaceholder}>
               <img src={executionCustodyImg} alt="Execution & Custody" className={styles.featureImage} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <span className={styles.badgeComingSoon}>Coming Soon</span>
                <h3 className={styles.cardTitle}>Execution & Custody</h3>
              </div>
              <p className={styles.cardDescription}>
                Trade, rebalance, and custody - all in one place. With instant account opening.
              </p>
              <button className={styles.learnMoreBtn}>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
