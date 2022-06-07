import React from "react"
import Friends from "./Friends"
import {connect} from "react-redux";


const f1 = (state) => {
    return {
        state: state.NavBarFriend
    }
}

const FriendsContainer = connect(f1)(Friends)

export default FriendsContainer