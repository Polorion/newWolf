import React from 'react'
import {connect} from "react-redux";
import {
    GetUsersThunk,
    UnFollowThunk,
    isFolowing,
    FollowThunk,
} from "../../redax/UsersPageReducer";
import UsersClear from "./UsersClear";
import UsersUtilit from "../../Utilit/UsersUtilit";
import {
    getAllUsers, getCountPagination,
    getCurrentPage,
    getIsFething,
    getIsFolowingDiz,
    getRenderUsers, getUsers,

} from "../../redax/UsersSelector";
import LoaderCircle from "../../loder";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.GetUsersThunk(this.props.currentPage, this.props.renderUsers)
    }

    changePages = (p) => {
        this.props.GetUsersThunk(p, this.props.renderUsers)

    }

    render() {
        return <>
            <div>
                {this.props.isFething ? <LoaderCircle/> : ''}
            </div>
            <UsersClear
                FollowThunk={this.props.FollowThunk}
                UnFollowThunk={this.props.UnFollowThunk}
                allUsers={this.props.allUsers}
                renderUsers={this.props.renderUsers}
                users={this.props.users}
                ChangeFollowFalse={this.props.unfollowAC}
                ChangeFollowTrue={this.props.followAC}
                currentPage={this.props.currentPage}
                changePages={this.changePages}
                UsersUtilit={UsersUtilit}
                isFolowing={this.props.isFolowing}
                isFolowingDiz={this.props.isFolowingDiz}
                countPagination={this.props.paginationCount}

            />
        </>
    }

}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        allUsers: getAllUsers(state),
        renderUsers: getRenderUsers(state),
        currentPage: getCurrentPage(state),
        isFething: getIsFething(state),
        isFolowingDiz: getIsFolowingDiz(state),
        paginationCount: getCountPagination(state)
    }
}

const UsersContainer = connect(mapStateToProps, {

    isFolowing,
    GetUsersThunk,
    UnFollowThunk,
    FollowThunk,


})(UsersAPIComponent)


export default UsersContainer