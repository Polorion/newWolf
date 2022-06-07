import React from "react";
import {useParams} from "react-router";

const TakeParams = (Component) => {
    const Params = (props) => {
        return (
            <Component {...props} param={useParams()}/>

        )
    }
    return Params
}

export default TakeParams