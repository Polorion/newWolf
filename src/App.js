import './App.css';
import Content from './Content/content';
import React from "react";
import HeaderContainer from "./Header/headerContainer";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {InitionalaizApp} from "./redax/AppReducer";
import {AutorizationThunk} from "./redax/Autification";


class App extends React.Component {


    componentDidMount() {

        this.props.InitionalaizApp()

    }

    render() {
        if (this.props.IsInicialized) {

            return (
                <div style={{minHeight: '100vh'}} className='wrapper'>
                    <BrowserRouter>
                        <HeaderContainer/>
                        <Content/>
                    </BrowserRouter>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        IsInicialized: state.App.AppSucses
    }
}

export default connect(mapStateToProps, {InitionalaizApp})(App);



