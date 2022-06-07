import React from "react"

import styles from './CreatePost.module.css'
import {useForm} from "react-hook-form";


const CreatePost = (props) => {
    const {register,reset, handleSubmit,formState:{errors,isValid}} = useForm({
        mode:"onChange"
    });
    const onSubmit = data => {
        props.createPost(data.postMessage)
        reset()
    };
    return (
        <div className={styles.createPost}>
            <h2>Создать пост</h2>
            <form className={styles.body} onSubmit={handleSubmit(onSubmit)}>
                <input className={styles.area} {...register('postMessage' ,{
                    maxLength:{
                        value:100,
                        message:'не более 100 символов'
                    }
                })}/>
                <div className={styles.errors}>{errors.postMessage&&<p>{errors.postMessage.message}</p>}</div>
                <input disabled={!isValid} value={'создать пост'} type={"submit"} className={styles.btn_post}/>
            </form>
        </div>


    )
}

export default CreatePost


// import {useForm} from "react-hook-form";
//
//
// const TextArea = (props) => {
//     const {register, handleSubmit} = useForm();
//     const onSubmit = data => {
//         props.createPost(data.textMassage)
//     };
//     return (
//         <form className={styles.body} onSubmit={handleSubmit(onSubmit)}>
//             <input className={styles.massage} type={'textarea'} {...register("textMassage")} />
//             <div className={styles.btn_body}>
//                 <input className={styles.btn} type="submit" defaultValue={'отправить сообщение!'}/>
//
//             </div>
//         </form>
//     )
// }
//
// export default TextArea

