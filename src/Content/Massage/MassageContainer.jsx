import React from "react"
import {IsActiveProfilesMessage, ActionCreatePostMassage} from "../../redax/MassagePageReducer"
import Massage from './Massage'
import {connect} from "react-redux";
import withAutirization from "../../HOC/WithAutirizationRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogArray: state.MassagePage.dialogArray,
        peopleArray: state.MassagePage.peopleArray,
        areaText: state.MassagePage.areaText,
        isActive: state.MassagePage.isActiveProfile
    }

}

export default compose(
    withAutirization,
    connect(mapStateToProps,
        {
            ActionCreatePostMassage,
            IsActiveProfilesMessage

        })
)(Massage)
