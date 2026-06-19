import React from 'react';
import styles from './RegulatedEnvironments.module.scss';
import iconIndustry from '../assests/images/icon-industry-standards.svg';
import iconSecurity from '../assests/images/icon-security.svg';
import iconZeroLeakage from '../assests/images/icon-zero-leakage.svg';
import rockcoreLogo from '../assests/images/rockcore.CZaptKSp_Z1fLqBR.svg';

const RegulatedEnvironments = () => {
  return (
    <section className={styles.regulatedSection}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <h2>Built for regulated<br />environments</h2>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.featureItem}>
              <img src={iconIndustry} alt="Built to industry standards" />
              <h4>Built to industry standards</h4>
              <p>FCA authorisation in progress.<br />SOC2 audit underway.</p>
            </div>
            <div className={styles.featureItem}>
              <img src={iconSecurity} alt="Security by default" />
              <h4>Security by default</h4>
              <p>Two-factor authentication for<br />every user.</p>
            </div>
            <div className={styles.featureItem}>
              <img src={iconZeroLeakage} alt="Zero data leakage" />
              <h4>Zero data leakage</h4>
              <p>Built in-house. Hosted entirely on<br />Obsidian's infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.container}>
        <div className={styles.disclaimerContainer}>
          <p className={styles.disclaimerText}>
            Obsidian Securities Limited is not yet authorised by the Financial Conduct Authority. Prior to becoming<br />
            authorised no information regarding the future provision of custody and execution services is intended as an<br />
            invitation or inducement to apply for these services, nor does it constitute financial advice.
          </p>
          <div className={styles.poweredBy}>
            <span>Powered by</span>
            <img src={rockcoreLogo} alt="RockCore" />
          </div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
    </section>
  );
};

export default RegulatedEnvironments;
