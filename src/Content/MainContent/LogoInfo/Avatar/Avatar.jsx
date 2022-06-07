import React from "react"
import styles from './Avatar.module.css'
import defaultAvata from'../../../../assets/img/avataWolf.jpg'





const Avatar = (props) => {
    console.log(12)
  return (

    <div className={styles.ava_block}>
      <img className={styles.avatar} src={props.avatar?props.avatar: defaultAvata} alt="" />
    </div>

  )
}

export default Avatar
