import React from "react"
import styles from "./PersonName.module.css"



const PersonName = (props) => {

  return (
    <div className={styles.fio_person}>
        {props.fullName}
    </div>
    
  )
}

export default PersonName
