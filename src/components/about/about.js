import React, { useEffect } from 'react'
import styles from '../../css/about/about.module.css'
import { Image } from 'next/dist/client/image-component'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

export default function About() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    const t = gsap.to(`.${styles.scroll}`, {
      y: -800,
      paused: true,
      ease: 'none',
    })

    ScrollTrigger.create({
      trigger: '#test',
      pin: true,
      start: 'center center',
      end: '+=800',
      pinSpacing: true,
      fastScrollEnd: true,
      onUpdate: (self) => {
        gsap.to(t, { progress: self.progress, duration: 0.2 })
      },
    })
  }, [])
  return (
    <>
      <div id="about">
        <div id="test" className={styles.about_context}>
          <div className={styles.bg_box}>
            <div className={`${styles.main_box}`}>
              <Image
                src="/image/about.jpg"
                width={800}
                height={500}
                alt=""
                className={`${styles.image_style} ${styles.scroll}`}
              />
              <p className={`${styles.main_box_p} ${styles.scroll}`}>
                您好，我叫張溦珊，目前是位剛轉職的前端工程師，會製作這個網頁主要的目的是要分享我轉職的過程，也順便記錄我的生活，希望透過這個網站，讓你們更了解我。
              </p>
              <p className={`${styles.main_box_title} ${styles.scroll}`}>
                我的工作專長
              </p>
              <p className={`${styles.main_box_p} ${styles.scroll}`}>
                程式語言、財務會計、時間管理
              </p>
              <p className={`${styles.main_box_title} ${styles.scroll}`}>
                我擁有的技術
              </p>
              <p className={`${styles.main_box_p} ${styles.scroll}`}>
                前端：Next.js、React.js、HTML、CSS、Bootstrap、Ajax、jQuery
              </p>
              <p className={`${styles.main_box_p} ${styles.scroll}`}>
                後端：Node.js、RESTful API、Mysql
              </p>
              <p className={`${styles.main_box_p} ${styles.scroll}`}>
                語言：JavaScript
              </p>
              <p className={`${styles.main_box_p} ${styles.scroll}`}>
                開發工具：npm、Eslint、Prettier、chart.js、D3.js、gsap
              </p>
              <p className={`${styles.main_box_p} ${styles.scroll}`}>
                版本控制：git、GitHub
              </p>
              <p className={`${styles.main_box_p} ${styles.scroll}`}>
                設計：Figma
              </p>
              <p
                className={`${styles.main_box_p} ${styles.mg_20} ${styles.scroll}`}
              >
                如果你想看更多作品，可以點選我的GitHub。
              </p>
              <Link
                href={'https://github.com/Gexianss'}
                className={styles.scroll}
              >
                <FaGithub className={`${styles.scroll} ${styles.circle_icon}`} />
              </Link>
            </div>

            <div className={styles.circle}>
              <p className={styles.circle_title}>About</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
