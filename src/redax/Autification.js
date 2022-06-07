import HeaderUtilit from "../Utilit/HeaderUtilit";
import LoginUtilit from "../Utilit/LoginUtilit";

const ISACTIVE = 'ISACTIVE'
const CONSOLEERRORS = 'CONSOLEERRORS'

export const IsAutirezation = (id, login, email, isAuth) => {
    return {
        type: ISACTIVE,
        data: {id, login, email, isAuth}
    }
}
export const ConsoleErrors = (data) => {

    return {
        type: CONSOLEERRORS,
        data
    }
}


const initialStaste = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    errors: null
}

const AuthReducer = (state = initialStaste, action) => {

    switch (action.type) {
        case ISACTIVE :
            return {
                ...state,
                ...action.data,

            }
        case CONSOLEERRORS :
            return {
                ...state,
                errors: action.data

            }
        default:
            return state
    }

}


export const AutorizationThunk = () => (dispatch) => {

return  HeaderUtilit.Autirizarion()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(IsAutirezation(id, login, email, true))
            }
        })

}

export const LoginPageThunk = (email, password, remeberMe) => {
    return (dispatch) => {
        LoginUtilit.LoginPage(email, password, remeberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(AutorizationThunk())
                } else {
                    dispatch(ConsoleErrors(data.messages[0]))
                }
            })
    }
}

export const LogoutPageThunk = () => {
    return (dispatch) => {
        LoginUtilit.LogoutPage().then(data => {
            if (data.resultCode === 0) {
                dispatch(IsAutirezation(null, null, null, false))

            }
        })


    }
}
export default AuthReducer