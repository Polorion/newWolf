import React from "react"
import { NavLink } from "react-router-dom"
import styles from './Friend.module.css'


const Friend = (props) => {
  return (

      <NavLink className={styles.link} to={`idfrend/${props.data.id}`} >
      <p>{props.data.name}</p>
      <img className={styles.img} src={props.data.avatar} alt="" />
      </NavLink>

  )
}

export default Friend