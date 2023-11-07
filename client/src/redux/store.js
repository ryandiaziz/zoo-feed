import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"
import authReducer from "./authSlice"
import animalReducer from "./animalSlice"
import foodReducer from "./foodSlice"

const store = configureStore({
    reducer: {
        menu: menuReducer,
        auth: authReducer,
        animal: animalReducer,
        food: foodReducer
    }
})

export default store