import React from "react"
import Friend from "./Friend/Friend"
import styles from './Friends.module.css'

const Friends = (props) => {

    const friend = props.state.Friends.map((e) => <Friend key={e.id} data={e}/>)
    return (

        <div>
          <div className={styles.title}> Friends</div>
          <div className={styles.body}>
            {friend}
          </div>
        </div>
    )
}

export default Friends