import styles from "../styles/Home.module.css"
import Link from "next/link"
export default function Home() {
  return (
    <>
      <div className={styles.bg_img}>
        <p className={styles.p_title}>Hello, I'm Waffel.</p>
        <ul className={styles.nav_link}>
          <li className={styles.nav_link_li}><Link href="" className={styles.my_link}>About</Link></li>
          <li className={styles.nav_link_li}><Link href="" className={styles.my_link}>Posts</Link></li>
          <li className={styles.nav_link_li}><Link href="" className={styles.my_link}>Travel</Link></li>
          <li className={styles.nav_link_li}><Link href="" className={styles.my_link}>Changelog</Link></li>
        </ul>
      </div>
    </>
    
  )

}
