import {createSelector} from "reselect";


const getUserSelector =(state)=>{
    return  state.UsersPage.users
}

export const getUsers =  createSelector(getUserSelector,(users)=>{
    return users.filter(u=>true)
})

export const getAllUsers =(state)=>{
    return  state.UsersPage.allUsers
}
export const getRenderUsers =(state)=>{
    return  state.UsersPage.renderUsers
}
export const getCurrentPage =(state)=>{
    return  state.UsersPage.currentPage
}
export const getIsFething =(state)=>{
    return  state.UsersPage.isFething
}
export const getIsFolowingDiz =(state)=>{
    return  state.UsersPage.following
}
export const getCountPagination =(state)=>{
    return  state.UsersPage.portionClient
}



