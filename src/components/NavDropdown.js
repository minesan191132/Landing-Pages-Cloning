import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavDropdown.module.scss';

export default function NavDropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Intent delay
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Khóa cuộn trang khi panel đang mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={styles.dropdownContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={styles.navBtn}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div className={`${styles.dropdownPanel} ${isOpen ? styles.panelOpen : ""}`} role="menu">
        <div className={styles.dropdownGrid}>
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className={styles.dropdownItem}
              role="menuitem"
            >
              <div className={styles.imageCard}>
                {child.image ? (
                  <img src={child.image} alt={child.title} className={styles.navImage} />
                ) : (
                  <div className={styles.mockImage}></div>
                )}
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.title}>{child.title}</h3>
                <p className={styles.description}>{child.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

