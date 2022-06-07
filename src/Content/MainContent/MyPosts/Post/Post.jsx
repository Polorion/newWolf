import React from "react"
import styles from './Post.module.css'
import PostControl from "./PostControls/PostControl"
import defaultAvata from'../../../../assets/img/avataWolf.jpg'


const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_border} >
        <img className={styles.postAva} src={props.photo.small?props.photo.small:defaultAvata} alt="" />

        <div className={styles.post_body}>
          <p className={styles.name}><span className={styles.who}>создатель</span>: {props.fullName}</p>
          <p className={styles.post_text}>{props.data.massage}</p>
          <PostControl likes = {props.data.likes} />

        </div>
      </div>
    </div>


  )
}

export default Post
