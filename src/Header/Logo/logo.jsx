import React from "react"
import styles from './logo.module.css'
const Logo = () => {

  return (
    <div className={styles.header_body}>
      <img className={styles.logo_img} src='https://papik.pro/uploads/posts/2021-11/thumbs/1636175023_2-papik-pro-p-volk-logotip-foto-2.png' alt="" />
      <div className={styles.logo_name}> Волксеть </div>

    </div>
  )
}

export default Logo