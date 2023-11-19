import styles from "../styles/Home.module.css"
import Link from "next/link"
export default function Home() {
  return (
    <>
      <div className={styles.bg_img}>
        <p className={styles.p_title}>Hello, I'm Waffel.</p>
        <ul className={styles.nav_link}>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width75}>
              <Link href="" className={styles.my_link}>About</Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
          <div className={styles.nav_link_width75}>

            <Link href="" className={styles.my_link}>Posts</Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
          <div className={styles.nav_link_width85}>

            <Link href="" className={styles.my_link}>Travel</Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
          <div className={styles.nav_link_width85}>

            <Link href="" className={styles.my_link}>Changelog</Link>
</div>
          </li>
        </ul>
      </div>
    </>
    
  )

}
