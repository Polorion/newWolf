import MainContentPageReducer, {ActionCreatePostMainPage, DeletePost} from "./MainContentPageReducer";
import React from "react";


const state = {
    arrayPost: [
        {
            id: 11,
            name: '',
            img: '',
            massage: 'Hello',
            likes: '10'
        },
        {
            id: 10,
            name: '',
            img: '',
            massage: 'Hello',
            likes: '10'
        },
        {
            id: 13,
            name: '',
            img: '',
            massage: 'Hello',
            likes: '10'
        },
    ]
}

it('dssd', () => {
    let action = DeletePost(10)
    let newSt = MainContentPageReducer(state, action)

    expect(newSt.arrayPost.length).toBe(2)
})