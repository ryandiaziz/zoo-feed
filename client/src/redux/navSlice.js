import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isColor: false,
    isOpen: false,
    links: [
        { name: "things to do", link: "/#" },
        { name: "animals", link: "/animals" },
        { name: "foods", link: "/foods" },
        { name: "map", link: "/#" },
    ]
}

const navSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setcolor: (state, action) => {
            state.isColor = action.payload
        },
        setopen: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export default navSlice.reducer
export const {
    setcolor,
    setopen
} = navSlice.actions