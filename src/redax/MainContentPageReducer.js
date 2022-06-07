
import MainContentUtilit from "../Utilit/MainContentUtilit";

const CREATEPOSTMAIN = 'createPost'
const SETPHOTO = 'SETPHOTO'
const SETFULLNAME = 'SETFULLNAME'
const SETABOUTME = 'SETABOUTME'
const SETCONTACT = 'SETCONTACT'
const SETLOOKJOB = 'SETLOOKJOB'
const SETJOBFOR = 'SETJOBFOR'
const SETID = 'SETID'
const SETSTATUS = 'SETSTATUS'
const DELETPOST = 'DELETPOST'

export const ActionCreatePostMainPage = (post) => {
    return {
        type: CREATEPOSTMAIN,
        post
    }
}
export const DeletePost = (id) => {
    return {
        type: DELETPOST,
        id
    }
}
export const SetLookJob = (bol) => {
    return {
        type: SETLOOKJOB,
        value: bol
    }
}
export const SetJobFor = (text) => {
    return {
        type: SETJOBFOR,
        text
    }
}
export const SetId = (id) => {
    return {
        type: SETID,
        id
    }
}

export const SetPhotos = (data) => {
    return {
        type: SETPHOTO,
        photo: data
    }
}
export const SetFullName = (name) => {
    return {
        type: SETFULLNAME,
        name
    }
}
export const SetAboutMe = (info) => {
    return {
        type: SETABOUTME,
        infoMe: info
    }
}
export const SetContact = (contact) => {

    return {
        type: SETCONTACT,
        q: contact
    }
}
export const SetStatus = (statusText) => {
    return {
        type: SETSTATUS,
        statusText
    }
}

const initialState = {

    arrayPost: [
        {
            id: '',
            name: '',
            img: '',
            massage: 'Hello',
            likes: '10'
        },


    ],
    areaText: '',
    aboutMe: 'me',
    contacts: {
        facebook: '',
        github: '',
        instagram: '',
        mainLink: '',
        twitter: '',
        vk: '',
        website: '',
        youtube: ''
    },
    fullName: '',
    lookingForAJobDescription: '',
    lookingForAJob: '',
    photos: {
        large: "",
        small: '',
    },
    userId: '',
    status: ''
}


const MainContentPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEPOSTMAIN:
            return {
                ...state,
                arrayPost: [...state.arrayPost, {
                    id: 233,
                    name: 'Wolf',
                    massage: action.post,
                    img: 'https://img.freepik.com/free-vector/hand-drawn-business-wolf-poster_1284-9769.jpg?t=st=1652789993~exp=1652790593~hmac=ae8c5842165c130ce589365f6d6f33b597a8465175838760dd3012618abb2686&w=360',
                    likes: 0
                }],
            }

        case SETJOBFOR:

            return {
                ...state,
                lookingForAJobDescription: action.text

            }
        case DELETPOST:
            return {
                ...state,
                arrayPost: state.arrayPost.filter(el => el.id !== action.id)

            }
        case SETSTATUS:
            return {
                ...state,
                status: action.statusText

            }
        case SETID:

            return {
                ...state,
                userId: action.id

            }
        case SETLOOKJOB:

            return {
                ...state,
                lookingForAJob: action.value

            }
        case SETCONTACT:

            return {
                ...state,
                contacts: action.q

            }
        case SETFULLNAME:
            return {
                ...state,
                fullName: action.name

            }
        case SETABOUTME:
            return {
                ...state,
                aboutMe: action.infoMe

            }
        case SETPHOTO:
            return {
                ...state,
                photos: action.photo

            }
        default:
            return state
    }



}

export const GetProfileThunk = (userId) => {
    return (dispatch) => {

        MainContentUtilit.GetUserProfile(userId)
            .then(data => {
                    dispatch(SetPhotos(data.photos))
                    dispatch(SetFullName(data.fullName))
                    dispatch(SetAboutMe(data.aboutMe))
                    dispatch(SetContact(data.contacts))
                    dispatch(SetLookJob(data.lookingForAJob))
                    dispatch(SetJobFor(data.lookingForAJobDescription))
                    dispatch(SetId(data.userId))
                }
            )
    }
}
export const GetStatusThunk = (userId) => {
    return (dispatch) => {

        MainContentUtilit.GetStatus(userId).then(response => {
            dispatch(SetStatus(response.data))
        })

    }
}
export const UpdateStatusThunk = (status) => {
    return (dispatch) => {
        MainContentUtilit.ChangeStatus(status).then(
            q => {
                if (q.data.resultCode === 0) {

                    dispatch(SetStatus(status))
                }
            }
        )


    }
}
export default MainContentPageReducer