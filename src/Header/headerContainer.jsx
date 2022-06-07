import React from "react"
import {connect} from "react-redux";
import Header from "./header";
import {LogoutPageThunk} from "../redax/Autification";



class HeaderContainerClass extends React.Component {



    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth,

    }
}

const HeaderContainer = connect(mapStateToProps, {
    LogoutPageThunk
})(HeaderContainerClass)

export default HeaderContainer