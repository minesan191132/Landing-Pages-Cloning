import React, { useEffect } from 'react';
import styles from './Security.module.scss';
import Header from '../components/Header';
import heroStoneImg from '../assests/images/independent-firms-stone-top.CzfPSXxC_Z2pUtOw.avif';

// Import badges
import badgeGdpr from '../assests/images/badge-gdpr.BEZxU5Ip_2lfXMF.svg';
import badgeIso27001 from '../assests/images/badge-iso-27001.svg';
import badgeIso22301 from '../assests/images/badge-iso-22301.svg';
import badgeSoc2 from '../assests/images/badge-soc2.svg';

function Security() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const badgeData = [
    {
      title: "GDPR",
      desc: "We operate under GDPR — the world's strictest standard for data privacy — ensuring your clients' data is handled with the highest level of care.",
      icon: badgeGdpr
    },
    {
      title: "SOC 2 Type 2",
      desc: "We are working towards SOC 2 Type 2 certification to ensure secure and compliant management of data across all our systems.",
      icon: badgeSoc2
    },
    {
      title: "ISO 27001",
      desc: "We are working towards ISO 27001, the internationally recognised standard for information security management.",
      icon: badgeIso27001
    },
    {
      title: "ISO 22301",
      desc: "We are working towards ISO 22301 to ensure your data remains protected and accessible, even in the event of disruption.",
      icon: badgeIso22301
    }
  ];

  const sections = [
    {
      title: "Trusted data handling",
      items: [
        {
          title: "One subprocessor for client data",
          desc: "All AI processing happens within Obsidian's own infrastructure. Unlike providers that route your data through multiple third-party services, we keep everything under one roof."
        },
        {
          title: "No meeting bot",
          desc: "Obsidian captures meetings through system audio on the adviser's own device. No bot joins the call, and no third party ever hears the conversation."
        },
        {
          title: "Built entirely in-house",
          desc: "Every part of our technology stack is built and operated by Obsidian. There is no third-party middleware, and your clients' data never leaves our controlled infrastructure."
        }
      ]
    },
    {
      title: "Enterprise-grade security",
      items: [
        {
          title: "Mandatory 2FA",
          desc: "Every user is required to authenticate with two factors on every login — a standard we enforce without exception."
        },
        {
          title: "Role-based access",
          desc: "Access to data is strictly controlled. Advisers, paraplanners, and administrators each see only the information relevant to their role."
        },
        {
          title: "Built by experts",
          desc: "Our engineering and security teams come from Revolut, BlackRock, JPMorgan, and Parmenion — organisations where data protection is not optional. That experience is embedded in every architectural decision we make."
        }
      ]
    },
    {
      title: "Regular security audits",
      items: [
        {
          title: "Encryption",
          desc: "All data is encrypted in transit using TLS 1.2 or higher, and at rest with AES-256 encryption. Sensitive fields such as meeting notes and emails receive additional field-level encryption."
        },
        {
          title: "Penetration testing",
          desc: "We take a proactive approach to security testing. An AI pen tester reviews every code change, weekly automated scans run across the platform, and an independent external pen test is conducted annually."
        },
        {
          title: "Hosting & residency",
          desc: "All data is hosted on AWS in the EU (London region), within Obsidian's own controlled infrastructure. Your data never leaves this environment."
        }
      ]
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroImageWrapper}>
          <img src={heroStoneImg} alt="" />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.pill}>
            Security & Privacy
          </div>
          <h1 className={styles.heroTitle}>The most private AI for advisers.</h1>
          <p className={styles.heroSubtitle}>
            From encryption to access management, Obsidian enforces rigorous standards to keep your clients' data secure, private, and compliant.
          </p>
        </div>
      </section>

      <div className={styles.contentWrapper}>
        <div className={styles.divider}></div>

        {/* Badge Grid Section */}
        <div className={styles.badgeGrid}>
          {badgeData.map((badge, idx) => (
            <div key={idx} className={styles.badgeCard}>
              <div className={styles.badgeIcon}>
                <img src={badge.icon} alt={badge.title} />
              </div>
              <h3 className={styles.badgeTitle}>{badge.title}</h3>
              <p className={styles.badgeDesc}>{badge.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.divider}></div>

        {/* Detail Sections */}
        {sections.map((section, idx) => (
          <React.Fragment key={idx}>
            <div className={styles.sectionGrid}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </div>
              <div className={styles.gridContent}>
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={styles.gridItem}>
                    {/* Empty placeholder icon */}
                    <div className={styles.emptyBadgeIcon}></div>
                    <h3 className={styles.badgeTitle}>{item.title}</h3>
                    <p className={styles.badgeDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {idx < sections.length - 1 && <div className={styles.divider}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Security;
