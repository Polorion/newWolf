import MainContentPageReducer from "./MainContentPageReducer"
import MassagePageReducer from "./MassagePageReducer"
import NavBarFriendReducer from "./NavBarFriendReducer"

export const ActionCreatePostMainPage = () => {
  return {
    type: CREATEPOSTMAIN
  }
}
export const ActionSetValueMainPage = (value) => {
  return {
    type: SETVALUEMAIN,
    value: value
  }
}

export const ActionCreatePostMassage = () => {
  return {
    type: CREATEPOSTMASSAGE
  }
}
export const ActionSetValueMassage = (value) => {
  return {
    type: SETVALUEMASSAGE,
    value: value
  }
}
export const ActionGetValueMassage = () => {
  return {
    type: GETVALUEMASSAGE
  }
}

const CREATEPOSTMAIN = 'createPost'
const SETVALUEMAIN = 'setValue'
const CREATEPOSTMASSAGE = 'createPostMassage'
const SETVALUEMASSAGE = 'setValueMassage'
const GETVALUEMASSAGE = 'getValueMassage'




export const Store = {
  _States: {
    MainContentPage: {
      arrayPost: [
        {
          id: 1,
          name: 'oleg',
          img: 'https://img.freepik.com/free-vector/hand-drawn-business-wolf-poster_1284-9769.jpg?t=st=1652789993~exp=1652790593~hmac=ae8c5842165c130ce589365f6d6f33b597a8465175838760dd3012618abb2686&w=360',
          massage: 'Hello',
          likes: '10'
        },

      ],
      areaText: '',
    },
    MassagePage: {
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
    },
    NavBarFriend: {
      Friends: [
        {
          id: 1,
          name: 'oleg',
          avatar: 'https://w7.pngwing.com/pngs/904/567/png-transparent-gray-wolf-computer-icons-youtube-winston-the-wolf-wolfe-wolf-miscellaneous-mammal-face.png'
        },
        {
          id: 2,
          name: 'olegs',
          avatar: 'https://cdn-icons-png.flaticon.com/512/141/141850.png'
        },
        {
          id: 3,
          name: 'olegs',
          avatar: 'http://images6.fanpop.com/image/photos/39800000/Wolf-Icon-users-icons-39833198-522-589.jpg'
        },
      ]
    },
  },
  transoptFunction(obserser) {
    this._reRenderAllPage = obserser
  },
  _reRenderAllPage() {
  },
  getStates() {
    return this._States
  },

  dispatch(action) {
    this._States.MainContentPage = MainContentPageReducer(this._States.MainContentPage, action)
    this._States.MassagePage= MassagePageReducer(this._States.MassagePage, action)
    NavBarFriendReducer()


    this._reRenderAllPage(this._States)

    if (action.type === SETVALUEMASSAGE) {
      this._reRenderAllPage(this._States)
      this._States.MassagePage.areaText = action.value
    }
    else if (action.type === GETVALUEMASSAGE) {
      return this._States.MassagePage.areaText
    }
    else if (action.type === CREATEPOSTMASSAGE) {
      const createMAssage = {
        id: 10,
        massage: this._States.MassagePage.areaText,
        from: 'me',
      }
      this._States.MassagePage.dialogArray.push(createMAssage);
      this._States.MassagePage.areaText = ''

    }
  }
}

window.q = Store




export default Store