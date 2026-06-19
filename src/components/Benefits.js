import React, { useState, useEffect, useRef } from 'react';
import styles from './Benefits.module.scss';

// Imports for Independent Firms
import dayPlanImg from '../assests/images/day-plan.pRAWub-J_Z16yqTp.avif';
import aiSearchImg from '../assests/images/ai-search.BMM0yPyY_1psYU0.avif';
import aiMeetingAssistantImg from '../assests/images/ai-meeting-assistant.CwDhRG_r_26c2d4.avif';
import documentDigitizationImg from '../assests/images/document-digitisation.BD5uC3Ah_TcrR3.avif';
import suitabilityReportImg from '../assests/images/suitability-report.B5TTyTgk_21fqJU.avif';
import portfolioAggregationImg from '../assests/images/portfolio-aggregation.PunMrhnF_Z2cvKnd.avif';
import clientEmailsImg from '../assests/images/client-emails.CKSV3bjd_1mauNU.avif';

// Imports for Consolidators
import multiFirmOversightImg from '../assests/images/multi-firm-oversight.VYriV9jz_ZxX7db.avif';
import rapidOnboardingImg from '../assests/images/rapid-onboarding.B_Nw05ZN_Z15Eup2.avif';
import dataSegregationImg from '../assests/images/data-segregation.CUdFkn3M_1PnXY4.avif';
import roleBasedAccessImg from '../assests/images/role-based-access.DeH-k5Qd_Z21JshH.avif';
import auditTrailsImg from '../assests/images/audit-trails.C-jNeSZ1_Z44s2y.avif';
import everythingIndependentImg from '../assests/images/everything-independent-firms.B6vOtnnu_Z1xtlXD.avif';

// Imports for AI CRM
import aiPracticeBgImg from '../assests/images/ai-practice-management-bg.Cryy4Gi7_ZXXNEt.avif';
import aiPracticeImg from '../assests/images/ai-practice-management.B-QTso8g_Z23fjdB.avif';

const DURATION = 5000; // ms per slide

export const independentFirmsFeatures = [
  {
    title: "Day plan",
    description: "Kanban view of meetings, tasks, and client communications.",
    image: dayPlanImg
  },
  {
    title: "AI search",
    description: "Find relevant client information in seconds, with intelligent, unified search across your systems and documents.",
    image: aiSearchImg
  },
  {
    title: "AI meeting assistant",
    description: "Every client meeting sharpens the system. You start with the right context, what matters is captured as the conversation unfolds, and insight turns into action automatically.",
    image: aiMeetingAssistantImg
  },
  {
    title: "Document digitization",
    description: "Transform paper records and scanned documents into searchable, structured data automatically.",
    image: documentDigitizationImg
  },
  {
    title: "Suitability report",
    description: "Automatically generate comprehensive suitability reports based on client data.",
    image: suitabilityReportImg
  },
  {
    title: "Portfolio aggregation",
    description: "Get a unified view of all client assets and investments in one place.",
    image: portfolioAggregationImg
  },
  {
    title: "Client-ready emails in your voice",
    description: "Draft personalized emails that match your unique tone and style.",
    image: clientEmailsImg
  }
];

export const consolidatorsFeatures = [
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
    image: documentDigitizationImg
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

export const aiCrmFeatures = [
  {
    title: "Smart meeting prep",
    description: "Auto-generated client briefs before every meeting.",
    image: aiMeetingAssistantImg
  },
  {
    title: "Suitability report",
    description: "Generate compliant suitability reports from meeting context.",
    image: suitabilityReportImg
  },
  {
    title: "Document digitisation",
    description: "Convert paper records into searchable, structured data across the organisation.",
    image: documentDigitizationImg
  },
  {
    title: "Client-ready emails in your voice",
    description: "Draft personalised emails that match your tone and style.",
    image: clientEmailsImg
  },
  {
    title: "Client & household view",
    description: "See every person, account, and interaction in one place.",
    image: portfolioAggregationImg
  },
  {
    title: "Automated task generation",
    description: "Turn meeting actions into tracked tasks without manual entry.",
    image: aiPracticeImg
  },
  {
    title: "AI chat",
    description: "Ask questions across your client data and get instant answers.",
    image: aiSearchImg
  }
];

export const FeatureAccordion = ({ mainTitle, categoryTitle, categorySubtitle, features, isReversed }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, DURATION);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [activeIndex]);

  return (
    <div className={styles.sectionBlock}>
      <div className={styles.header}>
        <h2>{mainTitle}</h2>
      </div>
      
      <div className={`${styles.content} ${isReversed ? styles.reversed : ''}`}>
        <div className={styles.textColumn}>
          <div className={styles.headerGroup}>
            <h3 className={styles.itemTitle}>{categoryTitle}</h3>
            <p className={styles.subtitle}>{categorySubtitle}</p>
          </div>
          
          <div className={styles.accordionList}>
            {features.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={index} 
                  className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Progress Bar moved to TOP for all items */}
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
      </div>
    </div>
  );
};

function Benefits() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <FeatureAccordion 
          mainTitle={<>The platform that<br />scales your firm</>}
          categoryTitle="Independent firms"
          categorySubtitle="Spend less time on admin and more time delivering advice that matters."
          features={independentFirmsFeatures}
          isReversed={false}
        />
        
        <FeatureAccordion 
          mainTitle="Unlock rapid growth"
          categoryTitle="Consolidators"
          categorySubtitle="Unify firms, data, and controls to scale faster – without operational drag."
          features={consolidatorsFeatures}
          isReversed={true}
        />
      </div>
    </section>
  );
}

export default Benefits;
