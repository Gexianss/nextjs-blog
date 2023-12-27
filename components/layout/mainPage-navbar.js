import styles from './mainPage-navbar.module.css'
import Link from 'next/link'
export default function navbar() {
  return (
    <>
      <div>
        
        <ul className={styles.nav_link}>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width70}>
              <Link href={'/about'} className={styles.my_link}>
                About
              </Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width70}>
              <Link href={'/posts'} className={styles.my_link}>
                Posts
              </Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width85}>
              <Link href={'/travel'} className={styles.my_link}>
                Travel
              </Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width85}>
              <Link href={'/cjangelog'} className={styles.my_link}>
                Changelog
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
