import styles from "./PersonData.module.css"


import React, {useEffect, useState} from "react";

const StatusFunc = (props) => {

    const [State, SetState] = useState(true)

    const [Status, SetStatus] = useState(props.status)

    useEffect(() => {
        SetStatus(props.status)
    })


    const isActiveEdit = () => {
        SetState(false)
    }

    const isDeActiveEdit = () => {
        SetState(true)
        props.UpdateStatusThunk(Status)
    }
    const changeState = (e) => {
        SetStatus(e.currentTarget.value)


    }

    return (

        <div>
            {State ?
                <span
                    onClick={isActiveEdit}>{props.status ? props.status : '-----'}</span> :


                <input autoFocus={true} onBlur={isDeActiveEdit} onChange={changeState}
                       className={styles.test} defaultValue={Status} type="text"/>
            }
        </div>)

}

export default StatusFunc