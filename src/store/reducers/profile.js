import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUrlApi } from '../../helpers';

const name = "profile"

const initialState = {
    status: '',
    data: {},
};

export const fecthProfileData = createAsyncThunk(`${name}/fecthProfileData`, async () => {
    try {
        const response = await axios.get(`${getUrlApi()}/profile`);
        return response.data;
    } catch (error) {
        return [{}];
    }
})

export const profileReducer = createSlice({
    name: name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fecthProfileData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fecthProfileData.fulfilled, (state, action) => {
            state.status = 'successfull';
            state.data = action.payload;
        })
    },
})

export default profileReducer.reducer;