import React from "react"
import { NavLink } from "react-router-dom"
import styles from './login.module.css'
const Login = (props) => {
  return (
   <div>{props.isAuth?
       <button onClick={()=>{props.LogoutPageThunk()}} className={styles.btn} >Logout</button>:
       <NavLink className={styles.btn} to={'/login'}>Login</NavLink>}</div>
  )
}

export default Login