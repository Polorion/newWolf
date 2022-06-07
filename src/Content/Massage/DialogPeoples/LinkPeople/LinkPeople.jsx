import React from "react"
import {NavLink} from "react-router-dom"
import styles from './LinkPeople.module.css'

const LinkPeople = (props) => {
    console.log(props)
    return (

        <li className={styles.nav__item}>
            <NavLink className={props.isActive.some(e => e === props.State.id) ? styles.active : 'styles.noActive'}
                     onClick={() => {
                         props.IsActiveProfilesMessage(props.State.id)
                     }} to={`Massage/${props.State.id}`}>
                <img className={styles.img} src={`${props.State.img}`} alt=""/>
                {props.State.name}
            </NavLink>

        </li>


    )
}

export default LinkPeople
