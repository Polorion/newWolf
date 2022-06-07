import React from 'react'
import styles from './CreateUser.module.css'
import avatar from '../../../assets/img/wolf.jpg'
import {NavLink} from "react-router-dom";


const CreateUser = (props) => {
    return (
        <div className={styles.body}>

            <div className={styles.avatar_btn}>
                <NavLink to={`/Profile/${props.data.id}`}>
                    <img src={props.data.photos.large ? props.data.photos.large : avatar}
                         className={props.data.followed ? ` ${styles.avatar}  ${styles.active}` : ` ${styles.avatar}`
                         }/>
                </NavLink>
                <span className={styles.span_btn}>{props.data.followed ?
                    <button disabled={props.isFolowingDiz.some(id => id === props.data.id)} onClick={() => {
                       props.UnFollowThunk(props.data.id)
                    }}>
                        отписаться</button> :
                    <button disabled={props.isFolowingDiz.some(id => id === props.data.id)} onClick={() => {
                       props.FollowThunk(props.data.id)
                    }}>подписаться</button>}</span>
            </div>
            <div className={styles.infoPerson}>
                <div className={styles.left}>
                    <div className={styles.name}>{props.data.name}</div>
                    <div className={styles.old}> лет</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.city}>Город</div>
                    <div className={styles.untry}> Страна</div>
                </div>
            </div>
        </div>
    )

}

export default CreateUser