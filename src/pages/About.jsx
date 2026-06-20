import React from 'react';
import styles from './About.module.scss';
import aboutStone from '../assests/images/about-stone.CIU_KC6y_Z1zPnpt.avif';

import blackrockLogo from '../assests/images/blackrock.CIy1ueqj_ZI20S7.svg';
import revolutLogo from '../assests/images/revolut.gYIcWU2b_2qPbhl.svg';
import jpmorganLogo from '../assests/images/jpmorgan.SVoW66ww_sAVtw.svg';
import parmenionLogo from '../assests/images/parmenion.X7K3NN1c_ZIqq2f.svg';
import natwestLogo from '../assests/images/natwest.BJwjIqYh_Z1hzhMs.svg';
import obsidianLogo from '../assests/images/obsidian-logo.CWaEwwRf_BkuQJ.svg';
import wiseLogo from '../assests/images/wise.CX8Tml1r_k2EXl.svg';
import starlingLogo from '../assests/images/starling.FhfcPlv5_kkpI9.svg';

import hasnainImg from '../assests/images/hasnain-bukhari.CEeZIq7b_Z1Uw17w.avif';
import samarthImg from '../assests/images/samarth-aggarwal.Bsuz07Uy_2t0y4N.avif';
import ianImg from '../assests/images/ian-stone.CmuGvn5H_Z2eCJPX.avif';
import ronaldImg from '../assests/images/ronald-noble.Lrekf5_G_ZUzLem.avif';
import emmaImg from '../assests/images/emma-chisholm.DHF35fer_Z2hi6EY.avif';
import lembitImg from '../assests/images/lembit-lopp.CP-yjsTQ_ZjwfYo.avif';
import lauraImg from '../assests/images/laura-leon.40Oy7Kdp_ZiVL6k.avif';
import asifImg from '../assests/images/asif-naidu.BlUX9myT_Z7HKj.avif';
import iconCiarity from '../assests/images/icon-clarity.svg';
import iconExplicit from '../assests/images/icon-explicit.svg';
import iconFinishStrong from '../assests/images/icon-finish-strong.svg';
import rockcoreLogo from '../assests/images/rockcore.CZaptKSp_Z1fLqBR.svg';

const About = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground} />
        <img src={aboutStone} alt="About Stone" className={styles.stoneImage} />
        <div className={styles.heroGradientBottom} />
        
        <div className={styles.heroContent}>
          <div className={styles.meetBadge}>
            Meet Obsidian
          </div>
          <h1 className={styles.title}>
            <span className={styles.heroWord}>A</span>
            <span className={styles.heroWord}>Family</span>
            <span className={styles.heroWord}>Office</span>
          </h1>
            <h1 className={styles.title}>
            <span className={styles.heroWord}>For</span>
            <span className={styles.heroWord}>Every</span>
            <span className={styles.heroWord}>Family</span>
            </h1>
          <p className={styles.subtitle}>
            Obsidian helps advisers deliver a personalised service at a fraction of the cost.
          </p>
        </div>
      </section>

      <section className={styles.madeBySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Made by the people behind</h2>
          <div className={styles.logoGrid}>
            <div className={styles.logoItem}><img src={blackrockLogo} alt="BlackRock" /></div>
            <div className={styles.logoItem}><img src={revolutLogo} alt="Revolut" /></div>
            <div className={styles.logoItem}><img src={jpmorganLogo} alt="JPMorganChase" /></div>
            <div className={styles.logoItem}><img src={parmenionLogo} alt="Parmenion" /></div>
            <div className={styles.logoItem}><img src={natwestLogo} alt="NatWest" /></div>
            <div className={styles.logoItem}><img src={obsidianLogo} alt="Obsidian" /></div>
            <div className={styles.logoItem}><img src={wiseLogo} alt="Wise" /></div>
            <div className={styles.logoItem}><img src={starlingLogo} alt="Starling" /></div>
          </div>
        </div>
      </section>

      <section className={styles.leadershipSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Leadership</h2>
          <div className={styles.leadershipGrid}>
            
            <div className={`${styles.leaderCard} ${styles.colSpan3}`}>
              <div className={styles.leaderInfo}>
                <p className={styles.leaderRole}>Chief Executive Officer</p>
                <h3 className={styles.leaderName}>Hasnain Bukhari</h3>
              </div>
              <div className={styles.leaderImageWrapper}>
                <img src={hasnainImg} alt="Hasnain Bukhari" className={styles.leaderImage} />
              </div>
              <div className={styles.leaderCompanies}>
                <img src={wiseLogo} alt="Wise" />
                <img src={revolutLogo} alt="Revolut" />
              </div>
            </div>

            <div className={`${styles.leaderCard} ${styles.colSpan3}`}>
              <div className={styles.leaderInfo}>
                <p className={styles.leaderRole}>Chief Operating Officer</p>
                <h3 className={styles.leaderName}>Samarth Aggarwal</h3>
              </div>
              <div className={styles.leaderImageWrapper}>
                <img src={samarthImg} alt="Samarth Aggarwal" className={styles.leaderImage} />
              </div>
              <div className={styles.leaderCompanies}>
                <img src={blackrockLogo} alt="BlackRock" />
              </div>
            </div>

            <div className={`${styles.leaderCard} ${styles.colSpan2}`}>
              <div className={styles.leaderInfo}>
                <p className={styles.leaderRole}>Head of Compliance</p>
                <h3 className={styles.leaderName}>Ian Stone</h3>
              </div>
              <div className={styles.leaderImageWrapper}>
                <img src={ianImg} alt="Ian Stone" className={styles.leaderImage} />
              </div>
              <div className={styles.leaderCompanies}>
                <img src={parmenionLogo} alt="Parmenion" />
              </div>
            </div>

            <div className={`${styles.leaderCard} ${styles.colSpan2}`}>
              <div className={styles.leaderInfo}>
                <p className={styles.leaderRole}>Chief Technology Officer</p>
                <h3 className={styles.leaderName}>Ronald Noble</h3>
              </div>
              <div className={styles.leaderImageWrapper}>
                <img src={ronaldImg} alt="Ronald Noble" className={styles.leaderImage} />
              </div>
              <div className={styles.leaderCompanies}>
                <img src={revolutLogo} alt="Revolut" />
                <img src={jpmorganLogo} alt="JPMorganChase" />
              </div>
            </div>

            <div className={`${styles.leaderCard} ${styles.colSpan2}`}>
              <div className={styles.leaderInfo}>
                <p className={styles.leaderRole}>Head of Operations</p>
                <h3 className={styles.leaderName}>Emma Chisholm</h3>
              </div>
              <div className={styles.leaderImageWrapper}>
                <img src={emmaImg} alt="Emma Chisholm" className={styles.leaderImage} />
              </div>
              <div className={styles.leaderCompanies}>
              </div>
            </div>

            <div className={`${styles.leaderCard} ${styles.colSpan2}`}>
              <div className={styles.leaderInfo}>
                <p className={styles.leaderRole}>Head of Frontend Engineering</p>
                <h3 className={styles.leaderName}>Lembit Lõpp</h3>
              </div>
              <div className={styles.leaderImageWrapper}>
                <img src={lembitImg} alt="Lembit Lõpp" className={styles.leaderImage} />
              </div>
              <div className={styles.leaderCompanies}>
              </div>
            </div>

            <div className={`${styles.leaderCard} ${styles.colSpan2}`}>
              <div className={styles.leaderInfo}>
                <p className={styles.leaderRole}>Head of Design</p>
                <h3 className={styles.leaderName}>Laura Leon</h3>
              </div>
              <div className={styles.leaderImageWrapper}>
                <img src={lauraImg} alt="Laura Leon" className={styles.leaderImage} />
              </div>
              <div className={styles.leaderCompanies}>
                <img src={wiseLogo} alt="Wise" />
              </div>
            </div>

            <div className={`${styles.leaderCard} ${styles.colSpan2}`}>
              <div className={styles.leaderInfo}>
                <p className={styles.leaderRole}>Board Advisor</p>
                <h3 className={styles.leaderName}>Asif Naidu</h3>
              </div>
              <div className={styles.leaderImageWrapper}>
                <img src={asifImg} alt="Asif Naidu" className={styles.leaderImage} />
              </div>
              <div className={styles.leaderCompanies}>
                <img src={wiseLogo} alt="Wise" />
                <img src={revolutLogo} alt="Revolut" />
                <img src={jpmorganLogo} alt="JPMorganChase" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className={styles.regulatedSection}>
            <div className={styles.container}>
              <div className={styles.mainContent}>
                <div className={styles.leftColumn}>
                  <h2>Principles</h2>
                </div>
                <div className={styles.rightColumn}>
                  <div className={styles.featureItem}>
                    <img src={iconCiarity} alt="Clarity first" />
                    <h4>Clarity first</h4>
                    <p>We simplify until only what matters<br />remains. If something feels<br/>complex, the work isn't finished.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <img src={iconExplicit} alt="Explicit by default" />
                    <h4>Explicit by default</h4>
                    <p>If it matters, we say it. If it's unclear,<br />we fix it. No one's left guessing.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <img src={iconFinishStrong} alt="Finish strong" />
                    <h4>Finish strong</h4>
                    <p>Promises aren't goals. They're<br />the starting point.</p>
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
    </div>
  );
};

export default About;
