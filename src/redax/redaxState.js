import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import MainContentPageReducer from './MainContentPageReducer'
import MassagePageReducer from './MassagePageReducer'
import NavBarFriendReducer from './NavBarFriendReducer'
import UsersPageReducer from "./UsersPageReducer";
import AuthReducer from "./Autification";
import thunk from 'redux-thunk'
import AppReducer from "./AppReducer";


const redusers = combineReducers({
    MainContentPage: MainContentPageReducer,
    MassagePage: MassagePageReducer,
    NavBarFriend: NavBarFriendReducer,
    UsersPage: UsersPageReducer,
    Auth:AuthReducer,
    App:AppReducer
})


const StoreRedux = createStore(redusers,applyMiddleware(thunk))

window.store = StoreRedux
export default StoreRedux

