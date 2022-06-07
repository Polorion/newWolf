import React from "react"
import DialogMassage from "./DialogMassage/DialogMassage"
import styles from './DialogWindow.module.css'

const DialogWindow = (props) => {

  const AllDialog = props.data.map((e) => <DialogMassage key={e.id} data={e} />)
  return (<div className={styles.body}>
    <ul className={styles.list}>
      {AllDialog}
    </ul>
  </div>

  )
}

export default DialogWindow
