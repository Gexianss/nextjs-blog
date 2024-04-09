// import { useRef, useEffect } from 'react'
import styles from '../../css/layout/mainPage-navbar.module.css'
// import Link from 'next/link'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Navbar() {
  return (
    <>
      <div className={styles.nav_box}>
        <ul className={styles.nav_link}>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width70}>
              <a href={'#about'} className={styles.my_link}>
                About
              </a>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width70}>
              <a href={'#posts'} className={styles.my_link}>
                Posts
              </a>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width85}>
              <a href={'#travel'} className={styles.my_link}>
                Travel
              </a>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width85}>
              <a href={'#changelog'} className={styles.my_link}>
                Changelog
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
