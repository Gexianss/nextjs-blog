import styles from '../../css/layout/mainPage-navbar.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'


export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
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
