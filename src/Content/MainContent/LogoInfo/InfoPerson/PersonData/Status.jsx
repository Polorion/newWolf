import styles from "./PersonData.module.css"


import React from "react";

class Status extends React.Component {

    state = {
        StatusEdit: false,
        status: this.props.status,
    }


    isActiveEdit = () => {
        this.setState({
            StatusEdit: true
        })

    }

    isDeActiveEdit = () => {

        this.setState({
            StatusEdit: false
        })
        this.props.UpdateStatusThunk(this.state.status)
    }

    changeState = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps)

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })

        }
    }



    render() {
        return (

            <div>
                {!this.state.StatusEdit ?
                    <span
                        onClick={this.isActiveEdit}>{this.props.status ? this.props.status : '-----'}</span> :
                    <input onChange={this.changeState} autoFocus={true} onBlur={this.isDeActiveEdit}
                           className={styles.test} defaultValue={this.state.status} type="text"/>
                }
            </div>)
    }
}

export default Status