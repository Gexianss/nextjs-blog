import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
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
        <ul className={styles.subtitle}>
          <li className={styles.subtitle_li}>SINCE 2023/09</li>
          <li className={styles.subtitle_li}>Tel:0956026922</li>
          <li className={styles.subtitle_li}>E-mail:shiaushen@gmail.com</li>
        </ul>
      </div>
    </>
  );
}
