import { useRef, useEffect } from 'react'
import styles from '../../css/layout/mainPage-navbar.module.css'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import AboutSection from '../about/about'
export default function Navbar() {

  gsap.registerPlugin(ScrollTrigger)

  const aboutRef = useRef(null)

  useEffect(() => {
    gsap.utils.toArray([aboutRef]).forEach((section) => {
      ScrollTrigger.create({
        trigger: section.current,
        start: 'top center',
        end: 'bottom center',
        toggleClass: {
          targets: section.current,
          className: 'active',
        },
      })
    })
  }, [])

  const scrollToRef = (ref) => {
    if (ref.current) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: ref.current.offsetTop,
          autoKill: false,
        },
      })
    }
  }

  return (
    <>
      <div className={styles.nav_box}>
        <ul className={styles.nav_link}>
          <li className={styles.nav_link_li}>
            <div
              className={styles.nav_link_width70}
              onClick={() => scrollToRef(aboutRef)}
              onKeyDown={() => { }}
              role="button"
              tabIndex={0}
            >
              <div className={styles.my_link}>About</div>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width70}>
              <Link href={'#posts'} className={styles.my_link}>
                Posts
              </Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width85}>
              <Link href={'#travel'} className={styles.my_link}>
                Travel
              </Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width85}>
              <Link href={'#changelog'} className={styles.my_link}>
                Changelog
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <AboutSection ref={aboutRef} />
    </>
  )
}
