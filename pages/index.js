import React from 'react'
import MainPageNavebar from '../components/layout/mainPage-navbar'
import Footer from '../components/layout/footer'
import styles from '../styles/index.module.css'

export default function Index() {
  return (
    <>
      <div className={styles.bg_img}>
        <p className={styles.p_title}>Hello, I&rsquo;m Waffel.</p>
        <MainPageNavebar />
        <Footer />
      </div>
    </>
  )
}
