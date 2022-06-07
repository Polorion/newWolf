import {AutorizationThunk} from "./Autification";


const ISSUCSESS = 'ISSUCSESS'

export const IsSucsess = () => {
    return {
        type: ISSUCSESS,

    }
}


const initialStaste = {
    AppSucses: false

}

const AppReducer = (state = initialStaste, action) => {

    switch (action.type) {
        case ISSUCSESS :
            return {
                ...state,
                AppSucses: true,

            }
        default:
            return state
    }

}


export const InitionalaizApp = () => (dispatch) => {
    dispatch(AutorizationThunk())
    dispatch(IsSucsess())
}


export default AppReducer