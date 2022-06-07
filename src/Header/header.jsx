import React from "react"
import styles from './header.module.css'
import Logo from "./Logo/logo"
import Seacrh from "./Search/seacrch"
import Login from "./Login/login";
const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.container_header}`}>
        <Logo />
        {/*<Seacrh />*/}
        <Login isAuth={props.Auth.isAuth}
        login={props.Auth.login}
               LogoutPageThunk={props.LogoutPageThunk}/>
      </div>

    </div>
  )
}

export default Header