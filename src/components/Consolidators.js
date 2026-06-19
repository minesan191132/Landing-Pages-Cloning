import React, { useState, useEffect, useRef } from 'react';
import styles from './Consolidators.module.scss';

import multiFirmOversightImg from '../assests/images/multi-firm-oversight.VYriV9jz_ZxX7db.avif';
import rapidOnboardingImg from '../assests/images/rapid-onboarding.B_Nw05ZN_Z15Eup2.avif';
import documentDigitisationImg from '../assests/images/document-digitisation.BD5uC3Ah_TcrR3.avif';
import dataSegregationImg from '../assests/images/data-segregation.CUdFkn3M_1PnXY4.avif';
import roleBasedAccessImg from '../assests/images/role-based-access.DeH-k5Qd_Z21JshH.avif';
import auditTrailsImg from '../assests/images/audit-trails.C-jNeSZ1_Z44s2y.avif';
import everythingIndependentImg from '../assests/images/everything-independent-firms.B6vOtnnu_Z1xtlXD.avif';

const DURATION = 5000;

const features = [
  {
    title: "Multi-firm oversight",
    description: "Manage multiple firms under one organization with consolidated reporting, controls, and visibility.",
    image: multiFirmOversightImg
  },
  {
    title: "Rapid onboarding",
    description: "Onboard new firms in minutes through automated data migration and structured setup.",
    image: rapidOnboardingImg
  },
  {
    title: "Document digitisation",
    description: "Transform paper records and scanned documents into searchable, structured data automatically.",
    image: documentDigitisationImg
  },
  {
    title: "Data segregation",
    description: "Keep data strictly separated per firm, ensuring compliance and confidentiality without complex infrastructure.",
    image: dataSegregationImg
  },
  {
    title: "Role-based access",
    description: "Granular access controls ensure users only see and edit what they are authorized to across multiple firms.",
    image: roleBasedAccessImg
  },
  {
    title: "Audit trails",
    description: "Comprehensive logging of all actions and changes across the platform to satisfy regulatory requirements.",
    image: auditTrailsImg
  },
  {
    title: "Everything for Independent Firms and more",
    description: "Get all the benefits available to independent firms, scaled up to support your entire consolidation network.",
    image: everythingIndependentImg
  }
];

function Consolidators() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, DURATION);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [activeIndex]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Unlock rapid growth</h2>
        </div>
        
        <div className={styles.content}>
          
          {/* IMAGE PANEL - Left side */}
          <div className={styles.imageColumn}>
            {features.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.title}
                className={`${styles.featureImage} ${index === activeIndex ? styles.activeImage : ''}`}
              />
            ))}
          </div>

          {/* ACCORDION LIST - Right side */}
          <div className={styles.textColumn}>
            <div className={styles.headerGroup}>
              <h3 className={styles.itemTitle}>Consolidators</h3>
              <p className={styles.subtitle}>Unify firms, data, and controls to scale faster – without operational drag.</p>
            </div>
            
            <div className={styles.accordionList}>
              {features.map((item, index) => {
                const isActive = index === activeIndex;
                
                return (
                  <div 
                    key={index} 
                    className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
                    onClick={() => handleItemClick(index)}
                  >
                    {/* Progress Bar moved to TOP */}
                    <div className={styles.progressBarContainer}>
                      <div 
                        className={`${styles.progressBarFill} ${isActive ? styles.filling : ''}`}
                        style={{ animationDuration: `${DURATION}ms` }}
                      ></div>
                    </div>

                    <div className={styles.itemHeader}>
                      <h4>{item.title}</h4>
                    </div>
                    
                    <div className={styles.itemContentWrapper}>
                      <div className={styles.itemContent}>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Consolidators;
