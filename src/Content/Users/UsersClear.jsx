import React from 'react'

import CreateUser from "./CreateUser/CreateUser";
import Pagination from "./Paginator";


const UsersClear = (props) => {


    return <>
        <div>
            <Pagination currentPage={props.currentPage}
                        changePages={props.changePages}
                        allUsers={props.allUsers}
                        renderUsers={props.renderUsers}
                        contPagination={props.countPagination}
            />
        </div>
        {props.users.map((el) => {
            return <CreateUser key={el.id} data={el} ChangeFollowFalse={props.ChangeFollowFalse}
                               FollowThunk={props.FollowThunk}
                               UnFollowThunk={props.UnFollowThunk}
                               isFolowingDiz={props.isFolowingDiz}

            />

        })}
    </>
}
export default UsersClear





