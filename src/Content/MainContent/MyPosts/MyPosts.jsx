import React from "react"
import styles from './MyPosts.module.css'
import CreatePost from "./Post/CreatePost/CreatePost"
import Post from "./Post/Post"


const MyPosts = (props) => {

    const AllPost = props.arrayPost.map((e) => <Post key={e.id} data={e} photo={props.photo}  fullName={props.fullName}/>)

    return (

        < div className={styles.body_allPost}>
            <CreatePost createPost={props.createPost}
                       />
            {AllPost}
        </div>
    )
}

export default MyPosts
