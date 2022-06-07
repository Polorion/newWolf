const CREATEPOSTMASSAGE = 'createPostMassage'
const SETVALUEMASSAGE = 'setValueMassage'
const ISACTIVPROFILE = 'ISACTIVPROFILE'

export const ActionCreatePostMassage = (massage) => {
    return {
        type: CREATEPOSTMASSAGE,
        massage
    }
}
export const IsActiveProfilesMessage = (id) => {
    return {
        type: ISACTIVPROFILE,
        id
    }
}


const initialState = {
    isActiveProfile : [],
    peopleArray: [
        {
            id: 1,
            name: 'oleg',
            img: 'https://w7.pngwing.com/pngs/904/567/png-transparent-gray-wolf-computer-icons-youtube-winston-the-wolf-wolfe-wolf-miscellaneous-mammal-face.png'
        },
        {
            id: 2,
            name: 'oleg2222',
            img: 'https://cdn-icons-png.flaticon.com/512/141/141850.png'

        },
        {
            id: 22,
            name: 'oleg2',
            img: 'http://images6.fanpop.com/image/photos/39800000/Wolf-Icon-users-icons-39833198-522-589.jpg'
        },
    ],
    dialogArray: [
        {
            id: 1,
            massage: 'hellow',
            from: 'oleg',
        },

        {
            id: 2,
            massage: 'hi',
            from: 'me',
        },
        {
            id: 23,
            massage: 'hi',
            from: 'me',
        },
        {
            id: 24,
            massage: 'hi',
            from: 'me',
        },
        {
            id: 25,
            massage: 'hi',
            from: 'oleg',
        },
    ],
    areaText: '',

}
const MassagePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETVALUEMASSAGE:
            return {
                ...state,
                areaText: action.value

            }
        case ISACTIVPROFILE:
            return {
                ...state,
                isActiveProfile: [action.id]

            }
        case CREATEPOSTMASSAGE :
            return {...state,
                dialogArray: [...state.dialogArray,{
                    id: 10,
                    massage: action.massage,
                    from: 'me',
                }]
            }


        default :
            return state
    }


}
export default MassagePageReducer