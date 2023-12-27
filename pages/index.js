import React from 'react'
import Navebar from '../components/layout/navbar'
import styles from '../styles/index.module.css'

export default function Index() {
  return (
    <>
      <div className={styles.bg_img}>
        <Navebar />
      </div>
    </>
  )
}
