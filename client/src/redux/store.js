import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice"

const store = configureStore({
    reducer: {
        navbar: navReducer
    }
})

export default store