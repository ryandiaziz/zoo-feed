import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isNavbarOpen: false,
    links: [
        { name: "things to do", link: "/#" },
        { name: "animals", link: "/animals" },
        { name: "foods", link: "/foods" },
        { name: "map", link: "/#" },
    ]
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setnavbar: (state, action) => {
            state.isNavbarOpen = action.payload
        }
    }
})

export default menuSlice.reducer
export const {
    setnavbar
} = menuSlice.actions