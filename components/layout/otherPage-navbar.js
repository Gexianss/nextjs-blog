import React, { useState } from 'react'
import styles from './otherPage-navbar.module.css'
import { FaAlignRight } from 'react-icons/fa6'
import Link from 'next/link'

export default function OtherPageNavbar() {
  const [toggleHover, setToggleHover] = useState(false)

  const handleToggleHover = () => {
    setToggleHover(!toggleHover)
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
              <Link href={'/'} className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.li}>
              <Link href={'/about'} className={styles.link}>
                About
              </Link>
            </li>
            <li className={styles.li}>
              <Link href={'/posts'} className={styles.link}>
                Posts
              </Link>
            </li>
            <li className={styles.li}>
              <Link href={'/travel'} className={styles.link}>
                Travel
              </Link>
            </li>
            <li className={styles.li}>
              <Link href={'/changelog'} className={styles.link}>
                Changelog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
