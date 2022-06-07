import React from "react"

import InfoPerson from "./InfoPerson/infoPerson"
import Avatar from "./Avatar/Avatar"
import styles from './LogoInfo.module.css'

const Logoinfo = (props) => {
    return (
        <div className={styles.ava_info}>
            <Avatar avatar={props.photo.large}/>
            <InfoPerson fullName={props.fullName}
                        aboutMe={props.aboutMe}
                        contacts={props.contacts}
                        lookingForAJob={props.lookingForAJob}
                        lookingForAJobDescription={props.lookingForAJobDescription}
                        status={props.status}
                        UpdateStatusThunk={props.UpdateStatusThunk}
                      />
        </div>
    )
}

export default Logoinfo
