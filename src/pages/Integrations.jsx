import React, { useEffect, useState } from 'react';
import styles from './Integrations.module.scss';
import Header from '../components/Header';
import heroStoneImg from '../assests/images/independent-firms-stone-top.CzfPSXxC_Z2pUtOw.avif';

const integrationsData = [
  {
    category: "Email & Calendar",
    description: "Connect your email and calendar to keep client communications and meetings in sync with Obsidian.",
    items: [
      { name: "Gmail & Google Calendar", desc: "Email access, drafts, and calendar sync via Google Workspace." },
      { name: "Outlook", desc: "Email access, drafts, and calendar sync via Microsoft 365." }
    ]
  },
  {
    category: "CRM",
    description: "Sync client records between Obsidian and your existing CRM so your team always works from one source of truth.",
    items: [
      { name: "Intelliflo", desc: "Bidirectional client sync with meeting notes and documents." },
      { name: "Salesforce", desc: "Client record sync between Salesforce and Obsidian." }
    ]
  },
  {
    category: "Storage",
    description: "Automatically save meeting notes, reports, and client documents to your cloud storage.",
    items: [
      { name: "OneDrive", desc: "Automatic document saving to Microsoft OneDrive." }
    ]
  },
  {
    category: "Wealth Platforms",
    description: "Aggregate client portfolio valuations from all major UK wealth platforms into a single unified view inside Obsidian.",
    items: [
      { name: "7IM", desc: "Portfolio valuations from 7IM in your unified dashboard." },
      { name: "ABRDN Wrap", desc: "Portfolio valuations from ABRDN Wrap in your unified dashboard." },
      { name: "ABRDN Elevate", desc: "Portfolio valuations from ABRDN Elevate in your unified dashboard." },
      { name: "Aegon", desc: "Portfolio valuations from Aegon in your unified dashboard." },
      { name: "AJ Bell", desc: "Portfolio valuations from AJ Bell in your unified dashboard." },
      { name: "Aviva", desc: "Portfolio valuations from Aviva in your unified dashboard." },
      { name: "Brewin Dolphin", desc: "Portfolio valuations from Brewin Dolphin in your unified dashboard." },
      { name: "Canada Life", desc: "Portfolio valuations from Canada Life in your unified dashboard." },
      { name: "Cofunds", desc: "Portfolio valuations from Cofunds in your unified dashboard." },
      { name: "Fidelity", desc: "Portfolio valuations from Fidelity FundsNetwork in your unified dashboard." },
      { name: "Host Capital", desc: "Portfolio valuations from Host Capital in your unified dashboard." },
      { name: "James Hay", desc: "Portfolio valuations from James Hay in your unified dashboard." },
      { name: "M&G Wealth", desc: "Portfolio valuations from M&G Wealth in your unified dashboard." },
      { name: "Nucleus", desc: "Portfolio valuations from Nucleus in your unified dashboard." },
      { name: "Parmenion", desc: "Portfolio valuations from Parmenion in your unified dashboard." },
      { name: "Quilter", desc: "Portfolio valuations from Quilter in your unified dashboard." },
      { name: "Raymond James", desc: "Portfolio valuations from Raymond James in your unified dashboard." },
      { name: "SS&C Hubwise", desc: "Portfolio valuations from SS&C Hubwise in your unified dashboard." },
      { name: "Scottish Widows", desc: "Portfolio valuations from Scottish Widows in your unified dashboard." },
      { name: "Transact", desc: "Portfolio valuations from Transact in your unified dashboard." },
      { name: "Wealthtime", desc: "Portfolio valuations from Wealthtime in your unified dashboard." },
      { name: "Wealthtime Classic", desc: "Portfolio valuations from Wealthtime Classic in your unified dashboard." },
      { name: "Standard Life", desc: "Portfolio valuations from Standard Life in your unified dashboard." },
      { name: "Royal London", desc: "Portfolio valuations from Royal London in your unified dashboard." },
      { name: "Prudential", desc: "Portfolio valuations from Prudential in your unified dashboard." }
    ]
  }
];

const categories = ["All", "Email & Calendar", "CRM", "Storage", "Wealth Platforms"];

function Integrations() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter data based on active category and search query
  const filteredData = integrationsData.map(section => {
    if (activeCategory !== "All" && section.category !== activeCategory) {
      return null;
    }
    
    const filteredItems = section.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredItems.length === 0) {
      return null;
    }

    return {
      ...section,
      items: filteredItems
    };
  }).filter(Boolean);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroImageWrapper}>
          <img src={heroStoneImg} alt="" className={styles.stoneImage} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Integrations</h1>
          <p className={styles.heroSubtitle}>
            Connect your email, calendar, CRM, and 25+ wealth platforms to Obsidian.
          </p>
        </div>
      </section>

      <div className={styles.contentWrapper}>
        <div className={styles.filterContainer}>
          <div className={styles.filterGroup}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className={styles.searchContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.searchIcon}>
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
            </svg>
            <input 
              type="text" 
              placeholder="Search integrations..." 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.divider}></div>

        {filteredData.length > 0 ? (
          filteredData.map((section, idx) => (
            <React.Fragment key={idx}>
              <div className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <h2 className={styles.categoryTitle}>{section.category}</h2>
                  <p className={styles.categoryDesc}>{section.description}</p>
                </div>
                <div className={styles.grid}>
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={styles.card}>
                      <div className={styles.cardHeader}>
                        {/* Empty box acting as placeholder for icons */}
                        <div className={styles.emptyIcon}></div>
                        <div className={styles.cardTitle}>{item.name}</div>
                      </div>
                      <div className={styles.cardContent}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              {idx < filteredData.length - 1 && <div className={styles.divider}></div>}
            </React.Fragment>
          ))
        ) : (
          <div className={styles.noResults}>
            No integrations found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

export default Integrations;
