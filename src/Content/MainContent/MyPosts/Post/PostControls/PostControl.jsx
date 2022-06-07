import React from "react"
import styles from './PostControl.module.css'



const PostControl = (props) => {
  return (
    <div className={styles.postControl}>
      <div className={styles.control_center}>
        <p>Likes</p>
        <div className={styles.postControl_btn}>
          <button className={`${styles.btn_contol} ${styles.likeUp}`}>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="10px" height="10px" viewBox="0 0 1280.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet">
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M3145 12785 c-49 -17 -90 -62 -104 -112 -8 -26 -11 -697 -11 -2145
l0 -2108 -1275 0 c-1049 0 -1281 -2 -1308 -14 -78 -32 -124 -132 -97 -208 13
-36 5793 -6786 5841 -6821 40 -29 111 -34 161 -11 34 15 291 315 1633 1909
876 1039 2153 2556 2839 3370 687 814 1260 1497 1274 1518 47 71 28 168 -45
224 l-36 28 -1294 3 -1293 2 0 2134 0 2133 -23 34 c-12 19 -42 44 -67 57 l-44
22 -3056 0 c-2607 -1 -3061 -3 -3095 -15z"/>
              </g>
            </svg>

          </button>
          <div className={styles.count} >{props.likes}</div>
          <button className={`${styles.btn_contol} ${styles.likeDown}`}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="10px" height="10px" viewBox="0 0 1280.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet">
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M3145 12785 c-49 -17 -90 -62 -104 -112 -8 -26 -11 -697 -11 -2145
l0 -2108 -1275 0 c-1049 0 -1281 -2 -1308 -14 -78 -32 -124 -132 -97 -208 13
-36 5793 -6786 5841 -6821 40 -29 111 -34 161 -11 34 15 291 315 1633 1909
876 1039 2153 2556 2839 3370 687 814 1260 1497 1274 1518 47 71 28 168 -45
224 l-36 28 -1294 3 -1293 2 0 2134 0 2133 -23 34 c-12 19 -42 44 -67 57 l-44
22 -3056 0 c-2607 -1 -3061 -3 -3095 -15z"/>
              </g>
            </svg>
          </button>
        </div>
      </div>

    </div>


  )
}

export default PostControl
