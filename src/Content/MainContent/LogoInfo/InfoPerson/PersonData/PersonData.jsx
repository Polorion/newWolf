import React from "react"
import styles from "./PersonData.module.css"
import {Link} from "react-router-dom";
import Status from "./Status";
import StatusFunc from "./StatusFunction";


const PersonData = (props) => {
    return (
        <div className={styles.info_person}>
            <StatusFunc status={props.status}  UpdateStatusThunk={props.UpdateStatusThunk}/>
            <div>
                о бо мне: {props.aboutMe}
            </div>
            <ul>
                <li>мои контакты</li>
                <li>facebook:<Link to={`${props.contacts.facebook}`}>{props.contacts.facebook}</Link></li>
                <li>github:<Link to={`${props.contacts.github}`}>{props.contacts.github}</Link></li>
                <li>instagram:<Link to={`${props.contacts.instagram}`}>{props.contacts.instagram}</Link></li>
                <li>mainLink:<Link to={`${props.contacts.mainLink}`}>{props.contacts.mainLink}</Link></li>
                <li>twitter:<Link to={`${props.contacts.twitter}`}>{props.contacts.twitter}</Link></li>
                <li>vk:<Link to={`${props.contacts.vk}`}>{props.contacts.vk}</Link></li>
                <li>website:<Link to={`${props.contacts.website}`}>{props.contacts.website}</Link></li>
                <li>youtube:<Link to={`${props.contacts.youtube}`}>{props.contacts.youtube}</Link></li>
            </ul>

            <div className={styles.birthday}>
                Дата рождения:17.02.2022
            </div>
            <div className={styles.o}>
                who are you :i'm a wolf
            </div>
            <div className={styles.Job}>
                в поиске работы <span className={props.lookingForAJob?styles.active:styles.noActive}></span>
            </div>
            <div>
                что я ищу: {props.lookingForAJobDescription}
            </div>
        </div>

    )
}

export default PersonData
