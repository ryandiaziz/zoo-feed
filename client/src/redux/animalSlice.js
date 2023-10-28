import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'https://zoofeed-api-gamma.vercel.app/api/animals'

const initialState = {
    loading: {
        fetch: false
    },
    error: {
        status: false,
        message: ''
    },
    animals: []
}

export const fetchAnimals = createAsyncThunk('animal/fetchAnimals', async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: URL
        })
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const searchAnimals = createAsyncThunk('animal/searchAnimals', async (data, thunkAPI) => {
    try {
        // if (!data) {
        //     thunkAPI.dispatch(fetchAnimals())
        //     return
        // }
        let response = await axios({
            method: "GET",
            url: `${URL}/search`,
            params: {
                key: data
            },
            headers: {
                'X-RapidAPI-Key': 'your-rapidapi-key',
                'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
            },
        })
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const animalSlice = createSlice({
    name: "animal",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAnimals.pending, (state) => {
            state.loading.fetch = true
        })
        builder.addCase(fetchAnimals.fulfilled, (state, action) => {
            state.loading.fetch = false
            state.animals = action.payload
        })
        builder.addCase(fetchAnimals.rejected, (state, action) => {
            state.loading.fetch = false
            state.error.status = true
            state.error.message = action.payload
        })
        builder.addCase(searchAnimals.pending, (state) => {
            state.loading.fetch = true
        })
        builder.addCase(searchAnimals.fulfilled, (state, action) => {
            state.loading.fetch = false
            state.animals = action.payload
        })
        builder.addCase(searchAnimals.rejected, (state, action) => {
            state.loading.fetch = false
            state.error.status = true
            state.error.message = action.payload
        })
    }
})

export default animalSlice.reducer