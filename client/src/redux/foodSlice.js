import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://zoofeed-api-gamma.vercel.app/api/foods'
const initialState = {
    loading: {
        fetch: false,
    },
    error: {
        status: false,
        message: '',
    },
    foods: [],
}

export const fetchFoods = createAsyncThunk('food/fetchFoods', async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: URL,
        })

        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue("Something went wrong")
    }
})

export const searchFoods = createAsyncThunk('food/searchFoods', async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: URL + '/search',
            params: {
                key: data
            },
            headers: {
                'X-RapidAPI-Key': 'your-rapidapi-key',
                'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
            },
        })

        console.log(response.data)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const foodSLice = createSlice({
    name: 'food',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFoods.pending, (state) => {
            state.loading.fetch = true
        })
        builder.addCase(fetchFoods.fulfilled, (state, action) => {
            state.loading.fetch = false
            state.foods = action.payload
        })
        builder.addCase(fetchFoods.rejected, (state) => {
            state.loading.fetch = false
        })
        builder.addCase(searchFoods.pending, (state) => {
            state.loading.fetch = true
        })
        builder.addCase(searchFoods.fulfilled, (state, action) => {
            state.loading.fetch = false
            state.foods = action.payload
        })
        builder.addCase(searchFoods.rejected, (state) => {
            state.loading.fetch = false
        })
    }
})

export default foodSLice.reducer