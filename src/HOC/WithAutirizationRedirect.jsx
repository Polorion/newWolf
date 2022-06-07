import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router";
const mapStateToProps =(state)=>{
    return{
        auth: state.Auth.isAuth
    }
}

const withAutirization = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) return <Navigate to="/login" />
            return (
                <Component {...this.props}/>
            )
        }
    }
    const witchAutorizationComponent = connect(mapStateToProps)(RedirectComponent)
    return witchAutorizationComponent
}


export default withAutirization