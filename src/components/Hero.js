import React from 'react';
import styles from './Hero.module.scss';
import homeHeroImg from '../assests/images/home-hero.CYi88F0I_ZFsdSb.avif';
import stoneLeftImg from '../assests/images/stone-left.bG7f73ao_1lPivh.avif';
import stoneRightImg from '../assests/images/stone-right.BqSV2gNF_osri8.avif';


const Hero = () => {
  const words = ["The", "all-in-one", "platform", "for", "financial", "advisers"];

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgTopGradient}></div>
      <div className={styles.bgBottomGradient}></div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textCenter}>
            <h1 className={styles.title}>
              {words.map((word, index) => (
                <span 
                  key={index} 
                  className={styles.heroWord}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </h1>
            <p className={styles.subtitle}>
              AI-powered practice management available now - with integrated custody and execution launching soon.
            </p>

            <div className={styles.ctaWrapper}>
              <button className={styles.ctaButton}>
                Get Started For Free
              </button>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <picture className={styles.heroPicture}>
          <source srcSet={homeHeroImg} type="image/avif" />
          <img
            className={styles.heroImg}
            src={homeHeroImg}
            alt="The all-in-one platform for financial advisers"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* Stone decorations */}
      <picture className={`${styles.stoneDecor} ${styles.stoneLeft}`}>
        <source srcSet={stoneLeftImg} type="image/avif" />
        <img src={stoneLeftImg} alt="Stone Left" />
      </picture>
      <picture className={`${styles.stoneDecor} ${styles.stoneRight}`}>
        <source srcSet={stoneRightImg} type="image/avif" />
        <img src={stoneRightImg} alt="Stone Right" />
      </picture>
    </section>
  );
};

export default Hero;
