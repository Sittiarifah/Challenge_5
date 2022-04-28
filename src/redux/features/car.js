import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
// import { useSelector } from "react-redux";

export const getCars = createAsyncThunk('cars/getCars', async () => {
    const { data } = await axios('https://rent-cars-api.herokuapp.com/customer/car')
   
    return data
})

const car = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        loading: false,
        data: {
                passenger: "4 Orang",
                engine : "Manual",
                year : "Tahun 2020"
            }
        
    },
    extraReducers: {
        [getCars.pending]: (state, action) => {
            state.loading = 'true'
        },
        [getCars.fulfilled]: (state, action) => {
            state.loading = false
            state.cars = action.payload
        },
        [getCars.rejected]: (state, action) => {
            state.loading = false
        }
    }
})



export default car.reducer