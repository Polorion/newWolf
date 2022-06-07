import React from "react"
import styles from './TextArea.module.css'
import {useForm} from "react-hook-form";


const TextArea = (props) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        props.createPost(data.textMassage)
    };
    return (
        <form className={styles.body} onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.massage} type={'textarea'} {...register("textMassage")} />
            <div className={styles.btn_body}>
                <input className={styles.btn} type="submit" defaultValue={'отправить сообщение!'}/>

            </div>
        </form>
    )
}

export default TextArea

