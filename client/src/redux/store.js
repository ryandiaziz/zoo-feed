import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"
import authReducer from "./authSlice"
import animalReducer from "./animalSlice"

const store = configureStore({
    reducer: {
        menu: menuReducer,
        auth: authReducer,
        animal: animalReducer
    }
})

export default store