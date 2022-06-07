import React from "react"

import styles from './DialogMassage.module.css'

const DialogMassage = (props) => {
  if (props.data.from === 'me') {
    return (
      <li className={`${styles.right} ${styles.itemli}`}>
        <p className={`${styles.item}`}>{props.data.massage}</p>
        <img src="https://cdn-icons-png.flaticon.com/512/194/194659.png" alt="" />
      </li>
    )
  }
  return (
    <li className={`${styles.left} ${styles.itemli}`}>
      <p className={`${styles.item}`}>{props.data.massage}</p>
      <img src="https://w7.pngwing.com/pngs/30/856/png-transparent-gray-wolf-coyote-computer-icons-blockex-animal-wolf-icon-angle-animals-wolf-thumbnail.png  " alt="" />
    </li>
  )

}

export default DialogMassage
