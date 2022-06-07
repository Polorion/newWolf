import React from "react"
import FriendsContainer from "./Friends/FriendsContainer"
import NavBarLink from "./NavBarLink/NavBarLink"
import styles from './navbat.module.css'
const Nav = (props) => {
  return (

    <div className={styles.body_nav}>
      <ul className={styles.nav__list}>
        <NavBarLink from='/Profile' title='моя страница' />
        <NavBarLink from='/News' title='новости' />
        <NavBarLink from='/Massage' title='сообщения' />
        <NavBarLink from='/Photo' title='фото' />
        <NavBarLink from='/Users' title='пользователи' />
        <NavBarLink from='/Groups' title='группы' />
        <NavBarLink from='/Frends' title='друзья' />

      </ul >
      <FriendsContainer  />
    </div >
  )
}

export default Nav