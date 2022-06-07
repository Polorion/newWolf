import React from "react"
import styles from "./infoPerson.module.css"
import PersonData from "./PersonData/PersonData"
import PersonName from "./PersonName/PersonName"
import Logoinfo from "../logoInfo";


const InfoPerson = (props) => {

    return (
        <div className={styles.info_person}>
            <PersonName fullName={props.fullName}/>
            <PersonData aboutMe={props.aboutMe}
                        contacts={props.contacts}
                        lookingForAJob={props.lookingForAJob}
                        lookingForAJobDescription={props.lookingForAJobDescription}
                        status={props.status}
                        UpdateStatusThunk={props.UpdateStatusThunk}
                      />
        </div>

    )
}

export default InfoPerson
