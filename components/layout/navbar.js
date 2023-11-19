import styles from "./navbar.module.css"
import { Link, Outlet } from "react-router-dom"
export default function navbar() {
   return (
    <>
      <div className={styles.bg_img}>
        <p className={styles.p_title}>Hello, I'm Waffel.</p>
        <ul className={styles.nav_link}>
            <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width75}>
              <Link to="../pages/home" className={styles.my_link}>Home</Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width75}>
              <Link to="../pages/about" className={styles.my_link}>About</Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width75}>
              <Link to="../pages/posts" className={styles.my_link}>Posts</Link>
            </div>
          </li>
          <li className={styles.nav_link_li}>
            <div className={styles.nav_link_width85}>
              <Link to="../pages/travel" className={styles.my_link}>Travel</Link>
            </div>
          </li>
          
        </ul>
      </div>
      <Outlet />
    </>
    
  )

}
