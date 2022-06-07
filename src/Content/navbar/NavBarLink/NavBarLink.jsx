import React from "react"
import { NavLink } from "react-router-dom"
import styles from './NavBarLink.module.css'
const NavBarLink = (props) => {

  return (

    <li className={styles.nav__item}>
      <NavLink className={ navData => navData.isActive ? `${styles.active}` : `${styles.nav__link}`
      } to={`${props.from}`}
      
      >{props.title}
      </NavLink>

    </li>


  )
}

export default NavBarLink
