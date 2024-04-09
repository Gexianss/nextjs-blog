import React, { useState } from 'react'
import styles from '../../css/layout/otherPage-navbar.module.css'
import { FaAlignRight } from 'react-icons/fa6'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

export default function OtherPageNavbar() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const [toggleHover, setToggleHover] = useState(false)

  const handleToggleHover = () => {
    setToggleHover(!toggleHover)
  }

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: section.offsetTop,
          autoKill: true,
        },
      })
    }
  }
  return (
    <>
      <div
        className={styles.nav_box}
        onMouseEnter={handleToggleHover}
        onMouseLeave={handleToggleHover}
      >
        <div className={styles.toggle}>
          <button className={styles.toggle_btn}>
            <FaAlignRight size={30} color="#1F1F1F" />
          </button>
        </div>
        <div className={`${toggleHover ? styles.visible : styles.hidden}`}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <button
                onClick={() => handleNavClick('home')}
                className={styles.link}
              >
                Home
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => handleNavClick('about')}
                className={styles.link}
              >
                About
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => handleNavClick('posts')}
                className={styles.link}
              >
                Posts
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => handleNavClick('travel')}
                className={styles.link}
              >
                Travel
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => handleNavClick('changelog')}
                className={styles.link}
              >
                Changelog
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
