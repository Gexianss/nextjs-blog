import React, { useEffect, useState, useRef } from 'react'
import MainPageNavebar from '../src/components/layout/mainPage-navbar'
import OtherPageNavbar from '../src/components/layout/otherPage-navbar'
import Footer from '../src/components/layout/footer'
import styles from '../styles/index.module.css'
import About from '../src/components/about/about'
import Posts from '../src/components/posts/posts'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

export default function Index() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const aboutRef = useRef(null)
  const [showNavebar, setShowNavebar] = useState(false)
  const [showOtherPageNavbar, setShowOtherPageNavbar] = useState(false)

  //index的動畫顯示
  useEffect(() => {
    const background = gsap.timeline()

    // 第一步：從初始狀態開始，包括背景圖片、字體大小、文本填充、文本描邊等
    background.fromTo(
      `.${styles.bg_img}`, // 使用元素的標籤名來選擇元素
      {
        fontSize: '550px',
        textAlign: 'center',
        lineHeight: '100vh',
        fontWeight: 'bold',
        color: 'transparent',
        backgroundClip: 'text',
        webkitBackgroundClip: 'text',
        webkitTextStroke: '10px rgb(170, 255, 0)',
      },
      {
        // 第二步：到達最終狀態，包括背景位置、高度等
        height: '100vh',
        backgroundPosition: '0px -150px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        // 動畫持續時間
        duration: 2,
        // onComplete 回調函數，在動畫完成後執行
        onComplete: () => {
          // 第三步：移除文本描邊和文本填充效果
          gsap.to(`.${styles.bg_img}`, {
            duration: 2,
            css: {
              '-webkit-background-clip': 'initial',
              'background-clip': 'initial',
              '-webkit-text-stroke': 'initial',
              'font-size': 'initial',
            },
          })
          // 添加額外內容
          setShowNavebar(true)
          setShowOtherPageNavbar(true)
        },
      }
    )
  }, [setShowNavebar, setShowOtherPageNavbar])

  

  return (
    <>
      <div className={styles.index_grid} id="home">
        <div className={styles.bg_img}>Waffel</div>
        {showNavebar && (
          <>
            <p className={styles.p_title}>Hello, I&apos;m Waffel.</p>
            <MainPageNavebar />
            <Footer />
          </>
        )}
      </div>

      <About ref={aboutRef} />
      {showOtherPageNavbar && <OtherPageNavbar />}
      <div className={styles.index_grid}>
        <Posts />
      </div>
    </>
  )
}
