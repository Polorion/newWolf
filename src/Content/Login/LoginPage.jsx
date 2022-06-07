import React from "react";
import {useForm} from "react-hook-form";
import styles from './LoginPage.module.css'
import {connect} from "react-redux";
import {IsAutirezation, LoginPageThunk} from "../../redax/Autification";
import {Navigate} from "react-router";


const LoginPage = (props) => {
    if(props.Auth.isAuth) return <Navigate to={'/Profile'}/>

    return (
        <div className={styles.wraperForm}>
            <h1 className={styles.title}>
                LOGIN
            </h1>

            <FormLogin{...props}/>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        Auth: state.Auth,


    }
}

const Qwer = connect(mapStateToProps,{
    LoginPageThunk,
    IsAutirezation
})(LoginPage)
export default Qwer

const FormLogin = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onChange"
    });
    const onSubmit = data => {
        props.LoginPageThunk(data.Login,data.Password,data.remember)

    };


    return (

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                <p className={styles.text}>Login</p>
                <input className={styles.input} type={'name'} {...register("Login", {
                    required: 'поле обязательно' ,
                    minLength: {
                        value: 3,
                        message: 'минимум 3  символов'
                    }
                })} />
                <div  className={styles.message}>{errors.Login && <p>{errors.Login.message }</p>}</div>
            </label>
            <label>
                <p className={styles.text}>Password</p>
                <input className={styles.input} type={"password"} {...register("Password",{
                    required:'обязательно введите пароль'
                })} />
                <div className={styles.message}>{errors.Password&& <p>{errors.Password.message}</p>}</div>

            </label>
            <label className={styles.chechL}>
                <input type={"checkbox"} {...register("remember")} />
                <span className={styles.checkS}>
                    запомнить?
                </span>

            </label>
            <div className={styles.btn_wrap}>

                <input className={styles.checkS} type="submit"/>

                <div>{props.Auth.errors? props.Auth.errors:''}</div>
            </div>
        </form>
    );
}
