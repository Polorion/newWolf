import React from "react"
import styles from './DialogPeoples.module.css'
import LinkPeople from "./LinkPeople/LinkPeople"
const DialogPeoples = (props) => {


  const AllDialogPeople = props.data.map((e) => <LinkPeople isActive={props.isActive} key={e.id} State={e} IsActiveProfilesMessage={props.IsActiveProfilesMessage} />)

  return (
    <div className={styles.body_peope_dialog}>
      <ul className={styles.list_body}>
        {AllDialogPeople}
      </ul>
    </div>
  )
}

export default DialogPeoples
