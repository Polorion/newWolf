import React from "react"
import styles from './MainContent.module.css'
import Logoinfo from "./LogoInfo/logoInfo"
import MyPosts from "./MyPosts/MyPosts";



const MainContent = (props) => {

    return (
       <div>
           <div className={styles.body__info}>
               <div className={styles.logoInfo}>
                   <Logoinfo photo={props.data.photos}
                             fullName={props.data.fullName}
                             aboutMe={props.data.aboutMe}
                             contacts={props.data.contacts}
                             lookingForAJob={props.data.lookingForAJob}
                             lookingForAJobDescription={props.data.lookingForAJobDescription}
                             status={props.data.status}
                             UpdateStatusThunk={props.data.UpdateStatusThunk}
                   />
               </div>
               <MyPosts arrayPost={props.data.arrayPost}
                        createPost={props.data.ActionCreatePostMainPage}
                        photo={props.data.photos}
                        fullName={props.data.fullName}/>
           </div>
       </div>

    )
}

export default MainContent
