import { useRef, useEffect, useState } from 'react'
import styles from '../../css/layout/mainPage-navbar.module.css'
// import Link from 'next/link'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about')
      const postsSection = document.getElementById('posts')
      const travelSection = document.getElementById('travel')
      const changelogSection = document.getElementById('changelog')

      const scrollPosition = window.scrollY + window.innerHeight / 2

      if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection('about')
      } else if (postsSection && scrollPosition >= postsSection.offsetTop) {
        setActiveSection('posts')
      } else if (travelSection && scrollPosition >= travelSection.offsetTop) {
        setActiveSection('travel')
      } else if (
        changelogSection &&
        scrollPosition >= changelogSection.offsetTop
      ) {
        setActiveSection('changelog')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <div className={styles.nav_box}>
        <ul className={styles.nav_link}>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width70}>
              <button
                onClick={() => handleNavClick('about')}
                className={styles.my_link}
              >
                About
              </button>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width70}>
              <button
                onClick={() => handleNavClick('posts')}
                className={styles.my_link}
              >
                Posts
              </button>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width85}>
              <button
                onClick={() => handleNavClick('travel')}
                className={styles.my_link}
              >
                Travel
              </button>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width85}>
              <button
                onClick={() => handleNavClick('changelog')}
                className={styles.my_link}
              >
                Changelog
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
