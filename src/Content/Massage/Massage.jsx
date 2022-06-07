import React from "react"
import DialogPeoples from "./DialogPeoples/DialogPeoples"
import DialogWindow from "./DialogWindow/DialogWindow"

import styles from './Massage.module.css'
import TextArea from "./TextArea/TextArea"


const Massage = (props) => {

    console.log(props)
    return (

        <div className={styles.dialog_window}>
            <div className={styles.dialogs}>
                <DialogPeoples isActive={props.isActive} data={props.peopleArray}
                               IsActiveProfilesMessage={props.IsActiveProfilesMessage}/>
                <DialogWindow data={props.dialogArray}/>
            </div>
            <div className={styles.textarea}>
                <TextArea createPost={props.ActionCreatePostMassage} textArea={props.areaText}/>
            </div>
        </div>
    )
}

export default Massage
