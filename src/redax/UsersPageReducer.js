import UsersUtilit from "../Utilit/UsersUtilit";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETDATA = 'SETDATA'
const SETPAGE = 'SETPAGE'
const SETUSERS = 'SETUSERS'
const ISFETCHING = 'ISFETCHING'
const ISFOLLOWING = 'ISFOLLOWING'

export const followAC = (userId) => {

    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }

}
export const setDataAC = (data) => {
    return {
        type: SETDATA,
        users: data,
    }
}

export const setPageAC = (page) => {
    return {
        type: SETPAGE,
        currentPage: page,
    }

}
export const setUsersAC = (users) => {
    return {
        type: SETUSERS,
        allUsers: users,
    }

}
export const isFetchingAC = (fetch) => {
    return {
        type: ISFETCHING,
        isFetching: fetch,
    }

}


export const isFolowing = (bol, id) => {
    return {
        type: ISFOLLOWING,
        isFolowing: bol,
        id
    }
}

const initialState = {
    users: [],
    allUsers: 0,
    renderUsers: 10,
    CountPaginator:10,
    portionClient:10,
    currentPage: 1,
    isFething: false,
    following: [],
    data: 0
}


const helpFollowUnfollowReduser = (user, propName, itemId, newObj) => {
   return  user.map((el) => {
        if (el[propName] === itemId) {
            return {
                ...el,
                ...newObj
            }
        }
        return el
    })
}

const UsersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: helpFollowUnfollowReduser(state.users,'id',action.userId,{ followed: true})
            }


        case UNFOLLOW :
            return {
                ...state,
                users: helpFollowUnfollowReduser(state.users,'id',action.userId,{ followed: false})
            }
        case SETDATA: {
            return {
                ...state, users: action.users
            }
        }
        case SETPAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case ISFOLLOWING: {
            return {
                ...state,
                following: action.isFolowing ?
                    [...state.following, action.id]
                    :
                    state.following.filter(el => el !== action.id)
            }
        }
        case SETUSERS: {
            return {
                ...state, allUsers: action.allUsers
            }
        }
        case ISFETCHING: {
            return {
                ...state, isFething: action.isFetching
            }
        }
        default:
            return state
    }

}


export const GetUsersThunk = (currentPage, renderUsers = initialState.renderUsers) => {
    return (dispatch) => {

        dispatch(isFetchingAC(true))
        UsersUtilit.GetUsers(currentPage, renderUsers)
            .then(data => {
                dispatch(setDataAC(data.items))
                dispatch(setUsersAC(data.totalCount))
                dispatch(setPageAC(currentPage))
                dispatch(isFetchingAC(false))
            })
    }
}


const FollowUnFollowFlow = async (dispatch, id, method, rezultAC) => {
    dispatch(isFolowing(true, id))
    const response = await method(id)
    if (response.resultCode === 0) {
        dispatch(rezultAC(id))
    }
    dispatch(isFolowing(false, id))

}

export const UnFollowThunk = (id) => {
    return async (dispatch) => {
        FollowUnFollowFlow(dispatch, id, UsersUtilit.UnFollow.bind(UsersUtilit), unfollowAC)

    }
}

export const FollowThunk = (id) => {
    return async (dispatch) => {
        FollowUnFollowFlow(dispatch, id, UsersUtilit.Follow.bind(UsersUtilit), followAC)
    }
}


export default UsersPageReducer