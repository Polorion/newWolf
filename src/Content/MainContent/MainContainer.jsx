import React from 'react'
import MainContent from "./MainContent";
import {connect} from "react-redux";
import {
    ActionCreatePostMainPage,
    GetProfileThunk, GetStatusThunk, UpdateStatusThunk,
} from "../../redax/MainContentPageReducer";
import withAutirization from "../../HOC/WithAutirizationRedirect";
import {compose} from "redux";
import TakeParams from "../../HOC/TakeParams";

class MainContainerClass extends React.Component {
    componentDidMount() {

        let userId = this.props.param['*']
        if (!userId) {
            userId = this.props.idProfile


        }
        this.props.GetProfileThunk(userId)

        this.props.GetStatusThunk(userId)
    }

    render() {

        return <MainContent data={this.props}/>
    }

}


const mapStateToProps = (state) => {

    return {
        arrayPost: state.MainContentPage.arrayPost,
        textCurrentValue: state.MainContentPage.areaText,
        photos: state.MainContentPage.photos,
        fullName: state.MainContentPage.fullName,
        aboutMe: state.MainContentPage.aboutMe,
        contacts: state.MainContentPage.contacts,
        lookingForAJob: state.MainContentPage.lookingForAJob,
        lookingForAJobDescription: state.MainContentPage.lookingForAJobDescription,
        status: state.MainContentPage.status,
        idProfile: state.Auth.id
    }
}


export default compose(
    TakeParams,
    withAutirization,
    connect(mapStateToProps, {
        ActionCreatePostMainPage,
        GetProfileThunk,
        GetStatusThunk,
        UpdateStatusThunk
    }),
)(MainContainerClass)

