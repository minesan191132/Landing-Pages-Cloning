import React, { useState } from 'react';
import Header from '../components/Header';
import CustodyStone from '../assests/images/custody-stone-left.DepH_mVM_2fPemk.avif';
import styles from './Pricing.module.scss';
import ctaBgImg from '../assests/images/independent-firms-stone-top.CzfPSXxC_Z2pUtOw.avif'; // reusing existing stone image

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featureSections = [
    {
      category: "Practice Management",
      desc: "Run your firm from a single platform.",
      features: [
        { name: "CRM & client management", free: true, paid: true },
        { name: "Households & entities", free: true, paid: true },
        { name: "Day plan", free: true, paid: true },
        { name: "Automated task generation", free: true, paid: true },
        { name: "Client-ready emails", free: true, paid: true },
        { name: "Income reconciliation", free: "Coming soon", paid: "Coming soon" },
        { name: "Adviser teams", free: true, paid: true },
        { name: "Multi-firm oversight", free: true, paid: true },
        { name: "Audit trails", free: true, paid: true },
        { name: "Client portal", free: "Coming soon", paid: "Coming soon" },
        { name: "KYC verification", free: "Coming soon", paid: "Coming soon" }
      ]
    },
    {
      category: "AI",
      desc: "AI that works across your entire client book.",
      features: [
        { name: "AI chat with 65+ tools", free: "Unlimited", paid: "Unlimited" },
        { name: "AI meeting notes & summaries", free: true, paid: true },
        { name: "AI search across all data", free: true, paid: true },
        { name: "Document filling from meeting context", free: true, paid: true },
        { name: "Document digitisation", free: true, paid: true },
        { name: "Client recap emails in your voice", free: true, paid: true }
      ]
    },
    {
      category: "Custody & Execution",
      desc: "Trade and custody without leaving the platform.",
      features: [
        { name: "Instant account opening", free: false, paid: "Coming soon" },
        { name: "Trading & Execution", free: false, paid: "Coming soon" },
        { name: "Portfolio rebalancing", free: false, paid: "Coming soon" },
        { name: "Corporate actions", free: false, paid: "Coming soon" }
      ]
    }
  ];

  const faqs = [
    {
      q: 'What does "free" mean — is there a catch?',
      a: 'No. AI Practice Management is genuinely free. No per-seat fees, no trial periods, and no feature gates. Custody & Execution will be a separate paid product when it launches, but there is no obligation to use it.'
    },
    {
      q: 'How long will it be free?',
      a: 'AI Practice Management will remain free. Custody & Execution will be a paid product when it launches.'
    },
    {
      q: 'Is there a limit on users or clients?',
      a: 'No. Add as many team members and clients as you need. There are no seat-based charges or client caps.'
    },
    {
      q: 'What happens when Custody & Execution launches?',
      a: "You'll have the option to migrate client portfolios onto the platform, but there is no requirement to do so. Practice Management stays free regardless of whether you adopt custody."
    },
    {
      q: 'Do I need to provide payment details to start?',
      a: 'No. Sign up and start using AI Practice Management immediately. No credit card required.'
    },
    {
      q: 'What platforms is Obsidian available on?',
      a: 'Web, Desktop (Windows and Mac), and Mobile (iOS and Android). All included free. The mobile app supports meeting recording for both phone calls and in-person meetings.'
    }
  ];

  const renderFeatureValue = (val) => {
    if (val === true) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.checkIcon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      );
    }
    if (val === false) {
      return <span className={styles.emptyDash}>—</span>;
    }
    return <span className={styles.textValue}>{val}</span>;
  };

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <img src={CustodyStone} alt="Custody Stone" className={styles.stoneImage} />
        <div className={styles.heroGradientBottom}></div>

        <div className={styles.heroContent}>
            <h1 className={styles.title}>
                <span className={styles.heroWord}>Always</span>
                <span className={styles.heroWord}>free</span>
                <span className={styles.heroWord}>for</span>
                <span className={styles.heroWord}>advisers.</span>
            </h1>

            <p className={styles.subtitle}>
                Big or small. AI Practice Management with no per-seat fees, no trial periods, and no feature gates.
            </p>
        </div>

        <div className={styles.pricingCardsContainer}>
          <div className={styles.pricingCard}>
            <h3 className={styles.cardTitle}>AI Practice Management</h3>
            <span className={styles.cardPrice}>Free</span>
            <p className={styles.cardDesc}>Everything you need to run your firm — meetings, CRM, documents, portfolios, and 65+ AI tools.</p>
            <button className={styles.btnSecondary}>Start for free</button>
          </div>
          <div className={styles.pricingCard}>
            <h3 className={styles.cardTitle}>Custody & Execution</h3>
            <span className={styles.cardPrice}>Coming Soon</span>
            <p className={styles.cardDesc}>Trade, rebalance, and custody — all in one place. With instant account opening.</p>
            <button className={styles.btnPrimary}>Get in touch</button>
          </div>
        </div>
      </section>

      <section className={styles.compareSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Compare features</h2>
          <div className={styles.tableWrapper}>
            <div className={styles.tableInner}>
              <div className={styles.tableHeader}>
                <span className={styles.columnLabel}>Features</span>
                <div className={styles.headerCell}>
                  <span className={styles.headerTitle}>AI Practice Management</span>
                  <span className={styles.headerSubtitle}>Free</span>
                </div>
                <div className={styles.headerCell}>
                  <span className={styles.headerTitleMuted}>Custody & Execution</span>
                  <span className={styles.headerSubtitle}>Coming Soon</span>
                </div>
              </div>

              <div className={styles.tableBody}>
                {featureSections.map((section, idx) => (
                  <div key={idx} className={styles.featureGroup}>
                    <div className={styles.groupHeader}>
                      <h3 className={styles.groupTitle}>{section.category}</h3>
                      <p className={styles.groupDesc}>{section.desc}</p>
                    </div>
                    <div className={styles.groupFeatures}>
                      {section.features.map((feat, fIdx) => (
                        <div key={fIdx} className={styles.featureRow}>
                          <div className={styles.featureName}>{feat.name}</div>
                          <div className={styles.featureCol}>{renderFeatureValue(feat.free)}</div>
                          <div className={styles.featureCol}>{renderFeatureValue(feat.paid)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.containerLarge}>
          <div className={styles.faqGrid}>
            <div className={styles.faqHeader}>
              <span className={styles.subheading}>Frequently asked questions</span>
              <h2 className={styles.faqTitle}>FAQ</h2>
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq, idx) => (
                <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`} onClick={() => toggleFaq(idx)}>
                  <div className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.chevron}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                  <div className={styles.faqAnswerWrapper}>
                    <div className={styles.faqAnswer}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.containerLarge}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaHeader}>
              <span className={styles.subheading}>Get started</span>
              <h2 className={styles.ctaTitle}>Ready to get started?</h2>
            </div>
            <div className={styles.ctaAction}>
              <button className={styles.btnWhite}>Book a demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

